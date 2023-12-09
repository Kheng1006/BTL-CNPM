// yourscript.js
// data.js
const dataArray = [54, 55, 61, 29, 75, 58, 95, 11, 71, 40, 58, 84, 33, 69, 61, 10, 91, 21, 73, 45, 72, 50, 69, 25, 44, 75, 22, 91, 41, 71];
const dataArray1 = [82, 107, 116, 97, 114, 92, 124, 111, 122, 83, 95, 114, 75, 123, 88, 88, 117, 101, 80, 118, 102, 120, 68, 118, 117, 78, 111, 125, 90, 90];
const dataArray2 = [61, 65, 71, 63, 65, 62, 84, 66, 71, 37, 50, 67, 49, 83, 50, 46, 72, 60, 29, 80, 63, 74, 18, 82, 70, 33, 56, 81, 42, 47];

const studentAccessValue = sumArray(dataArray); // Replace with actual value
const papersPrintedValue = sumArray(dataArray1);       // Replace with actual value
const pagesBoughtValue = sumArray(dataArray2);    // Replace with actual value
    // Display values in the form fields
document.getElementById('studentAccess').value = studentAccessValue;
document.getElementById('papersPrinted').value = papersPrintedValue;
document.getElementById('pagesBought').value = pagesBoughtValue;

// Get the canvas element
const ctx = document.getElementById('lineChart').getContext('2d');

// Create a line chart
const lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({ length: dataArray.length }, (_, i) => i + 1), // Assuming x-axis labels are 1, 2, 3, ...
        datasets: [{
            label: 'Number of Student Accesses',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            data: dataArray,
        },
        {
            label: 'Number of Papers Printed',
            borderColor: 'rgba(0, 0, 192, 1)',
            borderWidth: 2,
            data: dataArray1,
        },
        {
            label: 'Number of Pages Bought',
            borderColor: 'rgba(75, 192, 0, 1)',
            borderWidth: 2,
            data: dataArray2,
        }
    
    
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}