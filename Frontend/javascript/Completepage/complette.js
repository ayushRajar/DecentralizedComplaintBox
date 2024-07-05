document.addEventListener('DOMContentLoaded', function() {
    const complaints = [
        {
            title: "Poor Lighting Conditions in the Evening Study Area of the Library",
            sentBy: "Anonymous",
            assignedTo: "Vijay Ganesh",
            department: "Electrical & Electronics",
            status: "Completed",
            created: "05 June 2024"
        },
        {
            title: "Inadequate Number of Functional Computers in the Computer Lab",
            sentBy: "Anonymous",
            assignedTo: "Vijay Ganesh",
            department: "Electrical & Electronics",
            status: "Completed",
            created: "05 June 2024"
        },
        {
            title: "Lack of Accessibility Features for Disabled Students in the New Science Building",
            sentBy: "Anonymous",
            assignedTo: "Vijay Ganesh",
            department: "Electrical & Electronics",
            status: "Completed",
            created: "05 June 2024"
        }
    ];

    const complaintsContainer = document.getElementById('complaints');

    complaints.forEach(complaint => {
        const complaintElement = document.createElement('div');
        complaintElement.className = 'complaint';
        complaintElement.innerHTML = `
            <h3>${complaint.title}</h3>
            <p>Sent By: ${complaint.sentBy}</p>
            <p>Assigned To: ${complaint.assignedTo}</p>
            <p>Department: ${complaint.department}</p>
            <p>Status: ${complaint.status}</p>
            <p>Created: ${complaint.created}</p>
        `;
        complaintsContainer.appendChild(complaintElement);
    });
});
