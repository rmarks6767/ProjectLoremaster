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
