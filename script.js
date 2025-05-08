document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email === "admin@senac.com" && senha === "1234") {
        localStorage.setItem("usuario", "Admin");
        alert("Login bem-sucedido!");
        window.location.href = "dashboard.html";
    } else {
        alert("Email ou senha incorretos!");
    }
});