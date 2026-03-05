// --- 1. FANTASTIC PRE-LOADER & ENTRANCE SEQUENCER ---
        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            
            // Wait 1.5s for the user to admire the splash screen
            setTimeout(() => {
                preloader.style.opacity = '0';
                
                // THE MAGIC TRIGGER: This adds the class that starts the Navbar & Header animations!
                document.body.classList.add('loaded');
                
                setTimeout(() => { 
                    preloader.style.visibility = 'hidden'; 
                    preloader.style.display = 'none'; 
                    
                    // Initialize AOS *AFTER* the preloader is gone so scroll animations are perfectly timed
                    AOS.init({ once: true, offset: 20, duration: 800 });
                    
                }, 800); // Wait for the 800ms fade transition to finish
            }, 1500); 
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
            // Toggle the dark-mode class on the body
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            
            // 1. Change the Icon
            if (isDark) {
                darkModeBtn.innerHTML = '<i class="fas fa-sun text-warning fs-5"></i>';
                darkModeBtn.classList.replace('btn-outline-info', 'btn-outline-light');
            } else {
                darkModeBtn.innerHTML = '<i class="fas fa-moon fs-5"></i>';
                darkModeBtn.classList.replace('btn-outline-light', 'btn-outline-info');
            }

            // 2. Change the Tooltip Text
            const newTooltipText = isDark ? 'Enable Light Mode' : 'Enable Dark Mode';
            darkModeBtn.setAttribute('data-bs-original-title', newTooltipText);
            darkModeBtn.setAttribute('title', newTooltipText);

            // 3. Hide the tooltip momentarily so it resets nicely
            const tooltipInstance = bootstrap.Tooltip.getInstance(darkModeBtn);
            if (tooltipInstance) {
                tooltipInstance.hide();
            }
        });

        // --- 7. BACK TO TOP BUTTON LOGIC ---
        const backToTopBtn = document.getElementById('backToTopBtn');
        
        // Show/Hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                // Show button if scrolled down 400px
                backToTopBtn.classList.add('show');
            } else {
                // Hide button if near the top
                backToTopBtn.classList.remove('show');
            }
        });

        // Smooth scroll to top when clicked
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });