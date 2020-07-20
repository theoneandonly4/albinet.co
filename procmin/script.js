/* Procmin.net main script
* By Pierre-Etienne ALBINET
* Started 20200701
* Changed 20200701 - Initiation
* The Website is a Single Page App this main script will handle the changes incurred by User Navigation
*/
'use strict';
//I.Imports
import crypt from './src/scripts/crypt.js';

//II.Main Logic
//A.Fetch Language
//TODO - add - fetch Language from DB


//B.Main Content


//C. Copyright Year Update
const foot = document.getElementById('foot');
var currYear = new Date().getFullYear();
if (currYear == '2020') {
    currYear = '';
} else {
    currYear = '-' + currYear;
};
foot.textContent = '©Copyright 2020' + currYear + ' Albinet.co SAS'

//III. Functions

