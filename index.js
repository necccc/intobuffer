function zeroFill( number, width ) {

	width -= number.toString().length;

	if ( width > 0 )
	{
		return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
	}

	return number + ""; // always return a string
}

function octetArray (string) {

	return string.match(/.{1,2}/g).map(function(str) {return parseInt(str, 16)} );

}

function fillString(character, length) {

	var str = '';

	while(length--) {
		str += character;
	}

	return str;

}

function intToBuffer (number, byteLength) {

	var hexString = (number).toString(16);

	if (typeof byteLength == 'undefined') {

		byteLength = (hexString.length + hexString.length % 2) / 2;

	} else if (hexString.length > byteLength * 2) {

		hexString = fillString('f', byteLength * 2)

	}

	return new Buffer(octetArray(zeroFill(hexString, byteLength * 2)))
}

module.exports = intToBuffer;