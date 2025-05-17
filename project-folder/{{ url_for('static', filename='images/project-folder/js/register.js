document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        id: Date.now().toString(),
        username: this.username.value,
        firstName: this.first_name.value,
        lastName: this.last_name.value,
        title: this.title.value,
        email: this.email.value,
        password: this.password.value,
        telephone: this.telephone.value,
        address1: this.address1.value,
        address2: this.address2.value,
        postcode: this.postcode.value,
        createdAt: new Date().toISOString()
    };

    // Get existing users or initialize empty array
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if email already exists
    if (users.some(user => user.email === formData.email)) {
        showMessage('Email already registered', 'error');
        return;
    }

    // Add new user
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Store current user session
    localStorage.setItem('currentUser', JSON.stringify({
        id: formData.id,
        username: formData.username,
        email: formData.email
    }));
    
    showMessage('Account created successfully!', 'success');
    
    // Redirect to listings page after 1.5 seconds
    setTimeout(() => {
        window.location.href = 'listings.html';
    }, 1500);
});

function showMessage(text, type) {
    const messageElement = document.getElementById('registerMessage');
    messageElement.textContent = text;
    messageElement.className = `message ${type}`;
}