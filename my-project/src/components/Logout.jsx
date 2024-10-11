function logoutUser() {
    fetch('/logout/', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken'), // If you use JWT for authentication
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            // Clear the token from localStorage and redirect the user
            localStorage.removeItem('accessToken');
            alert(data.message);
            window.location.href = '/login/';
        }
    })
    .catch(error => console.error('Error logging out:', error));
}
