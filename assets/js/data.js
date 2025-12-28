/* =========================================
   DATABASE LAYANAN & TESTIMONI (data.js)
   ========================================= */

// --- BAGIAN 1: DAFTAR LAYANAN LENGKAP ---
const servicesData = [
    // =================================================
    // KATEGORI UTAMA
    // =================================================
    {
        id: "reguler",
        category: "utama",
        title: "Beres.in Reguler",
        subtitle: "Perawatan Harian",
        icon: "fas fa-broom", 
        price: "50rb",
        unit: "/ jam",
        description: "Solusi hemat & praktis untuk rumah yang selalu segar setiap hari.",
        fullDescription: "Layanan housekeeping standar hotel untuk menjaga kebersihan harian tempat tinggalmu. Cocok untuk kamu yang sibuk bekerja dan ingin pulang ke rumah yang rapi, wangi, dan bebas debu permukaan.",
        whatsappMessage: "Halo Admin Beres.in, saya mau pesan layanan *Reguler Cleaning*. Apakah slot tersedia?",
        isPopular: false,
        scope: [
            "Menyapu & Mengepel seluruh lantai",
            "Dusting (lap debu) furnitur & meja",
            "Merapikan tempat tidur",
            "Membersihkan kaca cermin",
            "Membuang sampah harian",
            "Semprot pengharum ruangan"
        ],
        tools: [
            "Sapu & Pengki Set",
            "Alat Pel (Mop) Microfiber",
            "Lap Microfiber (Merah/Biru/Kuning)",
            "Cairan Pembersih Lantai (Eco)",
            "Cairan Kaca (Glass Cleaner)"
        ],
        link: "service-detail.html?id=reguler",
        imageBefore: "assets/img/services/packages/reguler/img-before.png",
        imageAfter: "assets/img/services/packages/reguler/img-after.png"
    },
    {
        id: "premium",
        category: "utama",
        title: "Beres.in Premium",
        subtitle: "Deep Cleaning",
        icon: "fas fa-pump-soap",
        price: "25rb",
        unit: "/ m²",
        description: "Pembersihan menyeluruh kerak kamar mandi & dapur berminyak.",
        fullDescription: "Deep Cleaning adalah pembersihan mendalam untuk mengangkat kotoran yang sudah menahun. Sangat disarankan untuk rumah yang lama ditinggal, pasca renovasi, atau pindahan rumah.",
        whatsappMessage: "Halo Admin, saya butuh *Deep Cleaning (Premium)*. Bisa bantu hitung estimasi biayanya?",
        isPopular: true,
        badgeText: "Paling Laris (Garansi Bersih)",
        scope: [
            "Pembersihan kerak kamar mandi",
            "Pembersihan minyak dapur & kompor",
            "Detailing rel jendela & kusen",
            "Membersihkan sawang-sawang (langit-langit)",
            "Pembersihan balkon & teras",
            "Semua fitur Paket Reguler"
        ],
        tools: [
            "Mesin Polisher (Sikat Lantai)",
            "Vacuum Cleaner (Dry)",
            "Sikat & Pad Abrasif Khusus",
            "Chemical Penghancur Kerak (Heavy Duty)",
            "Degreaser (Penghancur Minyak)",
            "Tangga Lipat (Reach Tool)"
        ],
        link: "service-detail.html?id=premium",
        imageBefore: "assets/img/services/packages/premium/img-before.png",
        imageAfter: "assets/img/services/packages/premium/img-after.png"
    },
    {
        id: "elite",
        category: "utama",
        title: "Beres.in Elite",
        subtitle: "Hydro Vacuum & Health",
        icon: "fas fa-virus-slash",
        price: "80rb",
        unit: "/ item",
        description: "Sedot tungau & fogging disinfektan untuk kesehatan keluarga.",
        fullDescription: "Fokus pada kesehatan keluarga dengan membasmi alergen tak kasat mata. Menggunakan mesin Hydro Vacuum khusus untuk menyedot tungau (dust mite) di soft furniture.",
        whatsappMessage: "Halo Admin, saya tertarik paket *Elite (Hydro Vacuum)* untuk sedot tungau kasur/sofa.",
        isPopular: false,
        scope: [
            "Hydro Vacuum Kasur (Sedot Tungau)",
            "Hydro Vacuum Sofa & Gorden",
            "Fogging Disinfektan ruangan",
            "Sterilisasi Bakteri & Virus",
            "Aromaterapi relaksasi"
        ],
        tools: [
            "Mesin Hydro Vacuum (Hyla/Sirena)",
            "Mesin Fogging (Asap)",
            "Cairan Disinfektan (Food Grade)",
            "Essential Oil Aromatherapy",
            "UV-C Light Sterilizer (Opsional)"
        ],
        link: "service-detail.html?id=elite",
        imageBefore: "assets/img/services/packages/elite/img-before.png",
        imageAfter: "assets/img/services/packages/elite/img-after.png"
    },

    // =================================================
    // KATEGORI TAMBAHAN (ALA CARTE)
    // =================================================
    {
        id: "toilet",
        category: "tambahan",
        title: "Beres.in Toilet",
        subtitle: "Salon Kamar Mandi",
        icon: "fas fa-toilet", 
        price: "150rb",
        unit: "/ unit",
        description: "Spesialis kerak membandel! Mengembalikan kilau kamar mandi Anda.",
        fullDescription: "Layanan restorasi kamar mandi. Fokus 100% untuk menghilangkan kerak air, jamur kaca, dan noda kekuningan yang tidak mempan disikat biasa.",
        whatsappMessage: "Halo, kamar mandi saya berkerak. Mau pesan layanan *Beres.in Toilet*.",
        isPopular: true, 
        badgeText: "Ampuh Lawan Kerak",
        scope: [
            "Cleaning kerak lantai & dinding",
            "Poles Sanitary (Kloset/Wastafel)",
            "Glass Scrub (Jamur Kaca)",
            "Poles Kran (Chrome)",
            "Cleaning Exhaust Fan"
        ],
        tools: [
            "Mesin Polisher Tangan (Hand Polisher)",
            "Chemical Anti-Kerak Khusus",
            "Sikat Detail (Grout Brush)",
            "Squeegee (Pembersih Kaca)",
            "Microfiber Khusus Kaca"
        ],
        link: "service-detail.html?id=toilet",
        imageBefore: "assets/img/services/packages/toilet/img-before.jpg",
        imageAfter: "assets/img/services/packages/toilet/img-after.jpg"
    },
    {
        id: "sofa",
        category: "tambahan",
        title: "Beres.in Sofa",
        subtitle: "Cuci Basah (Wet Clean)",
        icon: "fas fa-couch",
        price: "50rb",
        unit: "/ dudukan",
        description: "Cuci sofa metode basah untuk angkat noda & bau apek.",
        fullDescription: "Menggunakan metode Wet Extraction (Cuci Basah) untuk membilas kotoran di dalam busa. Pengeringan mencapai 80% (tinggal diangin-anginkan).",
        whatsappMessage: "Halo, saya mau *Cuci Sofa* saya yang kotor. Bisa datang kapan?",
        isPopular: false,
        scope: [
            "Dry Vacuum (Debu Permukaan)",
            "Spotting (Sikat Noda)",
            "Wet Extraction (Bilas Mesin)",
            "Penyedotan air kotor",
            "Finishing Parfum"
        ],
        tools: [
            "Mesin Extractor (Wet Vacuum)",
            "Sikat Sofa Lembut",
            "Shampoo Sofa (Low Foam)",
            "Spot Remover Chemical",
            "Blower (Pengering Portable)"
        ],
        link: "service-detail.html?id=sofa",
        imageBefore: "assets/img/services/packages/sofa/img-before.jpg",
        imageAfter: "assets/img/services/packages/sofa/img-after.jpg"
    },
    {
        id: "dapur",
        category: "tambahan",
        title: "Beres.in Dapur",
        subtitle: "Hapus Minyak Lengket",
        icon: "fas fa-fire-burner", 
        price: "200rb",
        unit: "/ paket",
        description: "Detailing area masak dari cipratan minyak menahun.",
        fullDescription: "Membersihkan residu minyak yang menempel di area memasak Anda menggunakan degreaser khusus food-safe. Dapur jadi kesat dan higienis kembali.",
        whatsappMessage: "Halo Admin, dapur saya berminyak banget. Mau pesan paket *Beres.in Dapur*.",
        isPopular: false,
        scope: [
            "Degreasing Kompor & Tombol",
            "Cleaning Cooker Hood",
            "Sikat dinding (Backsplash)",
            "Poles Sink & Kran",
            "Lap Kabinet Luar"
        ],
        tools: [
            "Steam Cleaner (Uap Panas)",
            "Scraper (Kape Plastik)",
            "Sikat Kawat Halus",
            "Cairan Degreaser (Food Safe)",
            "Spons Heavy Duty"
        ],
        link: "service-detail.html?id=dapur",
        imageBefore: "assets/img/services/packages/dapur/img-before.jpg",
        imageAfter: "assets/img/services/packages/dapur/img-after.png"
    },
    {
        id: "kulkas",
        category: "tambahan",
        title: "Beres.in Kulkas",
        subtitle: "Fridge Detox",
        icon: "fas fa-snowflake", 
        price: "75rb",
        unit: "/ unit",
        description: "Sterilisasi kulkas agar makanan tetap segar dan sehat.",
        fullDescription: "Kami mensterilkan kulkas Anda dari bakteri Salmonella & E.coli, membuang bunga es, dan menata ulang isinya agar rapi.",
        whatsappMessage: "Halo, mau pesan layanan *Bersih Kulkas (Fridge Detox)*.",
        isPopular: false,
        scope: [
            "Keluarkan isi kulkas",
            "Sortir makanan expired",
            "Cuci rak & laci",
            "Lap body dalam/luar",
            "Organizing (Penataan)"
        ],
        tools: [
            "Cooler Box (Tempat Sementara)",
            "Cairan Sanitizer (Food Grade)",
            "Lap Kanebo & Microfiber",
            "Sikat Botol Kecil",
            "Penghilang Bau Alami"
        ],
        link: "service-detail.html?id=kulkas",
        imageBefore: "assets/img/services/packages/kulkas/img-before.png",
        imageAfter: "assets/img/services/packages/kulkas/img-after.png"
    },
    {
        id: "kamar",
        category: "tambahan",
        title: "Beres.in Kamar",
        subtitle: "Paket Hemat Kost",
        icon: "fas fa-bed", 
        price: "35rb",
        unit: "/ kamar",
        description: "Versi Lite paket Reguler khusus kamar kost (max 3x4m).",
        fullDescription: "Solusi cepat (max 30 menit) untuk membereskan kekacauan di kamar kost. Syarat: Ukuran kamar maksimal 3x4 meter.",
        whatsappMessage: "Halo kak, saya anak kost mau pesan *Beres.in Kamar* yang 35rb.",
        isPopular: false,
        scope: [
            "Sapu lantai kamar",
            "Pel lantai dengan pewangi",
            "Rapikan sprei / Bedcover",
            "Angkut sampah",
            "Lap meja belajar"
        ],
        tools: [
            "Sapu & Pel Set",
            "Plastik Sampah Hitam",
            "Lap Microfiber",
            "Cairan Pel Wangi",
            "Kemoceng"
        ],
        link: "service-detail.html?id=kamar",
        imageBefore: "assets/img/services/packages/kamar/img-before.jpg",
        imageAfter: "assets/img/services/packages/kamar/img-after.jpg"
    },
    {
        id: "kantor",
        category: "tambahan",
        title: "Beres.in Kantor",
        subtitle: "Office & Commercial",
        icon: "fas fa-building", 
        price: "20rb",
        unit: "/ m²",
        description: "General cleaning untuk area kerja, pantry, dan ruang meeting.",
        fullDescription: "General cleaning area kerja, pantry, dan ruang meeting. Tersedia opsi berlangganan bulanan dengan invoice resmi.",
        whatsappMessage: "Halo, saya dari perusahaan [Nama PT]. Mau tanya untuk cleaning *Kantor/Ruko*.",
        isPopular: false,
        scope: [
            "Vacuum karpet / Pel lantai",
            "Lap meja kerja & kursi",
            "Bersihkan pantry",
            "Bersihkan toilet kantor",
            "Lap kaca partisi"
        ],
        tools: [
            "Vacuum Cleaner Commercial",
            "Trolley Kebersihan",
            "Mop Set Besar",
            "Warning Sign (Lantai Basah)",
            "Chemical Glass & Floor"
        ],
        link: "service-detail.html?id=kantor"
    }
];


/* =========================================
   DATABASE TESTIMONI (Baru)
   ========================================= */
const testimonialsData = [
    {
        name: "Kevin Sanjaya",
        role: "Mahasiswa",
        location: "Jakarta Timur",
        // Review untuk: Beres.in Kamar (Paket Hemat)
        quote: "Sebagai anak kost, paket 35rb itu penyelamat banget! Pulang kampus kamar udah rapi, sprei diganti, sampah dibuang. Worth it parah.",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
        name: "Ibu Lussiana",
        role: "Ibu Rumah Tangga",
        location: "BSD City",
        // Review untuk: Beres.in Premium (Deep Cleaning)
        quote: "Baru pindah ke rumah second yang kotor banget. Panggil tim Beres.in buat Deep Cleaning, hasilnya ajaib. Lantai yang kusam jadi kilap lagi.",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        name: "Pak Hendra",
        role: "Office Manager",
        location: "Jakarta Pusat",
        // Review untuk: Beres.in Kantor (B2B)
        quote: "Kami pakai paket kontrak bulanan untuk kantor. OB kami cuma 1, jadi butuh bantuan Beres.in buat general cleaning tiap Jumat. Karyawan jadi lebih nyaman.",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        name: "Clarissa Putri",
        role: "Cat Lover",
        location: "Bekasi",
        // Review untuk: Beres.in Elite (Hydro Vacuum)
        quote: "Punya 3 kucing bikin sofa penuh bulu & debu. Pake layanan Hydro Vacuum, air kotornya item banget! Sekarang sofa aman buat tiduran lagi.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Budi Santoso",
        role: "Wiraswasta",
        location: "Tangerang",
        // Review untuk: Beres.in Toilet (Ala Carte)
        quote: "Udah nyerah sikat kerak kuning di WC lantai 2. Iseng pesen layanan Toilet, eh beneran rontok keraknya. Kayak kamar mandi hotel jadinya.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Siti Aminah",
        role: "Pemilik Katering",
        location: "Jakarta Selatan",
        // Review untuk: Beres.in Dapur (Ala Carte)
        quote: "Dapur katering pasti berminyak parah. Tim Beres.in bersihin cooker hood sama dinding backsplash sampe kesat lagi. Nggak lengket sama sekali.",
        avatar: "https://randomuser.me/api/portraits/women/90.jpg"
    },
    {
        name: "Dimas Anggara",
        role: "Karyawan Swasta",
        location: "Depok",
        // Review untuk: Beres.in Sofa (Wet Clean)
        quote: "Sofa ketumpahan kopi susu dan udah bau apek. Dicuci basah sama mereka, nodanya hilang total dan wanginya enak. Keringnya juga cepet.",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
        name: "Dr. Rina",
        role: "Dokter Anak",
        location: "Jakarta Barat",
        // Review untuk: Beres.in Kulkas (Health)
        quote: "Kulkas itu sarang kuman kalau jarang dibersihkan. Layanan Fridge Detox-nya sangat detail, semua rak dicuci dan disterilkan. Sangat recommended.",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
        name: "Dinda Permata",
        role: "Ibu Baru",
        location: "Jakarta Selatan",
        // Review untuk: Beres.in Reguler
        quote: "Dulu weekend habis buat bersih-bersih. Sekarang langganan paket Reguler tiap Sabtu, jadi bisa fokus main sama bayi. Rumah wangi, hati senang.",
        avatar: "assets/img/hero/testimony.png" 
    }
];

