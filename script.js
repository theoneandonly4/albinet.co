/* Albinet.co main script
* By Pierre-Etienne ALBINET
* Started 20200507
* Changed 20200903 - Links
* The Website is a Single Page App this main script will handle the changes incurred by User Navigation
*/
'use strict';
//I.Imports
import {home} from './cnt/home.js';
import {blog} from './cnt/blog.js';
import {tools} from './cnt/tools.js';
import {advisory} from './cnt/advisory.js';
import {contact} from './cnt/contact.js';
import {texts} from './cnt/texts.js';

//II.Main Logic
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



//B.Main Content
//1. Init with Home
const main = document.getElementById('main');
main.parentNode.replaceChild(home, main);

//2. Add links

const homeLink = document.getElementById('0');
homeLink.addEventListener('click', changeMain);

const blogLink = document.getElementById('1');
blogLink.addEventListener('click', changeMain);

const toolsLink = document.getElementById('2');
toolsLink.addEventListener('click', changeMain);

const advisoryLink = document.getElementById('3');
advisoryLink.addEventListener('click', changeMain);

const toolsLink2 = document.getElementById('11');
toolsLink2.addEventListener('click', changeMain);

const advisoryLink2 = document.getElementById('13');
advisoryLink2.addEventListener('click', changeMain);

const contactLink = document.getElementById('4');
contactLink.addEventListener('click', changeMain);


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
function translate() {
    var lg = document.getElementById('lng').value;
    const els = document.getElementsByClassName('txt');
    for (var el of els) {
        el.textContent = texts.texts[el.id][lg];
    };
};

function changeMain(e) {
    var update;
    var main = document.getElementById('main');
    switch(e.target.id) {
        case '1':
            update = blog;
            break;
        case '2':
            update = tools;
            break;
        case '3':
            update = advisory;
            break;
        case '4':
            update = contact;
            break;
        case '11':
            update = tools;
            break;
        case '13':
            update = advisory;
            break;
        default:
            update = home;
    };
    main.parentNode.replaceChild(update, main);
    translate();
};
