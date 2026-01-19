// Menu Toggle Logic
function toggleMenu() {
    document.getElementById('navButtons').classList.toggle('active');
}

document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('navButtons').classList.remove('active');
    });
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.system-card, .custom-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// ----------------------------------------------------
// TRANSLATION LOGIC
// ----------------------------------------------------
const translations = {
    en: {
        brandName: "VERTEX SYSTEMS",
        navSystems: "Systems",
        navContact: "Contact",
        navHome: "Home",
        heroTag: "BUILT FOR EXCELLENCE",
        heroTitle: "VERTEX SYSTEMS",
        scrollText: "Scroll",
        solTitle: "SOLUTIONS",
        solSubtitle: "Industry-Specific Systems",

        // Cards
        card1Title: "Gym Management",
        card1Desc: "Complete fitness center solution with member tracking, class scheduling, payment processing, and performance analytics.",

        card2Title: "Pharmacy System",
        card2Desc: "Streamline pharmacy operations with inventory management, prescription tracking, sales monitoring, and compliance tools.",

        card3Title: "Car Service Center",
        card3Desc: "Manage auto service business with appointment scheduling, repair tracking, parts inventory, and customer records.",

        card4Title: "Restaurant Management",
        card4Desc: "All-in-one restaurant platform with POS, table management, kitchen display, inventory control, and delivery integration.",

        card5Title: "Salon & Spa",
        card5Desc: "Smart booking system for salons and spas with appointment management, staff scheduling, product sales, and client tools.",

        card6Title: "Retail Management",
        card6Desc: "Comprehensive retail solution with point of sale, inventory management, customer relationship tools, and analytics.",

        // New Custom Card
        card7Title: "Custom System",
        card7Desc: "Don't see what you need? We build tailored solutions specific to your unique business requirements and workflows.",
        btnRequest: "Request Now",

        orderBtn: "Order Now",

        // Footer
        footerDesc: "We create custom internal business systems tailored to your specific industry needs. From gyms to pharmacies, restaurants to retail stores.",
        navTitle: "Navigation",
        contactTitle: "Contact",
        whatsappBtn: "WhatsApp",
        trustTitle: "People Who Trust Us"
    },
    ar: {
        brandName: "أنظمة فيرتكس",
        navSystems: "الأنظمة",
        navContact: "تواصل معنا",
        navHome: "الرئيسية",
        heroTag: "صُممت للتميز",
        heroTitle: "أنظمة فيرتكس",
        scrollText: "تصفح",
        solTitle: "الحلول",
        solSubtitle: "أنظمة مخصصة لمجالك",

        // Cards
        card1Title: "إدارة الصالات الرياضية",
        card1Desc: "حل شامل للمراكز الرياضية مع تتبع الأعضاء وجدولة الفصول ومعالجة المدفوعات وتحليلات الأداء.",

        card2Title: "نظام الصيدليات",
        card2Desc: "تنظيم عمليات الصيدلية مع إدارة المخزون وتتبع الوصفات الطبية ومراقبة المبيعات وأدوات الامتثال.",

        card3Title: "مراكز خدمة السيارات",
        card3Desc: "إدارة أعمال خدمة السيارات مع جدولة المواعيد وتتبع الإصلاحات ومخزون قطع الغيار وسجلات العملاء.",

        card4Title: "إدارة المطاعم",
        card4Desc: "منصة شاملة للمطاعم مع نقاط البيع وإدارة الطاولات وشاشة المطبخ ومراقبة المخزون وتكامل التوصيل.",

        card5Title: "الصالونات والمنتجعات",
        card5Desc: "نظام حجز ذكي للصالونات والمنتجعات الصحية مع إدارة المواعيد وجدولة الموظفين ومبيعات المنتجات.",

        card6Title: "إدارة المتاجر",
        card6Desc: "حل شامل لتجارة التجزئة مع نقاط البيع وإدارة المخزون وأدوات علاقات العملاء والتحليلات.",

        // New Custom Card
        card7Title: "نظام مخصص",
        card7Desc: "لا تجد ما تبحث عنه؟ نحن نقوم ببناء حلول برمجية مفصلة خصيصاً لتناسب متطلبات عملك الفريدة.",
        btnRequest: "اطلب الآن",

        orderBtn: "أطلب الأن",

        // Footer
        footerDesc: "نبتكر أنظمة أعمال داخلية مخصصة مصممة خصيصًا لاحتياجات مجال عملك. من الصالات الرياضية إلى الصيدليات والمطاعم ومتاجر التجزئة.",
        navTitle: "التنقل",
        contactTitle: "اتصل بنا",
        whatsappBtn: "واتساب",
        trustTitle: "الذين يثقون بنا"
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');

    // Update Text
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update Order Buttons (Class based)
    const orderButtons = document.querySelectorAll('.order-btn');
    orderButtons.forEach(btn => {
        btn.textContent = translations[lang].orderBtn;
    });

    // Handle Direction and Active State
    const body = document.body;
    const arBtn = document.querySelector('.lang-option[onclick="setLanguage(\'ar\')"]');
    const enBtn = document.querySelector('.lang-option[onclick="setLanguage(\'en\')"]');

    if (lang === 'ar') {
        body.classList.add('rtl');
        arBtn.classList.add('active');
        enBtn.classList.remove('active');
    } else {
        body.classList.remove('rtl');
        enBtn.classList.add('active');
        arBtn.classList.remove('active');
    }
}