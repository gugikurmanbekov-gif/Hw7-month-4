const lamp = document.getElementById('lamp');
const statusMessage = document.getElementById('status-message');

const colors = ['red', 'gold', 'green'];
let currentIndex = 0;

const intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % colors.length;
    lamp.style.backgroundColor = colors[currentIndex];
}, 2000);

setTimeout(() => {
    clearInterval(intervalId);
    lamp.parentElement.style.display = 'none';
    statusMessage.textContent = 'Светофор сломался 🔧';
    statusMessage.style.color = 'red'; 
}, 10000);
