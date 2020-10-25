const navSlide = () => {
    const fuse = document.querySelector('.fuse');
    const nav = document.querySelector('.nav-links');
    
    fuse.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();