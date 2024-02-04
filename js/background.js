const images = ['bg-001.jpg', 'bg-002.jpg', 'bg-003.jpg', 'bg-004.jpg', 'bg-005.jpg'];

const todayImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('./img/${todayImage}')`;