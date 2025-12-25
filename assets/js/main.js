// =========================================
// FAQ ACCORDION LOGIC
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = document.querySelectorAll('.faq-question');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            
            // Opsi Tambahan: Tutup item lain saat satu dibuka (Accordion Effect)
            // Hapus bagian ini jika ingin bisa buka banyak sekaligus
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Buka/Tutup item yang diklik
            item.classList.toggle('active');
        });
    });
});

/* =========================================
   MAIN LOGIC (CLEAN VERSION)
   Menangani Homepage & Halaman Services
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FUNGSI CETAKAN KARTU (TEMPLATE) ---
    const createCardHTML = (service) => {
        // Logika Style (Populer vs Biasa)
        const popularClass = service.isPopular ? 'popular' : '';
        const btnClass = service.isPopular ? 'btn-primary-dark' : '';
        
        // Logika Badge
        const badgeHTML = service.isPopular 
            ? `<div class="top-badge"><i class="fas fa-star"></i> ${service.badgeText}</div>` 
            : '';

        // HTML String
        return `
            <article class="service-card-modern ${popularClass}">
                ${badgeHTML}
                <div class="card-header">
                    <div class="icon-wrapper"><i class="${service.icon}"></i></div>
                    <h3>${service.title}</h3>
                    <p class="subtitle">${service.subtitle}</p>
                </div>
                <div class="price-section">
                    <span class="currency">Rp</span>
                    <span class="amount">${service.price}</span>
                    <span class="unit">${service.unit}</span>
                </div>
                <div class="dashed-divider"></div>
                <div class="card-desc">
                    <p>${service.description}</p>
                </div>
                <div class="card-footer">
                    <a href="${service.link}" class="btn-block-style ${btnClass}">
                        Lihat Detail <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </article>
        `;
    };

    // --- 2. LOGIKA HOMEPAGE (Hanya Menampilkan Service Card Kategori 'Utama') ---
    const homeContainer = document.getElementById('homepage-service-container');
    
    // Cek dulu: Apakah servicesData sudah ter-load? Dan apakah container ada?
    if (homeContainer && typeof servicesData !== 'undefined') {
        
        // Kosongkan dulu container agar tidak duplikat!
        homeContainer.innerHTML = ''; 
        
        // FILTER: Hanya ambil data dengan category 'utama'
        const mainServices = servicesData.filter(item => item.category === 'utama');
        
        // Loop dan masukkan ke HTML
        mainServices.forEach(service => {
            homeContainer.innerHTML += createCardHTML(service);
        });
    }

    // --- 3. LOGIKA HALAMAN SERVICES (Menampilkan Semua Paket) ---
    const servicesContainer = document.getElementById('service-container');
    
    if (servicesContainer && typeof servicesData !== 'undefined') {
        
        // Kosongkan dulu container!
        servicesContainer.innerHTML = '';

        // Render SEMUA data (Utama + Tambahan)
        servicesData.forEach(service => {
            servicesContainer.innerHTML += createCardHTML(service);
        });
    }

    /* ===========================================
   LOGIKA TESTIMONI (VANILLA JS SLIDER)
   =========================================== */
const track = document.getElementById('testimonial-track');
const dotsContainer = document.getElementById('testimonial-dots');

if (track && typeof testimonialsData !== 'undefined') {

    testimonialsData.sort(() => Math.random() - 0.5); // Acak urutan testimoni
    // 1. Render Kartu
    track.innerHTML = '';
    testimonialsData.forEach((testi, index) => {
        // Kita beri ID unik pada setiap slide untuk navigasi
        const slideHTML = `
            <div class="slider-item" id="slide-${index}">
                <div class="testi-card">
                    <div class="testi-avatar">
                        <img src="${testi.avatar}" alt="${testi.name}">
                    </div>
                    <div class="testi-content">
                        <div class="testi-author">
                            <h4>${testi.name}</h4>
                            <span>${testi.role}, ${testi.location}</span>
                        </div>
                        <p class="testi-quote">"${testi.quote}"</p>
                        <i class="fas fa-quote-right quote-icon"></i>
                    </div>
                </div>
            </div>
        `;
        track.innerHTML += slideHTML;
    });

    // 2. Render Dots (Navigasi)
    dotsContainer.innerHTML = '';
    testimonialsData.forEach((_, index) => {
        // Buat dot element
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active'); // Dot pertama aktif
        
        // Event Klik Dot
        dot.addEventListener('click', () => {
            const targetSlide = document.getElementById(`slide-${index}`);
            if (targetSlide) {
                // Perintah scroll native yang smooth
                track.scrollTo({
                    left: targetSlide.offsetLeft,
                    behavior: 'smooth'
                });
            }
        });

        dotsContainer.appendChild(dot);
    });

    // 3. Update Dot saat di-Scroll (Scroll Spy)
    track.addEventListener('scroll', () => {
        // Ambil posisi scroll saat ini
        const scrollPosition = track.scrollLeft;
        const trackWidth = track.scrollWidth - track.clientWidth;
        
        // Loop semua slide untuk cek mana yang sedang terlihat
        const slides = document.querySelectorAll('.slider-item');
        const dots = document.querySelectorAll('.dot');
        
        slides.forEach((slide, index) => {
            // Logika sederhana: Jika posisi slide mendekati posisi scroll kiri
            // Kita pakai toleransi jarak (offset) sedikit
            if (slide.offsetLeft - track.offsetLeft <= scrollPosition + 100) {
                // Reset semua dot
                dots.forEach(d => d.classList.remove('active'));
                // Aktifkan dot yang sesuai
                if(dots[index]) dots[index].classList.add('active');
            }
        });
    });
}

});