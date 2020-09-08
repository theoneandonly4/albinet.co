/* Tools main content for Albinet.co
* By Pierre-Etienne ALBINET
* Started 20200903
* Changed 20200903 - Init
* Not made to be reused
*/
'use strict';
const tools = document.createElement('div');
const head = document.createElement('h2');
const p1 = document.createElement('p');
const list = document.createElement('div');
tools.id = 'main';


head.innerHTML = 'Albinet.co In-House Developped tools';
head.id = 18;
head.className = 'txt'
p1.innerHTML = 'The Tools display functionality powered by the Albinet.co in-house tool Procmin will soon be available';
p1.id = 19;
p1.className = 'txt';
list.id = 'toolsList';

const toolsChilds = [head, p1, list];

for (var el of toolsChilds) {
    tools.appendChild(el);
};

export { tools };
