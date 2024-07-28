document.addEventListener('DOMContentLoaded', (event) => {
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
