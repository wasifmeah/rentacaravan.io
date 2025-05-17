// Handle caravan management
function editCaravan(id) {
    window.location.href = `editcaravan.html?id=${id}`;
}

function deleteCaravan(id) {
    if (confirm('Are you sure you want to delete this caravan?')) {
        const caravans = JSON.parse(localStorage.getItem('caravans')) || [];
        const updatedCaravans = caravans.filter(caravan => caravan.id !== id);
        localStorage.setItem('caravans', JSON.stringify(updatedCaravans));
        location.reload();
    }
}

// Handle booking functionality
function showBookingForm() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        alert('Please log in to make a booking');
        window.location.href = 'login.html';
        return;
    }
    document.getElementById('bookingForm').style.display = 'block';
    document.querySelector('.booking-btn').style.display = 'none';
}

function hideBookingForm() {
    document.getElementById('bookingForm').style.display = 'none';
    document.querySelector('.booking-btn').style.display = 'block';
}

function calculateTotal() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const pricePerDay = parseInt(document.querySelector('.price').textContent.replace('£', ''));
    
    const days = (endDate - startDate) / (1000 * 60 * 60 * 24);
    if (days > 0) {
        const total = days * pricePerDay;
        document.getElementById('booking-total').textContent = `£${total}`;
    }
}