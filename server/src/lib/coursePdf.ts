import PDFDocument from "pdfkit";
import type { Course } from "../data/courses/types.js";
import { modulesForCourse, resolveLesson } from "../data/curriculum/index.js";

const COLOR = {
  brand: "#4f46e5",
  heading: "#111111",
  subheading: "#222222",
  body: "#3f3f3f",
  muted: "#767676",
};

/**
 * A one-line-per-strategy cheat sheet, not a dump of every lesson's full
 * prose — each entry is the lesson/strategy's own one-sentence summary,
 * grouped by module, so this stays a quick reference rather than a re-export
 * of the whole course.
 */
export function buildCourseSummaryPdf(course: Course): PDFKit.PDFDocument {
  const doc = new PDFDocument({ size: "LETTER", margins: { top: 64, bottom: 64, left: 64, right: 64 } });

  doc.fillColor(COLOR.brand).font("Helvetica-Bold").fontSize(10).text("TRADING STRATEGIES 101", { characterSpacing: 1.5 });
  doc.moveDown(0.4);
  doc.fillColor(COLOR.heading).font("Helvetica-Bold").fontSize(22).text(`${course.title} — Course Summary`);
  doc.moveDown(0.25);
  doc.fillColor(COLOR.muted).font("Helvetica").fontSize(10.5).text(course.description);
  doc.moveDown(1.1);

  const modules = modulesForCourse(course.slug);
  for (const module of modules) {
    doc.fillColor(COLOR.subheading).font("Helvetica-Bold").fontSize(14).text(module.title);
    doc.moveDown(0.15);
    doc.fillColor(COLOR.muted).font("Helvetica-Oblique").fontSize(9.5).text(module.description);
    doc.moveDown(0.5);

    for (const lessonSlug of module.lessonSlugs) {
      const resolved = resolveLesson(lessonSlug);
      if (!resolved) continue;

      const title = resolved.kind === "concept" ? resolved.lesson.title : resolved.strategy.name;
      const summary = resolved.kind === "concept" ? resolved.lesson.summary : resolved.strategy.content.summary;

      doc.fillColor(COLOR.heading).font("Helvetica-Bold").fontSize(11).text(title, { continued: false });
      doc.fillColor(COLOR.body).font("Helvetica").fontSize(10).text(summary, { indent: 10 });
      doc.moveDown(0.4);
    }

    doc.moveDown(0.6);
  }

  doc
    .fillColor(COLOR.muted)
    .font("Helvetica")
    .fontSize(8)
    .text(
      "Strategy mechanics, formulas, and categorization are drawn from Kakushadze, Z. and Serur, J.A., 151 Trading Strategies (2018). Plain-English explanations, scenarios, and course content are original to this project.",
    );

  return doc;
}
