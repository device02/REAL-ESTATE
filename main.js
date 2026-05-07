// ===== MOBILE MENU =====
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('open');
        
    }
    else menu.classList.toggle('close');
}

// ===== SCROLL NAVBAR EFFECT =====
window.addEventListener('scroll', function () {
    const nav = document.getElementById('navbar');
    if (nav) {
        if (window.scrollY > 50) {
            nav.style.padding = '12px 60px';
        } else {
            nav.style.padding = '20px 60px';
        }
    }
});

// ===== PROPERTY FILTER (properties.html only) =====
function filterProps(btn, type) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (filterBtns) {
        filterBtns.forEach(b => b.classList.remove('active'));
    }
    btn.classList.add('active');

    const cards = document.querySelectorAll('.property-card');
    cards.forEach(function (card) {
        if (type === 'all' || card.dataset.type === type) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ===== CONTACT FORM (contact.html only) =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = contactForm.querySelector('input[placeholder="John"]');
        const email = contactForm.querySelector('input[type="email"]');

        if (!name || name.value.trim() === '') {
            alert('❌ Please enter your first name.');
            return;
        }
        if (!email || email.value.trim() === '') {
            alert('❌ Please enter your email address.');
            return;
        }

        alert('✅ Message sent! Our team will contact you within 24 hours.');
        contactForm.reset();
    });
}
