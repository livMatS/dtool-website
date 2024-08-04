document.addEventListener('DOMContentLoaded', (event) => {
    const welcomeCover = document.querySelector('.welcome-cover');
    if (welcomeCover) {
        setTimeout(() => {
            welcomeCover.style.opacity = '0';
            setTimeout(() => {
                welcomeCover.style.display = 'none'; // Ensures the space is reclaimed
                welcomeCover.remove(); // Removes the element from the DOM
            }, 1000); // Wait for the fade-out transition
        }, 5000); // Display cover for 5 seconds
    }

    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        table.addEventListener('click', function(event) {
            const target = event.target;
            if (target.tagName === 'TD') {
                const originalContent = target.innerHTML;
                const input = document.createElement('input');
                input.type = 'text';
                input.value = originalContent;
                target.innerHTML = '';
                target.appendChild(input);
                input.focus();
                input.addEventListener('blur', function() {
                    target.innerHTML = input.value;
                });
                input.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter') {
                        input.blur();
                    }
                });
            }
        });
    });
});
