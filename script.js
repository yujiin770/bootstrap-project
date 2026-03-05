  // --- 1. PRE-LOADER ---
        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => { preloader.style.display = 'none'; }, 500);
            }, 300);
        });

        // --- 2. NAVBAR SMART SCROLL (Hide on Scroll Down) ---
        let lastScrollTop = 0;
        const navbar = document.getElementById('mainNav');

        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // If scrolling down and past the initial top area
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navbar.classList.add('navbar-hidden');
            } else {
                // Scrolling up
                navbar.classList.remove('navbar-hidden');
            }
            lastScrollTop = scrollTop;
        });

        // Initialize AOS Animations
        AOS.init({ once: true, offset: 20, duration: 800 });

        // Initialize Tooltips & Popovers
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));

        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
        const popoverList =[...popoverTriggerList].map(el => new bootstrap.Popover(el));

        // --- 3. MODAL CONTROLLER ---
        function openModal(imgSrc) {
            document.getElementById('modalImage').src = imgSrc;
            const imgModal = new bootstrap.Modal(document.getElementById('imageModal'));
            imgModal.show();
        }

        // --- 4. TOAST CONTROLLER ---
        const newsletterBtn = document.getElementById('newsletterBtn');
        if (newsletterBtn) {
            newsletterBtn.addEventListener('click', () => {
                const toast = new bootstrap.Toast(document.getElementById('newsletterToast'));
                toast.show();
                document.getElementById('newsletterEmail').value = '';
            });
        }

        // --- 5. SWEETALERT FORM SUBMIT ---
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const isDark = document.body.classList.contains('dark-mode');
            Swal.fire({
                title: 'Message Sent!',
                text: 'Thank you for reaching out. We will get back to you soon.',
                icon: 'success',
                confirmButtonColor: '#00b4d8',
                background: isDark ? '#1e1e1e' : '#ffffff',
                color: isDark ? '#ffffff' : '#212529'
            });
            this.reset();
        });

        // --- 6. DARK MODE TOGGLE ---
        const darkModeBtn = document.getElementById('darkModeToggle');
        darkModeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if(document.body.classList.contains('dark-mode')) {
                darkModeBtn.innerHTML = '<i class="fas fa-sun text-warning"></i> Light Mode';
                darkModeBtn.classList.replace('btn-outline-info', 'btn-outline-light');
            } else {
                darkModeBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
                darkModeBtn.classList.replace('btn-outline-light', 'btn-outline-info');
            }
        });