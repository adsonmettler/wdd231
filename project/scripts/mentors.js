document.addEventListener("DOMContentLoaded", () => {
    // Function to fetch and display mentors
    async function fetchMentors() {
        try {
            const response = await fetch('data/mentors.json'); // Ensure the .json file path is correct
            const mentors = await response.json();

            const mentorCardsContainer = document.getElementById("mentor-cards");

            // Loop through each mentor and create a card
            mentors.forEach(mentor => {
                const card = document.createElement("div");
                card.className = "card";

                card.innerHTML = `
                    <img src="${mentor.image}" alt="${mentor.name}" class="mentor-image">
                    <h2 class="mentor-name">${mentor.name}</h2>
                    <p class="mentor-role">${mentor.job_role}</p>
                    <p class="mentor-role"><strong>At ${mentor.company}</strong></p>
                    <p class="mentor-field"><strong>Field:</strong> ${mentor.professional_field}</p>
                    <p class="mentor-university"><strong>University:</strong> ${mentor.university}</p>
                    <p class="mentor-location"><strong>Location:</strong> ${mentor.location}</p>
                    <button class="cta-button">Write a Message</button>
                `;

                // Add click event to the "Write a Message" button
                const messageButton = card.querySelector(".cta-button");
                messageButton.addEventListener("click", () => {
                    openModal();
                });

                mentorCardsContainer.appendChild(card);
            });
        } catch (error) {
            console.error("Error fetching mentor data:", error);
        }
    }

    // Modal handling
    const modal = document.getElementById("messageModal");
    const thankYouModal = document.getElementById("thankYouModal");
    const closeButton = document.querySelector(".close-button");
    const closeThankYouButton = document.getElementById("closeThankYouModal");
    const goBackButton = document.getElementById("goBackButton");

    function openModal() {
        modal.style.display = "block";
    }

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    closeThankYouButton.addEventListener("click", () => {
        thankYouModal.style.display = "none";
    });

    goBackButton.addEventListener("click", () => {
        thankYouModal.style.display = "none";
        modal.style.display = "block"; // Optionally reopen the message modal
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        } else if (event.target == thankYouModal) {
            thankYouModal.style.display = "none";
        }
    };

    // Handle form submission
    const sendButton = document.getElementById("sendApplication");
    sendButton.addEventListener("click", () => {
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("messageText").value;

        if (fullName && email && message) {
            console.log("Full Name:", fullName);
            console.log("Email:", email);
            console.log("Message:", message);
            // Here you would typically send the data to a server

            // Show thank you modal after submission
            modal.style.display = "none"; // Close the message modal
            thankYouModal.style.display = "block"; // Show thank you modal

            // Input fields
            document.getElementById("fullName").value = "";
            document.getElementById("email").value = "";
            document.getElementById("messageText").value = "";
        } else {
            alert("Please fill in all fields.");
        }
    });

    fetchMentors();
});
