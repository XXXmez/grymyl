document.addEventListener('DOMContentLoaded', () => {
    //ищем элементы на сайте
    const nav = document.querySelector('.nav'),
          navSite = document.querySelector('.nav-site'),
          linkSite = document.querySelector('.link-site'),
          burgerButton= document.querySelector('.burger-button'),
          about2 = document.querySelector('.about2'),
          framesH = document.querySelectorAll('.frame-h'),
          framesV = document.querySelectorAll('.frame-v')
    
    //функция фиксации меню при прокрутке
    const objectPos = navSite.offsetTop
    function scrollPage (e) {
        let scrollTop = window.pageYOffset;
        let windowHeight = window.innerHeight;

        function navFixed() {
            if (scrollTop >= windowHeight) {
                nav.classList.add('fixed-l')
            } else {
                nav.classList.remove('fixed-l')
            }
        }
        navFixed()

        function objectFixed() {
            if (scrollTop >= objectPos) {
                navSite.classList.add('fixed-r')
            } else {
                navSite.classList.remove('fixed-r')
            } 
        }
        objectFixed()

        function frameworks () {
            if (/*!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)*/ true) { 
                //console.log("ПК");
                //console.dir(about2);
                //console.log(about2.clientHeight); 
                //console.log("н", about2.offsetTop); // точка начала блока
                //console.log(about2.scrollHeight);
                //console.log("нп", scrollTop+windowHeight); // начало блока с прокруткой
                if (scrollTop + windowHeight >= about2.offsetTop && scrollTop+windowHeight <= about2.clientHeight + about2.offsetTop ) {
                    let middleObject = Math.round( about2.clientHeight / 2 )
                    
                    //console.log('ценрт объекта', middleObject);
                    //console.log(scrollTop+windowHeight - about2.offsetTop)

                    if (middleObject <= scrollTop + windowHeight - about2.offsetTop) {
                        let a1 = middleObject,
                            a2 = scrollTop + windowHeight,
                            a3 = about2.offsetTop,
                            a4 = a2 - a3,
                            a5 = ( a4 ) - a1,
                            frameTransMatrix = Math.round ( a5 * ( 999999 / a1 ) )

                        /*console.log('рамки');
                        console.log("middleObject", a1);
                        console.log("scrollTop+windowHeight ",  a2);
                        console.log("about2.offsetTop", a3);
                        console.log("scrollTop+windowHeight - about2.offsetTop", a4);
                        console.log("(scrollTop+windowHeight - about2.offsetTop) - middleObject", a5);*/

                        for (let i = 0; i < framesH.length; i++){
                            if (frameTransMatrix < 100000 && frameTransMatrix >= 10000) {
                                framesH[i].style.transform = `matrix(1, 0, 0, .0${frameTransMatrix}, 0, 0)`
                            } else if (frameTransMatrix < 10000) {
                                framesH[i].style.transform = `matrix(1, 0, 0, .00${frameTransMatrix}, 0, 0)`
                            } else {
                                framesH[i].style.transform = `matrix(1, 0, 0, .${frameTransMatrix}, 0, 0)`
                            }
                        }

                        for (let i = 0; i < framesV.length; i++){
                            if (frameTransMatrix < 100000 && frameTransMatrix >= 10000) {
                                framesV[i].style.transform = `matrix(.0${frameTransMatrix}, 0, 0, 1, 0, 0)`
                            } else if (frameTransMatrix < 10000) {
                                framesV[i].style.transform = `matrix(.00${frameTransMatrix}, 0, 0, 1, 0, 0)`
                            } else {
                                framesV[i].style.transform = `matrix(.${frameTransMatrix}, 0, 0, 1, 0, 0)`
                            }
                        }
                    } else if (middleObject > scrollTop + windowHeight - about2.offsetTop) {
                        //console.log("выше центра");
                        for (let i = 0; i < framesH.length; i++){
                            framesH[i].style.transform = `matrix(1, 0, 0, 0, 0, 0)`
                        }
    
                        for (let i = 0; i < framesV.length; i++){
                            framesV[i].style.transform = `matrix(0, 0, 0, 1, 0, 0)`
                        }
                    }
                } else if (scrollTop + windowHeight < about2.offsetTop) {
                    //console.log("Выше самой секции но не центра");
                    
                } else if (scrollTop+windowHeight > about2.clientHeight + about2.offsetTop) {
                    //console.log("Ниже");
                    for (let i = 0; i < framesH.length; i++){
                        framesH[i].style.transform = `matrix(1, 0, 0, 1, 0, 0)`
                    }

                    for (let i = 0; i < framesV.length; i++){
                        framesV[i].style.transform = `matrix(1, 0, 0, 1, 0, 0)`
                    }
                }
            } else {
                //console.log("Мобил");
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
                let scrollDistance

                if (i == 0) {
                    scrollDistance = dataLink[i].getBoundingClientRect().y
                    
                } else {
                    scrollDistance = dataLink[i].getBoundingClientRect().y - nav.offsetHeight
                }
                window.scrollBy({
                    top: scrollDistance,
                    behavior: 'smooth'
                })
            }
        }
    }
})