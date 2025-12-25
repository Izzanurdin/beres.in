/* =========================================
   DATABASE LAYANAN & TESTIMONI (data.js)
   ========================================= */

// --- BAGIAN 1: DAFTAR LAYANAN ---
const servicesData = [
    // =================================================
    // KATEGORI UTAMA (Muncul di Homepage & Services)
    // =================================================
    {
        id: "reguler",
        category: "utama",
        title: "Beres.in Reguler",
        subtitle: "Perawatan Harian",
        icon: "fas fa-broom", 
        price: "50rb",
        unit: "/ jam",
        description: "Sapu, pel, lap debu, dan merapikan kasur. Solusi hemat & praktis untuk anak kost atau apartemen studio agar tetap nyaman setiap hari.",
        isPopular: false,
        link: "service-detail.html?id=reguler"
    },
    {
        id: "premium",
        category: "utama",
        title: "Beres.in Premium",
        subtitle: "Deep Cleaning",
        icon: "fas fa-pump-soap",
        price: "25rb",
        unit: "/ m²",
        description: "Pembersihan menyeluruh hingga ke kerak kamar mandi, noda minyak dapur, dan sudut tersembunyi. Cocok untuk rumah keluarga atau pindahan.",
        isPopular: true,
        badgeText: "Paling Laris (Garansi Bersih)",
        link: "service-detail.html?id=premium"
    },
    {
        id: "elite",
        category: "utama",
        title: "Beres.in Elite",
        subtitle: "Hydro Vacuum & Health",
        icon: "fas fa-virus-slash",
        price: "80rb",
        unit: "/ item",
        description: "Spesialis sedot tungau & debu halus pada kasur/sofa menggunakan teknologi Hydro Vacuum, plus fogging disinfektan. Aman untuk bayi & alergi.",
        isPopular: false,
        link: "service-detail.html?id=elite"
    },

    // =================================================
    // KATEGORI TAMBAHAN (Ala Carte / Satuan)
    // =================================================
    {
        id: "toilet",
        category: "tambahan",
        title: "Beres.in Toilet",
        subtitle: "Salon Kamar Mandi",
        icon: "fas fa-toilet", 
        price: "150rb",
        unit: "/ unit",
        description: "Spesialis kerak membandel! Mengembalikan kilau kamar mandi Anda, bebas jamur kaca dan noda kekuningan yang sulit hilang.",
        isPopular: true, // Best Seller kategori Ala Carte
        badgeText: "Ampuh Lawan Kerak",
        link: "service-detail.html?id=toilet"
    },
    {
        id: "sofa",
        category: "tambahan",
        title: "Beres.in Sofa",
        subtitle: "Cuci Basah (Wet Clean)",
        icon: "fas fa-couch",
        price: "50rb",
        unit: "/ dudukan",
        description: "Sofa kotor, bernoda, atau bau apek? Kami cuci menggunakan metode ekstraksi vakum. Mengangkat kotoran dari dalam busa. Kering 80%.",
        isPopular: false,
        link: "service-detail.html?id=sofa"
    },
    {
        id: "dapur",
        category: "tambahan",
        title: "Beres.in Dapur",
        subtitle: "Hapus Minyak Lengket",
        icon: "fas fa-fire-burner", 
        price: "200rb",
        unit: "/ paket",
        description: "Detailing area masak dari cipratan minyak menahun. Meliputi kompor, cooker hood, dinding backsplash, dan sink cuci piring.",
        isPopular: false,
        link: "service-detail.html?id=dapur"
    },
    {
        id: "kulkas",
        category: "tambahan",
        title: "Beres.in Kulkas",
        subtitle: "Fridge Detox",
        icon: "fas fa-snowflake", 
        price: "75rb",
        unit: "/ unit",
        description: "Kulkas bau dan berantakan? Kami cuci rak-raknya, buang makanan expired, dan sterilkan agar makanan tetap segar dan sehat.",
        isPopular: false,
        link: "service-detail.html?id=kulkas"
    },
    {
        id: "kamar",
        category: "tambahan",
        title: "Beres.in Kamar",
        subtitle: "Paket Hemat Kost",
        icon: "fas fa-bed", 
        price: "35rb",
        unit: "/ kamar",
        description: "Versi Lite dari paket Reguler khusus kamar kost (max 3x4m). Cukup sapu, pel, rapikan sprei, dan angkut sampah. Murah meriah!",
        isPopular: false,
        link: "service-detail.html?id=kamar"
    },
    {
        id: "kantor",
        category: "tambahan",
        title: "Beres.in Kantor",
        subtitle: "Office & Commercial",
        icon: "fas fa-building", // Ikon Gedung Kantor
        price: "20rb",
        unit: "/ m²",
        description: "Lingkungan kerja bersih = Produktivitas naik. General cleaning untuk area kerja, pantry, dan ruang meeting. Tersedia opsi kontrak bulanan.",
        isPopular: false,
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

