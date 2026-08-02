
document.addEventListener("DOMContentLoaded", () => {

    // Smooth Scrolling
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = this.getAttribute("href");

            if (target === "#") return;

            const section = document.querySelector(target);

            if (section) {

                e.preventDefault();

                section.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // Scroll Reveal Animation
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });


    document.querySelectorAll(".card, .step, .faq-item, .guide-list div")
        .forEach(element => {

            element.classList.add("hidden");

            observer.observe(element);

        });




});
