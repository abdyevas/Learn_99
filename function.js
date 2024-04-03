const data = [
    {"en": "AR-RAHMAAN", "ar": "ٱلْرَّحْمَـانُ", "means": "The All-Compassionate"},
    {"en": "AR-RAHEEM", "ar": "ٱلْرَّحِيْمُ", "means": "The All-Merciful"},
    {"en": "AL-MALIK", "ar": "ٱلْمَلِكُ", "means": "The King and Owner of Dominion"},
    {"en": "AL-QUDDUS", "ar": "ٱلْقُدُّوسُ", "means": "The Absolutely Pure"},
    {"en": "AS-SALAM", "ar": "ٱلْسَّلَامُ", "means": "The Source of Peace"}
];

function flipCard() {
    var card = document.getElementById('card');
    var frontCard = document.getElementById('front-card');
    var rotation = getComputedStyle(card).getPropertyValue('transform');
    var frontText = document.getElementById('front-text');

    if (rotation === 'none' || rotation === 'matrix(1, 0, 0, 1, 0, 0)') {
        card.style.transform = 'rotateX(180deg)';
    } else {
        card.style.transform = 'rotateX(0deg)';
    }

    setTimeout(function() {
        if (rotation === 'none' || rotation === 'matrix(1, 0, 0, 1, 0, 0)') {
            frontText.textContent = frontText.getAttribute('data-translation');
            frontText.style.transform = 'scaleY(-1)';
            frontText.style.fontSize = '40px';
            frontCard.classList.add('flipped');
        } else {
            frontText.textContent = frontText.getAttribute('data-name');
            frontText.style.transform = 'none';
            frontText.style.fontSize = '25px';
            frontCard.classList.remove('flipped');
        }
    }, 100);
}

document.addEventListener("DOMContentLoaded", function() {
    const randomInx = Math.floor(Math.random() * data.length);
    const randomItem = data[randomInx];
    const frontText = document.getElementById('front-text');
    
    frontText.textContent = randomItem.en;
    frontText.setAttribute('data-translation', randomItem.ar);
    frontText.setAttribute('data-name', randomItem.en);

})