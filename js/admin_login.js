//admin@123

$(document).ready(function(){

    $("#login-form").submit(function(e) {
        e.preventDefault();
    });

    $('#submit_data').click(function() {
      login();
    });

    $('#back_button').click(function()
    {
        logout();
    });
})
function login(){
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(email === "admin@gmail.com" && password == 'admin@123')
    {
        window.location = 'admin_portal.html'; //After successful login, user will be redirected to home.html
    } else {
        window.alert("invalid admin credentials, get your authority checked");
    }
    
}
function logout()
{
    window.location = 'index.html';
}