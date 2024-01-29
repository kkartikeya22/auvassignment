const button = document.getElementById("buttonBack");
let c = 0;

button.addEventListener("click", () => {
    const randomColor = getRandomColor();
    
    document.body.style.backgroundColor = randomColor;
    
    c++;
});

function getRandomColor() {
    // Generating a random color code
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
