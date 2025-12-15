async function fetchCountries() {
    try {
        // Fetch HTML content from the given URL
        const response = await fetch('https://onlinesim.io/');
        const text = await response.text();

        // Create a DOM parser to parse the HTML text
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');

        // We are assuming that countries are present as JSON objects within the HTML
        // Extract the JSON-like data from the page using regex (based on the structure you showed)
        const countryData = [];
        const regex = /"country":(\d+),"name":"(.*?)"/g;
        let match;
        
        // Loop through the matches and extract country names
        while ((match = regex.exec(text)) !== null) {
            const countryId = match[1];
            const countryName = match[2];
            countryData.push({ id: countryId, name: countryName });
        }

        // Sort countries alphabetically by name
        countryData.sort((a, b) => a.name.localeCompare(b.name));

        // Display countries in the list and table
        displayCountries(countryData);

    } catch (error) {
        console.error('Error fetching countries:', error);
    }
}

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
        link.href = https://onlinesim.io/free_numbers/${country.id}; // Link to the country details page
        link.textContent = 'View Details';
        tdDetails.appendChild(link);
        tr.appendChild(tdName);
        tr.appendChild(tdDetails);
        countriesTableBody.appendChild(tr);
    });
}

// Call the function to fetch and display countries
fetchCountries();
