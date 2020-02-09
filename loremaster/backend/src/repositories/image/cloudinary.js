var cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

module.exports = {
    UploadImage: (imageName, image) => {
        cloudinary.uploader.upload(
            imageName, (error, result) => {
                console.log(result, error)
            });

    }
}