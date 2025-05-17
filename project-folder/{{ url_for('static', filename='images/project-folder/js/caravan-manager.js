document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('caravanForm');
    const formTitle = document.getElementById('formTitle');
    const saveBtn = document.getElementById('saveBtn');
    const deleteBtn = document.getElementById('deleteBtn');
    
    // Check if we're editing an existing caravan
    const params = new URLSearchParams(window.location.search);
    const caravanId = params.get('id');
    
    if (caravanId) {
        // Load existing caravan data
        const listings = JSON.parse(localStorage.getItem('listings') || '[]');
        const caravan = listings.find(l => l.id === caravanId);
        
        if (caravan) {
            formTitle.textContent = 'Edit Caravan';
            saveBtn.textContent = 'Update Caravan';
            deleteBtn.style.display = 'block';
            
            // Fill form with existing data
            form.name.value = caravan.title;
            form.description.value = caravan.description;
            form.price.value = caravan.price;
            form.location.value = caravan.location;
        }
    }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            title: form.name.value,
            description: form.description.value,
            price: parseFloat(form.price.value),
            location: form.location.value,
            imageUrl: form.images.files.length > 0 ? URL.createObjectURL(form.images.files[0]) : null
        };
        
        const listings = JSON.parse(localStorage.getItem('listings') || '[]');
        
        if (caravanId) {
            // Update existing caravan
            const index = listings.findIndex(l => l.id === caravanId);
            if (index !== -1) {
                listings[index] = { ...listings[index], ...formData };
            }
        } else {
            // Add new caravan
            listings.push({
                id: Date.now().toString(),
                ...formData,
                createdAt: new Date().toISOString(),
                userId: JSON.parse(localStorage.getItem('currentUser'))?.email
            });
        }
        
        localStorage.setItem('listings', JSON.stringify(listings));
        window.location.href = 'listings.html';
    });
    
    deleteBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this caravan?')) {
            const listings = JSON.parse(localStorage.getItem('listings') || '[]');
            const updatedListings = listings.filter(l => l.id !== caravanId);
            localStorage.setItem('listings', JSON.stringify(updatedListings));
            window.location.href = 'listings.html';
        }
    });
});