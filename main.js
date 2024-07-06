let BackToTop = document.getElementById('BackToTop');

BackToTop.addEventListener("click",function(){
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})

let btnCart = document.getElementById("btn");

let aside = document.getElementById("aside");

let Close = document.getElementById("Close");

let Back = document.getElementById("Back");

btnCart.onclick = function(){
    aside.classList.toggle('Class')
}

Close.onclick = function(){
    aside.classList.remove('Class')
}

Back.onclick = function(){
    location.reload()
}

let bntMenue1 = document.getElementById('btn1');

let UL1 = document.getElementById('firstUl');

bntMenue1.onclick = function(){
UL1.classList.toggle("UL1")
}

let bntMenue2 = document.getElementById('btn2');

let icon = document.getElementById('iArrow');

let UL2 = document.getElementById('secondUl');

bntMenue2.addEventListener("click",function(){
    UL2.classList.toggle('UL2');
    icon.classList.toggle('arrow')
})

let nav = document.getElementById("centerContainer");

window.addEventListener("scroll",function(){
    if(scrollY >= 215){
nav.style.cssText = ` position: fixed;
width: 100%;
top: 0
`
BackToTop.style.display = "block"
    }else{
        nav.style.cssText = `position: static;`;
        BackToTop.style.display = "none"
    }
})

let btnSlider1 = document.getElementById("btnSlider1");

let iconSlider1 = document.getElementById("iconSlider1");

let btnSlider2 = document.getElementById("btnSlider2");

let iconSlider2 = document.getElementById("iconSlider2");

let imagSlaider = document.getElementById("imagSlaider");

btnSlider2.addEventListener("click",function(){
    imagSlaider.src = "images/slider1.png";
    iconSlider2.style.color = "#ffdf59";
    iconSlider1.style.color = "white"
})

btnSlider1.addEventListener("click",function(){
    imagSlaider.src = "images/slider2.png";
    iconSlider2.style.color = "white";
    iconSlider1.style.color = "#ffdf59"
})

