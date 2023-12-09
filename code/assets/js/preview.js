function validateAndNavigate() {
    // Validate that all input fields are filled
    const inputs = ['dropdown1', 'dropdown2', 'dropdown3', 'dropdown4'];
    for (const inputId of inputs) {
        const inputValue = document.getElementById(inputId).value;
        if (inputValue.trim() === '') {
            alert('Please fill all fields before proceeding.');
            return;
        }
    }
    if (document.getElementById('dropdown4').value*document.getElementById('dropdown1').value > localStorage.getItem('pages')) {
        window.location.href = 'addPages.html';
        alert('You do not have enough pages to print this document.');
        return;
    }
    else{
        var remain = parseInt(localStorage.getItem('pages')) - document.getElementById('dropdown4').value * document.getElementById('dropdown1').value;
        localStorage.setItem('pages', remain);
        temp = localStorage.getItem('pagesPrinted');
        localStorage.setItem('pagesPrinted', parseInt(temp) + document.getElementById('dropdown4').value * document.getElementById('dropdown1').value);  
        window.location.href = 'printer.html';
    }
}