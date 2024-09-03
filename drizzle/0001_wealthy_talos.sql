CREATE TABLE IF NOT EXISTS "expense_participants_items" (
	"id" text PRIMARY KEY NOT NULL,
	"expenses_id" text,
	"items_id" text,
	"quantity" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "expense_participants" ADD COLUMN "expenses_participants_id" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "expense_participants_items" ADD CONSTRAINT "expense_participants_items_expenses_id_expenses_id_fk" FOREIGN KEY ("expenses_id") REFERENCES "public"."expenses"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "expense_participants_items" ADD CONSTRAINT "expense_participants_items_items_id_items_id_fk" FOREIGN KEY ("items_id") REFERENCES "public"."items"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "expense_participants" ADD CONSTRAINT "expense_participants_expenses_participants_id_expense_participants_items_id_fk" FOREIGN KEY ("expenses_participants_id") REFERENCES "public"."expense_participants_items"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
