// Load meals from JSON
fetch('../data/meals.json')
    .then(res => res.json())
    .then(data => {
        let container = document.getElementById('menu-container');

        if (container) {
            data.forEach(meal => {
                let div = document.createElement('div');
                div.innerHTML = `
                    <h3>${meal.name}</h3>
                    <p>${meal.description}</p>
                `;
                container.appendChild(div);
            });
        }
    });

// Form handling
document.getElementById('subForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Subscription successful 🔥");
});