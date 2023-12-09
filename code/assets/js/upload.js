function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        window.location.href = `/templates/preview.html?filename=${encodeURIComponent(file)}`;
    } else {
        alert('Please select a valid file.');
    }
}
