class BankAccount {
	#balance = 0;

	deposit(amount) {
		if (amount > 0) {
			this.#balance = this.#balance + amount;
		}
	}
	withdraw(amount) {
		if (amount < this.#balance) {
			this.#balance = this.#balance - amount;
		}
	}

	getBalance() {
		return this.#balance;
	}
}

const account = new BankAccount();
account.deposit(1000);
account.withdraw(500);
console.log(account.getBalance());
