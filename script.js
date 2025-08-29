function openNamePopup() {
  document.getElementById("namePopup").style.display = "block";
}

function showBirthdayWish() {
  const name = document.getElementById("username").value;
  if (!name) {
    alert("Please enter your name 😊");
    return;
  }
  document.getElementById("namePopup").style.display = "none";
  document.getElementById("wishPopup").style.display = "block";
  document.getElementById("birthdayTitle").innerText = `🎉 Happy Birthday, ${name}! 🎉`;
}

function showEmojiOptions() {
  document.getElementById("wishPopup").style.display = "none";
  document.getElementById("emojiPopup").style.display = "block";
}

function showQuote(icon) {
  const quotes = {
    "🎁": "You are a gift to the world. Shine always!",
    "🎂": "Wishing you layers of joy like your favorite cake!",
    "❤️": "Your heart makes everything better. Happy Birthday!",
    "😊": "May your smile never fade. You're amazing!"
  };
  document.getElementById("quoteBox").innerText = quotes[icon];
}

function showFinalStep() {
  const name = document.getElementById("username").value;
  document.getElementById("emojiPopup").style.display = "none";
  document.getElementById("celebratePopup").style.display = "block";
  document.getElementById("celebrateText").innerText = `${name},`;
}

function finalSurprise() {
  document.getElementById("celebratePopup").style.display = "none";
  document.getElementById("finalPopup").style.display = "block";
}

function showImages() {
  document.getElementById("finalPopup").style.display = "none";
  document.getElementById("gallery").style.display = "block";
}

// 🎆 Fireworks (simple canvas effect)
function startFireworks() {
  const fireworks = document.createElement("canvas");
  fireworks.classList.add("fireworks");
  document.body.appendChild(fireworks);

  const ctx = fireworks.getContext("2d");
  fireworks.width = window.innerWidth;
  fireworks.height = window.innerHeight;

  let particles = [];

  function createParticle() {
    const x = Math.random() * fireworks.width;
    const y = Math.random() * fireworks.height / 2;
    const size = Math.random() * 4 + 2;
    const speedX = (Math.random() - 0.5) * 4;
    const speedY = Math.random() * -3 - 2;
    const color = `hsl(${Math.random() * 360}, 100%, 60%)`;
    particles.push({ x, y, size, speedX, speedY, color });
  }

  function animate() {
    ctx.clearRect(0, 0, fireworks.width, fireworks.height);
    particles.forEach((p, i) => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.size *= 0.96;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      if (p.size < 0.5) particles.splice(i, 1);
    });
    requestAnimationFrame(animate);
  }

  setInterval(createParticle, 200);
  animate();
}

// 🎉 Confetti burst
function launchConfetti() {
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
  }
}

// 🖼️ Fullscreen Slideshow
function showImages() {
  document.getElementById("finalPopup").style.display = "none";

  const slideshow = document.createElement("div");
  slideshow.classList.add("slideshow");
  document.body.appendChild(slideshow);

  const images = [
    "images/pc1.jpg",
    "images/pc2.jpg",
    "images/pc3.jpg",
    "images/pc4.jpg",
    "images/pc5.jpg",
    "images/pc6.jpg"
  ];

  const quotes = [
    "💖 Every moment with you is a gift I treasure forever.",
    "🎂 Just go with your own flow and hope you still remember our happy days too.",
    "🌹 Life is beautiful because we are still know each others.",
    "✨ Once upon a time when our story ended and entering new chapter of our life. But still i remember every moment we spent together.",
    "❤️ Once Again Happy Birthday, Please keep smiling and shining.🎂"
  ];

  let index = 0;

  // Create images
  const imgElements = images.map(src => {
    const img = document.createElement("img");
    img.src = src;
    slideshow.appendChild(img);
    return img;
  });

  // Create quote element
  const quoteElement = document.createElement("div");
  quoteElement.classList.add("slideshow-quote");
  slideshow.appendChild(quoteElement);

  function showSlide(i) {
    imgElements.forEach((img, idx) => img.classList.toggle("active", idx === i));
    quoteElement.classList.remove("active");
    setTimeout(() => {
      quoteElement.textContent = quotes[i % quotes.length];
      quoteElement.classList.add("active");
    }, 500);
  }

  showSlide(index);

  setInterval(() => {
    index = (index + 1) % images.length;
    showSlide(index);
  }, 4000);

  // start fireworks & confetti with slideshow
  startFireworks();
  launchConfetti();
}

