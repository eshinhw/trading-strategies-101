import { prisma } from "./prisma.js";

/** Shared by curriculum and course/exam routes — both need to know what a learner has finished. */
export async function completedLessonSlugs(userId: string | undefined): Promise<Set<string>> {
  if (!userId) return new Set();
  const rows = await prisma.lessonProgress.findMany({
    where: { userId, completed: true },
    select: { lessonSlug: true },
  });
  return new Set(rows.map((r) => r.lessonSlug));
}
