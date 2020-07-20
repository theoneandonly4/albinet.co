/* Blog main content for Albinet.co
* By Pierre-Etienne ALBINET
* Started 20200527
* Changed 20200527
* Not made to be reused
*/
'use strict';
const blog = document.createElement('div');
const head = document.createElement('h2');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
blog.id = 'main';


head.innerHTML = 'Albinet.co Latest news';
head.id = 16
p1.innerHTML = 'Albinet.co was founded in April 2020 with a very precise vision on Business and Systems integration: Model and bring Organisations to life.';
p1.id = 17

const blogChilds = [head, p1, p2, p3];

for (var el of blogChilds) {
    el.className = 'txt';
    blog.appendChild(el);
};

export { blog };
