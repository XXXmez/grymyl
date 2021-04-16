document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');
    
    function navFixed() {
        let a = window.innerHeight;
        let wpYO = window.pageYOffset;
        console.log(nav.classList);
        if (wpYO >= a) {
            console.log('a');
            
            nav.classList.add('fixed')
        } else {
            nav.classList.remove('fixed')
        }
    }

    document.addEventListener('scroll', navFixed)
})