// ====== ФЕЙК STEAM LOGIN ======
function fakeLogin() {
    const profile = {
        name: "UA_Kozak",
        avatar: "https://avatars.cloudflare.steamstatic.com/8b8c0b8d.png"
    };

    document.getElementById("profile").style.display = "block";
    document.getElementById("nickname").innerText = profile.name;
    document.getElementById("avatar").src = profile.avatar;
}

// ====== ТОП ГРАВЦІ ======
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

// ====== СТАТУС СЕРВЕРА ======
function checkServer() {
    const status = document.getElementById("serverStatus");

    setTimeout(() => {
        status.innerHTML = "Онлайн 🟢";
        status.style.color = "lime";
    }, 2000);
}

checkServer();
