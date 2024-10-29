const fs = require('fs');

function createDivs(number) {
	let divs = '';
	for (let i = 1; i <= number; i++) {
		divs += `<div id="box-${i}" class="grid-item"></div>`;
	}
	fs.writeFileSync('div.html', divs);
}
createDivs(1000);
