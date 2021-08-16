// Calling submit button 
document.getElementById('submit').addEventListener('click', function () {
    // initializing mail 
    const mailInput = document.getElementById('email');
    const myMail = mailInput.value;
    // initializing pass 
    const passInput = document.getElementById('password');
    const myPass = passInput.value;
    // Button enable
    // checking Validity 
    if (myMail == 'ami@tomarabbu.com' && myPass == 'bolbonah') {
        window.location.href = 'dashboard.html';
    }
    else {
        window.alert('mail and pass didnt matched');
    }
})
