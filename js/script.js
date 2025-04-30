document.addEventListener('DOMContentLoaded', function () {
    // Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    const navLinks = document.getElementById('nav-links');
    const menuIcon = menuToggle.querySelector('i'); // 

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');

            // Trocar ícone Font Awesome (≡ ↔ X)
            if (menuIcon.classList.contains('fa-bars')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });

        // Fechar menu ao clicar em um item
        document.querySelectorAll('nav ul li a').forEach(function (item) {
            item.addEventListener('click', function () {
                nav.classList.remove('active');
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                // Voltar o ícone para fa-bars
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            });
        });
    }

    // Animação de scroll
    function setupScrollAnimations() {
        const sections = document.querySelectorAll('section');

        function checkVisibility() {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionHeight = section.offsetHeight;
                const windowHeight = window.innerHeight;

                if (sectionTop < windowHeight - (sectionHeight * 0.25)) {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }
            });
        }

        checkVisibility();
        window.addEventListener('scroll', checkVisibility);
    }

    setTimeout(setupScrollAnimations, 300);

    // Scroll suave
    document.querySelectorAll('nav a').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
