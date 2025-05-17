document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    // Update navigation
    document.getElementById('userMenu').textContent = `Welcome, ${currentUser.username}`;
    
    // Load and display listings
    displayListings();
    
    // Handle logout
    document.getElementById('logoutBtn').addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    });
});

function displayListings() {
    const listings = JSON.parse(localStorage.getItem('listings') || '[]');
    const listingsGrid = document.getElementById('listingsGrid');
    
    if (listings.length === 0) {
        listingsGrid.innerHTML = '<p class="no-listings">No caravans available at the moment.</p>';
        return;
    }
    
    listingsGrid.innerHTML = listings.map(listing => `
        <div class="listing-card">
            <img src="${listing.imageUrl || 'images/placeholder.jpg'}" alt="${listing.title}">
            <div class="listing-content">
                <h3>${listing.title}</h3>
                <p>${listing.description.substring(0, 100)}...</p>
                <p class="listing-price">£${listing.price} per night</p>
                <a href="listing_detail.html?id=${listing.id}" class="btn-secondary">View Details</a>
            </div>
        </div>
    `).join('');
}