/// THIS FILE IS ONLY FOR REFERENCE, EVERYTHING MUST BE DONE USING THE DYNAMIC REPO, IT IS SO MUCH EASIER THAN HARD CODING EVERYTHING
/// THIS STILL NEEDS TO REFERENCED TO GENERATE A DYNAMIC MUTATION FOR SQL
///
/// THE COMMENTED OUT SECTIONS HAVE BEEN IMPLEMENTED DYNAMICALLY
/// @deprecated code my guy

// const { SQLCONNECT } = require('../sql/SQLConnect')
// const { generateUUID } = require('../extraFunctions/generateUUID')

// module.exports = {
// GetMapById: function( id ){
//     const connection = SQLCONNECT();

//     return new Promise((success, failure) => {
//         if (connection){
//             connection.query(`SELECT * FROM maps RIGHT JOIN tiles ON maps.ID=tiles.map_id WHERE maps.ID="${id}" ORDER BY tiles.map_id`, (error, result) => {
//                 if (result[0]){
//                     return success({
//                         id: result[0].ID,
//                         name: result[0].name,
//                         image_link: result[0].image_link,
//                         tiles: result.map(tile => {
//                             const tile = {
//                                 id: tile.ID,
//                                 height: tile.height,
//                                 width: tile.width,
//                                 x: tile.x,
//                                 y: tile.y,
//                                 type: tile.type
//                             }
//                             console.log(tile);
//                             return tile;
//                         })
//                     });
//                 } else if(error){
//                     return failure(error);
//                 } else {
//                     return failure("Not Found");
//                 }
//             });
//         } else {
//             console.log("REEEEE")
//             return null;
//         }
//     });
// },
//     InsertMap: function(_, { map }){
//         const connection = SQLCONNECT();
//         const mapGUID = generateUUID();
//         return new Promise((success, failure) => {
//             //Connection success
//             if (connection){
//                 connection.query(`INSERT INTO maps (ID, name, image_link) VALUES ("${mapGUID}","${map.name}","${map.image_link}")`,function(error, result){
//                     if(error){
//                         console.log("Got an errorrr: " + error)
//                         return failure({
//                             code: error.code,
//                             message: error.message
//                         });
//                     } 
//                 })
//                 map.tiles.map(tile => {
//                     const id = generateUUID(); 
//                     connection.query(`INSERT INTO tiles (ID, height, width, x, y, map_id, type) VALUES ("${id}","${tile.height}","${tile.width}","${tile.x}","${tile.y}","${mapGUID}","${tile.type}")`,function(error,result){
//                         if(error){
//                             console.log("Got an error: " + error)
//                             return failure({
//                                 code: error.code,
//                                 message: error.message
//                             });
//                         } else {
//                             connection.end();
//                             return success({
//                                 code: 200,
//                                 message: "OK"
//                             })
//                         }
//                     });
//                 });
//             } else {
//                 console.log('Could not establish a connection')
//                 return({
//                     code: 409,
//                     message: 'Bad Request'
//                 })
//             }
//         });
//     }
// }