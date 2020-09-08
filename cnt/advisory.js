/* advisory main content for Albinet.co
* By Pierre-Etienne ALBINET
* Started 20200527
* Changed 20200903 - Texts
* Not made to be reused
*/
'use strict';
const advisory = document.createElement('div');
const head = document.createElement('h2');
const p1 = document.createElement('p');
const list = document.createElement('div');
advisory.id = 'main';


head.innerHTML = 'Albinet.co Advisory Experience';
head.id = 20;
head.className = 'txt';
p1.innerHTML = 'The Advisory listing powered by the Albinet.co in-house tool Procmin will soon be available';
p1.id = 21;
p1.className = 'txt';
list.id = 'advisoryList';

const advisoryChilds = [head, p1, list];

for (var el of advisoryChilds) {
    advisory.appendChild(el);
};

export { advisory };

