var login = prompt("Введите логин");
if (login == null) {
	alert('Canceled');
} else if (login == 'admin') {
	var password = prompt('Введите пароль');
	if (password == null) {
		alert('Canceled');
	} else if (password == 'passw0rd') {
		alert('Welcome home!');
	} else {
		alert('Wrong password')
	}
} else {
	alert('Access denied');
}