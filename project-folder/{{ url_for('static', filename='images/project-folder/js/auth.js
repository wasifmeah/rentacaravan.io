document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.email.value;
    const password = this.password.value;
    
    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if user exists
    const user = users.find(u => u.email === email && u.password === password);
    
    const messageElement = document.getElementById('loginMessage');
    
    if (user) {
        // Store login session
        localStorage.setItem('currentUser', JSON.stringify({
            email: user.email,
            username: user.username,
            loginTime: new Date().toISOString()
        }));
        
        messageElement.textContent = 'Login successful! Redirecting...';
        messageElement.style.color = 'green';
        
        // Redirect to listings page after short delay
        setTimeout(() => {
            window.location.href = 'listings.html';
        }, 1500);
    } else {
        messageElement.textContent = 'Invalid email or password';
        messageElement.style.color = 'red';
    }
});