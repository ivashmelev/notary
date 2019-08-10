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

 Date: 10/08/2019 16:04:15
*/


-- ----------------------------
-- Sequence structure for admin_autoincrement
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."admin_autoincrement";
CREATE SEQUENCE "public"."admin_autoincrement" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

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
-- Sequence structure for reception_autoincrement
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."reception_autoincrement";
CREATE SEQUENCE "public"."reception_autoincrement" 
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
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS "public"."admin";
CREATE TABLE "public"."admin" (
  "id" int4 NOT NULL DEFAULT nextval('admin_autoincrement'::regclass),
  "login" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "password" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for contact
-- ----------------------------
DROP TABLE IF EXISTS "public"."contact";
CREATE TABLE "public"."contact" (
  "id" int4 NOT NULL DEFAULT nextval('contact_autoincrement'::regclass),
  "address" varchar(255) COLLATE "pg_catalog"."default",
  "phone" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "mail" varchar(255) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for reception
-- ----------------------------
DROP TABLE IF EXISTS "public"."reception";
CREATE TABLE "public"."reception" (
  "id" int4 NOT NULL DEFAULT nextval('reception_autoincrement'::regclass),
  "date" date NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
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
  "title" varchar(25500) COLLATE "pg_catalog"."default" NOT NULL
)
;

-- ----------------------------
-- Table structure for service
-- ----------------------------
DROP TABLE IF EXISTS "public"."service";
CREATE TABLE "public"."service" (
  "id" int4 NOT NULL DEFAULT nextval('service_autoincrement'::regclass),
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "description" varchar(25500) COLLATE "pg_catalog"."default" NOT NULL
)
;

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
-- Function structure for func_api_v1_admin_auth
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."func_api_v1_admin_auth"("arg_login" varchar);
CREATE OR REPLACE FUNCTION "public"."func_api_v1_admin_auth"("arg_login" varchar)
  RETURNS TABLE("id" int4, "login" varchar, "password" varchar) AS $BODY$BEGIN
	RETURN QUERY SELECT * FROM admin WHERE admin."login" = arg_login;
END$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;

-- ----------------------------
-- Function structure for func_api_v1_get_contact
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."func_api_v1_get_contact"();
CREATE OR REPLACE FUNCTION "public"."func_api_v1_get_contact"()
  RETURNS TABLE("id" int4, "address" varchar, "phone" varchar, "mail" varchar) AS $BODY$BEGIN
	RETURN QUERY SELECT * FROM contact;
END$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;

-- ----------------------------
-- Function structure for func_api_v1_get_reception
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."func_api_v1_get_reception"();
CREATE OR REPLACE FUNCTION "public"."func_api_v1_get_reception"()
  RETURNS TABLE("id" int4, "date" date, "name" varchar, "phone" varchar, "mail" varchar) AS $BODY$BEGIN
	
	RETURN QUERY SELECT * FROM reception;
END$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;

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
  RETURNS TABLE("id" int4, "title" varchar, "subtitle" varchar, "tariff" varchar, "price" varchar) AS $BODY$BEGIN
	RETURN QUERY 
		SELECT tariff."id", tariff."title", tariff."subtitle", tariff.tariff, tariff.price
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
	RETURN QUERY SELECT * FROM service order by id;
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
  RETURNS TABLE("id" int4, "title" varchar, "subtitle" varchar, "tariff" varchar, "price" varchar) AS $BODY$BEGIN
	RETURN QUERY SELECT tariff."id", tariff."title", tariff."subtitle", tariff."tariff", tariff."price"
		FROM "public".tariff 
		WHERE tariff."id" = arg_id;
END$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;

-- ----------------------------
-- Function structure for func_api_v1_patch_admin_login
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."func_api_v1_patch_admin_login"("arg_login" varchar, "arg_new_login" varchar, "arg_password" varchar);
CREATE OR REPLACE FUNCTION "public"."func_api_v1_patch_admin_login"("arg_login" varchar, "arg_new_login" varchar, "arg_password" varchar)
  RETURNS TABLE("id" int4, "login" varchar, "password" varchar) AS $BODY$BEGIN
	
	UPDATE admin SET login=arg_new_login, password=arg_password WHERE "admin"."login" = arg_login;
	
	RETURN QUERY SELECT * FROM "admin" WHERE "admin"."login" = arg_new_login;
END$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;

-- ----------------------------
-- Function structure for func_api_v1_patch_contact_id
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."func_api_v1_patch_contact_id"("arg_id" int4, "arg_address" varchar, "arg_phone" varchar, "arg_mail" varchar);
CREATE OR REPLACE FUNCTION "public"."func_api_v1_patch_contact_id"("arg_id" int4, "arg_address" varchar, "arg_phone" varchar, "arg_mail" varchar)
  RETURNS TABLE("id" int4, "address" varchar, "phone" varchar, "mail" varchar) AS $BODY$BEGIN
	
	UPDATE contact SET address=arg_address, phone=arg_phone, mail=arg_mail WHERE contact."id" = arg_id;
	
	RETURN QUERY SELECT * FROM contact WHERE contact."id" = arg_id;
END$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;

-- ----------------------------
-- Function structure for func_api_v1_patch_service_id
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."func_api_v1_patch_service_id"("arg_id" int4, "arg_title" varchar, "arg_description" varchar);
CREATE OR REPLACE FUNCTION "public"."func_api_v1_patch_service_id"("arg_id" int4, "arg_title" varchar, "arg_description" varchar)
  RETURNS TABLE("id" int4, "title" varchar, "description" varchar) AS $BODY$BEGIN
	
	UPDATE service SET title=arg_title, description=arg_description WHERE service."id" = arg_id;
	
	RETURN QUERY SELECT * FROM service WHERE service."id" = arg_id;
	
END$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;

-- ----------------------------
-- Function structure for func_api_v1_patch_tariff_id
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."func_api_v1_patch_tariff_id"("arg_id" int4, "arg_title" varchar, "arg_subtitle" varchar, "arg_tariff" varchar, "arg_price" varchar);
CREATE OR REPLACE FUNCTION "public"."func_api_v1_patch_tariff_id"("arg_id" int4, "arg_title" varchar, "arg_subtitle" varchar, "arg_tariff" varchar, "arg_price" varchar)
  RETURNS TABLE("id" int4, "title" varchar, "subtitle" varchar, "tariff" varchar, "price" varchar) AS $BODY$BEGIN
	
	UPDATE tariff SET title=arg_title, subtitle=arg_subtitle, tariff=arg_tariff, price=arg_price WHERE tariff."id" = arg_id;
	
	RETURN QUERY SELECT tariff."id", tariff."title", tariff."subtitle", tariff."tariff", tariff."price"
		FROM "public".tariff 
		WHERE tariff."id" = arg_id;
END$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;

-- ----------------------------
-- Function structure for func_api_v1_post_admin
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."func_api_v1_post_admin"("arg_login" varchar, "arg_password" varchar);
CREATE OR REPLACE FUNCTION "public"."func_api_v1_post_admin"("arg_login" varchar, "arg_password" varchar)
  RETURNS TABLE("id" int4, "login" varchar, "password" varchar) AS $BODY$BEGIN
	
	INSERT INTO admin VALUES(NEXTVAL('admin_autoincrement'), arg_login, arg_password);
	
	RETURN QUERY SELECT * FROM admin order by id desc limit 1;
END$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;

-- ----------------------------
-- Function structure for func_api_v1_post_reception
-- ----------------------------
DROP FUNCTION IF EXISTS "public"."func_api_v1_post_reception"("arg_date" date, "arg_name" varchar, "arg_phone" varchar, "arg_mail" varchar);
CREATE OR REPLACE FUNCTION "public"."func_api_v1_post_reception"("arg_date" date, "arg_name" varchar, "arg_phone" varchar, "arg_mail" varchar)
  RETURNS TABLE("id" int4, "date" date, "name" varchar, "phone" varchar, "mail" varchar) AS $BODY$BEGIN
	
	INSERT INTO reception VALUES(NEXTVAL('reception_autoincrement'), arg_date, arg_name, arg_phone, arg_mail);
	
	RETURN QUERY SELECT * FROM reception order by id desc limit 1;
END$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."admin_autoincrement"
OWNED BY "public"."admin"."id";
SELECT setval('"public"."admin_autoincrement"', 8, true);
ALTER SEQUENCE "public"."contact_autoincrement"
OWNED BY "public"."contact"."id";
SELECT setval('"public"."contact_autoincrement"', 7, true);
ALTER SEQUENCE "public"."reception_autoincrement"
OWNED BY "public"."reception"."id";
SELECT setval('"public"."reception_autoincrement"', 8, true);
ALTER SEQUENCE "public"."section_autoincrement"
OWNED BY "public"."section"."id";
SELECT setval('"public"."section_autoincrement"', 9, true);
ALTER SEQUENCE "public"."service_autoincrement"
OWNED BY "public"."service"."id";
SELECT setval('"public"."service_autoincrement"', 14, true);
ALTER SEQUENCE "public"."tariff_autoincrement"
OWNED BY "public"."tariff"."id";
SELECT setval('"public"."tariff_autoincrement"', 7, true);

-- ----------------------------
-- Primary Key structure for table admin
-- ----------------------------
ALTER TABLE "public"."admin" ADD CONSTRAINT "admin_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table contact
-- ----------------------------
ALTER TABLE "public"."contact" ADD CONSTRAINT "contact_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table reception
-- ----------------------------
ALTER TABLE "public"."reception" ADD CONSTRAINT "reception_pkey" PRIMARY KEY ("id");

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
