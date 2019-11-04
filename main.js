const h1 = document.querySelector('h1');

document.body.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const width = innerWidth;
    const height = innerHeight;

    const red = (x / width) * 100;
    const green = (y / height) * 100;
    const blue = (red + green) / 2;

    h1.textContent = x + "," + y;

    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
})