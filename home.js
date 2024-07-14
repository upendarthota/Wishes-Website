function generateConfetti() {
    const wishesContent = document.getElementById('wishesContent');
    
    confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
    });
    
    setTimeout(() => {
    wishesContent.style.opacity = '1';
    wishesContent.style.transform = 'translateY(0)';
    }, 500);
    }
    
    function generateWishes() {
    const name = document.getElementById('name').value;
    const wishesOutput = document.getElementById('wishesOutput');
    const wishesForm = document.getElementById('wishesForm');
    
    wishesOutput.innerHTML = `
    <p>Dear Indian,</p>
    <p>Wishing you a Happy Republic Day! 🇮🇳</p>
    <p>May the tricolor always fly high. Jai Hind!</p>
    <p>- From ${name}</p>
    `;
    
    wishesForm.style.display = 'none';
    
    generateConfetti();
    
    const urlWithQuery = window.location.href.split('?')[0] + `?name=${encodeURIComponent(name)}`;
    window.history.replaceState({}, document.title, urlWithQuery);
    }
    
    window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get('name');
    
    if (nameParam) {
    document.getElementById('name').value = decodeURIComponent(nameParam);
    generateWishes();
    }
    };