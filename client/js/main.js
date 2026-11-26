const logoutButton = document.getElementById("logout");

if (logoutButton) {
    logoutButton.addEventListener("click", function() {
        localStorage.removeItem("token");

        window.location.href = "login.html";
    });
}

console.log("JavaScript is working!");