/* Change functions module
* By Pierre-Etienne ALBINET
* Started 20200507
* Changed 20200511
* Reusable function for locating and changing HTML items in a Single-Page Application
*/

const dom = {
        voidId: function(id) {
            var el = document.getElementbyId(id);
            el.innerHTML = '';
        }
    };

export { dom };



