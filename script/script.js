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

    function anchor(){
        const dataLink = document.querySelectorAll('#link-nav')
        console.log(dataLink);

    }
    anchor()
    

    document.addEventListener('scroll', navFixed)
    buttonViewWork.addEventListener('click', viewWork)
})