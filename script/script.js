document.addEventListener('DOMContentLoaded', () => {
    //ищем элементы на сайте
    const nav = document.querySelector('.nav'),
          buttonViewWork = document.querySelector('.button_view_work'),
          about = document.querySelector('.about');
    
    //функция фиксации меню при прокрутке
    function navFixed() {
        let a = window.innerHeight;
        let wpYO = window.pageYOffset;
        //console.log(nav.classList);
        if (wpYO >= a) {
            //console.log('a');
            
            nav.classList.add('fixed')
        } else {
            nav.classList.remove('fixed')
        }
    }
    navFixed()

    //функция прокрутки до элемента
    function viewWork() {
        let clY = about.getBoundingClientRect().y
        //console.dir(clY);
        window.scrollBy(0, clY)
    }

    document.addEventListener('scroll', navFixed)
    buttonViewWork.addEventListener('click', viewWork)








    //Меню якорей
    const navDiv = document.querySelectorAll('.nav div')
    const dataLink = document.querySelectorAll('[data-link-nav]')
    navDiv.forEach( e => {
        e.addEventListener('click', testes1)
    })

    function testes1(e) {
        //console.log('1', e.target.dataset.targetLink);
        for(let i=0; i<dataLink.length;i++) {
            if(e.target.dataset.targetLink == dataLink[i].dataset.linkNav) {
                //console.log(true);
                //console.log(dataLink[i].getBoundingClientRect().y);
                
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


    //подсветка меню
    for () {
        
    }


    /*
    function anchor(){

        const dataLink = document.querySelectorAll('[data-link-nav]')
        dataLink.forEach(elem => console.log(elem.dataset.linkNav))

    }
    anchor()
    */

    
})