const storedUsername = localStorage.getItem("newNameValue");


if (storedUsername) {
    const mainContainer = document.getElementById("nav-btn-div");
    
    const greetingMessage = document.createElement('p');
    greetingMessage.textContent = `Hello, ${storedUsername}!`;

    const signupButton = document.getElementById("signup-btn");
    signupButton.remove();

    mainContainer.appendChild(greetingMessage);

    greetingMessage.style.color = "white"
    greetingMessage.style.fontSize = "25px"
}