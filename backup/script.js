document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    const canTrackPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hero && canTrackPointer && !prefersReducedMotion) {
        let targetX = 50;
        let targetY = 50;
        let currentX = targetX;
        let currentY = targetY;
        let frameRequested = false;

        const animateHeroPointer = () => {
            currentX += (targetX - currentX) * 0.08;
            currentY += (targetY - currentY) * 0.08;
            hero.style.setProperty('--pointer-x', `${currentX}%`);
            hero.style.setProperty('--pointer-y', `${currentY}%`);
            hero.style.setProperty('--pointer-shift-x', `${(currentX - 50) * 0.32}px`);
            hero.style.setProperty('--pointer-shift-y', `${(currentY - 50) * 0.24}px`);

            if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
                requestAnimationFrame(animateHeroPointer);
            } else {
                frameRequested = false;
            }
        };

        hero.addEventListener('pointermove', (event) => {
            const bounds = hero.getBoundingClientRect();
            targetX = ((event.clientX - bounds.left) / bounds.width) * 100;
            targetY = ((event.clientY - bounds.top) / bounds.height) * 100;

            if (!frameRequested) {
                frameRequested = true;
                requestAnimationFrame(animateHeroPointer);
            }
        });

        hero.addEventListener('pointerleave', () => {
            targetX = 50;
            targetY = 50;

            if (!frameRequested) {
                frameRequested = true;
                requestAnimationFrame(animateHeroPointer);
            }
        });
    }

    // Create Interactive Cursor Glow
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    document.body.appendChild(cursorGlow);

    document.addEventListener('mousemove', (e) => {
        // Update Global Cursor Glow
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';

        // Update Bento Card Radial Glows
        const cards = document.querySelectorAll('.bento-item');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', x + '%');
            card.style.setProperty('--mouse-y', y + '%');
        });
    });

    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Apply staggered delay based on index
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animations to specific sections
    const animElements = document.querySelectorAll('.bento-item, .outcome-row, .section-header');
    animElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Nav blur on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.padding = '10px 30px';
            nav.style.background = 'rgba(0, 0, 0, 0.9)';
        } else {
            nav.style.padding = '15px 30px';
            nav.style.background = 'rgba(0, 0, 0, 0.7)';
        }
    });
});
