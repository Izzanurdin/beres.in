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
    }
];


/* =========================================
   DATABASE TESTIMONI (Baru)
   ========================================= */
const testimonialsData = [
    {
        name: "Raka Aditya",
        role: "Freelance Designer",
        location: "Depok",
        quote: "Biasanya ragu panggil orang asing ke apartemen, tapi tim Beres.in profesional banget. Datang on-time, kerja gesit, dan sopan. Bakal langganan sih.",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
        name: "Clarissa Putri",
        role: "Cat Lover",
        location: "Bekasi",
        quote: "Punya 3 kucing bikin bulu nempel di mana-mana. Pake layanan Hydro Vacuum-nya Beres.in, sofa sama karpet jadi kayak baru lagi. Aman buat anabul juga!",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
        name: "Pak Hendra",
        role: "Office Manager",
        location: "Jakarta Pusat",
        quote: "Kami coba paket corporate untuk bersih-bersih kantor seminggu sekali. Karyawan jadi lebih nyaman kerjanya. Invoice-nya juga rapi untuk klaim kantor.",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        name: "Ibu Ratna Sari",
        role: "Pensiunan Guru",
        location: "Bogor",
        quote: "Petugasnya anak muda tapi rajin-rajin sekali. Mereka mau bantu geser lemari berat buat bersihin debu tebal di belakangnya. Puas sekali.",
        avatar: "https://randomuser.me/api/portraits/women/90.jpg"
    },
    {
        name: "Kevin Sanjaya",
        role: "Mahasiswa",
        location: "Jakarta Timur",
        quote: "Pas banget buat anak kost yang sibuk skripsi. Harga mahasiswa tapi bersihnya totalitas. Kamar mandi kost gue jadi kinclong parah.",
        avatar: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
        name: "Budi Santoso",
        role: "Karyawan Swasta",
        location: "Tangerang",
        quote: "Pelayanannya sangat detail. Saya pesan paket deep cleaning untuk kamar mandi, keraknya benar-benar hilang total. Recommended!",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg" // Contoh gambar placeholder
    },
    {
        name: "Siti Aminah",
        role: "Pemilik Kost",
        location: "Jakarta Barat",
        quote: "Sangat terbantu untuk bersihin kamar kost yang baru ditinggal penyewa. Cepat, bersih, dan harganya masuk akal.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg" // Contoh gambar placeholder
    }
];

