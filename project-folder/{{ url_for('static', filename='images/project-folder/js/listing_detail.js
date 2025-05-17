document.addEventListener('DOMContentLoaded', () => {
    // Get listing ID from URL parameters
    const params = new URLSearchParams(window.location.search);
    const listingId = params.get('id');

    // Get listings from localStorage
    const listings = JSON.parse(localStorage.getItem('listings') || '[]');
    const listing = listings.find(l => l.id === listingId);

    if (listing) {
        displayListing(listing);
    } else {
        window.location.href = 'index.html'; // Redirect if listing not found
    }
});

function displayListing(listing) {
    document.getElementById('caravanTitle').textContent = listing.title;
    document.getElementById('caravanImage').src = listing.imageUrl;
    document.getElementById('caravanDescription').textContent = listing.description;
    document.getElementById('caravanPrice').textContent = `£${listing.price} per night`;
    document.getElementById('caravanLocation').textContent = listing.location;
    
    if (listing.videoUrl) {
        document.getElementById('caravanVideo').src = listing.videoUrl;
    } else {
        document.querySelector('.video-container').style.display = 'none';
    }
}

// Example function to save a new listing
function saveListing(listingData) {
    const listings = JSON.parse(localStorage.getItem('listings') || '[]');
    
    const newListing = {
        id: Date.now().toString(), // Simple unique ID
        ...listingData,
        createdAt: new Date().toISOString(),
        userId: JSON.parse(localStorage.getItem('currentUser'))?.email
    };
    
    listings.push(newListing);
    localStorage.setItem('listings', JSON.stringify(listings));
    return newListing.id;
}