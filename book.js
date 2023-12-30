const myLibrary = [];
let important_prop = ["title", "author", "pages"];

function Book(title, author, pages, hasRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.hasRead = hasRead;
	this.info = function () {
		if (this.hasRead == true) return `${title} by ${author}, ${pages} pages, read`;
		else return `${title} by ${author}, ${pages} pages, not read yet`;
	};
}

function addBookToLibrary(book) {
	myLibrary.push(book);
}

function makeLibrary() {
	let library = document.querySelector(".library");
	let cards = document.querySelectorAll(".book");
	cards.forEach((card) => {
		card.parentNode.removeChild(card);
	});
	myLibrary.forEach((obj) => {
		let div = document.createElement("div");
		div.className = "book";
		library.appendChild(div);

        
		/* Buttons for read and remove */

		let divButtons = document.createElement("div");
		divButtons.className = "divButtons";
		div.appendChild(divButtons);
		let readLabel = document.createElement("label");
		readLabel.textContent = "Read: ";
		let readButton = document.createElement("input");
		readButton.type = "checkbox";
		readButton.textContent = "Read";
        readButton.addEventListener('click', () =>{
            if (readButton.checked === true) {
                div.style.backgroundColor = 'red';
            } else {
                div.style.backgroundColor = 'darkolivegreen';
            }
        })
		let removeButton = document.createElement("button");
		removeButton.className = "removeButton";
        removeButton.addEventListener('click', ()=>{
            div.parentNode.removeChild(div);
            const index = myLibrary.indexOf(obj);
            myLibrary.splice(index, 1);
        })
		let removeImg = document.createElement("img");
		removeImg.src = "close.svg";
		removeImg.className = "close";
		removeButton.appendChild(removeImg);
		readLabel.appendChild(readButton);

		divButtons.appendChild(readLabel);
		divButtons.appendChild(removeButton);

		/* Content for book card */
		let divContent = document.createElement("div");
		divContent.className = "content";
		let pTitle = document.createElement("p");
		pTitle.textContent = `Title: ${obj.title}`;
		divContent.appendChild(pTitle);
		let pAuthor = document.createElement("p");
		pAuthor.textContent = `Author: ${obj.author}`;
		divContent.appendChild(pAuthor);
		let pPages = document.createElement("p");
		pPages.textContent = `Pages: ${obj.pages}`;
		divContent.appendChild(pPages);
		div.appendChild(divContent);



        if (obj.hasRead === true) {
            div.style.backgroundColor = 'red';
            readButton.checked = true;
        }
	});
}



makeLibrary();

/************** DIALOG  **************/

const dialog = document.querySelector("dialog");
const showBtn = document.querySelector(".heading > button");
const closeBtn = document.querySelector("#close");
const submitBtn = document.querySelector("#submitBtn");

showBtn.addEventListener("click", (e) => {
	dialog.showModal();
});

closeBtn.addEventListener("click", () => {
	dialog.close();
});

submitBtn.addEventListener("click", (e) => {
	let book = new Book(popUp.title.value, popUp.author.value, popUp.pages.value, popUp.read.checked);
    
	addBookToLibrary(book);
	makeLibrary();
	popUp.reset();
});
