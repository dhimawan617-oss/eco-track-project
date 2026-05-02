//Memanggil Semua Elemen HTML
const hitung = document.querySelector('#Hitung');
const jarak = document.querySelector('#Jarak');
const kendaraan = document.querySelector('#Kendaraan');
const ac = document.querySelector('#AC');
const laptop = document.querySelector('#LAPTOP');
const hasilemisi = document.querySelector('#HasilEmisi');
const reset = document.querySelector('#Reset');

function hitungemisi(){
    const nilaijarak = Number(jarak.value);
    const pilihkendaraan = kendaraan.value;
    const jamAC = Number(ac.value);
    const jamLAPTOP = Number(laptop.value);

    //announcement
    if (jarak.value === "" || ac.value === "" || laptop.value === "") {
        hasilemisi.innerHTML = "<p>Harap Isi Semua Data Dengan Benar!!</p>";
        return;
    }

    //uji coba 
    console.log(nilaijarak);
    console.log(pilihkendaraan);
    console.log(jamAC);
    console.log(jamLAPTOP);

    let emisikendaraan = 0;
    let emisiAC = 0;
    let emisiLAPTOP = 0;
    let total = 0;
    let terbesar = "";
    let warnahasil = "";

    //perhitungan co2
    if (pilihkendaraan == "Mobil") {
        emisikendaraan = nilaijarak * 0.2;
    }

    else {
        emisikendaraan = nilaijarak * 0.1;
    }

    emisiAC = jamAC * 0.5;
    emisiLAPTOP = jamLAPTOP * 0.05;

    //uji coba 
    console.log("Hasil Kendaraan: ", emisikendaraan);
    console.log("Hasil AC: ", emisiAC);
    console.log("Hasil Laptop: ", emisiLAPTOP);

    //perhitungan akhir
    total = emisikendaraan + emisiAC + emisiLAPTOP;

    //uji coba total
    console.log("Total: ", total);

    //penentuan warna saat di klik
    if (total >= 0 && total < 2) {
        warnahasil = "Penggunaan Anda Masih Aman ✅ 🟢 😊";
        document.body.style.backgroundColor = '#52b788';
    }
    else if (total >= 2 && total <= 5) {
        warnahasil = "Butuh Perhatian Untuk Penggunaan Anda⚠️ 🟡 😬";
        document.body.style.backgroundColor = '#f4a261';
    }

    else {
        warnahasil = "Sangat Berbahaya, Perlu Tindakan Segera🚨 🔴 😰";
        document.body.style.backgroundColor = '#e74c3c';
    }


    //penentuan mana penggunaan yang terbesar
    if (emisikendaraan > emisiAC && emisikendaraan > emisiLAPTOP) {
        terbesar = "Penggunaan Emisi Terbesar berada Di Kendaraan🚗 🏍️";
    }

    else if (emisiAC > emisikendaraan && emisiAC > emisiLAPTOP) {
        terbesar = "Penggunaan Emisi Terbesar berada Di AC❄️ 🌬️";
    }

    else {
        terbesar = "Penggunaan Emisi Terbesar berada Di Laptop💻";
    }

    //uji coba terbesar
    console.log("EMISI: ", terbesar);

    //untuk memunculkan di htmlnya
    hasilemisi.innerHTML = `
    <p><strong>${total}</strong>Kg CO2/Hari</p> 
    <p>${terbesar}</p>
    <p>${warnahasil}</p>`;

    return total;
}

//buat mengatur Elemen yang Kita Inginkan
hitung.addEventListener('click', function(){
    const total = hitungemisi();
    if(!total) return;

    if (total >= 0 && total < 2) {
        document.body.style.backgroundColor = '#2d6a4f';
    }
    else if (total >= 2 && total <= 5) {
        document.body.style.backgroundColor = '#e07b39';
    }

    else {
        document.body.style.backgroundColor = '#d33131';
    }
});

jarak.addEventListener('input', hitungemisi);
kendaraan.addEventListener('change', hitungemisi);
ac.addEventListener('input', hitungemisi);
laptop.addEventListener('input', hitungemisi);


//untuk mereset
reset.addEventListener('click', function () {
    if (confirm("Yakin Data Anda Ingin Di Reset ?")) {
        jarak.value = "";
        kendaraan.value = "Mobil";
        ac.value = "";
        laptop.value = ""
        document.body.style.backgroundColor = "";

        hasilemisi.innerHTML = "";
    }
});
