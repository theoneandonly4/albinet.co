/* Node JS server for Albinet.co
* By Pierre-Etienne ALBINET
* Started 20200526
* Changed 20200526
* Could be reused partially
*/

const express = require('express');
const app = express();
const env = process.env.NODE_ENV;

const hostname ='localhost';
const port = 3000;

// I - Maintenance Mode
if (env == 'maintenance') {
    app.get('/', (req, res) => res.send('The Website is currently under maintenance - Sorry for the inconvenience'));
};

// General Mode
app.use(express.static('public'));
app.get('/index.html', (req, res) => res.sendFile(__dirname + 'index.html'));


app.listen(port, () => console.log(`Server running in ${env} mode at http://${hostname}:${port}/`));
