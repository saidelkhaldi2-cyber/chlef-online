// Function to fetch the list of countries from the external API (URL)
async function fetchCountries() {
    try {
        // Fetch HTML content from the given URL
        const response = await fetch('https://onlinesim.io/');
        const text = await response.text();

        // Create a DOM parser to parse the HTML text
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');

        // Get the country links from the HTML using their class names
        const countryLinks = doc.querySelectorAll('a[href^="/free_numbers/"]');
        const countries = [];

        // Extract country names and href values
        countryLinks.forEach(link => {
            const countryName = link.textContent.trim();
            const countryHref = link.getAttribute('href');
            countries.push({ name: countryName, href: countryHref });
        });

        // Sort countries alphabetically
        countries.sort((a, b) => a.name.localeCompare(b.name));

        // Display countries in the list and table
        displayCountries(countries);

    } catch (error) {
        console.error('Error fetching countries:', error);
    }
}

// Function to display the countries in the list and table
function displayCountries(countries) {
    const countriesListDiv = document.getElementById('countries-list');
    const countriesTableBody = document.getElementById('countries-table-body');

    // Clear previous content
    countriesListDiv.innerHTML = '';
    countriesTableBody.innerHTML = '';

    // Display countries in a list (alphabetically)
    const ul = document.createElement('ul');
    countries.forEach(country => {
        const li = document.createElement('li');
        li.textContent = country.name;
        ul.appendChild(li);
    });
    countriesListDiv.appendChild(ul);

    // Display countries in a table
    countries.forEach(country => {
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        tdName.textContent = country.name;
        const tdDetails = document.createElement('td');
        const link = document.createElement('a');
        link.href = https://onlinesim.io${country.href};
        link.textContent = 'View Details';
        tdDetails.appendChild(link);
        tr.appendChild(tdName);
        tr.appendChild(tdDetails);
        countriesTableBody.appendChild(tr);
    });
}

// Call the function to fetch and display countries
fetchCountries();
