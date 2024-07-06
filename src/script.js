const symbols = ['🍒', '🍋', '🍉', '⭐', '🔔', '7️⃣'];
const spinSound = document.getElementById('spin-sound');
const winSound = document.getElementById('win-sound');

document.getElementById('spin-button').addEventListener('click', spinReels);

function spinReels() {
    // Play the spin sound
    spinSound.play();
    
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const result = document.getElementById('result');

    const symbol1 = symbols[Math.floor(Math.random() * symbols.length)];
    const symbol2 = symbols[Math.floor(Math.random() * symbols.length)];
    const symbol3 = symbols[Math.floor(Math.random() * symbols.length)];

    reel1.textContent = symbol1;
    reel2.textContent = symbol2;
    reel3.textContent = symbol3;

    if (symbol1 === symbol2 && symbol2 === symbol3) {
        result.textContent = 'Jackpot! You win!';
        winSound.play(); // Play the win sound
    } else {
        result.textContent = 'Try again!';
    }
}
