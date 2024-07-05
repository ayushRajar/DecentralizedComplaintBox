document.addEventListener('DOMContentLoaded', function() {
    const departmentSelect = document.getElementById('department-select');
    const individualSelect = document.getElementById('individual-select');

    // Adding options to the department select dropdown
    const departments = ['CS', 'EC', 'EE', 'CV', 'ME'];
    departments.forEach(department => {
        const option = document.createElement('option');
        option.value = department;
        option.textContent = department;
        departmentSelect.appendChild(option);
    });

    // Adding options to the individual select dropdown
    const individuals = ['HOD', 'PRINCIPAL'];
    individuals.forEach(individual => {
        const option = document.createElement('option');
        option.value = individual;
        option.textContent = individual;
        individualSelect.appendChild(option);
    });

    document.getElementById('assign-button').addEventListener('click', function() {
        const department = departmentSelect.value;
        const individual = individualSelect.value;

        if (department === "Select Department" || individual === "Assign to Individual") {
            alert('Please select both a department and an individual to assign the complaint.');
        } else {
            // Code to assign the complaint
            alert(`Complaint assigned to ${individual} in the ${department} department.`);
        }
    });

    document.getElementById('close-button').addEventListener('click', function() {
        // Code to close the complaint form
        alert('Closing the complaint form.');
    });
});
