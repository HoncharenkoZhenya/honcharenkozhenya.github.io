// 2-1
function onClick2_1 () {
	var input1 = +(document.getElementById('input2-1-1').value);
	var input2 = +(document.getElementById('input2-1-2').value);
	var input3 = +(document.getElementById('input2-1-3').value);
	var input4 = +(document.getElementById('input2-1-4').value);
	var input5 = +(document.getElementById('input2-1-5').value);
	if (!isNaN(input1) && !isNaN(input2) && !isNaN(input3) && !isNaN(input4) && !isNaN(input5)) {
		var sum = input1 + input2 + input3 + input4 + input5;
		var res = sum % 2 === 0 ? 'Четное!' : 'Нечетное!'
		document.getElementById('answer2-1').innerHTML = res;
	} else {
		document.getElementById('answer2-1').innerHTML = 'Введите числа!!!';
	}
}

// 2-2
function onClick2_2 () {

	var input1 = +(document.getElementById('input2-2-1').value);
	var input2 = +(document.getElementById('input2-2-2').value);
	if (!isNaN(input1) && !isNaN(input2)) {
		var res = '';
		for (var i = 0; i < input2; i++) {
			for (var j = 0; j < input1; j++) {
				res += 'X';
			}
			res += '<br>';
		}
		document.getElementById('answer2-2').innerHTML = res;
	} else {
		document.getElementById('answer2-2').innerHTML = 'Введите числа!!!';
	}
}
// 2-3
function onClick2_3 () {

	var input1 = document.getElementById('input2-3-1').value;
	var input2 = document.getElementById('input2-3-2').value;
	var input3 = +(document.getElementById('input2-3-3').value);
	if (!isNaN(input3)) {
		if (input3 >= 18) {
			document.getElementById('answer2-3').innerHTML = input2 + ' ' + input1 + ', доступ разрешен';
		} else {
			document.getElementById('answer2-3').innerHTML = input2 + ' ' + input1 + ', еще маловат';
		}
	} else {
		document.getElementById('answer2-3').innerHTML = 'Введите возраст числом';
	}
}
// 2-4
function onClick2_4() {
	var nums = [];
	while (true) {
		var i = prompt('Введите число', 'Хватит');
		if (isNaN(parseFloat(i)) && !isFinite(i)) break;
		nums.push(+i);
	}
	var max = Math.max.apply(null, nums);
	var min = Math.min.apply(null, nums);

	var sum = 0;
	var l = nums.length;
	while (l--) {
		sum += nums[l];
	}
	var average = sum / nums.length;

	var numsOdd = [];
	var numsEven = [];
	l = nums.length;
	while (l--) {
		if (nums[l] % 2 == 0) {
			numsEven.push(nums[l]);
		} else {
			numsOdd.push(nums[l]);
		}
	}
	var odd = numsOdd.join(', ');
	var even = numsEven.join(', ');

	var res = 'Cамое большое число - ' + max + '<br>'
						+ 'Cамое маленькое число - ' + min + '<br>'
						+ 'Сумма всех чисел - ' + sum + '<br>'
						+ 'Среднее арифметическое - ' + average + '<br>'
						+ 'Четные числа - ' + even + '<br>'
						+ 'Нечетные числа - ' + odd + '<br>';
	document.getElementById('answer2-4').innerHTML = res;
}

// 2-5
function onClick2_5 () {
	var select = document.getElementById('select2-5').value;
	var input1 = +(document.getElementById('input2-5-1').value);
	var input2 = +(document.getElementById('input2-5-2').value);
	if (!isNaN(input1) && !isNaN(input2)) {
		if (input1 == input2) {
			document.getElementById('answer2-5').innerHTML = 'Числа одинаковые!';
		} else {
			if (input1 > input2) {
				var temp = input1;
				input1 = input2;
				input2 = temp;
			}
			Math.round(input1);
			Math.round(input2);
			var res = [];
			for (var i = input1 + 1; i < input2; i++) {
				res.push(i);
			}
			var joinProp = '';
			if (select == 1) {
				joinProp = ' ';
			} else if (select == 2) {
				joinProp = ', ';
			} else {
				joinProp = '<br>';
			}
			document.getElementById('answer2-5').innerHTML = res.join(joinProp);;
		}
	} else {
		document.getElementById('answer2-5').innerHTML = 'Введите числа!!!';
	}
}

// 2-6
function onClick2_6 () {
	document.getElementById('answer2-6').innerHTML = '';
	var select = document.getElementById('select2-6').value;
	var res = '';
	if (select == 1) {
		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 10; j++) {
				document.getElementById('answer2-6').innerHTML += 'X';
			}
			document.getElementById('answer2-6').innerHTML += '<br>';
		}
	} else if (select == 2) {
		for (var i = 0; i < 5; i++) {
			for (var j = 0; j < i + 1; j++) {
				document.getElementById('answer2-6').innerHTML += 'X';
			}
			document.getElementById('answer2-6').innerHTML += '<br>';
		}
		document.getElementById('answer2-6').style.textAlign = 'center';
		document.getElementById('answer2-6').style.width = i*10+'px';
	} else if (select == 3) {
		for (var i = 0; i < 5; i++) {
			for (var j = 0; j < i + 1; j++) {
				document.getElementById('answer2-6').innerHTML += 'X';
			}
			document.getElementById('answer2-6').innerHTML += '<br>';
		}
		document.getElementById('answer2-6').style.textAlign = 'left';
		document.getElementById('answer2-6').style.width = '100%';
	} else {
		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < i + 1; j++) {
				document.getElementById('answer2-6').innerHTML += 'X';
			}
			document.getElementById('answer2-6').innerHTML += '<br>';
		}
		for (var i = 3; i > 0; i--) {
			for (var j = i; j > 0; j--) {
				document.getElementById('answer2-6').innerHTML += 'X';
			}
			document.getElementById('answer2-6').innerHTML += '<br>';
		}

		document.getElementById('answer2-6').style.textAlign = 'center';
		document.getElementById('answer2-6').style.width = 4*10+'px';
	}
}

// 2-7
function onClick2_7 () {
	document.getElementById('answer2-7').style.fontSize = '30px';
	var input = +(document.getElementById('input2-7').value);
	if (!isNaN(input)) {
		Math.round(input);
		if (input < 10) {
			document.getElementById('answer2-7').innerHTML = 'Введите число больше 9!!!';
		} else {
			var res = '';
			for (var i = 0; i < input; i++) {
				if (i % 3 == 0 && i % 10 == 0) {
					res += '<span style="color:blue">' + i + '</span> ';
				} else if (i % 3 == 0) {
					res += '<span style="color:green">' + i + '</span> ';
				} else if (i % 10 == 0) {
					res += '<span style="color:red">' + i + '</span> ';
				} else {
					res += i + ' ';
				}
			}
			document.getElementById('answer2-7').innerHTML = res;
		}
	} else {
		document.getElementById('answer2-7').innerHTML = 'Введите число!!!';
	}
}

// 2-8
function onClick2_8 () {
	var input = +(document.getElementById('input2-8').value);
	if (!isNaN(input)) {
		var res = 1;
		for (var i = 1; i < input + 1; i++) {
			res *= i;
		}
		document.getElementById('answer2-8').innerHTML = res;
	} else {
		document.getElementById('answer2-8').innerHTML = 'Введите число!!!';
	}
}

// 2-9
function onClick2_9 () {
	var res = '';
	for (var i = 0; i < 8; i++) {
		res += '<div style="height:30px;">';
		for (var j = 0; j < 8; j++) {
			if((i + j) % 2 == 0) {
				res += '<span style="width:30px;height:30px;display:inline-block;margin: 0;padding: 0;"></span>';
			} else {
				res += '<span style="width:30px;height:30px;background-color:#000;display:inline-block;margin: 0;padding: 0;"></span>';
			}
		}
		res += '</div>';
	}
	document.getElementById('answer2-9').innerHTML = res;
}

// 2-10
function onClick2_10 () {
	var input = +(document.getElementById('input2-10').value);
	input = parseInt(input);
	if (!isNaN(input) && input > 0 && input < 8) {
		var res = '';
		switch (input) {
			case 1: res = 'Понедельник'; break;
			case 2: res = 'Вторник'; break;
			case 3: res = 'Среда'; break;
			case 4: res = 'Четверг'; break;
			case 5: res = 'ПЯТНИЦА!!!'; break;
			case 6: res = 'Суббота'; break;
			case 7: res = 'Воскресенье'; break;
		}
		document.getElementById('answer2-10').innerHTML = res;
	} else {
		document.getElementById('answer2-10').innerHTML = 'Введите число от 1 до 7!!!';
	}
}