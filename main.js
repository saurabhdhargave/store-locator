const stateSelect = document.getElementById('stateSelect');
const cards = document.querySelectorAll('.card');

stateSelect.addEventListener('change', () => {
    const selectedState = stateSelect.value;
    cards.forEach(card => {
        const dataState = card.getAttribute('data-state');
        if (selectedState === 'all' || selectedState === dataState) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});