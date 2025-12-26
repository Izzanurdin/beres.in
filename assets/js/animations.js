document.addEventListener('DOMContentLoaded', () => {
    
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

    // 2. Cek apakah elemen ada (supaya tidak error di halaman lain yang tidak ada slidernya)
    if (sliderRange && imgAfterWrapper && sliderHandle) {
        
        // 3. Tambahkan Event Listener saat input digeser
        sliderRange.addEventListener('input', (e) => {
            // Ambil nilai slider saat ini (0 sampai 100)
            const sliderPos = e.target.value;

            // A. Ubah lebar gambar 'After' sesuai posisi slider
            // Jika slider di 50%, maka gambar After lebarnya 50%
            imgAfterWrapper.style.width = `${sliderPos}%`;

            // B. Pindahkan tombol bulat (Handle) mengikuti posisi slider
            sliderHandle.style.left = `${sliderPos}%`;
        });
    }
});