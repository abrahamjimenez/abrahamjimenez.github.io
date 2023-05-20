const input = document.querySelector("input");
const button = document.querySelector("button")
const list = document.querySelector("#list")

button.addEventListener('click', () => {
	if (input.value != '') {
		displayList(input.value);
		chaptersArray.push(input.value);

		setChapterList();
		input.value = '';
		input.focus();
	}
})

function displayList(item) {
	const newList = document.createElement("li")
	const deleteButton = document.createElement("button")

	newList.innerHTML = item
	deleteButton.textContent = "❌"

	newList.appendChild(deleteButton)
	list.appendChild(newList)

	deleteButton.addEventListener("click", () => {
		list.removeChild(newList);
		deleteChapter(newList.textContent);
		input.focus()
	})
}

function setChapterList() {
	localStorage.setItem("myChapters", JSON.stringify(chaptersArray))
}

function getChapterList() {
	return JSON.parse(localStorage.getItem("myChapters"));
}

function deleteChapter(chapter) {
	// Starts at index 0 -> Gets rid of the last letter (index -1)
	chapter = chapter.slice(0, chapter.length - 1)
	chaptersArray = chaptersArray.filter(item => item !== chapter)
	setChapterList();
}

// Local Storage
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
	displayList(chapter);
})