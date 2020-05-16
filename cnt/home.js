/* main homepage content for Albinet.co
* By Pierre-Etienne ALBINET
* Started 20200515
* Changed 20200515
* Not made to be reused
*/
"use strict";
const cnt = document.createElement("div");
const head = document.createElement("h2");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
cnt.id = "main";
head.innerHTML = "Welcome";
p1.innerHTML = "Albinet.co was founded in April 2020 with a very precise vision on Business and Systems integration: Model and bring Organisations to life.";
p2.innerHTML = "Switch to your preferred language using the selector on the right";
p3.innerHTML = "We wish you a pleasant visit, do not hesitate to contact us";

var cntChilds = [head, p1, p2, p3];

for (let el of cntChilds) {
    cnt.appendChild(el);
};

export { cnt };
