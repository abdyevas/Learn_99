const data_en = require('./data_en.js');

const data_aze = [{ "aze": "Ər-Rəhman", "meaning": "Çox Mərhəmətli" },
{ "aze": "Ər-Rəhim", "meaning": "Həmişə Mərhəmətli. Rəhimli" },
{ "aze": "Əl-Məlik", "meaning": "Ali hökmdar" },
{ "aze": "Əl-Qüddus", "meaning": "Müqəddəs" },
{ "aze": "Əs-Salam", "meaning": "Pak. Əmin-amanlıq verən" },
{ "aze": "Əl-Mömin", "meaning": "İman bəxş edən (İman bəslənilən)" },
{ "aze": "Əl-Mühəymin", "meaning": "Mühafizəçi. Himayə edən" },
{ "aze": "Əl-Əziz", "meaning": "Əzəmətli. Çox İzzətli" },
{ "aze": "Əl-Cabbar", "meaning": "Qüdrətli. Zalımlara əziyyət verən" },
{ "aze": "Əl-Mütəkəbbir", "meaning": "Məqamı uca tutulan, böyüdülən" },
{ "aze": "Əl-Xaliq", "meaning": "Yaradıcı" },
{ "aze": "Əl-Bari", "meaning": "Heçdən yaradan" },
{ "aze": "Əl-Müsavvir", "meaning": "Surət verən" },
{ "aze": "Əl-Hakim", "meaning": "Müdrik. Çox Hikmətli" },
{ "aze": "Əl-Qadiir", "meaning": "Qüdrətli" },
{ "aze": "Əl-Əvvəl", "meaning": "Hər şeydən əvvəl mövcud olmuş" },
{ "aze": "Əl-Axir", "meaning": "Hər şeydən sonda mövcud olan" },
{ "aze": "Əz-Zahir", "meaning": "Aşkarda olan (aşkardakıları bilən)" },
{ "aze": "Əl-Batin", "meaning": "Gizlində olan (gizlindəkiləri bilən)" },
{ "aze": "Əl-Aliim", "meaning": "Hər şeyi bilən. Çox Elmli" },
{ "aze": "Əl-Ğafur", "meaning": "Günahları Bağışlayan" },
{ "aze": "Əl-Qaffar", "meaning": "Hər şeyi bağışlayan" },
{ "aze": "Əl-Qahir", "meaning": "Zalımları qəhr edən" },
{ "aze": "Əl-Qahhar", "meaning": "Hakimi-mütləq" },
{ "aze": "Əl-Vahhab", "meaning": "Səxavətli" },
{ "aze": "Ər-Razzaq", "meaning": "Ruzi verən" },
{ "aze": "Əl-Fəttah", "meaning": "Açıcı. Çətinlikləri həll edən" },
{ "aze": "Əl-Vahid", "meaning": "Tək olan. Yeganə" },
{ "aze": "Əl-Həlim", "meaning": "Çox Mülayim" },
{ "aze": "Əl-Əhəd", "meaning": "Bənzərsiz" },
{ "aze": "Əs-Səməd", "meaning": "Ehtiyacsız" },
{ "aze": "Əl-Ali", "meaning": "Uca" },
{ "aze": "Əl-Alə", "meaning": "Ən Uca. Ən Yüksək" },
{ "aze": "Əl-Mütəali", "meaning": "Ucaldılmış" },
{ "aze": "Əl-Kərim", "meaning": "Səxavətli" },
{ "aze": "Əl-Əkrəm", "meaning": "Ən Səxavətli. Ən Kəramətli" },
{ "aze": "Əs-Səmi", "meaning": "Hər şeyi eşidən" },
{ "aze": "Ər-Rai", "meaning": "Hər şeyi görən" },
{ "aze": "Əl-Əfüvv", "meaning": "Əfv edən. Bağışlayan" },
{ "aze": "Əl-Hasib", "meaning": "Hər şeyi hesaba alan" },
{ "aze": "Əl-Mubin", "meaning": "Aydınlaşdırıcı" },
{ "aze": "Əş-Şəkur", "meaning": "Mükafatlandıran" },
{ "aze": "Ər-Raqib", "meaning": "Nəzarətçi. Keşikçi" },
{ "aze": "Əl-Mucib", "meaning": "Duaları qəbul edən" },
{ "aze": "Əl-Vəsi", "meaning": "Hərtərəfli" },
{ "aze": "Əl-Basit", "meaning": "Böyüdücü" },
{ "aze": "Əl-Vədud", "meaning": "Sevən" },
{ "aze": "Əl-Xalləq", "meaning": "Yaradan" },
{ "aze": "Əş-Şakir", "meaning": "Minnətdar" },
{ "aze": "Əş-Şahid", "meaning": "Hər şeyə şahid və nəzarətçi olan" },
{ "aze": "Əl-Haqq", "meaning": "Həqiqi" },
{ "aze": "Əl-Vəkil", "meaning": "Himayəçi" },
{ "aze": "Əl-Qavi", "meaning": "Güc sahibi" },
{ "aze": "Əl-Mətin", "meaning": "Sarsılmaz" },
{ "aze": "Əl-Mühit", "meaning": "Hər şeyi qavrayan" },
{ "aze": "Əl-Həmid", "meaning": "Təqdirəlayiq. Həmd edilən" },
{ "aze": "Əl-Maulə", "meaning": "Sahib" },
{ "aze": "Əl-Vəli", "meaning": "Himayəçi" },
{ "aze": "Əl-Qabid", "meaning": "Daraldan" },
{ "aze": "Ən-Nasir", "meaning": "Köməkçi" },
{ "aze": "Əl-Məcid", "meaning": "Şanlı" },
{ "aze": "Əl-Hayy", "meaning": "Daima diri olan" },
{ "aze": "Əl-Qəyyum", "meaning": "Müstəqil" },
{ "aze": "Əl-Qarib", "meaning": "Yaxın olan" },
{ "aze": "Ər-Rəbb", "meaning": "Hökmdar. Bəsləyən" },
{ "aze": "Əl-Hakam", "meaning": "Hakim" },
{ "aze": "Əl-Lətif", "meaning": "İşlərin incəliklərini bilən" },
{ "aze": "Əl-Xabir", "meaning": "Məlumatlı" },
{ "aze": "Əl-Qadir", "meaning": "Qüdrətli" },
{ "aze": "Əl-Müqtədir", "meaning": "İqtidarlı" },
{ "aze": "Əl-Kafi", "meaning": "Kifayət edən" },
{ "aze": "Əs-Sittir", "meaning": "Gizlədən" },
{ "aze": "Əl-İlah", "meaning": "İlahi" },
{ "aze": "Əl-Kəbir", "meaning": "Ən böyük" },
{ "aze": "Əl-Hafiz", "meaning": "Qoruyan. Mühafizəçi" },
{ "aze": "Əl-Bəsir", "meaning": "Hər şeyi görən (haqq-nahaqq)" },
{ "aze": "Əl-Qədir", "meaning": "Hər şeyə qüdrəti çatan" },
{ "aze": "Əl-Əliyy", "meaning": "Yüksək. Uca" },
{ "aze": "Əl-Baqi", "meaning": "Əbədi. Daimi. Qaları" },
{ "aze": "Əl-Həfiyy", "meaning": "Öz yaratdıqlarını çox sevən" },
{ "aze": "Ən-Nur", "meaning": "Nur" },
{ "aze": "Əl-Ədl", "meaning": "Ədalətli" },
{ "aze": "", "meaning": "" },
{ "aze": "", "meaning": "" },
{ "aze": "", "meaning": "" },
{ "aze": "", "meaning": "" },
{ "aze": "", "meaning": "" },
{ "aze": "", "meaning": "" },
{ "aze": "", "meaning": "" },
{ "aze": "", "meaning": "" },
{ "aze": "", "meaning": "" },
{ "aze": "", "meaning": "" },
{ "aze": "", "meaning": "" },
{ "aze": "", "meaning": "" },
{ "aze": "", "meaning": "" },
{ "aze": "", "meaning": "" },
{ "aze": "", "meaning": "" },
{ "aze": "Ər-Rəuf", "meaning": "Mehriban. Şəfqətli" },
{ "aze": "Əl-Bədi", "meaning": "Həmişə ixtira edən" }
];

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

        if (selectedLanguage.value === 'eng') {
            data = data_en;
        } else {
            data = data_aze;
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

    if (selectedLanguage.value === 'eng') {
        data = data_en;
    } else {
        data = data_aze;
    }

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
    frontText.setAttribute('data-meaning', currentCard.meaning);

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