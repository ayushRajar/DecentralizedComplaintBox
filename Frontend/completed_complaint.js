// Add event listener to all buttons with class "details-button"
document.querySelectorAll('.details-button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Displaying details for the complaint.');
    });
});
