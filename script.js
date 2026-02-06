// ====== Справжній Steam логін ======
async function loadProfile() {
    try {
        const res = await fetch('/api/profile');
        const data = await res.json();

        if(data.name) {
            document.getElementById("profile").style.display = "block";
            document.getElementById("nickname").innerText = data.name;
            document.getElementById("avatar").src = data.avatar;
        }
    } catch(e) {
        console.error("Не вдалось завантажити профіль:", e);
    }
}

// Клік по кнопці Steam
document.querySelector(".steam-btn").addEventListener("click", function(e){
    e.preventDefault();
    window.location.href = "/auth/steam";
});

// ====== ТОП ГРАВЦІ (демо) ======
const topPlayers = [
    { name: "KOZAK_1", kills: 320 },
    { name: "UA_Sniper", kills: 287 },
    { name: "BANDERA", kills: 250 }
];

const list = document.getElementById("topList");
topPlayers.forEach(player => {
    const li = document.createElement("li");
    li.innerText = player.name + " — " + player.kills + " kills";
    list.appendChild(li);
});

// ====== СТАТУС СЕРВЕРА (демо) ======
function checkServer() {
    const status = document.getElementById("serverStatus");
    setTimeout(() => {
        status.innerHTML = "Онлайн 🟢";
        status.style.color = "lime";
    }, 2000);
}

checkServer();

// ====== Після завантаження сторінки отримати профіль ======
window.onload = loadProfile;
