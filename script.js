const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const dashboardSection = document.getElementById('dashboard-section');
const welcomeMessage = document.getElementById('welcome-message');
const patientRecords = document.getElementById('patient-records');
const gpayQR = document.getElementById('gpay-qr');
const upiIdSpan = document.getElementById('upi-id');
const amountInput = document.getElementById('amount');

// Get environment variables (replace with your actual values or a server-side solution)
const googleSheetURL = `https://docs.google.com/spreadsheets/d/${'https://docs.google.com/spreadsheets/d/1Joiu_Wk9g17IpUDb5q9j6Tz-qXaDDLu612Bq5OVnjpg/edit?usp=sharing'}/pubhtml`; // Replace!
const gpayQRURL = 'https://drive.google.com/file/d/1w0MZTkXgXXZK0z7ZYSxQhnYffg_Qsmjt/view?usp=drive_link'; // Replace!
const upiID = 'vmtamilnadu1@okicici'; // Replace!


registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})
}

function handlePayment() {
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
        window.open(`upi://pay?pa=${upiID}&pn=AMedBill&mc=&tid=&tr=&tn=Healthcare Payment&am=${amount}&cu=INR`);
    } else {
        alert("Enter a valid amount");
    }
}
