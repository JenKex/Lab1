/*
export function example() {
	for (let i = 1; i <= 6; i++) {
		let text = '';
		for (let j = 1; j <= 8; j++) {
			let k = i + j;
			if (k < 8) {
				text += '#';
			} else {
				text += '.';
			}
		}
		console.log(text);
	}
}
*/
export function figure1() {
	for (let i = 1; i <= 6; i++) {
		let text = '';
		for (let j = 1; j <= 8; j++) {
			let k = i + j;
			if (j == 1) {
				text += '#';
			} else {
				text += '.';
			}
		}
		console.log(text);
	}
}
export function figure2() {
	for (let i = 1; i <= 6; i++) {
		let text = '';
		for (let j = 1; j <= 8; j++) {
			let k = i - j;
			if (k == 0) {
				text += '#';
			} else {
				text += '.';
			}
		}
		console.log(text);
	}
}
export function figure3() {
	for (let i = 1; i <= 6; i++) {
		let text = '';
		for (let j = 1; j <= 8; j++) {
			let k = i + j;
			if (j > 2 && j < 6) {
				text += '#';
			} else {
				text += '.';
			}
		}
		console.log(text);
	}
}
export function figure4() {
	for (let i = 1; i <= 6; i++) {
		let text = '';
		for (let j = 1; j <= 8; j++) {
			let k = i - j;
			if (j == 3) {
				text += '#';
			}
			else if (i == 3) {
				text += '#';
			}
			else {
				text += '.';
			}
		}
		console.log(text);
	}
}
export function figure5() {
	for (let i = 1; i <= 6; i++) {
		let text = '';
		for (let j = 1; j <= 8; j++) {
			let k = i + j;
			if (k == 7) {
				text += '#';
			}
			else if (j == 5) {
				text += '#';
			}
			else {
				text += '.';
			}
		}
		console.log(text);
	}
}
export function figure6() {
	for (let i = 1; i <= 6; i++) {
		let text = '';
		for (let j = 1; j <= 8; j++) {
			let k = i + j;
			let g = i - j;
			if (k == 7) {
				text += '#';
			}
			else if (g == 0) {
				text += '#';
			}
			else {
				text += '.';
			}
		}
		console.log(text);
	}
}
export function figure7() {
	for (let i = 1; i <= 6; i++) {
		let text = '';
		for (let j = 1; j <= 8; j++) {
			let k = i + j;
			if (j % 2 == 1) {
				text += '#';
			}
			else {
				text += '.';
			}
		}
		console.log(text);
	}
}
export function figure8() {
	for (let i = 1; i <= 6; i++) {
		let text = '';
		for (let j = 1; j <= 8; j++) {
			let k = i + j;
			if (i > 2 && i < 5 && j > 2 && j < 7) {
				text += '.';
			}
			else if (j > 1 && j < 8 && i > 1 && i < 6) {
				text += '#';
			}
			else {
				text += '.';
			}
		}
		console.log(text);
	}
}
export function figure9() {
	for (let i = 1; i <= 6; i++) {
		let text = '';
		for (let j = 1; j <= 8; j++) {
			let k = i - j + 8;
			if (k % 3 == 1) {
				text += '#';
			}
			else if (k % 3 == 0) {
				text += 'O';
			}
			else {
				text += '.';
			}
		}
		console.log(text);
	}
}
export function figure10() {
	for (let i = 1; i <= 6; i++) {
		let text = '';
		for (let j = 1; j <= 8; j++) {
			let k = i + j;
			if (j == 3 && i < 4 || j == 6 && i < 4 || k % 2 == 1 && i > 4) {
				text += '#';
			}
			else {
				text += '.';
			}
		}
		console.log(text);
	}
}