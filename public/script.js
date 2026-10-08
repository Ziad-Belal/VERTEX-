document.addEventListener('DOMContentLoaded', () => {
    // 1. Setup Global Cursor Glow
    const cursorGlow = document.querySelector('.cursor-glow') || document.createElement('div');
    cursorGlow.classList.add('cursor-glow');
    if (!cursorGlow.isConnected) document.body.appendChild(cursorGlow);
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let pointerFrame = 0;
    let latestPointerEvent = null;
    document.addEventListener('pointermove', (event) => {
        if (!finePointer) return;
        latestPointerEvent = event;
        if (pointerFrame) return;

        pointerFrame = requestAnimationFrame(() => {
            pointerFrame = 0;
            const pointerEvent = latestPointerEvent;

            if (!reducedMotion) {
                cursorGlow.style.left = `${pointerEvent.clientX}px`;
                cursorGlow.style.top = `${pointerEvent.clientY}px`;
            }

            const card = pointerEvent.target.closest?.('.bento-item');
            if (card) {
                const bounds = card.getBoundingClientRect();
                card.style.setProperty('--mouse-x', `${((pointerEvent.clientX - bounds.left) / bounds.width) * 100}%`);
                card.style.setProperty('--mouse-y', `${((pointerEvent.clientY - bounds.top) / bounds.height) * 100}%`);
            }

            if (modal?.classList.contains('active') && modalGlow) {
                const bounds = modal.getBoundingClientRect();
                modalGlow.style.transform = `translate(${pointerEvent.clientX - bounds.left - 300}px, ${pointerEvent.clientY - bounds.top - 300}px)`;
            }
        });
    });

    const hero = document.querySelector('.hero');
    if (hero && finePointer && !reducedMotion) {
        let targetX = 50;
        let targetY = 50;
        let currentX = 50;
        let currentY = 50;
        let frameRequested = false;

        const animateHeroPointer = () => {
            currentX += (targetX - currentX) * 0.1;
            currentY += (targetY - currentY) * 0.1;
            hero.style.setProperty('--pointer-x', `${currentX}%`);
            hero.style.setProperty('--pointer-y', `${currentY}%`);
            hero.style.setProperty('--pointer-shift-x', `${(currentX - 50) * 0.3}px`);
            hero.style.setProperty('--pointer-shift-y', `${(currentY - 50) * 0.22}px`);

            if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
                requestAnimationFrame(animateHeroPointer);
            } else {
                frameRequested = false;
            }
        };

        const moveHeroPointer = (event) => {
            const bounds = hero.getBoundingClientRect();
            targetX = ((event.clientX - bounds.left) / bounds.width) * 100;
            targetY = ((event.clientY - bounds.top) / bounds.height) * 100;
            if (!frameRequested) {
                frameRequested = true;
                requestAnimationFrame(animateHeroPointer);
            }
        };

        hero.addEventListener('pointermove', moveHeroPointer);
        hero.addEventListener('pointerleave', () => {
            targetX = 50;
            targetY = 50;
            if (!frameRequested) {
                frameRequested = true;
                requestAnimationFrame(animateHeroPointer);
            }
        });
    }

    // 2. Magnetic Buttons Implementation
    const magneticButtons = document.querySelectorAll('.magnetic');
    if (finePointer && !reducedMotion) magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const moveX = Math.max(-12, Math.min(12, (e.clientX - centerX) * 0.16));
            const moveY = Math.max(-10, Math.min(10, (e.clientY - centerY) * 0.16));

            btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
        });
    });

    // 3. 3D Tilt Effect for Bento Cards
    const bentoItems = document.querySelectorAll('.bento-item');
    if (finePointer && !reducedMotion) bentoItems.forEach(card => {
        let tiltFrame = 0;
        let latestTiltEvent = null;
        card.addEventListener('pointermove', (event) => {
            latestTiltEvent = event;
            if (tiltFrame) return;
            tiltFrame = requestAnimationFrame(() => {
                tiltFrame = 0;
                const rect = card.getBoundingClientRect();
                const x = latestTiltEvent.clientX - rect.left;
                const y = latestTiltEvent.clientY - rect.top;
                const rotateX = Math.max(-4, Math.min(4, (y - rect.height / 2) / 45));
                const rotateY = Math.max(-4, Math.min(4, (rect.width / 2 - x) / 45));
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
            });
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)`;
        });
    });

    // 4. Consultation Journey Implementation
    const modal = document.getElementById('consultation-modal');
    const closeBtn = document.querySelector('.close-modal');
    const steps = document.querySelectorAll('.step');
    const tiles = document.querySelectorAll('.intake-tile');
    const submitBtn = document.getElementById('submit-consultation');
    const modalGlow = document.querySelector('.modal-glow');
    let lastModalTrigger = null;

    // Trigger Modal
    const triggerModal = (event) => {
        lastModalTrigger = event.currentTarget;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    };

    document.querySelectorAll('.hero .btn-primary, .cta-nav, .bento-link[href="#contact"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            triggerModal(e);
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        if (lastModalTrigger) lastModalTrigger.focus();
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });

    // Intake Logic
    let currentStep = 1;
    const userData = {};

    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            // Handle selection visuals
            const parent = tile.parentElement;
            parent.querySelectorAll('.intake-tile').forEach(t => t.classList.remove('selected'));
            tile.classList.add('selected');

            // Save data
            const step = tile.closest('.step').dataset.step;
            userData[step === '1' ? 'industry' : 'objective'] = tile.dataset.value;

            // Transition to next step
            setTimeout(() => {
                goToStep(parseInt(step) + 1);
            }, 400);
        });
    });

    document.querySelectorAll('.step-back').forEach(button => {
        button.addEventListener('click', () => goToStep(Number(button.dataset.backStep)));
    });

    function goToStep(stepNumber) {
        if (stepNumber > 3) return;

        steps.forEach(s => {
            s.classList.remove('active', 'prev');
            if (parseInt(s.dataset.step) < stepNumber) s.classList.add('prev');
        });

        const targetStep = document.querySelector(`.step[data-step="${stepNumber}"]`);
        if (targetStep) {
            targetStep.classList.add('active');
            currentStep = stepNumber;
        }
    }

    submitBtn.addEventListener('click', () => {
        // Collect final details
        const nameInput = document.getElementById('client-name');
        const emailInput = document.getElementById('client-email');
        const companyInput = document.getElementById('client-company');
        userData.name = nameInput.value.trim();
        userData.email = emailInput.value.trim();
        userData.company = companyInput.value.trim();

        if (!userData.name || !userData.email || !companyInput.value.trim() || !emailInput.validity.valid) {
            const validationMessage = document.getElementById('consultation-error');
            validationMessage.textContent = !userData.name
                ? 'Please enter your full name.'
                : !userData.email || !emailInput.validity.valid
                    ? 'Enter a valid email address.'
                    : 'Please enter your company name.';
            if (!userData.name) nameInput.focus();
            else if (!userData.email || !emailInput.validity.valid) emailInput.focus();
            else companyInput.focus();
            return;
        }

        document.getElementById('consultation-error').textContent = '';
        const requestText = [
            'Hello! I would like to initiate a consultation.',
            `Industry: ${userData.industry || 'Not selected'}`,
            `Objective: ${userData.objective || 'Not selected'}`,
            `Name: ${userData.name}`,
            `Email: ${userData.email}`,
            `Company: ${userData.company}`
        ].join('\n');
        const followupLink = document.getElementById('whatsapp-followup');
        followupLink.href = `https://wa.me/201023286497?text=${encodeURIComponent(requestText)}`;
        followupLink.hidden = false;

        steps.forEach(s => s.classList.remove('active', 'prev'));
        document.getElementById('success-step').classList.add('active');
    });

    // 5. Intersection Observer for Staggered Reveals
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // 6. Navigation Scroll Effect
    const nav = document.querySelector('nav');
    let navIsScrolled = false;
    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 50;
        if (isScrolled === navIsScrolled) return;

        navIsScrolled = isScrolled;
        nav.style.transform = `translateX(-50%) scale(${isScrolled ? 0.95 : 1})`;
        nav.style.backgroundColor = isScrolled ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.7)';
    }, { passive: true });
});
