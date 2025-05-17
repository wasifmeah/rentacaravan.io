document.addEventListener('DOMContentLoaded', () => {
    // Check for update message
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('updated')) {
        const message = document.createElement('div');
        message.className = 'message success';
        message.textContent = 'Caravan updated successfully!';
        document.querySelector('.manage-container').insertBefore(
            message, 
            document.querySelector('.manage-actions')
        );
    }
});

function editCaravan(id) {
    window.location.href = `editcaravan.html?id=${id}`;
}

function deleteCaravan(id) {
    if (confirm('Are you sure you want to delete this caravan?')) {
        // In a real app, this would make an API call
        console.log(`Deleting caravan ${id}`);
        // Refresh the page or remove the element
        window.location.reload();
    }
}