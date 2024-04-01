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
            frontText.textContent = 'TRANSLATION';
            frontText.style.transform = 'scaleY(-1)';
        } else {
            frontText.textContent = 'Word';
            frontText.style.transform = 'none';
        }
    }, 100);
}