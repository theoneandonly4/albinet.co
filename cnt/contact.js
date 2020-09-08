/* Contact main content for Albinet.co
* By Pierre-Etienne ALBINET
* Started 20200903
* Changed 20200903 - Init
* Not made to be reused
*/
'use strict';
const contact = document.createElement('div');
const head = document.createElement('h2');
const p1 = document.createElement('p');
const sp11 = document.createElement('span');
const a11 = document.createElement('a');
const sp12 = document.createElement('span');
const p2 = document.createElement('p');
const sp21 = document.createElement('span');
const a21 = document.createElement('a');
const sp22 = document.createElement('span');
contact.id = 'main';


head.innerHTML = 'Albinet.co Contact Details';
head.id = 22;
head.className = 'txt';

sp11.innerHTML = 'To contact us via email, please use the following link: ';
sp11.id = 23;
sp11.className = 'txt';
a11.innerHTML = 'contact@albinet.co';
a11.setAttribute('href', 'mailto:contact@albinet.co');
sp12.innerHTML = '.';
sp12.id = 24;
sp12.className = 'txt';

const p1Childs = [sp11, a11, sp12];

for (var el of p1Childs) {
    p1.appendChild(el);
};

sp21.innerHTML = 'You can also follow us on ';
sp21.id = 25;
sp21.className = 'txt';
a21.innerHTML = 'LinkedIn';
a21.setAttribute('href', 'https://www.linkedin.com/company/albinet-co');
sp22.innerHTML = '.';
sp22.id = 26;
sp22.className = 'txt';

const p2Childs = [sp21, a21, sp22];

for (var el of p2Childs) {
    p2.appendChild(el);
};


const contactChilds = [head, p1, p2];

for (var el of contactChilds) {
    contact.appendChild(el);
};

export { contact };

