import fs from 'fs';
import https from 'https';
import path from 'path';

const url = 'https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/Backgrounds/FloatingLines/FloatingLines.jsx';
const dist = path.join(process.cwd(), 'FloatingLines_temp.jsx');

const file = fs.createWriteStream(dist);

const agent = new https.Agent({
    rejectUnauthorized: false
});

https.get(url, { agent }, (response) => {
    if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log('Download completed');
        });
    } else {
        console.error(`Failed with status: ${response.statusCode}`);
        file.close();
        fs.unlink(dist, () => { });
    }
}).on('error', (err) => {
    fs.unlink(dist, () => { });
    console.error('Error downloading:', err.message);
});
