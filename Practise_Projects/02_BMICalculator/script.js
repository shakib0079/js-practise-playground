const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const results = document.querySelector('#results');

    const bmi = ((weight / height / height) * 10000).toFixed(2);

    results.innerHTML = `<span>${bmi}</span>`
})