document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById("changecolorbutton");
    button.addEventListener("click", function(){
        const colors = ["#4a235a", "#641e16", "#6e2c00", "#212121"]
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        document.body.style.backgroundColor = randomColor;
    })
})