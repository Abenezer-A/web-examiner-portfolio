const express = require('express');
const exphbs = require = require('express-handlerbars');
const fileUpload = require('express-fileupload');

const app = express();
const port = process.env.PORT || 5000;

//default option
app.use(fileUpload());

//static Files
app.use(express.static('public'));
app.use(express.static('upload'));


app.post('', (req, res) => {

    let sampleFile;
    let uploadPath;
    
    if(!req.files || Object.keys(req.files).length === 0){
       return res.status(400).send('No files were uploaded.');
    }
    
    // name of the input is sampleFIle
    sampleFile = req.files.sampleFile;
    uploadPath = __dirnmae + '/upload/' + sampleFile.name;
    
    // use mv() to place file on the server
    sampleFile.mv(uploadPath, function (err) {
      if (err) return res.status(500).send(err);
      
      res.send('File uploaded!');
    
    
    });






});
