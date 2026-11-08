document.addEventListener('DOMContentLoaded', () => {
    const lookupCountryBtn = document.getElementById('lookup');
    const lookupCitiesBtn = document.getElementById('lookup-cities');
    const countryInput = document.getElementById('country');
    const resultDiv = document.getElementById('result');

    
    lookupCountryBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let country = countryInput.value.trim();

        fetch(`world.php?country=${encodeURIComponent(country)}`)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => console.error('Error:', error));
    });

    
    lookupCitiesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let country = countryInput.value.trim();

        fetch(`world.php?country=${encodeURIComponent(country)}&lookup=cities`)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => console.error('Error:', error));
    });
});