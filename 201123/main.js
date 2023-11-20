//1.1
function setText(selector, text) {
	let elem = document.querySelector(selector);
	elem.textContent = text;
}

setText('#elem1', 'text1');
setText('.elem2', 'text2');



//1.2
function setAttr(selector, attributeName, attributeValue) {  
	document.querySelector(selector)?.setAttribute(attributeName, attributeValue);
}

setAttr('.elem2', 'data-info', 'Информация для элемента 2');



//2
function appendText(selector, text) {
	let elems = document.querySelectorAll(selector);
	
	for (let elem of elems) {
		elem.textContent += text;
	}
}

appendText('.elem', 'Добавить текст');



//3
function forEach(selector, func) {
	let elemxs = document.querySelectorAll(selector);
	
	for (let elemx of elemxs) {
		func(elemx);
	}
}

forEach('p', function(elemx) {
	elemx.textContent += '!';
});



//4
function forEach(selector, func) {
	let elemsx = document.querySelectorAll(selector);
	
	for (let i = 0; i < elemsx.length; i++) {
		func(elemsx[i], i);
	}
}

forEach('p', function(elemx, index) {
	elemx.textContent = index + 1 + '. ' + elemx.textContent;
});



//5.1
function setText(elem, text){
	elem.textContent += text;
}

let elem3 = document.getElementById('elem3');
setText(elem3, 'text1');

let elem4 = document.getElementById('elem4');
setText(elem4, 'text2');



//5.2
function appendText(elem, text) { 
	elem.textContent += text; 
} 

let paragraphs = document.querySelectorAll('p'); 

for (let paragraph of paragraphs) { 
	appendText(paragraph, '!'); 
} 



//5.3
function setValue(input, text) { 
	input.value = text; 
} 

let inputElement = document.getElementById('textInput'); 
setValue(inputElement, 'Привет, Мир!'); 



//6.1
function appendText(elems, text) {
	for (let eleme of elems) {
		eleme.textContent += text;
	}
}

let elements = document.querySelectorAll('.eleme'); 
appendText(elements, ' added text'); 



//6.2
function appendElem(ulElement, text) { 
	let liElement = document.createElement('li'); 
	liElement.textContent = text; 
	ulElement.appendChild(liElement); 
} 

let myList = document.getElementById('myList'); 
appendElem(myList, 'New Item 1'); 
appendElem(myList, 'New Item 2'); 

//6.3
let myArray = ['Item 1', 'Item 2', 'Item 3']; 

myArray.forEach(function(item) { 
	appendElem(myList, item); 
}); 



//7
function createTable(rows, cols, parent) {  
	let table = document.createElement('table');

	for (let i = 0; i < rows; i++) {
    	let row = document.createElement('tr');

    	for (let j = 0; j < cols; j++) {      
			let cell = document.createElement('td');

    		cell.textContent = 'Cell ' + (i + 1) + '-' + (j + 1);
			row.appendChild(cell);
    	}

	table.appendChild(row);  }
	parent.appendChild(table);
}

let div = document.querySelector('#elemy'); 
createTable(3, 4, div);



//8
function createTable(rows, cols) { 
	let table = document.createElement('table'); 
   
	for (let i = 0; i < rows; i++) { 
		let row = document.createElement('tr'); 
   
		for (let j = 0; j < cols; j++) { 
			let cell = document.createElement('td'); 
			cell.textContent = 'cell ' + (i + 1) + '-' + (j + 1); 
			row.appendChild(cell); 
		} 
		table.appendChild(row); 
	}
	return table; 
}

let dive = document.querySelector('#elemo');
let table = createTable(3, 4);
table.style.color = 'red';
dive.appendChild(table);



//9
function createTableByArr(arr) { 
	let table = document.createElement('table'); 
   
	for (let i = 0; i < arr.length; i++) { 
		let row = document.createElement('tr'); 
   
		for (let j = 0; j < arr[i].length; j++) { 
			let cell = document.createElement('td'); 

			cell.textContent = arr[i][j]; 
			row.appendChild(cell); 
		} 

	  table.appendChild(row); 
	} 

	return table; 
}
   
let div = document.querySelector('#elemvd'); 
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let table = createTableByArr(arr); 
div.appendChild(table);



//модули 1
;(function(inputSelectors, buttonSelector) { 
    let inputs = []; 

    	for (let i = 0; i < inputSelectors.length; i++) { 
      		inputs[i] = document.querySelector(inputSelectors[i]); 
    	} 

    let calculateBtn = document.querySelector(buttonSelector); 
 
    function sum() { 
    	let result = 0; 

    	for (let i = 0; i < inputs.length; i++) { 
        	result += parseInt(inputs[i].value) || 0; 
    	} 
      return result; 
    } 
 
    calculateBtn.addEventListener('click', function() { 
    	console.log(sum()); 
    }); 
}) (['#input1', '#input2', '#input3'], '#calculateBtn'); 



//модули 2
;(function() { 
	let str1 = 'переменная модуля'; 
	let str2 = 'переменная модуля'; 
	let str3 = 'переменная модуля'; 
   
	function func1() { 
	  alert('функция модуля'); 
	} 
   
	function func2() { 
	  alert('функция модуля'); 
	} 
   
	function func3() { 
	  alert('функция модуля'); 
	} 

	window.str1 = str1; 
	window.func1 = func1; 
	window.func2 = func2; 
})();

func1();
func2();



//модули 3
;(function() { 
    let module = {}; 
     
    let str1 = 'переменная модуля'; 
    let str2 = 'переменная модуля'; 
    let str3 = 'переменная модуля'; 
 
    function func1() { 
        alert('функция модуля'); 
    } 
    function func2() { 
        alert('функция модуля'); 
    } 
    function func3() { 
        alert('функция модуля'); 
    } 
    function func4() { 
        alert('функция модуля'); 
    } 
    function func5() { 
        alert('функция модуля'); 
    } 
 
	window.module = { str1, str2, func1, func2, func3, func4, func5 };

})();

module.func1();
