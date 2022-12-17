-- admin is databse schema instead of admin
DROP SCHEMA IF EXISTS `admin`;

CREATE SCHEMA IF NOT EXISTS `admin` DEFAULT CHARACTER SET latin1;

USE `admin`;

-- -----------------------------------------------------
-- Table `admin`.`user_roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin`.`user_roles` (
  `role_id` INT(10) NOT NULL AUTO_INCREMENT,
  `role_title` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`role_id`)
);

-- -----------------------------------------------------
-- Table `admin`.`customer_car`
-- -----------------------------------------------------
-- Deletes after every ride completion
CREATE TABLE IF NOT EXISTS `admin`.`customer_car` (
  `customer_car_id` INT(10) NOT NULL AUTO_INCREMENT,
  `model_number` VARCHAR(50) NOT NULL,
  `color` VARCHAR(20) NOT NULL,
  `licence_plate` VARCHAR(10) NOT NULL,
  `car_type` VARCHAR(1) NOT NULL,
  PRIMARY KEY (`customer_car_id`),
  CONSTRAINT CHK_Type CHECK (car_type IN ('A', 'M')) -- Automatic or manual
);

-- -----------------------------------------------------
-- Table `admin`.`customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin`.`customer` (
  `customer_id` VARCHAR(50) NOT NULL,
  `email` VARCHAR(40) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `salt` VARCHAR(10) NOT NULL,
  `home_address` VARCHAR(100),
  `car_name` VARCHAR(100),
  `reset_password_uuid` VARCHAR(50),
  `register_account_uuid` VARCHAR(50),
  `role` INT(2) NOT NULL DEFAULT 3,
  PRIMARY KEY (`customer_id`),
  INDEX `fk_c_role` (`role` ASC),
  CONSTRAINT `fk_c_role` FOREIGN KEY (`role`) REFERENCES `admin`.`user_roles` (`role_id`)
);

-- -----------------------------------------------------
-- Table `admin`.`employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin`.`employee` (
  `employee_id` VARCHAR(50) NOT NULL,
  `email` VARCHAR(40) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `salt` VARCHAR(10) NOT NULL,
  `reset_password_uuid` VARCHAR(50),
  `register_account_uuid` VARCHAR(50),
  `role` INT(2) NOT NULL,
  PRIMARY KEY (`employee_id`),
  INDEX `fk_a_role` (`role` ASC),
  CONSTRAINT `fk_a_role` FOREIGN KEY (`role`) REFERENCES `admin`.`user_roles` (`role_id`)
);

-- -----------------------------------------------------
-- Table `admin`.`driver_car`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin`.`driver_car` (
  `driver_car_id` INT(10) NOT NULL AUTO_INCREMENT,
  `manufacturer` VARCHAR(20) NOT NULL,
  `model` VARCHAR(20) NOT NULL,
  `model_number` VARCHAR(20) NOT NULL,
  `year` INT(4) NOT NULL,
  `color` VARCHAR(20) NOT NULL,
  `car_type` CHAR(1) NOT NULL,
  `licence_plate` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`driver_car_id`),
  CONSTRAINT CHK_Type_driver_car CHECK (car_type IN ('A', 'M')) -- Automatic or manual
);

-- -----------------------------------------------------
-- Table `admin`.`available_driver`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin`.`available_drivers` (
  `active_driver_session_id` VARCHAR(16) NOT NULL,
  `driver_1_id` VARCHAR(50) NOT NULL,
  `driver_2_id` VARCHAR(50),
  `car_id` INT(10) NOT NULL,
  `driver_lat` INT(20),
  `driver_lng` INT(20),
  PRIMARY KEY (`active_driver_session_id`),
  INDEX `fk_driver_1_idx` (`driver_1_id` ASC),
  CONSTRAINT `fk_driver_1_id` FOREIGN KEY (`driver_1_id`) REFERENCES `admin`.`employee` (`employee_id`),
  INDEX `fk_driver_2_idx` (`driver_2_id` ASC),
  CONSTRAINT `fk_driver_2_id` FOREIGN KEY (`driver_2_id`) REFERENCES `admin`.`employee` (`employee_id`),
  INDEX `fk_d_car_idx` (`car_id` ASC),
  CONSTRAINT `fk_d_car_id` FOREIGN KEY (`car_id`) REFERENCES `admin`.`driver_car` (`driver_car_id`)
);

-- -----------------------------------------------------
-- Table `admin`.`current_rides`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin`.`current_rides` (
  `ride_id` VARCHAR(16) NOT NULL ,
  `active_driver_session_id` VARCHAR(16) NOT NULL,
  `customer_id` VARCHAR(50) NOT NULL,
  `pickup_location` VARCHAR(255) NOT NULL,
  `drop_location` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`ride_id`),
  INDEX `fk_active_driver_session_idx` (`active_driver_session_id` ASC),
  CONSTRAINT `fk_active_driver_session_id` FOREIGN KEY (`active_driver_session_id`) REFERENCES `admin`.`available_drivers` (`active_driver_session_id`),
  INDEX `fk_customer_idx` (`customer_id` ASC),
  CONSTRAINT `fk_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `admin`.`customer` (`customer_id`)
);

-- -----------------------------------------------------
-- Table `admin`.`services`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin`.`services` (
  `service_id` TINYINT(2) NOT NULL,
  `service_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`service_id`)
);

-- -----------------------------------------------------
-- Table `admin`.`requests`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin`.`requests` (
  `request_id` INT(10) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `address` VARCHAR(500) NOT NULL,
  `phone` VARCHAR(255) NOT NULL,
  `service_id` TINYINT(2) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `comments` VARCHAR(1000),
  `updates` TINYINT(1) NOT NULL,
  PRIMARY KEY (`request_id`),
  INDEX `fk_service_idx` (`service_id` ASC),
  CONSTRAINT `fk_service_id` FOREIGN KEY (`service_id`) REFERENCES `admin`.`services` (`service_id`),
  CONSTRAINT CHK_service_id CHECK (
    service_id >= 1
    AND service_id <= 4
  ),
  CONSTRAINT CHK_updates CHECK (updates IN ('0', '1'))
);

-- -----------------------------------------------------
-- Table `admin`.`rideRequests`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin`.`rideRequests` (
  `active_driver_session_id` VARCHAR(16),
  `request_id` VARCHAR(16) NOT NULL,
  `customer_id` VARCHAR(50) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `phone` VARCHAR(255) NOT NULL,
  `pickup` VARCHAR(500) NOT NULL,
  `destination` VARCHAR(500) NOT NULL,
  `payment` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`request_id`),
  CONSTRAINT `fk_driver_session_id_id` FOREIGN KEY (`active_driver_session_id`) REFERENCES `admin`.`available_drivers` (`active_driver_session_id`)
);

-- -----------------------------------------------------
-- Table `admin`.`supportRequests`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin`.`supportRequests` (
  `requestId` tinyint NOT NULL auto_increment,
  `email` VARCHAR(50) NOT NULL,
  `reason` VARCHAR(20) NOT NULL,
  `description` VARCHAR(30) NOT NULL,
  `comments` VARCHAR(500),
  PRIMARY KEY (`requestId`)
);

-- -----------------------------------------------------
-- Table `admin`.`temp_ride`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `admin`.`temp_ride` (
  `temp_ride_session` VARCHAR(16) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `phone` VARCHAR(255) NOT NULL,
  `pickup` VARCHAR(500) NOT NULL,
  `destination` VARCHAR(500) NOT NULL,
  `payment` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`temp_ride_session`)
);

INSERT INTO services (service_id, service_name)
VALUES (1, "shuttle");

INSERT INTO services (service_id, service_name)
VALUES (2, "chauffeur");

INSERT INTO services (service_id, service_name)
VALUES (3, "drive");

INSERT INTO services (service_id, service_name)
VALUES (4, "own");

INSERT INTO user_roles (role_id, role_title)
VALUES (0, 'Administrator');

INSERT INTO user_roles (role_id, role_title) VALUES (0, 'Driver');

INSERT INTO user_roles (role_id, role_title)
VALUES (0, 'Customer');

INSERT INTO employee (employee_id, email, name, password, salt, role)
VALUES (1, 'admin1@gmail.com', 'Admin 1', 'password', '1x345', 1);

INSERT INTO employee (employee_id, email, name, password, salt, role)
VALUES (2, 'admin2@gmail.com', 'Admin 1', 'password', 1);

INSERT INTO employee (employee_id, email, name, password, salt, role)
VALUES (3, 'admin3@gmail.com', 'Admin 1', 'password', 1);

INSERT INTO employee (employee_id, email, name, password, salt, role)
VALUES (4, 'driver1@gmail.com', 'Driver 1', 'password', 2);

INSERT INTO employee (employee_id, email, name, password, salt, role)
VALUES (5, 'driver2@gmail.com', 'Driver 1', 'password', 2);

INSERT INTO employee (employee_id, email, name, password, salt, role)
VALUES (6, 'driver3@gmail.com', 'Driver 1', 'password', 2);

INSERT INTO customer (customer_id, email, name, password, salt)
VALUES (1, 'armaan@gmail.com', 'armaan singh', 'password');

INSERT INTO customer (customer_id, email, name, password, salt)
VALUES (2, 'prince@gmail.com', 'prince agam', 'password');

INSERT INTO customer (customer_id, email, name, password, salt)
VALUES (3, 'daniel@gmail.com', 'daniel wong', 'password');

INSERT INTO driver_car (driver_car_id, manufacturer, model, model_number, year, color, car_type, licence_plate)
VALUES (NULL, 'Honda', 'Civic', 'hcx-186bh', 2016, 'Pale yellow', 'A', 'CAR-2016');
INSERT INTO driver_car (driver_car_id, manufacturer, model, model_number, year, color, car_type, licence_plate)
VALUES (NULL, 'Honda', 'Civic2', 'hcy-186bh', 2017, 'Pale yellow', 'M', 'CAR-2016');

INSERT INTO available_drivers VALUES ('4EFDECDCDVDBBGXX', 4, 5, 1, -102354, 7039394);
INSERT INTO available_drivers VALUES ('4EFDECDCDVDBBCXX', 5, 6, 2, -1027454, 7039394);

INSERT INTO rideRequests VALUES ('4EFDECDCDVDBBGXX', 0, 1, 'First', '1@gmail.com', 1111111111, '1233', '12333', 'CASH' );
INSERT INTO rideRequests VALUES (NULL, 1, 1, 'First', '1@gmail.com', 1111111111, '1233', '12333', 'CASH' );
INSERT INTO rideRequests VALUES ('4EFDECDCDVDBBGXX', 2, 2, 'Second', '2@gmail.com', 1111111111, '1233', '12333', 'DEBIT');
INSERT INTO rideRequests VALUES ('4EFDECDCDVDBBCXX', 3, 2, 'Second', '2@gmail.com', 1111111111, '1233', '12333', 'DEBIT');