document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Horizontal scrolling for Featured Courses
    const courseContainer = document.querySelector(".courses");
    if (courseContainer) {
        let scrollAmount = 300;

        const leftButton = document.createElement("button");
        leftButton.innerHTML = "&#8592;";
        leftButton.classList.add("scroll-btn", "left-btn");
        leftButton.addEventListener("click", function () {
            courseContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });

        const rightButton = document.createElement("button");
        rightButton.innerHTML = "&#8594;";
        rightButton.classList.add("scroll-btn", "right-btn");
        rightButton.addEventListener("click", function () {
            courseContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });

        courseContainer.parentElement.insertBefore(leftButton, courseContainer);
        courseContainer.parentElement.appendChild(rightButton);
    }

    // Active menu highlighting
    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY + 100;
        document.querySelectorAll("nav ul li a").forEach(link => {
            const section = document.getElementById(link.getAttribute("href")?.substring(1));
            if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                document.querySelectorAll("nav ul li a").forEach(a => a.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });
});
