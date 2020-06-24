/* Node JS server for Albinet.co
* By Pierre-Etienne ALBINET
* Started 20200526
* Changed 20200624 - Vhost added to manage Procmin
* Could be reused partially
*/

const express = require('express');
const vhost = require('vhost');
const app = express();
const env = process.env.NODE_ENV || 'development';

var hostname;
const port = 3000;

const aco = express();
var domAco;
const prm = express();
var domPrm;

// I - Maintenance Mode
if (env == 'maintenance') {
    app.get('/', (req, res) => res.send('The Website is currently under maintenance - Sorry for the inconvenience'));
};

// II - Production Mode Hostnames
if (env == 'production') {
    var domAco = 'albinet.co';
    var domPrm = 'procmin.net';
    var wwwAco = 'www.albinet.co';
    var wwwPrm = 'www.procmin.net';
};

// III - Development - Local Mode
if (env == 'development') {
    var domAco = 'albinet.local';
    var domPrm = 'procmin.local';
    var wwwAco = 'www.albinet.local';
    var wwwPrm = 'www.procmin.local';
};

// IV - Assign apps to domains
app.use(vhost(domAco, aco));
app.use(vhost(wwwAco, aco));
app.use(vhost(domPrm, prm));
app.use(vhost(wwwPrm, prm));

// V - Albinet.co App
aco.use(express.static('public'));
aco.get('/', (req,res) => res.sendFile(__dirname + 'index.html'));

// V - procmin.net App
prm.use(express.static('procmin'));
prm.get('/', (req,res) => res.sendFile(__dirname + 'index.html'));

// V - Listen
app.listen(port, () => console.log(`Server running in ${env} mode at http://${domAco}:${port} and http://${domPrm}:${port}`));

