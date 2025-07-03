const express = require('express')
const router = express.Router();

const multer = require('multer');
const unzipper = require('unzipper');


router.post('/upload-scorm', upload.single('scormPackage'), async (req, res) => {
    const zipPath = req.file.path;
    const courseId = Date.now().toString();
    const courseDir = path.join(__dirname, 'uploads', courseId);
    fs.mkdirSync(courseDir);

    fs.createReadStream(zipPath)
        .pipe(unzipper.Extract({ path: courseDir }))
        .on('close', () => {
            fs.unlinkSync(zipPath);
            res.json({ message: 'SCORM uploaded', courseId });
        });
});

router.post('/save-progress', (req, res) => {
    const { courseId, userId, data } = req.body;
    const filePath = path.join(__dirname, 'uploads', courseId, `${userId}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.json({ message: 'Progress saved' });
});


module.exports = router