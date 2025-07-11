document.addEventListener("DOMContentLoaded", function(){
    function revealOnScroll() {
        document.querySelectorAll('.fade-in-on-scroll').forEach(function(el) {
            const rect = el.getBoundingClientRect();
            if(rect.top < window.innerHeight - 50 && !el.classList.contains('visible')){
                const delay = el.dataset.delay || 0;
                el.style.setProperty('--delay', '${delay}ms');
                el.classList.add('visible'); 
            }
    });
}
    let ticking = false;
    window.addEventListener('scroll', function () {
        if(!ticking) {
            requestAnimationFrame(function (){
                revealOnScroll();
                ticking = false;
            });
        }
    });

    //Run once on load
    revealOnScroll();
});