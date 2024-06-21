document.getElementById('dropdownBtn').addEventListener('click', function() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function(event) {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const dropdownBtn = document.getElementById('dropdownBtn');
    if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});

const menuItems = document.querySelectorAll('#dropdownMenu p');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        document.getElementById('menuItems').innerText = this.innerText;
    });
});
