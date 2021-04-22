document.addEventListener('DOMContentLoaded', () => {
    //ищем элементы на сайте
    const nav = document.querySelector('.nav'),
          buttonViewWork = document.querySelector('.button_view_work'),
          about = document.querySelector('.about');
    
    //функция фиксации меню при прокрутке
    function navFixed() {
        let a = window.innerHeight;
        let wpYO = window.pageYOffset;
        if (wpYO >= a) {
            nav.classList.add('fixed')
        } else {
            nav.classList.remove('fixed')
        }
    }
    navFixed()

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