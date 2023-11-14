import {
	figure1, figure2, figure3, figure4, figure5,
	figure6, figure7, figure8, figure9, figure10
} from './functions.js';
import { askQuestion } from './readline.js'

const [question, close] = askQuestion()

console.log('\x1b[34m%s\x1b[0m', 'Hej och välkommen!');

let input = true;
while (input) {
	console.log('\x1b[32m%s\x1b[0m', 'Välj från 1 till 10 att hämta ut figuren.');
	console.log('\x1b[31m%s\x1b[0m', 'C. Avsluta');
	
	input = await question('> ')
	input = input.toLowerCase();

	if (input == 'c') {
		console.log('Avslutar...');
		input = false;
	}
	else if (input == '') {
		console.log('Inget input.');
		input = true;
	}
	else if (input == 1) {
		figure1();
	}
	else if (input == 2) {
		figure2();
	}
	else if (input == 3) {
		figure3();
	}
	else if (input == 4) {
		figure4();
	}
	else if (input == 5) {
		figure5();
	}
	else if (input == 6) {
		figure6();
	}
	else if (input == 7) {
		figure7();
	}
	else if (input == 8) {
		figure8();
	}
	else if (input == 9) {
		figure9();
	}
	else if (input == 10) {
		figure10();
	}
	else {
		console.error('\x1b[31m%s\x1b[0m', "Fel input.")
		input = false;
	}
}
close();