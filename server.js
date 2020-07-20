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
const port = process.env.server__   port || 3000;

// O - Logging
const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'Albinet.co' },
  transports: [
    //
    // - Write to all logs with level `info` and below to `quick-start-combined.log`.
    // - Write all logs error (and below) to `quick-start-error.log`.
    //
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' })
  ]
});

//
// If we're not in production then **ALSO** log to the `console`
// with the colorized simple format.
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      format.simple()
    )
  }));
}


const aco = express();
var domAco;
var wwwAco
const prm = express();
var domPrm;
var wwwPrm

// I - Maintenance Mode
if (env == 'maintenance') {
    app.get('/', (req, res) => res.send('The Website is currently under maintenance - Sorry for the inconvenience'));
};

// II - Production Mode Hostnames
if (env == 'production') {
    domAco = 'albinet.co';
    domPrm = 'procmin.net';
    wwwAco = 'www.albinet.co';
    wwwPrm = 'www.procmin.net';
};

// III - Development - Local Mode
if (env == 'development') {
    domAco = 'albinet.local';
    domPrm = 'procmin.local';
    wwwAco = 'www.albinet.local';
    wwwPrm = 'www.procmin.local';
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
if (env == 'production') {
    app.listen(port, () => logger.info(`Server running in ${env} mode at http://${domAco}:${port} and http://${domPrm}:${port}`));
};
if (env == 'development') {
    const https = require('https');
    const fs = require('fs');
    https.createServer({
    key: fs.readFileSync('./certs/procmin.local.key'),
        cert: fs.readFileSync('./certs/procmin.local.crt')
    }, app).listen(port, () => logger.info(`Server running in ${env} mode at http://${domAco}:${port} and http://${domPrm}:${port}`))
};
