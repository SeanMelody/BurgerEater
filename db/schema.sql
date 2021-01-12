-- Drop the database if it exists
DROP DATABASE IF EXISTS burgers_db;
-- Create the database
CREATE DATABASE burgers_db;
-- Use the database
USE burgers_db;

-- Create the burger Table Woooo!
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(30) NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);