import express from 'express';
import path from 'path';

const app = express();
          
const publicPath = path.join(__dirname, '..', 'public');

const port = process.env.PORT || 8080,
        ip = process.emv.IP;
        
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, ip, () => {
   console.log('Server is running'); 
});