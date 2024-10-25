document.addEventListener("DOMContentLoaded", () => {
    // Function to fetch and display mentors
    async function fetchMentors() {
        try {
            const response = await fetch('data/mentors.json'); // Make sure the .json file path is correct
            const mentors = await response.json();

            const mentorCardsContainer = document.getElementById("mentor-cards");

            // Loop through each mentor and create a card
            mentors.forEach(mentor => {
                const card = document.createElement("div");
                card.className = "card";

                card.innerHTML = `
                    <img src="${mentor.image}" alt="${mentor.name}" class="mentor-image" loading="lazy">
                    <h2 class="mentor-name">${mentor.name}</h2>
                    <p class="mentor-role">${mentor.job_role}</p>
                    <p class="mentor-role"><strong>At ${mentor.company}</strong></p>
                    <p class="mentor-field"><strong>Field:</strong> ${mentor.professional_field}</p>
                    <p class="mentor-university"><strong>University:</strong> ${mentor.university}</p>
                    <p class="mentor-location"><strong>Location:</strong> ${mentor.location}</p>
                    <button class="cta-button">Write a Message</button>
                `;

                mentorCardsContainer.appendChild(card);
            });
        } catch (error) {
            console.error("Error fetching mentor data:", error);
        }
    }

    fetchMentors();
});
