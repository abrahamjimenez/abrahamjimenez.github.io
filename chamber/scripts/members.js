const url = "https://abrahamjimenez.github.io/wdd230/data/members.json";

async function apiFetch() {
	const response = await fetch(url);
	const data = await response.json();
	// console.log(data)
	displayData(data);
}

const directoryContainer = document.querySelector(".card--view");

function displayData(data) {
	const companies = data.companies

	companies.forEach(company => {

		// Constant Variable Names
		const companyName = company.name;
		const companyImage = company.image;
		const companyAddress = company.address;
		const companyPhone = company.phone;
		const companyWebsite = company.website;

		// Company Image Creation
		const image = document.createElement("img");
		image.src = `images/${companyImage}`;
		image.alt = company.name
		
		// Company Name Creation
		const nameParagraph = document.createElement("p");
		nameParagraph.textContent = companyName;
		nameParagraph.classList = "companyName";
		
		// Company Address Creation
		const addressParagraph = document.createElement("p");
		addressParagraph.textContent = companyAddress;
		
		// Company Phone Creation
		const phoneParagraph = document.createElement("p");
		phoneParagraph.textContent = companyPhone;
		
		// Company Website Creation		
		const websiteLink = document.createElement("a");
		websiteLink.href = companyWebsite;
		websiteLink.textContent = companyWebsite;

		// Div Element Creation
		const div = document.createElement("div");
		div.classList = "company--container"
		div.appendChild(image)

		// Add Paragraphs company container
		div.appendChild(nameParagraph); // Name
		div.appendChild(addressParagraph); // Address
		div.appendChild(phoneParagraph); // Phone
		div.appendChild(websiteLink); // Website

		// Add Div's to main html
		directoryContainer.appendChild(div);

		// Information
		// console.log(image)
		// console.log(company.name)
		// console.log(company.address)
		// console.log(company.website)
	})
}

apiFetch();