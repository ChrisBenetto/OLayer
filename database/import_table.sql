BEGIN;

DROP TABLE IF EXISTS "category",
"user","picture","figurine","comment";

CREATE TABLE IF NOT EXISTS "user" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE,
  "email" TEXT NOT NULL UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "category" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "content" TEXT NOT NULL UNIQUE,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "figurine" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY
  "name" TEXT NOT NULL ,
  "description" TEXT NOT NULL ,
  "nb_upvote" INT NOT NULL DEFAULT 0,
  "nb_downvote" INT NOT NULL DEFAULT 0,
  "user_id" INT NOT NULL REFERENCES "user"("id")
  "category_id" INT NOT NULL REFERENCES "category"("id")
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "comment" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY
  "content" TEXT NOT NULL
  "user_id" INT NOT NULL REFERENCES "user"("id")
  "figurine_id" INT NOT NULL REFERENCES "figurine"("id")
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS "picture" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY
  "picture_url" TEXT NOT NULL UNIQUE
  "figurine_id" INT NOT NULL REFERENCES "figurine"("id")
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ
);

/*SEEDING */
INSERT INTO "user" VALUES ('Sauruos','emaildetest@test.fr');
INSERT INTO "user" VALUES ('Slaan','emaildetruc@test.com');

INSERT INTO "category" VALUES ('Age of Sigmar');
INSERT INTO "category" VALUES ('Warhammer 40k');

INSERT INTO "figurine" ("name","description","user_id","category_id")
VALUES('Skink Caméleon' , "Ma première figurine" , 1 , 1);

INSERT INTO "picture" ("picture_url","figurine_id")
VALUES('data:image/jpeg;base64,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' , "Ma première figurine" , 1 , 1);

COMMIT;