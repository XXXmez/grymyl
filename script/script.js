document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav'),
          buttonViewWork = document.querySelector('.button_view_work'),
          about = document.querySelector('.about');
    
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
    function viewWork() {
        let clY = about.getBoundingClientRect().y
        //console.dir(clY);
        window.scrollBy(0, clY)
    }

    navFixed()

    document.addEventListener('scroll', navFixed)
    buttonViewWork.addEventListener('click', viewWork)
})