USE master
GO
ALTER	DATABASE FörstaDatabasen
SET 	SINGLE_USER
WITH	ROLLBACK IMMEDIATE
GO
DROP DATABASE [FörstaDatabasen]
GO
CREATE DATABASE [FörstaDatabasen]
GO
USE [FörstaDatabasen]

/*CREATE TABLE person(
förnamn VARCHAR(100),
efternamn VARCHAR(100)
)

INSERT INTO person (förnamn, efternamn)
VALUES ('Sebastian', 'Gustafsson')*/

/*KATA create table*/
CREATE TABLE loginmanager(
namn VARCHAR(20),
lösenord VARCHAR(20),
registrdatum datetime
)

/*KATA seed table*/
INSERT INTO loginmanager
VALUES('Sebastian1', 'password', CURRENT_TIMESTAMP),
      ('User','!Pass12345', CURRENT_TIMESTAMP),
      ('NewUserSuperLongName','abcdefghijklmnopq',CURRENT_TIMESTAMP)

