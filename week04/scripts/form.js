function PageRating() {
	rangeValue = document.querySelector("#rangeValue");
	rangeInput = document.querySelector("#rating");
	
	rangeInput.addEventListener("change", displayRatingValue)
	rangeInput.addEventListener("input", displayRatingValue)
	
	function displayDefaultValue() {
		rangeValue.innerHTML = rangeInput.value;
	}
	
	displayDefaultValue();
	
	function displayRatingValue() {
		rangeValue.innerHTML = rangeInput.value;
	}
}

PageRating();