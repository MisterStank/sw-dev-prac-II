function validateForm() {
    var companyName = document.getElementById("companyName").value;
    var contactName = document.getElementById("contactName").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var boothSize = document.getElementById("boothSize").value;
    var numChairs = parseInt(document.getElementById("numChairs").value);

    if (companyName === "" || contactName === "" || contactNumber === "") {
        alert("Company name, contact name, and contact number cannot be blank.");
        return false;
    }

    if (boothSize === "") {
        alert("Please select a booth size.");
        return false;
    }

    if (numChairs > 10) {
        alert("Number of chairs cannot exceed 10.");
        return false;
    }

    return true;
}