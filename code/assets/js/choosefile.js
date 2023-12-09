// let pages equal a value that i store in a file
// localStorage.setItem('pages', 0);
// localStorage.setItem('pagesPrinted', 0);
var printingData = [
    { index: 1, mssv: '2152001', document: 'nerf-from-nothing.pdf', date: '2023-11-29', time: '10:30 AM'},
    // Add more data as needed
];

// Additional data
var additionalData = [
    { index: 2, mssv: '2152001', document: '10.1002@mcda.1693.pdf', date: '2023-11-30', time: '2:45 PM'},
    { index: 3, mssv: '2152001', document: 'Assignment 2 task.pdf', date: '2023-12-01', time: '9:15 AM'},
    { index: 4, mssv: '2152001', document: 'nerf-from-nothing.pdf', date: '2023-12-01', time: '9:15 AM'},
    { index: 5, mssv: '2152001', document: '10.1002@mcda.1693.pdf', date: '2023-12-01', time: '9:15 AM'},
    { index: 6, mssv: '2152001', document: 'LSD.pdf', date: '2023-12-01', time: '9:15 AM'},
    // Add more rows as needed
];

// Combine the existing data with the additional data
var allData = printingData.concat(additionalData);

// Function to populate the table with data
function populateTable(data) {
    var tableBody = document.getElementById('printingHistory').getElementsByTagName('tbody')[0];
    data.forEach(function (entry) {
        var row = tableBody.insertRow(-1);

        // Add cells for each property in the entry
        Object.keys(entry).forEach(function (key) {
            var cell = row.insertCell(-1);
            cell.textContent = entry[key];
        });

        // Add a cell for the "tick" button with a redirect link
        var tickCell = row.insertCell(-1);
        var tickButton = document.createElement('a');
        tickButton.innerHTML = '<i class="fa fa-check"></i>';
        tickCell.appendChild(tickButton);
        tickButton.addEventListener('click', function () {
            handleTickButtonClick(entry);
        });
    });
}

// Populate the table with sample data
populateTable(allData);

function searchDocumentByName() {
    var documentNameInput = document.getElementById('documentName');
    var documentName = documentNameInput.value.trim().toLowerCase();

    // Clear previous search results
    clearTable();

    // Filter data based on document name
    var searchResults = allData.filter(function (entry) {
        return entry.document.toLowerCase().includes(documentName);
    });

    // Display search results
    populateTable(searchResults);

    // Update page status based on search results
    updatePageStatus(100, calculatePrintedPages(searchResults));
}

function searchDocumentByPrintDate() {
    var printDateInput = document.getElementById('printDate');
    var printDate = printDateInput.value;

    // Clear previous search results
    clearTable();

    // Filter data based on print date
    var searchResults = allData.filter(function (entry) {
        return entry.date === printDate;
    });

    // Display search results
    populateTable(searchResults);

    // Update page status based on search results
    updatePageStatus(100, calculatePrintedPages(searchResults));
}

// Function to clear the table
function clearTable() {
    var tableBody = document.getElementById('printingHistory').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
}

function handleFile(row) {
    const fileName = row.document
    
}

function handleTickButtonClick(entry) {
    // Example: Log the entry data to the console
    const encodedFileName = encodeURIComponent(entry.document);
    window.location.href = "preview.html?fileName=" + encodedFileName;
}

