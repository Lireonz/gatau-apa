//function bukaHalaman() {
//    const halamanAwal = document.getElementById("halamanAwal");
//    const halamanKedua = document.getElementById("halamanKedua");
//
//    halamanAwal.classList.add("hidden");
//    halamanKedua.classList.add("active");
//}

document.addEventListener("DOMContentLoaded", function() {

    const tombol = document.getElementById("btnBuka");
    const halamanAwal = document.getElementById("halamanAwal");
    const halamanKedua = document.getElementById("halamanKedua");

    tombol.addEventListener("click", function() {

        tombol.disabled = true;

        // Mulai fade-out halaman pertama
        halamanAwal.classList.add("fade-out");

        setTimeout(function() {

            halamanAwal.classList.add("hidden");

            // Mulai fade background kedua
            document.body.classList.add("bg-kedua");

            // Mulai fade-in halaman kedua
            halamanKedua.classList.add("active");
            halamanKedua.classList.add("fade-in");

        }, 1500);

    });

});