document.addEventListener('DOMContentLoaded', () => {
    
    // 1. AMBIL ID DARI URL (Contoh: ?id=premium)
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id');

    // 2. CARI DATA YANG COCOK DI data.js
    // Pastikan servicesData sudah termuat dari file data.js
    if (typeof servicesData === 'undefined') {
        console.error("Database servicesData tidak ditemukan!");
        return;
    }

    const service = servicesData.find(item => item.id === serviceId);

    // 3. JIKA DATA TIDAK DITEMUKAN, KEMBALIKAN KE HALAMAN LAYANAN
    if (!service) {
        alert("Layanan tidak ditemukan!");
        window.location.href = 'services.html';
        return;
    }

    // 4. ISI KONTEN KE DALAM HTML (DOM Manipulation)
    
    // --- Bagian Header & Teks Utama ---
    document.title = `${service.title} - Beres.in`; // Ubah Judul Tab Browser
    document.getElementById('breadcrumb-current').innerText = service.title;
    
    // Gambar Sebelum & Sesudah
    const imgBefore = document.getElementById('img-before');
    const imgAfter = document.getElementById('img-after');

    // Kalau elemen gambar ada, isi src-nya
    if (imgBefore && imgAfter) {
        // Ambil gambar dari data.js, atau pakai gambar default jika kosong
        // Pastikan file 'default-before.jpg' ada di folder img sebagai cadangan
        imgBefore.src = service.imageBefore || 'assets/img/default-before.jpg';
        imgAfter.src = service.imageAfter || 'assets/img/default-after.jpg';
        
        // Update alt text agar bagus untuk SEO
        imgBefore.alt = `Kondisi Sebelum ${service.title}`;
        imgAfter.alt = `Kondisi Sesudah ${service.title}`;
    }

    // Judul & Subjudul
    document.getElementById('detail-title').innerText = service.title;
    document.getElementById('detail-subtitle').innerText = service.subtitle;

    // Badge Paling Laris (Jika Ada)
    const badgeContainer = document.getElementById('detail-badge-container');
    if (service.isPopular) {
        badgeContainer.innerHTML = `<span class="detail-badge"><i class="fas fa-star"></i> ${service.badgeText || 'Paling Laris'}</span>`;
    }

    // Deskripsi Panjang
    // Kita pakai fullDescription jika ada, kalau tidak pakai description biasa
    document.getElementById('detail-desc').innerText = service.fullDescription || service.description;

    // --- Bagian Harga (Sidebar) ---
    document.getElementById('detail-price').innerText = service.price;
    document.getElementById('detail-unit').innerText = service.unit;

    // --- Bagian Tombol WhatsApp ---
    const waBaseUrl = "https://wa.me/6285945361679"; 
    const waMessage = encodeURIComponent(service.whatsappMessage); // Ubah teks jadi format URL
    const waButton = document.getElementById('wa-link');
    waButton.href = `${waBaseUrl}?text=${waMessage}`;

    // 5. RENDER DAFTAR LINGKUP PEKERJAAN (SCOPE) & ALAT (TOOLS)
    
    // Kita cari elemen list yang sudah ada di HTML
    const listContainer = document.querySelector('.check-list');
    
    // Bersihkan container dulu
    if (listContainer) {
        listContainer.innerHTML = ''; // Reset isi list
        
        // Hapus elemen "Peralatan" jika sudah ada (supaya tidak duplikat saat reload)
        // Kita cari sibling (saudara) dari listContainer yang mungkin sisa render sebelumnya
        let nextNode = listContainer.nextElementSibling;
        while (nextNode) {
            const toRemove = nextNode;
            nextNode = nextNode.nextElementSibling;
            if(toRemove.tagName === 'H3' || toRemove.tagName === 'UL') {
                 toRemove.remove();
            } else {
                break; // Stop jika ketemu elemen lain (misal sidebar)
            }
        }


        // Render Scope (Lingkup Pekerjaan)
        if (service.scope && service.scope.length > 0) {
            service.scope.forEach(item => {
                const li = document.createElement('li');
                li.innerText = item;
                listContainer.appendChild(li);
            });
        }

        // Render Tools (Peralatan) - Kita buat elemen baru di bawah Scope
        if (service.tools && service.tools.length > 0) {
            // Buat Judul Baru
            const toolsHeader = document.createElement('h3');
            toolsHeader.innerText = "Peralatan & Chemical";
            toolsHeader.style.marginTop = "30px"; // Sedikit jarak
            
            // Buat List Baru
            const toolsList = document.createElement('ul');
            toolsList.className = 'check-list'; // Pakai style yang sama (Centang Hijau)
            
            // Loop Tools
            service.tools.forEach(tool => {
                const li = document.createElement('li');
                li.innerHTML = `<span style="color:#555">${tool}</span>`; // Sedikit beda warna teks
                toolsList.appendChild(li);
            });

            // Insert after scope list
            listContainer.parentNode.insertBefore(toolsHeader, listContainer.nextSibling);
            listContainer.parentNode.insertBefore(toolsList, toolsHeader.nextSibling);
        }
    }
});