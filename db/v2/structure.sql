/*
Navicat MySQL Data Transfer

Source Server         : fstudio.ru
Source Server Version : 50723
Source Host           : server156.hosting.reg.ru:3306
Source Database       : u0721110_default

Target Server Type    : MYSQL
Target Server Version : 50723
File Encoding         : 65001

Date: 2019-08-15 14:09:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(32) NOT NULL AUTO_INCREMENT,
  `login` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for contact
-- ----------------------------
DROP TABLE IF EXISTS `contact`;
CREATE TABLE `contact` (
  `id` int(32) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for reception
-- ----------------------------
DROP TABLE IF EXISTS `reception`;
CREATE TABLE `reception` (
  `id` int(32) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for section
-- ----------------------------
DROP TABLE IF EXISTS `section`;
CREATE TABLE `section` (
  `id` int(32) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for service
-- ----------------------------
DROP TABLE IF EXISTS `service`;
CREATE TABLE `service` (
  `id` int(32) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tariff
-- ----------------------------
DROP TABLE IF EXISTS `tariff`;
CREATE TABLE `tariff` (
  `id` int(32) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `subtitle` varchar(255) NOT NULL,
  `tariff` varchar(1000) NOT NULL,
  `price` varchar(255) NOT NULL,
  `section_id` int(32) NOT NULL,
  PRIMARY KEY (`id`,`section_id`),
  KEY `tariff_id_idx` (`id`) USING BTREE,
  KEY `section_id` (`section_id`),
  CONSTRAINT `tariff_ibfk_1` FOREIGN KEY (`section_id`) REFERENCES `section` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Procedure structure for func_api_v1_admin_auth
-- ----------------------------
DROP PROCEDURE IF EXISTS `func_api_v1_admin_auth`;
DELIMITER ;;
CREATE DEFINER=`u0721110_default`@`%` PROCEDURE `func_api_v1_admin_auth`(arg_login VARCHAR
(20))
BEGIN
  SELECT *
  FROM admin
  WHERE admin.login = arg_login;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for func_api_v1_get_contact
-- ----------------------------
DROP PROCEDURE IF EXISTS `func_api_v1_get_contact`;
DELIMITER ;;
CREATE DEFINER=`u0721110_default`@`%` PROCEDURE `func_api_v1_get_contact`()
BEGIN
  SELECT *
  FROM contact;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for func_api_v1_get_reception
-- ----------------------------
DROP PROCEDURE IF EXISTS `func_api_v1_get_reception`;
DELIMITER ;;
CREATE DEFINER=`u0721110_default`@`%` PROCEDURE `func_api_v1_get_reception`()
BEGIN
  SELECT *
  FROM reception;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for func_api_v1_get_section
-- ----------------------------
DROP PROCEDURE IF EXISTS `func_api_v1_get_section`;
DELIMITER ;;
CREATE DEFINER=`u0721110_default`@`%` PROCEDURE `func_api_v1_get_section`()
BEGIN
  SELECT *
  FROM section;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for func_api_v1_get_section_id
-- ----------------------------
DROP PROCEDURE IF EXISTS `func_api_v1_get_section_id`;
DELIMITER ;;
CREATE DEFINER=`u0721110_default`@`%` PROCEDURE `func_api_v1_get_section_id`(arg_id int)
BEGIN
  SELECT tariff.id, tariff.title, tariff.subtitle, tariff.tariff, tariff.price
  FROM tariff
    JOIN section
    ON (tariff.section_id = section.id)
  WHERE tariff.section_id = arg_id;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for func_api_v1_get_service
-- ----------------------------
DROP PROCEDURE IF EXISTS `func_api_v1_get_service`;
DELIMITER ;;
CREATE DEFINER=`u0721110_default`@`%` PROCEDURE `func_api_v1_get_service`()
BEGIN
  SELECT *
  FROM service
  order by id;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for func_api_v1_get_service_id
-- ----------------------------
DROP PROCEDURE IF EXISTS `func_api_v1_get_service_id`;
DELIMITER ;;
CREATE DEFINER=`u0721110_default`@`%` PROCEDURE `func_api_v1_get_service_id`(arg_id int)
BEGIN
  SELECT *
  FROM service
  WHERE service.id = arg_id;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for func_api_v1_get_tariff_id
-- ----------------------------
DROP PROCEDURE IF EXISTS `func_api_v1_get_tariff_id`;
DELIMITER ;;
CREATE DEFINER=`u0721110_default`@`%` PROCEDURE `func_api_v1_get_tariff_id`(arg_id int)
BEGIN
  SELECT tariff.id, tariff.title, tariff.subtitle, tariff.tariff, tariff.price
  FROM tariff
  WHERE tariff.id = arg_id;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for func_api_v1_patch_admin_login
-- ----------------------------
DROP PROCEDURE IF EXISTS `func_api_v1_patch_admin_login`;
DELIMITER ;;
CREATE DEFINER=`u0721110_default`@`%` PROCEDURE `func_api_v1_patch_admin_login`(arg_login varchar
(20), arg_new_login varchar
(20), arg_password varchar
(20))
BEGIN
  UPDATE admin SET login=arg_new_login, password=arg_password WHERE admin.login = arg_login;
  SELECT *
  FROM admin
  WHERE admin.login = arg_new_login;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for func_api_v1_patch_contact_id
-- ----------------------------
DROP PROCEDURE IF EXISTS `func_api_v1_patch_contact_id`;
DELIMITER ;;
CREATE DEFINER=`u0721110_default`@`%` PROCEDURE `func_api_v1_patch_contact_id`(arg_id int, arg_address varchar
(50), arg_phone varchar
(20), arg_mail varchar
(50))
BEGIN
  UPDATE contact SET address=arg_address, phone=arg_phone, mail=arg_mail WHERE contact.id = arg_id;
  SELECT *
  FROM contact
  WHERE contact.id = arg_id;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for func_api_v1_patch_service_id
-- ----------------------------
DROP PROCEDURE IF EXISTS `func_api_v1_patch_service_id`;
DELIMITER ;;
CREATE DEFINER=`u0721110_default`@`%` PROCEDURE `func_api_v1_patch_service_id`(arg_id int, arg_title varchar
(225), arg_description varchar
(1000))
BEGIN
  UPDATE service SET title=arg_title, description=arg_description WHERE service.id = arg_id;
  SELECT *
  FROM service
  WHERE service.id = arg_id;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for func_api_v1_patch_tariff_id
-- ----------------------------
DROP PROCEDURE IF EXISTS `func_api_v1_patch_tariff_id`;
DELIMITER ;;
CREATE DEFINER=`u0721110_default`@`%` PROCEDURE `func_api_v1_patch_tariff_id`(arg_id int, arg_title varchar
(225), arg_subtitle varchar
(225), arg_tariff varchar
(1000), arg_price varchar
(225))
BEGIN
  UPDATE tariff SET title=arg_title, subtitle=arg_subtitle, tariff=arg_tariff, price=arg_price WHERE tariff.id = arg_id;
  SELECT tariff.id, tariff.title, tariff.subtitle, tariff.tariff, tariff.price
  FROM tariff
  WHERE tariff.id = arg_id;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for func_api_v1_post_admin
-- ----------------------------
DROP PROCEDURE IF EXISTS `func_api_v1_post_admin`;
DELIMITER ;;
CREATE DEFINER=`u0721110_default`@`%` PROCEDURE `func_api_v1_post_admin`(arg_login varchar
(20), arg_password varchar
(20))
BEGIN
  INSERT INTO admin
  VALUES(NULL, arg_login, arg_password);
  SELECT *
  FROM admin
  order by id desc limit 1;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for func_api_v1_post_reception
-- ----------------------------
DROP PROCEDURE IF EXISTS `func_api_v1_post_reception`;
DELIMITER ;;
CREATE DEFINER=`u0721110_default`@`%` PROCEDURE `func_api_v1_post_reception`(arg_date date, arg_name varchar(255), arg_phone varchar(255), arg_mail varchar(255))
BEGIN
	INSERT INTO reception VALUES(NULL, arg_date, arg_name, arg_phone, arg_mail);
	SELECT * FROM reception order by id desc limit 1;
END
;;
DELIMITER ;
SET FOREIGN_KEY_CHECKS=1;
