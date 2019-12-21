CREATE TABLE IF NOT EXISTS maps (
  id char(36) NOT NULL,
  name varchar(256) NOT NULL,
  imageLink varchar(256) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS tiles (
  id char(36) NOT NULL,
  height int(16) NOT NULL,
  width int(16) NOT NULL,
  x int(16) NOT NULL,
  y int(16) NOT NULL,
  mapId char(36) NOT NULL,
  type int(16) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS accounts (
  userName char(36) NOT NULL,
  name char(36) NOT NULL,
  email char(36) NOT NULL,
  passwordHash char(256) NOT NULL, 
  PRIMARY KEY (userName)
);

CREATE TABLE IF NOT EXISTS friends (
  userName char(36) NOT NULL,
  name char(36) NOT NULL,
  PRIMARY KEY (userName)
);