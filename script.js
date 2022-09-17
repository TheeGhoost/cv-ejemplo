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

/* 
////////////////////////////////////////////////////////////
                                    CONTACT
////////////////////////////////////////////////////////////
*/

document.querySelector("#input-name").addEventListener("keyup", e => {
    let $inputName = document.querySelector("#input-name");
    if ($inputName.value.length != 0) {
        $inputName.classList.add("text-valid");
    } else {
        $inputName.classList.remove("text-valid");
    }
});

document.querySelector("#input-email").addEventListener("keyup", e => {
    let $inputEmail = document.querySelector("#input-email");
    if ($inputEmail.value.length != 0) {
        $inputEmail.classList.add("text-valid");
    } else {
        $inputEmail.classList.remove("text-valid");
    }
});

document.querySelector("#textarea-coments").addEventListener("keyup", e => {
    let $textarea = document.querySelector("#textarea-coments");
    if ($textarea.value.length != 0) {
        $textarea.classList.add("textarea-valid");
    } else {
        $textarea.classList.remove("textarea-valid");
    }
});