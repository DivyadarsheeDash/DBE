function showSection(id) {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Local arrays to simulate DB
const owners = [];
const vehicles = [];
const violations = [];
const payments = [];

// Add Owner
document.getElementById('ownerForm').addEventListener('submit', e => {
    e.preventDefault();
    const owner = {
        name: ownerName.value,
        address: ownerAddress.value,
        license: licenseNo.value,
        contact: contactNo.value
    };
    owners.push(owner);
    updateTable('ownerTable', owners);
    e.target.reset();
});

// Add Vehicle
document.getElementById('vehicleForm').addEventListener('submit', e => {
    e.preventDefault();
    const vehicle = {
        regNo: regNo.value,
        model: model.value,
        manufacturer: manufacturer.value,
        year: year.value
    };
    vehicles.push(vehicle);
    updateTable('vehicleTable', vehicles);
    e.target.reset();
});

// Add Violation
document.getElementById('violationForm').addEventListener('submit', e => {
    e.preventDefault();
    const violation = {
        vehicle: vehicleId.value,
        type: violationType.value,
        date: violationDate.value,
        location: location.value,
        fine: fineAmount.value
    };
    violations.push(violation);
    updateTable('violationTable', violations);
    e.target.reset();
});

// Add Payment
document.getElementById('paymentForm').addEventListener('submit', e => {
    e.preventDefault();
    const payment = {
        violation: violationId.value,
        amount: amountPaid.value,
        status: status.value
    };
    payments.push(payment);
    updateTable('paymentTable', payments);
    e.target.reset();
});

// Table updater
function updateTable(tableId, data) {
    const tbody = document.querySelector(`#${tableId} tbody`);
    tbody.innerHTML = '';
    data.forEach(row => {
        const tr = document.createElement('tr');
        Object.values(row).forEach(val => {
            const td = document.createElement('td');
            td.textContent = val;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}
