function login() {
    user_1 = document.getElementById("username").value;
    localStorage.setItem("user_1", user_1);
    window.location="Kwitter_page.html";
}