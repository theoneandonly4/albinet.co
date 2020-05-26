/* dom functions module
* By Pierre-Etienne ALBINET
* Started 20200507
* Changed 20200515
* Reusable function for locating and changing HTML items in a Single-Page Application
*/

const dom = {
        replaceId: function(id, cnt) {
            var el = document.getElementById(id);
            el.innerHTML = cnt;
        }
    };

export { dom };



