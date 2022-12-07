console.log("in signin.js file")
$("#signinForm").submit(function (e) {
    e.preventDefault();
    console.log("here 1")
    $("#btnSignin").html("<i class = 'fa fa-spinner fa-spin'></i> Please Wait").css('margin', '10px');
    $("#btnSignin").attr("disabled", "disabled");

    userName = $("#userName").val();
    password = $("#password").val();

    var dataObject = {
        userName,
        password
    }

    $.ajax({
        url: "https://compupharmbackendservice.azurewebsites.net/api/Users/Login",
        data: dataObject,
        type: "POST",
        dataType: 'json',
        success: function (response) {
            console.log(response)
            if (response.statusCode === "0") {
                swal("Logged in!", "", "success").then(() => {
                    window.location.href = "/";
                });
            }
        },
        error: function (response) {
        }
    });

})