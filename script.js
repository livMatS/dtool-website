document.addEventListener('DOMContentLoaded', function () {
    // Highlight the active navigation link and underline it
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(link => {
                link.classList.remove('active');
                link.style.color = ''; // Reset color to default
                link.style.borderBottom = ''; // Remove underline
            });
            this.classList.add('active');
            this.style.color = '#4B0082'; // Set dark purple color
            this.style.borderBottom = '2px solid #4B0082'; // Underline active link
        });
    });

    // Make table cells editable on click
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
