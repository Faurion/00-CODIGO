var CryptoJS = require("crypto-js");

function encriptarAes(mensaje) {

	const key = "z|8v2,.B'%CyH9%{_~='2.|+;`z>^4{N";
	const keyutf = CryptoJS.enc.Utf8.parse(key);
	var output = CryptoJS.AES.encrypt(mensaje, keyutf, {
		mode : CryptoJS.mode.ECB
	});

	console.log("Encriptado: " + output.toString());
}


encriptarAes("MIGUEL CRISPIN")


