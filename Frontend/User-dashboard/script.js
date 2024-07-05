document.addEventListener('DOMContentLoaded', function () {
    const uploadInput = document.createElement('input');
    uploadInput.type = 'file';
    uploadInput.style.display = 'none';
    document.body.appendChild(uploadInput);

    const profilePictureSidebar = document.querySelector('.profile-picture');
    const mainContent = document.getElementById('main-content');

    // Initialize the main content with the dashboard content
    updateMainContent('dashboard');

    // Handle profile picture change
    document.body.addEventListener('click', function (e) {
        if (e.target && e.target.id === 'edit-profile-picture') {
            e.preventDefault();
            uploadInput.click();
        }
    });

    uploadInput.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const newProfilePicture = e.target.result;
                profilePictureSidebar.src = newProfilePicture;
                const profilePictureMain = document.querySelector('.profile-edit-picture');
                if (profilePictureMain) {
                    profilePictureMain.src = newProfilePicture;
                }
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle menu option click
    const menuOptions = document.querySelectorAll('.menu-option');

    menuOptions.forEach(option => {
        option.addEventListener('click', function (e) {
            e.preventDefault();
            menuOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            const section = this.getAttribute('data-section');
            updateMainContent(section);
        });
    });

    function updateMainContent(section) {
        let content = '';
        switch (section) {
            case 'dashboard':
                content = `
                    <div class="profile-edit">
                        <img src="${profilePictureSidebar.src}" alt="Profile Picture" class="profile-edit-picture">
                        <span class="username">@thisisashishshah</span>
                        <a href="#" id="edit-profile-picture" class="edit-profile-link">Edit profile picture</a>
                    </div>
                    <form class="edit-form">
                        <label for="name">Name</label>
                        <input type="text" id="name" value="Ashish Shah">
                        
                        <label for="email">Email</label>
                        <input type="email" id="email" value="thisisashishshah@gmail.com">
                        
                        <label for="phone">Phone</label>
                        <input type="tel" id="phone" value="7987465729">
                        
                        <label for="password">Password</label>
                        <input type="password" id="password" value="**********">
                        
                        <button type="submit">Edit info</button>
                    </form>
                `;
                break;
            case 'raise-complaint':
                content = `
                    <h2>Raise Complaint</h2>
                    <form class="complaint-form">
                        <label for="complaint-subject">Subject</label>
                        <input type="text" id="complaint-subject" placeholder="Enter subject">
                        
                        <label for="complaint-description">Description</label>
                        <textarea id="complaint-description" placeholder="Enter description"></textarea>
                        
                        <button type="submit">Submit Complaint</button>
                    </form>
                `;
                break;
            case 'pending-complaint':
                content = `
                    <h2>Pending Complaint</h2>
                    <div class="complaints-list">
                        <!-- Pending complaints will be listed here -->
                        <p>No pending complaints.</p>
                    </div>
                `;
                break;
            case 'completed-complaint':
                content = `
                    <h2>Completed Complaint</h2>
                    <div class="complaints-list">
                        <!-- Completed complaints will be listed here -->
                        <p>No completed complaints.</p>
                    </div>
                `;
                break;
            default:
                content = '<h2>Welcome to User Dashboard</h2>';
        }
        mainContent.innerHTML = content;
    }
});
