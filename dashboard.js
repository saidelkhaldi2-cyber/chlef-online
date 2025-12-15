// Sidebar Toggle Functionality
const openBtn = document.getElementById('open-btn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', () => {
    sidebar.style.left = '0';
});

closeBtn.addEventListener('click', () => {
    sidebar.style.left = '-250px';
});

// Display Date and Time
function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Africa/Algiers' // Algeria time zone
    };
    document.getElementById('date-time').textContent = now.toLocaleString('en-US', options);
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to set time immediately
