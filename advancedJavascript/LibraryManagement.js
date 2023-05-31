class Book {
	constructor(title, author, publicationYear) {
		this.title = title;
		this.author = author;
		this.publicationYear = publicationYear;
		this.availabile = true;
	}

	toggleAvailability() {
		this.availabile = !this.availabile;
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.book = [];
	}
	addBook(title, author, publicationYear) {
		const newBook = new Book(title, author, publicationYear);

		this.book.push(newBook);
	}
	removeBook(title) {
		return this.book.filter((item) => item.title !== title);
	}
	searchByAuthor(author) {
		return this.book.find((item) => item.author === author);
	}
	searchByTitle(title) {
		return this.book.find((item) => item.title === title);
	}
}

const library = new Library('science');
library.addBook('abc', 'ninad', 1945);
library.addBook('xcv', 'praj', 1955);
library.addBook('dcv', 'smira', 2010);

let ans = library.searchByAuthor('ninad');

console.log(ans);
