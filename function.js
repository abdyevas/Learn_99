const dataFile = 'data_en.json';

async function fetchData() {
    try {
        const response = await fetch(dataFile);
        const data_en = await response.json();
        console.log(data_en)
        return data_en;
    } catch (error) {
        console.log('lox')
        console.error('Error fetching data:', error);
        return null;
    }
}
fetchData()

let optionDisabled = false;
let correctOption = null;
let started = false;
let currentIndex = 0;
var correctCount = 0;

document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
    const buttonElement = document.getElementById('btn');
    const counterElement = document.getElementById('counter');
    const languageSelection = document.getElementById('language-selection');

    buttonElement.addEventListener('click', () => {
        languageSelection.style.display = 'none';
        const selectedLanguage = document.querySelector('input[name="language"]:checked');

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
        counterElement.textContent = `Question ${currentIndex}/${data.length}`;
    });

}

function showNextCard() {
    optionDisabled = false;
    correctOption = null;
    started = true;
    const selectedLanguage = document.querySelector('input[name="language"]:checked');

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

    if (selectedLanguage.value === 'eng') {
        frontText.textContent = currentCard.en;
        frontText.setAttribute('data-name', currentCard.en);
    } else {
        frontText.textContent = currentCard.aze;
        frontText.setAttribute('data-name', currentCard.aze);
    }

    frontText.setAttribute('data-translation', currentCard.ar);

    if (selectedLanguage.value === 'eng') {
        frontText.setAttribute('data-meaning', currentCard.meaning);
    } else {    
        frontText.setAttribute('data-meaning', currentCard.meaning_aze);
    }

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