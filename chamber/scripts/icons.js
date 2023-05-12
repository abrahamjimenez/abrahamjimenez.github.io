const icons = document.querySelectorAll("i");

icons.forEach(function(i) {
	i.addEventListener("mouseenter", function() {
		i.classList.toggle("fa-bounce")
	})
	i.addEventListener("mouseleave", function() {
		i.classList.toggle("fa-bounce")
	})
})