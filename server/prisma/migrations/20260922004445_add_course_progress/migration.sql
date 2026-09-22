-- CreateTable
CREATE TABLE "CourseProgress" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "courseSlug" TEXT NOT NULL,
    "passed" BOOLEAN NOT NULL DEFAULT false,
    "bestScore" REAL,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "completedAt" DATETIME,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "CourseProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "CourseProgress_userId_courseSlug_key" ON "CourseProgress"("userId", "courseSlug");
