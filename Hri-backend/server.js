const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');


const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());


app.use('/uploads', express.static('uploads'));


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });


app.post('/api/upload', upload.fields([
    { name: 'videos', maxCount: 5 },
    { name: 'images', maxCount: 5 }
]), (req, res) => {
    console.log('Uploaded files:', req.files);
    res.json({ message: 'Files uploaded successfully', files: req.files });
});




app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});