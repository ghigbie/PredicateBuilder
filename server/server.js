const express = require('express'),
         path = require('path'),
          app = express();
          
const publicPath = path.join(__dirname, '..', 'public');

const port = process.env.PORT || 8080,
        ip = process.emv.IP,
        
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, ip () => {
   console.log('Server is running'); 
});