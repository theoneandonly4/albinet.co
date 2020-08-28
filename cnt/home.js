/* main home page content for Albinet.co
* By Pierre-Etienne ALBINET
* Started 20200515
* Changed 20200526
* Not made to be reused
*/
'use strict';
const home = document.createElement('div');
const head = document.createElement('h2');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
home.id = 'main';


head.innerHTML = 'Welcome';
head.id = 5
p1.innerHTML = 'Albinet.co was founded in April 2020 with a very precise vision on Business and Systems integration: Model and bring Organisations to life.';
p1.id = 6
p2.innerHTML = 'Switch to your preferred language using the selector on the right.';
p2.id = 7
p3.innerHTML = 'We wish you a pleasant visit, do not hesitate to contact us.';
p3.id = 8
    
const homeChilds = [head, p1, p2, p3];

for (var el of homeChilds) {
    el.className = 'txt';
    home.appendChild(el);
};

export { home };
