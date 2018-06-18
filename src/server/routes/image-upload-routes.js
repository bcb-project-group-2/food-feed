const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: 'hh4npfdtu',
  api_key: '166991886368395',
  api_secret: 'zHVGbPUc2qb9p-AufJ-CMNQumRI',
});

cloudinary.v2.api.create_upload_preset({name: "my_preset", unsigned: true, tags: "remote", allowed_formats: "jpg,png"},
  function(error, result){console.log(result)});

module.exports = function (app) {

  app.post('/api/image', (req, res) => {
    cloudinary.uploader.upload(req.body,
      cRes => res.json(cRes),
      {resource_type: 'raw'},
    )
  })
};