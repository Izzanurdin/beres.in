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