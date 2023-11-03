// SHOW NAVIGATION
console.log("JAVASCRIPT FUNCIONA")
const showNav = () => {
    const header = document.getElementById("header")
    const nav = document.getElementById("nav")

    if ((this.scrollY - 50) >= header.offsetHeight) {
        nav.classList.add("show-nav")
        console.log("ENSEÑAR NAV")
    }
    else nav.classList.remove("show-nav")
}

window.addEventListener("scroll", showNav)