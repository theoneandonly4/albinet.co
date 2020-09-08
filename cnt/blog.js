/* Blog main content for Albinet.co
* By Pierre-Etienne ALBINET
* Started 20200527
* Changed 20200903 - Texts
* Not made to be reused
*/
'use strict';
const blog = document.createElement('div');
const head = document.createElement('h2');
const p1 = document.createElement('p');
const list = document.createElement('div');
blog.id = 'main';


head.innerHTML = 'Albinet.co Latest news';
head.id = 16;
head.className = 'txt';
p1.innerHTML = 'The Blog functionality powered by the Albinet.co in-house tool Procmin will soon be available';
p1.id = 17;
p1.className = 'txt';
list.id = 'blogList';

const blogChilds = [head, p1, list];

for (var el of blogChilds) {
    blog.appendChild(el);
};

export { blog };
