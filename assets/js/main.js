/* =========================================
   MAIN LOGIC (CONTENT RENDERER)
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    // --- HELPER: FUNGSI CETAKAN KARTU ---
    const createCardHTML = (service) => {
        const popularClass = service.isPopular ? 'popular' : '';
        const btnClass = service.isPopular ? 'btn-primary-dark' : '';
        
        const badgeHTML = service.isPopular 
            ? `<div class="top-badge"><i class="fas fa-star"></i> ${service.badgeText}</div>` 
            : '';

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

    // --- 1. RENDER HOMEPAGE SERVICES ---
    const homeContainer = document.getElementById('homepage-service-container');
    if (homeContainer && typeof servicesData !== 'undefined') {
        homeContainer.innerHTML = ''; 
        const mainServices = servicesData.filter(item => item.category === 'utama');
        mainServices.forEach(service => {
            homeContainer.innerHTML += createCardHTML(service);
        });
    }

    // --- 2. RENDER ALL SERVICES PAGE ---
    const servicesContainer = document.getElementById('service-container');
    if (servicesContainer && typeof servicesData !== 'undefined') {
        servicesContainer.innerHTML = '';
        servicesData.forEach(service => {
            servicesContainer.innerHTML += createCardHTML(service);
        });
    }

    // --- 3. RENDER TESTIMONIAL CARDS & DOTS ONLY ---
    const track = document.getElementById('testimonial-track');
    const dotsContainer = document.getElementById('testimonial-dots');

    if (track && typeof testimonialsData !== 'undefined') {
        testimonialsData.sort(() => Math.random() - 0.5); // Acak urutan

        track.innerHTML = '';
        dotsContainer.innerHTML = '';

        testimonialsData.forEach((testi, index) => {
            // Render Kartu
            const slideHTML = `
                <div class="slider-item" id="slide-${index}">
                    <div class="testi-card">
                        <div class="testi-avatar"><img src="${testi.avatar}" alt="${testi.name}"></div>
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

            // Render Dot Element (Tanpa logic klik, hanya elemen)
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dotsContainer.appendChild(dot);
        });
    }
});