-- SQL Script for creating all tables associated with Project Loremaster TM
-- Designed by Headasses in Rochester

-- ** NOTE ** All char(36) are GUIDs

-------------------- DND playing related tables --------------------

CREATE TABLE IF NOT EXISTS campaign(
  id char(36) NOT NULL,

  name varchar(255) NOT NULL,
  description varchar(255) NOT NULL,

  PRIMARY KEY (id)
);

------------- Map related tables 
CREATE TABLE IF NOT EXISTS map (
  id char(36) NOT NULL, 

  campaignId NOT NULL REFERENCES campaign(id)
  name varchar(256) NOT NULL,
  imageLink varchar(256) NOT NULL,

  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS tile (
  height int NOT NULL,
  width int NOT NULL,
  x int NOT NULL,
  y int NOT NULL,
  mapId NOT NULL REFERENCES map(id),
  type ENUM('PASSABLE', 'IMPASSABLE', 'ROUGH', 'SLIPPERY') NOT NULL,

  PRIMARY KEY (x, y, mapId)
);

------------- Gameplay related tables 
CREATE TABLE IF NOT EXISTS plays (
  playerId NOT NULL REFERENCES player(id),
  campaignId NOT NULL REFERENCES campaign(id),

  PRIMARY KEY (playerId, campaignId)
)

CREATE TABLE IF NOT EXISTS player (
  id char(36) NOT NULL,

  name varchar(255) NOT NULL,
  role ENUM('PLAYER', 'DM', 'SPECTATOR') NOT NULL,

  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS npc (
  id char(36) NOT NULL,

  statId NOT NULL REFERENCES stats(id),
  active int NOT NULL,

  PRIMARY KEY (id)
);

------------- Character sheet tables 

CREATE TABLE IF NOT EXISTS ability (
  playerId NOT NULL REFERENCES player(id),

  score int NOT NULL,
  modifier int NOT NULL,
  savingThrow int NOT NULL,

  PRIMARY KEY (playerId)
);

CREATE TABLE IF NOT EXISTS appearance (
  playerId NOT NULL REFERENCES player(id)

  age int NOT NULL,
  height int NOT NULL,
  weight int NOT NULL,
  eyes varchar(255) NOT NULL,
  skin varchar(255) NOT NULL,
  hair varchar(255) NOT NULL,

  PRIMARY KEY (playerId)
);

CREATE TABLE IF NOT NULL 



CREATE TABLE IF NOT EXISTS stats (
  id char(36) NOT NULL,
  
  name varchar(255) NOT NULL,
  background varchar(255) NOT NULL,

  armorClass int NOT NULL,
  hitPoints int NOT NULL,
  hitPointDice varchar(255) NOT NULL,
  speed int NOT NULL,
  savingThrows varchar(255) NOT NULL,
  
  strength int NOT NULL,
  strengthMod int NOT NULL,
  dexterity int NOT NULL,
  dexterityMod int NOT NULL,
  constitution int NOT NULL,
  constitutionMod int NOT NULL,
  intelligence int NOT NULL,
  intelligenceMod int NOT NULL,
  wisdom int NOT NULL,
  wisdomMod int NOT NULL,
  charisma int NOT NULL,
  charismaMod int NOT NULL,

  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS characterSheet (
  id char(36) NOT NULL,
  name varchar(255) NOT NULL,
  
);

-------------------- Account related tables --------------------
CREATE TABLE IF NOT EXISTS account (
  userName char(36) NOT NULL,
  name char(36) NOT NULL,
  email char(36) NOT NULL,
  passwordHash char(255) NOT NULL, 
  PRIMARY KEY (userName)
);

CREATE TABLE IF NOT EXISTS friend (
  userName char(36) NOT NULL,
  name char(36) NOT NULL,
  PRIMARY KEY (userName)
);
