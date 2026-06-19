:root {
    --green: #2E7D32;
    --dark-green: #1B5E20;
    --brown: #8D5524;
    --light-brown: #A67C52;
    --beige: #F5EDE1;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f8f5f0;
}

.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(46, 125, 50, 0.95);
    z-index: 1000;
    padding: 1rem 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s;
}

.logo {
    font-size: 1.9rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
}

.nav-links {
    display: flex;
    gap: 2.2rem;
    list-style: none;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #ffeb3b;
}

header {
    background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), 
                url('https://picsum.photos/id/1015/1920/1080') center/cover no-repeat;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
}

.hero-content h1 {
    font-size: 4.2rem;
    margin-bottom: 1rem;
    text-shadow: 0 4px 15px rgba(0,0,0,0.7);
}

.hero-content p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

.btn {
    background: var(--brown);
    color: white;
    padding: 15px 35px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.15rem;
    transition: all 0.4s;
}

.btn:hover {
    background: #6d3f1a;
    transform: translateY(-6px);
    box-shadow: 0 12px 25px rgba(0,0,0,0.25);
}

section {
    padding: 110px 8%;
}

.section-title {
    text-align: center;
    font-size: 2.9rem;
    margin-bottom: 3.5rem;
    color: var(--dark-green);
}

.section-title:after {
    content: '';
    display: block;
    width: 90px;
    height: 5px;
    background: var(--brown);
    margin: 18px auto;
    border-radius: 3px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: 2.5rem;
}

.card {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.4s;
}

.card:hover {
    transform: translateY(-15px);
}

.card img {
    width: 100%;
    height: 260px;
    object-fit: cover;
}

.card-content {
    padding: 1.8rem;
}

.card h3 {
    color: var(--dark-green);
    margin-bottom: 1rem;
    font-size: 1.65rem;
}

.stats {
    background: linear-gradient(135deg, var(--green), var(--dark-green));
    color: white;
    padding: 90px 8%;
    text-align: center;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 3rem;
}

.stat-item h2 {
    font-size: 3.8rem;
    margin-bottom: 8px;
}

.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}

.gallery img {
    width: 100%;
    height: 320px;
    object-fit: cover;
    border-radius: 12px;
    transition: all 0.4s;
}

.gallery img:hover {
    transform: scale(1.06);
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
}

footer {
    background: var(--dark-green);
    color: white;
    padding: 4rem 8% 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
}

.quote {
    font-style: italic;
    text-align: center;
    margin-top: 1.5rem;
    padding: 1.5rem;
    background: #f5f0e6;
    border-radius: 12px;
    border-left: 6px solid var(--brown);
}

3. script.js
JavaScript// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 80) {
        navbar.style.background = 'rgba(27, 94, 32, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.style.background = 'rgba(46, 125, 50, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Quotes
const quotes = [
    { text: "A terra não é só para plantar, é para viver com dignidade.", author: "— Dona Maria, Agricultora Familiar" },
    { text: "Cada semente plantada com respeito gera frutos para o futuro.", author: "— João, Produtor de Café" },
    { text: "O agro sustentável não é uma opção, é a única forma de continuar existindo.", author: "— Eng. Luana Silva" }
];

let currentQuote = 0;
const quoteElement = document.getElementById('quote');

function changeQuote() {
    currentQuote = (currentQuote + 1) % quotes.length;
    quoteElement.innerHTML = `
        <p>"${quotes[currentQuote].text}"</p>
        <small>${quotes[currentQuote].author}</small>
    `;
}

setInterval(changeQuote, 6500);
changeQuote(); // Inicial

console.log('%c🌱 Site Agro Forte carregado com sucesso!', 'color: #2E7D32; font-size: 16px
