// Sample Data for Recent Borrowers
const recentBorrowers = [
    {
        name: "John Doe",
        book: "JavaScript: The Good Parts",
        timeBorrowed: "2024-12-01 10:00 AM",
        dueDate: "2024-12-07 10:00 AM"
    },
    {
        name: "Jane Smith",
        book: "Clean Code",
        timeBorrowed: "2024-11-30 02:30 PM",
        dueDate: "2024-12-06 02:30 PM"
    },
    {
        name: "Emily Brown",
        book: "You Don't Know JS",
        timeBorrowed: "2024-11-29 01:15 PM",
        dueDate: "2024-12-05 01:15 PM"
    }
];

// Populate Recent Borrowers Table
document.addEventListener("DOMContentLoaded", () => {
    const recentBorrowersTable = document.getElementById("recentBorrowers");

    recentBorrowers.forEach(borrower => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${borrower.name}</td>
            <td>${borrower.book}</td>
            <td>${borrower.timeBorrowed}</td>
            <td>${borrower.dueDate}</td>
        `;
        recentBorrowersTable.appendChild(row);
    });

    // Update Late Notifications (for demonstration purposes)
    document.getElementById("lateCount").innerText = 1; // Example: 1 late borrower
});
document.addEventListener("DOMContentLoaded", () => {
    const addBookForm = document.getElementById("addBookForm");

    // Handle form submission
    addBookForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the default form submission

        const bookTitle = document.getElementById("bookTitle").value;
        const bookAuthor = document.getElementById("bookAuthor").value;
        const bookCategory = document.getElementById("bookCategory").value;
        const publicationDate = document.getElementById("publicationDate").value;
        const bookQuantity = document.getElementById("bookQuantity").value;

        // Log form data (you can replace this with an API call to save data)
        console.log("Book Details:");
        console.log(`Title: ${bookTitle}`);
        console.log(`Author: ${bookAuthor}`);
        console.log(`Category: ${bookCategory}`);
        console.log(`Publication Date: ${publicationDate}`);
        console.log(`Quantity: ${bookQuantity}`);

        // Reset the form after submission
        addBookForm.reset();
        alert("Book added successfully!");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const lateReturnBorrowers = [
        { name: "John Doe", book: "The Great Gatsby", borrowedDate: "2024-11-01", dueDate: "2024-11-15", daysLate: 2 },
        { name: "Jane Smith", book: "1984", borrowedDate: "2024-11-03", dueDate: "2024-11-17", daysLate: 4 }
    ];

    const penaltyPerDay = 2; // $2 per day late
    const tbody = document.getElementById('lateReturnBorrowers');

    lateReturnBorrowers.forEach(borrower => {
        const penalty = borrower.daysLate * penaltyPerDay;
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${borrower.name}</td>
            <td>${borrower.book}</td>
            <td>${borrower.borrowedDate}</td>
            <td>${borrower.dueDate}</td>
            <td>${borrower.daysLate}</td>
            <td>$${penalty.toFixed(2)}</td>
        `;

        tbody.appendChild(row);
    });
});
