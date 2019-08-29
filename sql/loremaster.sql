CREATE TABLE IF NOT EXISTS maps (
  ID char(16) NOT NULL,
  name varchar(256) NOT NULL,
  image_link varchar(256) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS tiles (
  ID char(16) NOT NULL,
  height int(16) NOT NULL,
  width int(16) NOT NULL,
  x int(16) NOT NULL,
  y int(16) NOT NULL,
  map_id char(16) NOT NULL,
  type char(16) NOT NULL,
  PRIMARY KEY (map_id),
  UNIQUE KEY ID (ID)
);