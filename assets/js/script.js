let buttons;
let operationButtons;
let CEButton;
let CButton;
let eraseButton;

let calc;
let actualValue = "0";
let actualValueHtml;


document.addEventListener('DOMContentLoaded', () => {
	buttons = document.getElementsByClassName('calc-button');
	operationButtons = document.getElementsByClassName('operation-button');
	actualValueHtml = document.getElementById('actual-number');
	CEButton = document.getElementById('CE-button');
	CButton = document.getElementById('C-button');
	eraseButton = document.getElementById('erase-button');
	calc = document.getElementById('calc');

	CEButton.addEventListener('click', () => {
		actualValue = "0";
		actualValueHtml.innerText = 0;
	})

	eraseButton.addEventListener('click', () => {
		let arrayValue = actualValue.split('');
		arrayValue.pop();
		actualValue = arrayValue.join('');
		if (actualValue == "") {
			actualValueHtml.innerText = 0;
		} else {
			actualValueHtml.innerText = actualValue;
		}
	})

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', () => {
			let has0 = new RegExp("^[0\0]+$").test(actualValue);
			if (has0) {
				actualValue = "";
			}

			if (actualValue == "" && buttons[i].dataset.value == ",") {
				actualValue = "0";
			}
			
			if (!(actualValue.indexOf(',') > 0 && buttons[i].dataset.value == ",")) {
				actualValue += buttons[i].dataset.value;
			}	
			
			actualValueHtml.innerText = actualValue;
			console.log(actualValue);
			console.log('html ' + actualValueHtml.innerText);
		})
	}

	for (let i = 0; i < operationButtons.length; i++) {
		operationButtons[i].addEventListener('click', () => {
			let operation = operationButtons[i].dataset.value;
			switch (operation) {
				case '+':
				break;
				case '-':
				break;
				case 'x':
				break;
				case '/':
				break;
				case '=':
				break;
			}

			calc.innerText = actualValue + ' ' + operation;

		})
	}

})


