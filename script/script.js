document.addEventListener('DOMContentLoaded', () => {
    //ищем элементы на сайте
    const nav = document.querySelector('.nav'),
          navSite = document.querySelector('.nav-site'),
          linkSite = document.querySelector('.link-site'),
          burgerButton= document.querySelector('.burger-button'),
          about2 = document.querySelector('.about2')
    
    //функция фиксации меню при прокрутке
    const objectPos = navSite.offsetTop
    function scrollPage () {
        let wpYO = window.pageYOffset;
        let a = window.innerHeight;
        function navFixed() {
            if (wpYO >= a) {
                nav.classList.add('fixed-l')
            } else {
                nav.classList.remove('fixed-l')
            }
        }
        navFixed()

        function objectFixed() {
            if (wpYO >= objectPos) {
                navSite.classList.add('fixed-r')
            } else {
                navSite.classList.remove('fixed-r')
            }

        }
        objectFixed()

        function frameworks () {
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                //console.log("ПК");
                //console.dir(about2);
                //console.log(about2.clientHeight); 
                //console.log("н", about2.offsetTop); // точка начала блока
                //console.log(about2.scrollHeight);
                //console.log("нп", wpYO+window.innerHeight); // начало блока с прокруткой
                if (wpYO + window.innerHeight >= about2.offsetTop && wpYO+window.innerHeight <= about2.clientHeight + about2.offsetTop ) {
                    let centerObj = about2.clientHeight / 2
                    //console.log('ценрт объекта', centerObj);
                    //console.log(wpYO+window.innerHeight - about2.offsetTop)
                    if (centerObj <= wpYO+window.innerHeight - about2.offsetTop) {
                        let a1 = Math.floor(centerObj),
                            a2 = wpYO+window.innerHeight,
                            a3 = about2.offsetTop,
                            a4 = a2 - a3,
                            a5 = (a4) - a1

                        console.log('рамки');
                        console.log("centerObj", a1);
                        console.log("wpYO+window.innerHeight ",  a2);
                        console.log("about2.offsetTop", a3);
                        console.log("wpYO+window.innerHeight - about2.offsetTop", a4);
                        console.log("(wpYO+window.innerHeight - about2.offsetTop) - centerObj", a5);

                        let framesH = document.querySelectorAll('.frame-h'),
                            framesV = document.querySelectorAll('.frame-v')
                        for (let i = 0; i < framesH.length; i++){
                            framesH[i].style.transform = `matrix(1, 0, 0, .${a5}, 0, 0)`
                        }
                        for (let i = 0; i < framesV.length; i++){
                            framesV[i].style.transform = `matrix(.${a5}, 0, 0, 1, 0, 0)`
                        }

                    } 

                }

            } else {
                console.log("Мобил");
            }  
        }
        frameworks ()
    }
    scrollPage ()

    

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
    document.addEventListener('scroll', scrollPage)


    //Меню якорей
    const dataTargetLink = document.querySelectorAll('[data-target-link]')
    const dataLink = document.querySelectorAll('[data-link-nav]')
    dataTargetLink.forEach( e => {
        e.addEventListener('click', anchor)
    })

    function anchor(e) {
        for(let i=0; i<dataLink.length;i++) {
            if(e.target.dataset.targetLink == dataLink[i].dataset.linkNav) {
                window.scrollBy({
                    top: dataLink[i].getBoundingClientRect().y,
                    behavior: 'smooth'
                })
            }
        }
    }
})