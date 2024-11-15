fetch('options_data.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n').slice(1); // Skip header row
        const table = document.getElementById('optionsTable').getElementsByTagName('tbody')[0];

        rows.forEach(row => {
            const cols = row.split(',');
            const newRow = table.insertRow();
            cols.forEach(col => {
                const newCell = newRow.insertCell();
                newCell.textContent = col;
            });
        });
    });