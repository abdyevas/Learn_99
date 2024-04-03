const data = [ { "en": "AR-RAHMAAN", "ar": "ٱلْرَّحْمَـانُ", "meaning": "The All-Compassionate" },
    { "en": "AR-RAHEEM", "ar": "ٱلْرَّحِيْمُ", "meaning": "The All-Merciful" },
    { "en": "AL-MALIK", "ar": "ٱلْمَلِكُ", "meaning": "The King and Owner of Dominion" },
    { "en": "AL-QUDDUS", "ar": "ٱلْقُدُّوسُ", "meaning": "The Absolutely Pure" },
    { "en": "AS-SALAM", "ar": "ٱلْسَّلَامُ", "meaning": "The Source of Peace" },
    { "en": "AL-MU'MIN", "ar": "لْمُؤْمِنُ", "meaning": "The Inspirer of Faith" },
    { "en": "AL-MUHAYMIN", "ar": "ٱلْمُهَيْمِنُ", "meaning": "The Guardian, The Witness" },
    { "en": "AL-AZEEZ", "ar": "ٱلْعَزِيزُ", "meaning": "The All Mighty" },
    { "en": "AL-JABBAR", "ar": "ٱلْجَبَّارُ", "meaning": "The Compeller, The Restorer" },
    { "en": "AL-MUTAKABBIR", "ar": "ٱلْمُتَكَبِّرُ", "meaning": "The Supreme, The Majestic" },
    { "en": "AL-KHAALIQ", "ar": "ٱلْخَالِقُ", "meaning": "The Creator, The Maker" },
    { "en": "AL-BAARI'", "ar": "ٱلْبَارِئُ", "meaning": "The Originator" },
    { "en": "AL-MUSAWWIR", "ar": "ٱلْمُصَوِّرُ", "meaning": "The Fashioner" },
    { "en": "AL-GHAFFAR", "ar": "ٱلْغَفَّارُ", "meaning": "The All- and Oft-Forgiving" },
    { "en": "AL-QAHHAR", "ar": "ٱلْقَهَّارُ", "meaning": "The Subduer, The Ever-Dominating" },
    { "en": "AL-WAHHAAB", "ar": "ٱلْوَهَّابُ", "meaning": "The Giver of Gifts" },
    { "en": "AR-RAZZAAQ", "ar": "ٱلْرَّزَّاقُ", "meaning": "The Provider" },
    { "en": "AL-FATTAAH", "ar": "ٱلْفَتَّاحُ", "meaning": "The Opener, The Judge" },
    { "en": "AL-'ALEEM", "ar": "ٱلْعَلِيمُ", "meaning": "The All-Knowing, The Omniscient" },
    { "en": "AL-QAABID", "ar": "ٱلْقَابِضُ", "meaning": "The Withholder. The Constructor" },
    { "en": "AL-BAASIT", "ar": "ٱلْبَاسِطُ", "meaning": "The Extender. The Reliever" },
    { "en": "AL-KHAAFIDH", "ar": "ٱلْخَافِضُ", "meaning": "The Reducer, The Abaser" },
    { "en": "AR-RAAFI'", "ar": "ٱلْرَّافِعُ", "meaning": "The Exalter, The Elevator" },
    { "en": "AL-MU'IZZ", "ar": "ٱلْمُعِزُّ", "meaning": "The Honourer, The Bestower" },
    { "en": "AL-MUZIL", "ar": "ٱلْمُذِلُّ", "meaning": "The Dishonourer, The Humiliator" },
    { "en": "AS-SAMEE'", "ar": "ٱلْسَّمِيعُ", "meaning": "The All-Hearing" },
    { "en": "AL-BASEER", "ar": "ٱلْبَصِيرُ", "meaning": "The All-Seeing" },
    { "en": "AL-HAKAM", "ar": "ٱلْحَكَمُ", "meaning": "The Judge, The Giver of Justice" },
    { "en": "AL-'ADL", "ar": "ٱلْعَدْلُ", "meaning": "The Utterly Just" },
    { "en": "AL-LATEEF", "ar": "ٱلْلَّطِيفُ", "meaning": "The Subtle One, The Most Gentle" }
];

let optionDisabled = false;
let correctOption = null;
let started = false;
let currentIndex = 0;
var correctCount = 0;

document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
    const buttonElement = document.getElementById('btn');

    buttonElement.addEventListener('click', () => {

        if (started) {
            buttonElement.textContent = 'Next';
        }

        if (currentIndex === data.length) {
            summaryMessage = document.getElementById('final-result');
            summaryMessage.textContent = `${correctCount}/${data.length} correct!`;
            document.getElementById('btn').textContent = 'The End';
            document.getElementById('btn').disabled = true;
            disableOptions();

            return;
        }
        currentIndex++;
    });

}

function showNextCard() {
    optionDisabled = false;
    correctOption = null;
    started = true;

    if (currentIndex === data.length) {
        return;
    }

    const randomIndex = Math.floor(Math.random() * data.length);
    const randomItem = data[randomIndex];

    if (randomItem.displayed) {
        showNextCard();
        return;
    }

    randomItem.displayed = true;

    const currentCard = data[randomIndex];


    const frontText = document.getElementById('front-text');
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    frontText.textContent = currentCard.en;
    frontText.setAttribute('data-translation', currentCard.ar);
    frontText.setAttribute('data-name', currentCard.en);

    const incorrectOptions = [...data];
    incorrectOptions.splice(randomIndex, 1);
    const randomIncorrectOptions = shuffleArray(incorrectOptions).slice(0, 3);

    const allOptions = [currentCard].concat(randomIncorrectOptions);
    allOptions.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.textContent = option.meaning;
        optionElement.classList.add('option');
        optionElement.setAttribute('data-correct', option === randomItem ? 'true' : 'false');
        if (option === randomItem) {
            correctOption = optionElement;
        }
        optionElement.onclick = checkOption;
        optionsContainer.appendChild(optionElement);
    });

    shuffleOptions(optionsContainer);
}

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
            if (currentIndex === 0) {
                frontText.textContent = '99 Names';
                frontText.style.transform = 'scaleY(-1)';
                return;
            }
            frontText.textContent = frontText.getAttribute('data-translation');
            frontText.style.transform = 'scaleY(-1)';
            frontText.style.fontSize = '40px';
            frontCard.classList.add('flipped');
        } else {
            if (currentIndex === 0) {
                frontText.textContent = 'Welcome!';
                frontText.style.transform = 'none';
                return;
            }
            frontText.textContent = frontText.getAttribute('data-name');
            frontText.style.transform = 'none';
            frontText.style.fontSize = '25px';
            frontCard.classList.remove('flipped');
        }
    }, 100);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
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
    if (optionDisabled) return;

    const selectedOption = event.target;
    const isCorrect = selectedOption.getAttribute('data-correct') === 'true';
    if (isCorrect) {
        correctOption.style.backgroundColor = '#9edba2';
        correctCount++;
    } else {
        selectedOption.style.backgroundColor = '#e69393';
        correctOption.style.backgroundColor = '#9edba2';
    }
    disableOptions();
}

function disableOptions() {
    optionDisabled = true;
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.onclick = null;
        option.classList.add('disabled');
    });
}