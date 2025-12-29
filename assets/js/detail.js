document.addEventListener('DOMContentLoaded', () => {
    
    // 1. AMBIL ID DARI URL
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id');

    // 2. CARI DATA YANG COCOK DI data.js
    let service = null;

    // Cek apakah database ada
    if (typeof servicesData !== 'undefined') {
        service = servicesData.find(item => item.id === serviceId);
    } else {
        console.error("Database servicesData tidak ditemukan!");
    }

    // 3. JIKA DATA DITEMUKAN, ISI KONTEN HTML
    if (service) {
        
        // --- Bagian Header & Teks Utama ---
        document.title = `${service.title} - Beres.in`; 
        document.getElementById('breadcrumb-current').innerText = service.title;
        
        // Gambar Sebelum & Sesudah
        const imgBefore = document.getElementById('img-before');
        const imgAfter = document.getElementById('img-after');

        if (imgBefore && imgAfter) {
            imgBefore.src = service.imageBefore || 'assets/img/default-before.jpg';
            imgAfter.src = service.imageAfter || 'assets/img/default-after.jpg';
            imgBefore.alt = `Kondisi Sebelum ${service.title}`;
            imgAfter.alt = `Kondisi Sesudah ${service.title}`;
        }

        // Judul & Subjudul
        document.getElementById('detail-title').innerText = service.title;
        const subtitleEl = document.getElementById('detail-subtitle');
        if(subtitleEl) subtitleEl.innerText = service.subtitle || '';

        // Badge Paling Laris
        const badgeContainer = document.getElementById('detail-badge-container');
        if (service.isPopular && badgeContainer) {
            badgeContainer.innerHTML = `<span class="detail-badge"><i class="fas fa-star"></i> ${service.badgeText || 'Paling Laris'}</span>`;
        }

        // Deskripsi Panjang
        const descEl = document.getElementById('detail-desc');
        if(descEl) descEl.innerText = service.fullDescription || service.description;

        // --- Bagian Harga & Unit (Sidebar) ---
        document.getElementById('detail-price').innerText = service.price;
        
        // Render Satuan Unit (misal: / sesi)
        const unitEl = document.getElementById('detail-unit');
        if (unitEl) {
            unitEl.innerText = service.unit || ''; 
        }

        // 5. RENDER DAFTAR LINGKUP PEKERJAAN (SCOPE) & ALAT (TOOLS)
        const listContainer = document.querySelector('.check-list');
        
        if (listContainer) {
            listContainer.innerHTML = ''; // Reset
            
            // Hapus elemen sisa (clean up)
            let nextNode = listContainer.nextElementSibling;
            while (nextNode) {
                const toRemove = nextNode;
                nextNode = nextNode.nextElementSibling;
                if(toRemove.tagName === 'H3' || toRemove.tagName === 'UL') {
                     toRemove.remove();
                } else {
                    break; 
                }
            }

            // Render Scope
            if (service.scope && service.scope.length > 0) {
                service.scope.forEach(item => {
                    const li = document.createElement('li');
                    li.innerText = item;
                    listContainer.appendChild(li);
                });
            }

            // Render Tools
            if (service.tools && service.tools.length > 0) {
                const toolsHeader = document.createElement('h3');
                toolsHeader.innerText = "Peralatan & Chemical";
                toolsHeader.style.marginTop = "30px";
                
                const toolsList = document.createElement('ul');
                toolsList.className = 'check-list';
                
                service.tools.forEach(tool => {
                    const li = document.createElement('li');
                    li.innerHTML = `<span style="color:#555">${tool}</span>`;
                    toolsList.appendChild(li);
                });

                listContainer.parentNode.insertBefore(toolsHeader, listContainer.nextSibling);
                listContainer.parentNode.insertBefore(toolsList, toolsHeader.nextSibling);
            }
        }

    } else {
        // JIKA DATA TIDAK ADA / ID SALAH
        // Opsional: Redirect atau Tampilkan Pesan Error di Judul
        const titleEl = document.getElementById('detail-title');
        if(titleEl) titleEl.innerText = "Layanan Tidak Ditemukan";
        // alert("Layanan tidak ditemukan!"); // Opsional: Matikan alert biar user ga kaget
    }


    /* =========================================
       LOGIKA BOOKING FORM
       ========================================= */
    const bookingForm = document.getElementById('booking-form');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault(); // 1. Wajib: Mencegah Reload

            // Cek Validitas Halaman
            const currentTitle = document.getElementById('detail-title').innerText;
            if (currentTitle === "Memuat Layanan..." || currentTitle === "Layanan Tidak Ditemukan") {
                alert("Data layanan belum termuat dengan benar.");
                return;
            }
            
            // Ambil Data Input User
            const name = document.getElementById('cust-name').value;
            const date = document.getElementById('cust-date').value;
            const address = document.getElementById('cust-address').value;
            const note = document.getElementById('cust-note').value;
            
            // Ambil Data Layanan dari Halaman (termasuk Unit)
            const price = document.getElementById('detail-price').innerText;
            // ✅ Ambil teks unit jika ada
            const unit = document.getElementById('detail-unit') ? document.getElementById('detail-unit').innerText : '';

            // Format Pesan WhatsApp
            const adminPhone = '6285945361679'; 
            
            // OPSI 1: Simbol Teks (Anti-Error)
            let message = `Halo Admin Beres.in, saya mau pesan layanan:%0a%0a`;
            message += `>> *Layanan:* ${currentTitle}%0a`;
            message += `>> *Estimasi:* Rp ${price} ${unit}%0a%0a`;
            message += `--------------------------------%0a`; 
            message += `*Nama:* ${name}%0a`;
            message += `*Tanggal:* ${date}%0a`;
            message += `*Alamat:* ${address}%0a`;
            
            if(note) {
                message += `*Catatan:* ${note}%0a`;
            }

            // Buka WhatsApp
            const waURL = `https://wa.me/${adminPhone}?text=${message}`;
            window.open(waURL, '_blank');
        });
    }
});