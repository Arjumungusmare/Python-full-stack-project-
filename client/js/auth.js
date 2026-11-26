
import { loginUser, registerUser } from "./api.js";

const loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const result = await loginUser({
                email: email,
                password: password
            });

            if (result.access_token) {
                localStorage.setItem("token", result.access_token);
                alert("Login successful!");
                window.location.href = "../dashboard.html";
            } else {
                alert(result.detail || "Login failed!");
            }
        }
        catch (error) {
            console.log(error);
            alert("Backend is not running or connection failed!");
        }
    });
}


const registerForm = document.getElementById("register-form");

if (registerForm) {
    registerForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm").value;

        if (password !== confirmPassword) {
            alert("Password and Confirm Password do not match!");
            return;
        }

        try {
            const result = await registerUser({
                name: name,
                email: email,
                password: password,
                confirm_password: confirmPassword
            });

            if (result.detail) {
                alert(result.detail);
                return;
            }

            alert(result.message || "Registration successful!");
            window.location.href = "login.html";
        }
        catch (error) {
            console.log(error);
            alert("Backend is not running or registration failed!");
        }
    });
}
