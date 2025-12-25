/* =========================================
   DATABASE LAYANAN (data.js) - FINAL
   ========================================= */

const servicesData = [
    // --- PAKET UTAMA (Muncul di Home & Services) ---
    {
        id: "reguler",
        category: "utama",
        title: "Beres.in Reguler",  
        subtitle: "Perawatan Harian",
        icon: "fas fa-broom", 
        price: "50rb",
        unit: "/ jam",
        description: "Sapu, pel, dan lap debu ringan. Solusi hemat untuk rumah yang selalu segar setiap hari.",
        isPopular: false,
        link: "service-detail.html?id=reguler"
    },
    {
        id: "premium",
        category: "utama",
        title: "Beres.in Premium",  
        subtitle: "Bersih Tuntas",
        icon: "fas fa-pump-soap",
        price: "25rb",
        unit: "/ m²",
        description: "Pembersihan menyeluruh kerak kamar mandi, dapur berminyak, dan sudut sulit dijangkau.",
        isPopular: true,
        badgeText: "Paling Laris (Deep Cleaning)",
        link: "service-detail.html?id=premium"
    },
    {
        id: "elite",
        category: "utama",
        title: "Beres.in Elite",    
        subtitle: "Basmi Tungau",
        icon: "fas fa-virus-slash",
        price: "80rb",
        unit: "/ item",
        description: "Sedot tungau (hydro vacuum) & fogging disinfektan untuk kesehatan keluarga tercinta.",
        isPopular: false,
        link: "service-detail.html?id=elite"
    },

    // --- PAKET TAMBAHAN (Hanya muncul di Halaman Services) ---
    {
        id: "wc",
        category: "tambahan",
        title: "Beres.in WC",
        subtitle: "Kamar Mandi Kinclong",
        icon: "fas fa-toilet",
        price: "150rb",
        unit: "/ unit",
        description: "Fokus membersihkan kerak membandel di lantai, dinding, dan sanitari kamar mandi.",
        isPopular: false,
        link: "service-detail.html?id=wc"
    },
    {
        id: "dapur",
        category: "tambahan",
        title: "Beres.in Dapur",
        subtitle: "Kitchen Set Bersih",
        icon: "fas fa-utensils",
        price: "200rb",
        unit: "/ paket",
        description: "Membersihkan area kompor, sink, dan kabinet luar dari noda minyak membandel.",
        isPopular: false,
        link: "service-detail.html?id=dapur"
    },
    {
        id: "kost",
        category: "tambahan",
        title: "Beres.in Kost",
        subtitle: "Paket Anak Kost",
        icon: "fas fa-bed",
        price: "35rb",
        unit: "/ jam",
        description: "Paket hemat khusus kamar kost (max 3x4m). Sapu, pel, rapihkan kasur, dan buang sampah.",
        isPopular: false,
        link: "service-detail.html?id=kost"
    }
];


/* =========================================
   DATABASE TESTIMONI (Baru)
   ========================================= */
const testimonialsData = [
    {
        name: "Dinda Permata",
        role: "Ibu Rumah Tangga",
        location: "Jakarta Selatan",
        quote: "Dulu weekend habis buat bersih-bersih. Sekarang weekend isinya jalan-jalan sama anak. Pulang-pulang rumah udah wangi. Makasih Beres.in!",
        avatar: "assets/img/hero/testimony.png" // Pastikan gambar ini ada
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

