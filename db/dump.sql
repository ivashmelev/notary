/*
 Navicat PostgreSQL Data Transfer

 Source Server         : notary
 Source Server Type    : PostgreSQL
 Source Server Version : 90303
 Source Host           : localhost:5432
 Source Catalog        : notaryDB
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 90303
 File Encoding         : 65001

 Date: 03/08/2019 17:47:50
*/


-- ----------------------------
-- Sequence structure for contact_autoincrement
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."contact_autoincrement";
CREATE SEQUENCE "public"."contact_autoincrement" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for section_autoincrement
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."section_autoincrement";
CREATE SEQUENCE "public"."section_autoincrement" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for service_autoincrement
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."service_autoincrement";
CREATE SEQUENCE "public"."service_autoincrement" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tariff_autoincrement
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tariff_autoincrement";
CREATE SEQUENCE "public"."tariff_autoincrement" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Table structure for contact
-- ----------------------------
DROP TABLE IF EXISTS "public"."contact";
CREATE TABLE "public"."contact" (
  "id" int4 NOT NULL DEFAULT nextval('contact_autoincrement'::regclass),
  "address" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "phone" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "mail" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for section
-- ----------------------------
DROP TABLE IF EXISTS "public"."section";
CREATE TABLE "public"."section" (
  "id" int4 NOT NULL DEFAULT nextval('section_autoincrement'::regclass),
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of section
-- ----------------------------
INSERT INTO "public"."section" VALUES (1, 'sec1');
INSERT INTO "public"."section" VALUES (2, 'sec2');

-- ----------------------------
-- Table structure for service
-- ----------------------------
DROP TABLE IF EXISTS "public"."service";
CREATE TABLE "public"."service" (
  "id" int4 NOT NULL DEFAULT nextval('service_autoincrement'::regclass),
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Records of service
-- ----------------------------
INSERT INTO "public"."service" VALUES (1, 'title1', 'des1');
INSERT INTO "public"."service" VALUES (2, 'title2', 'des2');

-- ----------------------------
-- Table structure for tariff
-- ----------------------------
DROP TABLE IF EXISTS "public"."tariff";
CREATE TABLE "public"."tariff" (
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL DEFAULT nextval('tariff_autoincrement'::regclass),
  "subtitle" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "tariff" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "price" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "id" int4 NOT NULL DEFAULT nextval('tariff_autoincrement'::regclass),
  "section_id" int4 NOT NULL
)
;

-- ----------------------------
-- Records of tariff
-- ----------------------------
INSERT INTO "public"."tariff" VALUES ('1', '1', '1', '1', 5, 1);
INSERT INTO "public"."tariff" VALUES ('2', '2', '2', '2', 6, 1);

-- ----------------------------
-- Function structure for func_api_v1_get_section
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."func_api_v1_get_section"();
CREATE OR REPLACE FUNCTION "public"."func_api_v1_get_section"()
  RETURNS TABLE("id" int4, "title" varchar) AS $BODY$BEGIN
	RETURN QUERY SELECT * FROM section;
END$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;

-- ----------------------------
-- Function structure for func_api_v1_get_section_id
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."func_api_v1_get_section_id"("arg_id" int4);
CREATE OR REPLACE FUNCTION "public"."func_api_v1_get_section_id"("arg_id" int4)
  RETURNS TABLE("id" int4, "title" varchar, "section" varchar, "subtitle" varchar, "tariff" varchar, "price" varchar) AS $BODY$BEGIN
	RETURN QUERY 
		SELECT tariff."id", tariff."title", section."title", tariff."subtitle", tariff."tariff", tariff."price"
		FROM "public".tariff 
		JOIN "public"."section" 
		ON (tariff."section_id" = "section"."id") 
		WHERE tariff.section_id = arg_id;
END$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;

-- ----------------------------
-- Function structure for func_api_v1_get_service
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."func_api_v1_get_service"();
CREATE OR REPLACE FUNCTION "public"."func_api_v1_get_service"()
  RETURNS TABLE("id" int4, "title" varchar, "description" varchar) AS $BODY$BEGIN
	RETURN QUERY SELECT * FROM service;
END$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;

-- ----------------------------
-- Function structure for func_api_v1_get_service_id
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."func_api_v1_get_service_id"("arg_id" int4);
CREATE OR REPLACE FUNCTION "public"."func_api_v1_get_service_id"("arg_id" int4)
  RETURNS TABLE("id" int4, "title" varchar, "description" varchar) AS $BODY$BEGIN
	RETURN QUERY SELECT * FROM service WHERE service."id" = arg_id;
END$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;

-- ----------------------------
-- Function structure for func_api_v1_get_tariff_id
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."func_api_v1_get_tariff_id"("arg_id" int4);
CREATE OR REPLACE FUNCTION "public"."func_api_v1_get_tariff_id"("arg_id" int4)
  RETURNS "pg_catalog"."void" AS $BODY$BEGIN
	RETURN;
END$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."contact_autoincrement"
OWNED BY "public"."contact"."id";
SELECT setval('"public"."contact_autoincrement"', 2, false);
ALTER SEQUENCE "public"."section_autoincrement"
OWNED BY "public"."section"."id";
SELECT setval('"public"."section_autoincrement"', 3, true);
ALTER SEQUENCE "public"."service_autoincrement"
OWNED BY "public"."service"."id";
SELECT setval('"public"."service_autoincrement"', 3, true);
ALTER SEQUENCE "public"."tariff_autoincrement"
OWNED BY "public"."tariff"."id";
SELECT setval('"public"."tariff_autoincrement"', 7, true);

-- ----------------------------
-- Primary Key structure for table contact
-- ----------------------------
ALTER TABLE "public"."contact" ADD CONSTRAINT "contact_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table section
-- ----------------------------
ALTER TABLE "public"."section" ADD CONSTRAINT "section_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table service
-- ----------------------------
ALTER TABLE "public"."service" ADD CONSTRAINT "service_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table tariff
-- ----------------------------
CREATE UNIQUE INDEX "tariff_id_idx" ON "public"."tariff" USING btree (
  "id" "pg_catalog"."int4_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table tariff
-- ----------------------------
ALTER TABLE "public"."tariff" ADD CONSTRAINT "tariff_pkey" PRIMARY KEY ("id", "section_id");

-- ----------------------------
-- Foreign Keys structure for table tariff
-- ----------------------------
ALTER TABLE "public"."tariff" ADD CONSTRAINT "tariff_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "public"."section" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
