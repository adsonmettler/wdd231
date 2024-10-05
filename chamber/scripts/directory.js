
// Menu Navagation | Hamburguer menu button

const hamButton = document.querySelector('#menubutton');
const navigation = document.querySelector('#animatemenu');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


async function fetchMembers() {
        try {
            const response = await fetch('data/members.json'); // Replace with your actual JSON file path
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayMembers(data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    function displayMembers(members) {
        const container = document.getElementById('directory-container');
        container.innerHTML = '';  // Clear container before rendering

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');

            memberCard.innerHTML = `
                <h2>${member.name}</h2>
                <img src="images/${member.image}" alt="${member.name} logo" width="100" loading="lazy">
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone_number}</p>
                <p><strong>Website:</strong> <a href="${member.website_url}" target="_blank">${member.website_url}</a></p>
                <p><strong>Membership Level:</strong> ${getMembershipLevel(member.membership_level)}</p>
                <p class="company-founded"><strong>Founded:</strong> <span class="founded-year">${member.founded}</span></p>
            `;

            container.appendChild(memberCard);
        });
    }

    function getMembershipLevel(level) {
        switch (level) {
            case 1: return 'Member';
            case 2: return 'Silver';
            case 3: return 'Gold';
            default: return 'Unknown';
        }
    }

    // Call fetchMembers when the page loads
    window.onload = fetchMembers;



const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const container = document.getElementById('directory-container'); // Reference to the container

// Default view: Set to grid or list based on your preference
let currentView = 'grid'; // You can set this to 'list' if you prefer a default list view

function updateView() {
    container.classList.remove('grid', 'list'); // Remove both classes
    container.classList.add(currentView); // Add the current view class
}

gridbutton.addEventListener("click", () => {
    currentView = 'grid'; // Set current view to grid
    updateView(); // Update the display
});

listbutton.addEventListener("click", () => {
    currentView = 'list'; // Set current view to list
    updateView(); // Update the display
});

// Call fetchMembers when the page loads
window.onload = async () => {
    await fetchMembers();
    updateView(); // Ensure the correct view is applied after fetching
};
