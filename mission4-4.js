function omikujishow(){
	var omikuji = new Array("大吉です！今日もいい一日になりますように！",
		"中吉です！元気に過ごしましょう",
		"小吉です！ありのままのあなたでいきましょう");
		
	var number1 = Math.random();
	var number2 = number1 * 3;
	var number = Math.floor(number2);
	var message = omikuji[number];
	
	var object = document.getElementById("omikuji");
	object.innerText = message;
}