function showSurprise() {
    var surpriseElement = document.getElementById('surprise');
    if (surpriseElement.classList.contains('hidden')) {
        surpriseElement.classList.remove('hidden');
    } else {
        surpriseElement.classList.add('hidden');
    }
}