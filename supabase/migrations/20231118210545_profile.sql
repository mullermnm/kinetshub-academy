ALTER TABLE "public"."profile"
ADD COLUMN "phone" VARCHAR(15); -- Adjust the length as needed

ALTER TABLE "public"."profile"
ALTER COLUMN "avatar_url" SET DEFAULT ''::text;