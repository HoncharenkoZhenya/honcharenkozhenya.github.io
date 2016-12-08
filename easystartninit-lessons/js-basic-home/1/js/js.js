// 1-1
function onClick1_1 () {
	var input1 = +(document.getElementById('input1-1-1').value);
	var input2 = +(document.getElementById('input1-1-2').value);
	if (!isNaN(input1) && !isNaN(input2)) {
		var plus = input1 + input2;
		var minus = input1 - input2;
		var multiplied = input1 * input2;
		var divided = input1 / input2;
		var res = input1 + ' + ' + input2 + ' = ' + plus
		 + ', ' + input1 + ' - ' + input2 + ' = ' + minus
		 + ', ' + input1 + ' x ' + input2 + ' = ' + multiplied
		 + ', ' + input1 + ' / ' + input2 + ' = ' + divided;
		document.getElementById('answer1-1').innerHTML = res;
	} else {
		document.getElementById('answer1-1').innerHTML = 'Введите числа!!!';
		
	}
}

// 1-2
function onClick1_2 () {
	var input1 = +(document.getElementById('input1-2-1').value);
	var input2 = +(document.getElementById('input1-2-2').value);
	var input3 = +(document.getElementById('input1-2-3').value);
	var input4 = +(document.getElementById('input1-2-4').value);
	var input5 = +(document.getElementById('input1-2-5').value);
	if (!isNaN(input1) && !isNaN(input2) && !isNaN(input3) && !isNaN(input4) && !isNaN(input5)) {
		var arr = [input1, input2, input3, input4, input5];
		var l = arr.length;
		var int = [];
		var res = 'Нет целочисленных значений!!!';
		while (l--) {
			if (Number.isInteger(arr[l])) {
				int.push(arr[l]);
			}
		}
		if (int.length) {
			var sum = 0;
			for (var i = 0; i < int.length; i++) {
				sum += int[i];
			}
			res = sum/int.length;
		}
		document.getElementById('answer1-2').innerHTML = res;
	} else {
		document.getElementById('answer1-2').innerHTML = 'Введите числа!!!';
	}
}

// 1-3
function onClick1_3 () {
	var input1 = +(document.getElementById('input1-3-1').value);
	var input2 = +(document.getElementById('input1-3-2').value);
	if (!isNaN(input1) && !isNaN(input2)) {
		var res = Math.PI*input1*input1*input2;
		document.getElementById('answer1-3').innerHTML = res.toFixed(2);
	} else {
		document.getElementById('answer1-3').innerHTML = 'Введите числа!!!';
	}
}