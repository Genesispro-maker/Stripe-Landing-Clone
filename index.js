//hover colors
let index = 0;

window.setInterval(() => {
    index = (index + 10) % 360;
    document.documentElement.style.setProperty("--hightcolor", `hsl(${index}deg, 80%, 70%)`)
}, 1000)

