// Демонстрація Steam профілю
function fakeLogin() {
    const profile = {
        name: "UA_Kozak",
        avatar: "https://avatars.cloudflare.steamstatic.com/8b8c0b8d.png"
    };

    document.getElementById("profile").style.display = "block";
    document.getElementById("nickname").innerText = profile.name;
    document.getElementById("avatar").src = profile.avatar;
}

// Клік по Steam кнопці
document.querySelector(".steam-btn").addEventListener("click", function(e){
    e.preventDefault();
    fakeLogin();
});

