function solve() {   

    const firstOptElement = document.createElement('option');
    const secondOptElement = document.createElement('option');
    firstOptElement.value = 'binary';
    secondOptElement.value = 'hexadecimal';
    firstOptElement.textContent = "Binary";
    secondOptElement.textContent = "Hexadecimel";

    const menueToElement = document.getElementById('selectMenuTo');
    menueToElement.appendChild(firstOptElement);
    menueToElement.appendChild(secondOptElement);

    const button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', function() {
        const numberInput = document.getElementById('input');
        const outputResult = document.getElementById('result')

        if(menueToElement.value === 'binary'){
            outputResult.value = Number(numberInput.value).toString(2);
        }
        else if(menueToElement === "hexadecimal") {
            outputResult.value = Number(numberInput.value).toString(16).toUpperCase();
        }
    })
}