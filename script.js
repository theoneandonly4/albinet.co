/* Albinet.co main script
* By Pierre-Etienne ALBINET
* Started 20200507
* Changed 20200515
* The Website is a Single Page App this main script will handle the changes incurred by User Navigation
*/
"use strict";
//I.Imports

//A.DOM Module
//import {dom} from "./mjs/dom.js";

//B.Home Content
import {cnt} from "./cnt/home.js";

//II.Definitions
//A.Main Element
const main = document.getElementById("main");
main.parentNode.replaceChild(cnt, main)


//III.


