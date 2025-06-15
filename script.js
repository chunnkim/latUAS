function beliProduk(namaProduk) {
  alert("Anda memilih untuk membeli: " + namaProduk);
}
function updateJam() {
  const now = new Date();
  const jam = now.getHours().toString().padStart(2, '0');
  const menit = now.getMinutes().toString().padStart(2, '0');
  const detik = now.getSeconds().toString().padStart(2, '0');
  const waktu = `${jam}:${menit}:${detik}`;
  
  document.getElementById("jam-digital").textContent = waktu;

  // Greeting otomatis
  let greeting = "";
  const hour = now.getHours();

  if (hour >= 5 && hour < 12) {
    greeting = "Selamat Pagi 👋";
  } else if (hour >= 12 && hour < 16) {
    greeting = "Selamat Siang ☀️";
  } else if (hour >= 16 && hour < 19) {
    greeting = "Selamat Sore 🌇";
  } else {
    greeting = "Selamat Malam 🌙";
  }

  document.getElementById("greeting").textContent = greeting;

  // Tanggal & Hari
  const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const bulan = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const hariIni = hari[now.getDay()];
  const tanggal = now.getDate();
  const namaBulan = bulan[now.getMonth()];
  const tahun = now.getFullYear();

  const tanggalLengkap = `${hariIni}, ${tanggal} ${namaBulan} ${tahun}`;
  document.getElementById("tanggal-hari").textContent = tanggalLengkap;
}

// Update setiap detik
setInterval(updateJam, 1000);

// Jalankan saat halaman pertama kali dibuka
updateJam();

document.getElementById("form-kontak").addEventListener("submit", function(e) {
  e.preventDefault(); // cegah form kirim langsung

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();
  const errorBox = document.getElementById("form-error");

  // Reset error box
  errorBox.textContent = "";

  // Validasi kosong
  if (!nama || !email || !pesan) {
    errorBox.textContent = "Semua kolom wajib diisi.";
    return;
  }

  // Validasi nama (minimal 3 huruf)
  if (nama.length < 3) {
    errorBox.textContent = "Nama minimal 3 karakter.";
    return;
  }

  // Validasi email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorBox.textContent = "Email tidak valid.";
    return;
  }

  // Validasi pesan (minimal 10 huruf)
  if (pesan.length < 10) {
    errorBox.textContent = "Pesan terlalu singkat.";
    return;
  }

  // Jika semua valid
  alert(`Pesan berhasil dikirim yaa 😊✅, ${nama}!`);

  this.reset(); // kosongkan form

});