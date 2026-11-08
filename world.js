document.addEventListener('DOMContentLoaded', () => {
    const lookupBtn = document.getElementById('lookup');
    const countryInput = document.getElementById('country');
    const resultDiv = document.getElementById('result');

    lookupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let country = countryInput.value.trim();

        fetch(`world.php?country=${encodeURIComponent(country)}`)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => console.error('Error:', error));
    });
});

