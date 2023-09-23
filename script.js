const container = document.querySelector('.container');
const boxElement = document.querySelector('.box');
let alphaX, alphaY, betaX, betaY, gammaX, gammaY, angle;
container.addEventListener('mousemove', (e) => {
    angle= Math.atan2(e.offsetY - alphaY, e.offsetX - alphaX) * 180 / Math.PI;
    e.preventDefault();
    alphaX = e.offsetX;
    alphaY = e.offsetY;
    boxElement.classList.add('move');
    boxElement.style.transform = `translate(${alphaX}px, ${alphaY}px) rotate(${angle/10}deg)`;
});
container.addEventListener('mouseleave', (e) => {
    boxElement.classList.remove('move');
});