ALTER TABLE "expense_participants_items" RENAME COLUMN "expenses_id" TO "expenses_participants_id";--> statement-breakpoint
ALTER TABLE "expense_participants" DROP CONSTRAINT "expense_participants_expenses_participants_id_expense_participants_items_id_fk";
--> statement-breakpoint
ALTER TABLE "expense_participants_items" DROP CONSTRAINT "expense_participants_items_expenses_id_expenses_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "expense_participants_items" ADD CONSTRAINT "expense_participants_items_expenses_participants_id_expense_participants_id_fk" FOREIGN KEY ("expenses_participants_id") REFERENCES "public"."expense_participants"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "expense_participants" DROP COLUMN IF EXISTS "expenses_participants_id";