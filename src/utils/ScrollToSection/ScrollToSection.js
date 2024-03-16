
const ScrollToSection = (sectionID) => {

    const section = document.getElementById(sectionID);
    if (section) {
        // Scroll to the chosen section
        section.scrollIntoView({behavior:'smooth', block:'start'})
    }
}

export default ScrollToSection;