# Meeting Notes
Notes that are taken at meetings for planning adn creating Project Loremaster

### 8/27
Map Creater
- Front End
	- Canvas (Map section)
    	- Can be divided into grid
    	- Can be drawn on by selecting a tile from the sidebar
  - Material Sidebar
    	- Tiles
      		- Look: Grass, stone, etc
      		- Status: Foggy, on fire, etc
      		- Type: Impassable, rough, passable (can be enum)
  			- Selectable to be drawn
- Back End
	- Map Object
		- ID
		- Holds a list of tiles objects
		- Reference to image 
	- Tile Object
		- ID: ability to reference individual tile instead of having to go through the map
		- Tile size (width/height)
		- Tile location (x/y)
		- Type
			- Terrain enum: impassable, rough, passable, slippery, etc
			- Interacts with player with movement
		- Entities 
			- Monster(s), character(s), interactables
	- GraphQL
		- Clients subscribed to DM
			- Updated every time DM “saves”
		- Only changed tiles are sent
			- Ex) Movement: Point A tile becomes empty, point B tile becomes filled
