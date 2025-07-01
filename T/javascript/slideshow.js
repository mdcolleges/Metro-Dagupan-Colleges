window.addEventListener("scroll", function () {
    let header = document.getElementById("stickyHeader");

    if (window.scrollY > 50) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});
