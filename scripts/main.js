const nav = document.getElementById('nav');
console.log(nav);

window.onscroll = function(){
    console.log(pageYOffset);

    if (window.pageYOffset >100) {

        nav.style.background = "white";
    }
    else {
        nav.style.background = "transparent";
    }
}

