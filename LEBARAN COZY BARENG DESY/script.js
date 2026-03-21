// --- Data ---
const noRekening = "1780007313790";

const pesanKetupat = [
    "Kamu dapat... Doa agar enteng jodoh! Amin!",
    "Kamu dapat... Tips jitu biar nggak ditanya 'Kapan nikah?",
    "Kamu dapat... Voucher pelukan virtual 🤗 Minal Aidin!",
    "Kamu dapat... Doa agar terhindar dari bocil pemalak !",
    "Kamu dapat... Pahala sabar menghadapi pertanyaan kerabat.",
    "Kamu Dapat... Pahala berlipat ganda karena sudah mampir di website ini!"
];

// --- DOM Elements ---
const bgm = document.getElementById('bgm');
const btnMusic = document.getElementById('btn-music');
const musicStatus = document.getElementById('music-status');
const loadingOverlay = document.getElementById('loading-overlay');
const gameDialog = document.getElementById('game-dialog');
const dialogText = document.getElementById('dialog-text');
const qrisContainer = document.getElementById('qris-container');

// --- 1. Loading & Music Logic ---
window.addEventListener('load', () => {
    // Hilangkan loading setelah semua load
    setTimeout(() => {
        loadingOverlay.style.display = 'none';
    }, 2000); // Beri jeda sedikit biar kerasa retro
});

let isPlaying = false;
btnMusic.addEventListener('click', () => {
    if (!isPlaying) {
        bgm.play().catch(e => console.log("User must interact first"));
        musicStatus.innerText = "🔊";
        isPlaying = true;
    } else {
        bgm.pause();
        musicStatus.innerText = "🔈";
        isPlaying = false;
    }
});

// --- 2. Mini Game Logic --- c     
function playClickSound() {
    const clickSound = document.getElementById('clickSound');
    clickSound.currentTime = 0;
    clickSound.play().catch(e => console.log('Sound play failed:', e));
}

function bukaKetupat(element, id) {
    // Efek sederhana: sembunyikan ketupat yang diklik
    element.style.visibility = 'hidden';
    
    // Ambil pesan acak
    const randomPesan = pesanKetupat[Math.floor(Math.random() * pesanKetupat.length)];
    
    // Tampilkan dialog
    dialogText.innerText = `Ketupat ${id} berisi: \n\n"${randomPesan}"`;
    gameDialog.classList.remove('hidden');
}

function tutupDialog() {
    gameDialog.classList.add('hidden');
}

// --- 3. THR Logic ---
function showQris() {
    qrisContainer.classList.remove('hidden');
}

function hideQris() {
    qrisContainer.classList.add('hidden');
}

function copyRekening() {
    navigator.clipboard.writeText(noRekening).then(() => {
        alert("Nomor rekening berhasil disalin!");
    });
}

function kirimDoa() {
    // Interaksi lucu: Karakter di diorama bisa berubah sprite (jika ada gambarnya)
    alert("Terima kasih banyak doanya! Semoga kembali ke kamu berlipat ganda ❤️");
}
