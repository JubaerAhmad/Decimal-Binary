const result = document.getElementById('result');
const submit = document.getElementById('submit');


function binary (e){
    e.preventDefault();
    const num = document.getElementById('number').value;
    if (num === '') {
        alert('Pls Input A Number')
    }
    else if (num <0 ) {
        alert('Pls Input A Positive Number')
   } else {
       result.style.visibility = 'visible';
   }
   binaryNumber = Number(num).toString(2);
   result.innerText = binaryNumber;
}

 submit.addEventListener('click', binary);