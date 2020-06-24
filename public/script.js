/* Albinet.co main script
* By Pierre-Etienne ALBINET
* Started 20200507
* Changed 20200527
* The Website is a Single Page App this main script will handle the changes incurred by User Navigation
*/
'use strict';
//I.Imports
import {home} from './cnt/home.js';
import {texts} from './cnt/texts.js';

//A.Fetch Language
//TODO - add - fetch Language from Cookies
var language = 'en' // || Cookies.language
const lng = document.getElementById('lng');

const lang = document.createElement('select');
var op;
for (var el of texts.langList) {
    op = document.createElement('option');
    op.setAttribute('value', el.code);
    op.innerHTML = el.desc;
    lang.appendChild(op);
    op = undefined;
};
lang.id = 'lng';
lang.value = language;
lang.addEventListener('change', translate);
lng.parentNode.replaceChild(lang, lng);

//B.Home Content
const main = document.getElementById('main');
main.parentNode.replaceChild(home, main);

//III. Functions
function translate() {
    var lg = document.getElementById('lng').value;
    const els = document.getElementsByClassName('txt');
    for (var el of els) {
        el.textContent = texts.texts[el.id][lg];
    };
};

