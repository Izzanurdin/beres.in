document.addEventListener('DOMContentLoaded', () => {
    
        const menuBtn = document.getElementById('mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // --- 1. FAQ ACCORDION LOGIC ---
    // (Murni interaksi UI, jadi cocok di sini)
    const faqButtons = document.querySelectorAll('.faq-question');
    if (faqButtons.length > 0) {
        faqButtons.forEach(button => {
            button.addEventListener('click', () => {
                const item = button.parentElement;
                
                // Tutup item lain (Accordion Effect)
                document.querySelectorAll('.faq-item').forEach(otherItem => {
                    if (otherItem !== item) otherItem.classList.remove('active');
                });

                // Buka/Tutup item yang diklik
                item.classList.toggle('active');
            });
        });
    }

    // --- 2. TESTIMONIAL SLIDER INTERACTION ---
    // (Logika gerak dan tombol, terpisah dari pembuatan konten)
    const track = document.getElementById('testimonial-track');
    
    // Kita gunakan setTimeout sebentar untuk memastikan HTML dari main.js sudah selesai dirender
    setTimeout(() => {
        const dots = document.querySelectorAll('.dot');
        const slides = document.querySelectorAll('.slider-item');

        if (track && dots.length > 0) {
            
            // A. Logika Klik Dot
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    const targetSlide = document.getElementById(`slide-${index}`);
                    if (targetSlide) {
                        track.scrollTo({
                            left: targetSlide.offsetLeft,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // B. Logika Scroll Spy (Mengubah dot aktif saat digeser)
            track.addEventListener('scroll', () => {
                const scrollPosition = track.scrollLeft;
                
                slides.forEach((slide, index) => {
                    // Toleransi jarak 100px agar responsif
                    if (slide.offsetLeft - track.offsetLeft <= scrollPosition + 100) {
                        dots.forEach(d => d.classList.remove('active'));
                        if(dots[index]) dots[index].classList.add('active');
                    }
                });
            });
        }
    }, 100); // Delay 100ms agar aman menunggu rendering main.js

    // --- 3. LOGIKA IMAGE COMPARISON SLIDER ---
    // 1. Ambil elemen-elemen yang dibutuhkan
    const sliderRange = document.getElementById('comparison-range');
    const imgAfterWrapper = document.getElementById('img-after-wrapper');
    const sliderHandle = document.getElementById('slider-handle');
    const labelBefore = document.querySelector('.label-before');

    // 2. Cek apakah elemen ada (supaya tidak error di halaman lain yang tidak ada slidernya)
    if (sliderRange && imgAfterWrapper && sliderHandle && labelBefore) {
        // 3. Tambahkan Event Listener saat input digeser
        sliderRange.addEventListener('input', (e) => {
            // Ambil nilai slider saat ini (0 sampai 100)
            const sliderPos = e.target.value;

            // --- A.  LOGIKA CLIP-PATH AFTER ---
            // Alih-alih mengubah width, kita ubah area potongnya.
            // Rumus: Potong dari KANAN sebesar (100 - posisi slider)%
            // Contoh: Slider di 70%, berarti potong 30% dari kanan.
            imgAfterWrapper.style.clipPath = `inset(0 ${100 - sliderPos}% 0 0)`;

            // B. Pindahkan tombol bulat (Handle) mengikuti posisi slider
            sliderHandle.style.left = `${sliderPos}%`;
        });
    }
});