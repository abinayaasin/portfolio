document.querySelectorAll('a[href^="#"]').forEach(anchor=> {
    anchor.addEventListener('click',function(e) {
        e.preventDefault();

        const targetID = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);


        if ( targetElement ){
            window.scrollTo({
                top:targetElement.offsetTop,
                behavior:'smooth'
            });
        }    
    
    
    });
});


