// Mask the first four digits of the account number
function maskAccountNumber(accountNumber) {
	var maskedNumber = '';
	for (var i = 0; i < accountNumber.length; i++) {
		if (i < 4) {
			maskedNumber += '*'; // Replace the digit with an asterisk
		} else {
			maskedNumber += accountNumber.charAt(i); // Keep the original digit
		}
	}
	return maskedNumber;
}

// Unmask the account number by removing asterisks
function unmaskAccountNumber(maskedNumber) {
	var unmaskedNumber = '';
	for (var i = 0; i < maskedNumber.length; i++) {
		if (maskedNumber.charAt(i) === '*') {
			unmaskedNumber += accountNumber.charAt(i); // Use the corresponding digit from the original account number
		} else {
			unmaskedNumber += maskedNumber.charAt(i); // Keep the original digit
		}
	}
	return unmaskedNumber;
}

// Example usage
var accountNumber = '1234567890';
var masked = maskAccountNumber(accountNumber);
console.log(masked); // Output: "****567890"

var unmasked = unmaskAccountNumber(masked);
console.log(unmasked); // Output: "1234567890"
