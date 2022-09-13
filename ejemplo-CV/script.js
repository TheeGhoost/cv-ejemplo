/* 
////////////////////////////////////////////////////////////
                                    HEADER
////////////////////////////////////////////////////////////
*/

(d =>{
    const $menuButtom = d.querySelector("#menu-buttom"),
             $menu = d.querySelector(".menu");
    $menuButtom.addEventListener("click", e  => {
        $menu.classList.toggle("active");
        $menuButtom.firstElementChild.classList.toggle("hidden");
        $menuButtom.lastElementChild.classList.toggle("hidden");
    });
    d.addEventListener("click", e => {
        if (!e.target.matches(".menu a")) return false;
        $menu.classList.remove("active");
        $menuButtom.firstElementChild.classList.toggle("hidden");
        $menuButtom.lastElementChild.classList.toggle("hidden");
    });
})(document);


