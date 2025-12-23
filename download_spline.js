import fs from 'fs';
import https from 'https';
import path from 'path';

const url = 'https://prod.spline.design/cKmO1IAyVkx39JpN/scene.splinecode';
const dist = path.join(process.cwd(), 'public', 'scene.splinecode');

const file = fs.createWriteStream(dist);

const agent = new https.Agent({
    rejectUnauthorized: false
});

https.get(url, { agent }, (response) => {
    response.pipe(file);
    file.on('finish', () => {
        file.close();
        console.log('Download completed');
    });
}).on('error', (err) => {
    fs.unlink(dist, () => { }); // Delete the file async. (But we don't check the result)
    console.error('Error downloading:', err.message);
});
