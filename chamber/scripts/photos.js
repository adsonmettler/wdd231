

document.addEventListener('DOMContentLoaded', () => {
    fetch('data/photos.json') // Adjust path to your actual JSON file location
        .then(response => response.json())
        .then(data => displayPhotos(data.photos))
        .catch(error => console.error('Error loading photos:', error));
});

// Function to display photos
function displayPhotos(photos) {
    const photosContainer = document.getElementById('photos-container');
    photosContainer.innerHTML = '';  // Clear previous content

    photos.forEach(photo => {
        const photoCard = document.createElement('div');
        photoCard.classList.add('photo-card');

        photoCard.innerHTML = `
            <h3>${photo.name}</h3>
            <img src="images/${photo.image}" alt="${photo.name} logo" width="100" loading="lazy">
            <p><strong>Caption:</strong> ${photo.caption}</p>
        `;

        photosContainer.appendChild(photoCard);
    });
}
