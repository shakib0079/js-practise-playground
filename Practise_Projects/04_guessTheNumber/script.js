const submitButton = document.querySelector('#subt');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const inputValue = parseInt(document.querySelector('.guessField').value);
    console.log(inputValue);
})