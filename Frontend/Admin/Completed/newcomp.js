document.addEventListener('DOMContentLoaded', function() {
    const complaints = [
        {
            title: "New Complaint 1",
            sentBy: "Anonymous",
            assignedTo: "Alice Brown",
            department: "Civil Engineering",
            status: "New",
            created: "03 July 2024"
        },
        {
            title: "New Complaint 2",
            sentBy: "Anonymous",
            assignedTo: "Bob White",
            department: "Electrical Engineering",
            status: "New",
            created: "04 July 2024"
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
