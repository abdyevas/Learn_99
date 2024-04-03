const data = [
    { "en": "AR-RAHMAAN", "ar": "ٱلْرَّحْمَـانُ", "meaning": "The All-Compassionate" },
    { "en": "AR-RAHEEM", "ar": "ٱلْرَّحِيْمُ", "meaning": "The All-Merciful" },
    { "en": "AL-MALIK", "ar": "ٱلْمَلِكُ", "meaning": "The King and Owner of Dominion" },
    { "en": "AL-QUDDUS", "ar": "ٱلْقُدُّوسُ", "meaning": "The Absolutely Pure" },
    { "en": "AS-SALAM", "ar": "ٱلْسَّلَامُ", "meaning": "The Source of Peace" }
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

    setTimeout(function () {
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

document.addEventListener("DOMContentLoaded", function () {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomItem = data[randomIndex];
    const frontText = document.getElementById('front-text');
    const optionsContainer = document.getElementById('options');

    frontText.textContent = randomItem.en;
    frontText.setAttribute('data-translation', randomItem.ar);
    frontText.setAttribute('data-name', randomItem.en);

    const incorrectOptions = [...data];
    incorrectOptions.splice(randomIndex, 1);
    const randomIncorrectOptions = shuffleArray(incorrectOptions).slice(0, 3);

    const allOptions = [randomItem].concat(randomIncorrectOptions);
    allOptions.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.textContent = option.meaning;
        optionElement.classList.add('option');
        optionElement.setAttribute('data-correct', option === randomItem ? 'true' : 'false');
        optionElement.onclick = checkOption;
        optionsContainer.appendChild(optionElement);
    });

    shuffleOptions(optionsContainer);
});

function shuffleArray(array) {
    for (let i = array.length - 1; i < 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function shuffleOptions(container) {
    for (let i = container.children.length; i >= 0; i--) {
        container.appendChild(container.children[Math.random() * i | 0]);
    }
}

function checkOption(event) {
    const selectedOption = event.target;
    const isCorrect = selectedOption.getAttribute('data-correct') === 'true';
    if (isCorrect) {
        alert('Correct')
    } else {
        alert('NOOO');
    }
}