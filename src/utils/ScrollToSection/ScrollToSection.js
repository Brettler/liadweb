
const ScrollToSection = (sectionID, headerNavbarRef) => {

    const section = document.getElementById(sectionID); // find the id section we need to scroll to.
    var offset = 0;
    if (headerNavbarRef && headerNavbarRef.current) {
        offset = headerNavbarRef.current.offsetHeight; // Dynamically get the height of the header
    }
    if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const scrollTop = window.scrollY;
        const finalPosition = sectionTop + scrollTop - offset;
        // Scroll to the chosen section
        // section.scrollIntoView({behavior:'smooth', block:'start'})

        window.scrollTo({
            top: finalPosition,
            behavior: 'smooth',
        });
    }
}

export default ScrollToSection;