fetch('names.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('JSON data:', data);
        
        var namesEn = data.map(obj => obj.en);
        var namesAr = data.map(obj => obj.ar);

        var randomInx = Math.floor(Math.random() * namesEn.length);
        var randomNameEn = namesEn[randomInx];
        var randomNameAr = namesAr[randomInx];

        var frontText = document.getElementById('front-text');
        frontText.textContent = randomNameEn;
        frontText.setAttribute('data-translation', randomNameAr);
    })
    .catch(error => console.error('Error loading JSON:', error));

function flipCard() {
    var card = document.getElementById('card');
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
        } else {
            frontText.textContent = frontText.getAttribute('data-name');
            frontText.style.transform = 'none';
        }
    }, 100);
}