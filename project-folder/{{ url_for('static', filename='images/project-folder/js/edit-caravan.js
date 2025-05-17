document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const caravanId = urlParams.get('id');
    
    if (!caravanId) {
        window.location.href = 'manage-caravans.html';
        return;
    }

    // Load caravan data
    const caravans = JSON.parse(localStorage.getItem('caravans') || '[]');
    const caravan = caravans.find(c => c.id === caravanId);
    
    if (!caravan) {
        window.location.href = 'manage-caravans.html';
        return;
    }

    // Fill form with caravan data
    document.getElementById('title').value = caravan.title || '';
    document.getElementById('location').value = caravan.location || '';
    document.getElementById('price').value = caravan.price || '';
    document.getElementById('description').value = caravan.description || '';
    document.getElementById('image').value = caravan.image || '';

    // Handle form submission
    document.getElementById('editCaravanForm').addEventListener('submit', (e) => {
        e.preventDefault();

        // Update caravan data
        const updatedCaravan = {
            ...caravan,
            title: document.getElementById('title').value,
            location: document.getElementById('location').value,
            price: document.getElementById('price').value,
            description: document.getElementById('description').value,
            image: document.getElementById('image').value,
            lastModified: new Date().toISOString()
        };

        // Update in localStorage
        const updatedCaravans = caravans.map(c => 
            c.id === caravanId ? updatedCaravan : c
        );
        localStorage.setItem('caravans', JSON.stringify(updatedCaravans));

        // Redirect back to manage page
        window.location.href = 'manage-caravans.html?updated=true';
    });
});