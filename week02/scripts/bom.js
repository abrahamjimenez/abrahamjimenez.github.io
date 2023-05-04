const input = document.querySelector("input");
const button = document.querySelector("button")
const list = document.querySelector("#list")

button.addEventListener('click', () => {
	if (input.value != '') {
		input.focus()
		// Create Element
		const newList = document.createElement("li")
		const deleteButton = document.createElement("button")
		
		newList.innerHTML = input.value
		deleteButton.textContent = "❌"
		
		newList.appendChild(deleteButton)
		list.appendChild(newList)
		
		deleteButton.addEventListener("click", () => {
			list.removeChild(newList);
			input.focus()
		})
		
		input.value = ""
	} else {
		input.focus()
	}
})