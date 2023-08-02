/*
  Warnings:

  - You are about to drop the `card` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `card_label` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `label` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `list` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_project` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."card" DROP CONSTRAINT "card_list_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."card_label" DROP CONSTRAINT "card_label_card_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."card_label" DROP CONSTRAINT "card_label_label_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."list" DROP CONSTRAINT "list_project_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."user_project" DROP CONSTRAINT "user_project_project_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."user_project" DROP CONSTRAINT "user_project_user_id_fkey";

-- DropTable
DROP TABLE "public"."card";

-- DropTable
DROP TABLE "public"."card_label";

-- DropTable
DROP TABLE "public"."label";

-- DropTable
DROP TABLE "public"."list";

-- DropTable
DROP TABLE "public"."project";

-- DropTable
DROP TABLE "public"."user";

-- DropTable
DROP TABLE "public"."user_project";

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "project" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "list" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "project_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "label" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "label_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "card" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "list_id" TEXT NOT NULL,
    "card_label_id" TEXT NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "card_label" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "card_id" TEXT NOT NULL,
    "label_id" TEXT NOT NULL,

    CONSTRAINT "card_label_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_project" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "user_id" TEXT NOT NULL,
    "project_id" TEXT NOT NULL,
    "user_role" TEXT NOT NULL,

    CONSTRAINT "user_project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "project_id_key" ON "project"("id");

-- CreateIndex
CREATE UNIQUE INDEX "list_id_key" ON "list"("id");

-- CreateIndex
CREATE UNIQUE INDEX "label_id_key" ON "label"("id");

-- CreateIndex
CREATE UNIQUE INDEX "card_id_key" ON "card"("id");

-- CreateIndex
CREATE UNIQUE INDEX "card_label_id_key" ON "card_label"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_project_id_key" ON "user_project"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_project_user_role_key" ON "user_project"("user_role");

-- AddForeignKey
ALTER TABLE "list" ADD CONSTRAINT "list_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "list"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card_label" ADD CONSTRAINT "card_label_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card_label" ADD CONSTRAINT "card_label_label_id_fkey" FOREIGN KEY ("label_id") REFERENCES "label"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_project" ADD CONSTRAINT "user_project_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_project" ADD CONSTRAINT "user_project_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
