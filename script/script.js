document.addEventListener('DOMContentLoaded', () => {
    //ищем элементы на сайте
    const nav = document.querySelector('.nav'),
          navSite = document.querySelector('.nav-site'),
          linkSite = document.querySelector('.link-site'),
          burgerButton= document.querySelector('.burger-button')
          //buttonViewWork = document.querySelector('.button_view_work'),
          //about = document.querySelector('.about');
    
    //функция фиксации меню при прокрутке
    function navFixed() {
        let a = window.innerHeight;
        let wpYO = window.pageYOffset;
        if (wpYO >= a) {
            nav.classList.add('fixed-l')
        } else {
            nav.classList.remove('fixed-l')
        }
    }
    navFixed()

    const objectPos = navSite.offsetTop
    function objectFixed() {
        //console.dir(navSite.offsetTop); //положение объекта от начала сайта
        let wpYO = window.pageYOffset
        console.log("n", navSite.offsetTop);
        console.log("w", window.pageYOffset);
        if (wpYO >= objectPos) {
            navSite.classList.add('fixed-r')
        } else {
            navSite.classList.remove('fixed-r')
        }

    }
    objectFixed()

    function clickMenu() {
        if (!burgerButton.classList.contains('act')) {
            this.classList.add('act')
            linkSite.classList.add('act')
            navSite.classList.add('act')
        } else {
            this.classList.remove('act')
            linkSite.classList.remove('act')
            navSite.classList.remove('act')
        }
    }

    burgerButton.addEventListener('click', clickMenu)
    document.addEventListener('scroll', objectFixed)
    document.addEventListener('scroll', navFixed)


    //Меню якорей
    const dataTargetLink = document.querySelectorAll('[data-target-link]')
    //console.log(dataTargetLink);
    //const navDiv = document.querySelectorAll('.nav div')
    const dataLink = document.querySelectorAll('[data-link-nav]')
    dataTargetLink.forEach( e => {
        e.addEventListener('click', anchor)
    })

    function anchor(e) {
        for(let i=0; i<dataLink.length;i++) {
            if(e.target.dataset.targetLink == dataLink[i].dataset.linkNav) {
                //const topOffset = document.querySelector('.nav').offsetHeight;
                //const elementPosition = dataLink[i].getBoundingClientRect().top;
                //const offsetPosition = elementPosition - topOffset;

                //window.scrollBy(0, dataLink[i].getBoundingClientRect().y)
                
                window.scrollBy({
                    //top: offsetPosition,
                    top: dataLink[i].getBoundingClientRect().y,
                    behavior: 'smooth'
                });
            }
        }
    }
})