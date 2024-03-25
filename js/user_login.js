
$(document).ready(function() {
    
    //prevent default refresh of form 
    $("#login-form").submit(function(e) {
        e.preventDefault();
    });

    $("#register-form").submit(function(e) {
        e.preventDefault();
    });
    
    $('#log_me_in').click(function($event) {
        $event.preventDefault();
      login();
    });

    $('#register_new').click(function() {
      register_me();
    });

    $('#log_button').click(function()
    {
        logout();
    });

});

function logout()
{
    window.location = 'usr_login.html';
}

function register_me(){
    //get input data
    var name = document.getElementById("usr_name").value;
    var Password = document.getElementById("usr_pass").value;
    var Email = document.getElementById("usr_email").value;
    var Roll_number = document.getElementById("usr_roll").value;
    var date_of_birth = document.getElementById("usr_dob").value;
    var books = [];

    var userObj = {
        name: name,
        password: Password,
        email : Email,
        rollNumber : Roll_number,
        date_of_birth : date_of_birth,
        books : books
    }
    var prevUsers = JSON.parse(localStorage.getItem('users') || '[]');
    prevUsers.push(userObj);
    localStorage.setItem('users', JSON.stringify(prevUsers));
}

function login(){

    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(validatedUser(email, password))
    {
        window.location = 'user_portal.html';
        // setTimeout(() => {
        //     window.location = 'user_portal.html';
        // }, 1200)
        
    } else {
        window.alert('username or password invalid');
    }
}

function validatedUser(email, pass) {
    var prevUsers = JSON.parse(localStorage.getItem('users') || []);
    emailAvail = prevUsers.find(u => u.email == email);
    if(emailAvail) {
        return (emailAvail.email == email && emailAvail.password == pass);
    }
}

