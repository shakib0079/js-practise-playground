const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    const bmi = ((weight / height / height) * 10000).toFixed(2);

    if(height < 0 || isNaN(height) || height == ''){
        results.innerHTML = results.innerHTML = `<span>Please enter a valid height</span>`
    }else if(weight < 0 || isNaN(weight) || weight == ''){
        results.innerHTML = results.innerHTML = `<span>Please enter a valid weight</span>`
    }else{
        results.innerHTML = `<span>Your BMI is ${bmi}</span>`
    }

    const paragraph = document.querySelectorAll('.overview');
    if(bmi < 18.6){
        paragraph[0].style.color = 'yellow'
    }else if (bmi > 18.6 && bmi < 24.9){
        paragraph[1].style.color = 'green'
    }else if(bmi > 24.9){
        paragraph[2].style.color = 'red'
    }
    // paragraph.forEach((e) => {
    //     console.log(e);
    // })
})