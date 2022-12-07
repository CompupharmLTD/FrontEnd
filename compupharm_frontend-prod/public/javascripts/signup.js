console.log("in signup.js file")
$("#signupForm").submit(function (e) {
    e.preventDefault();
    console.log("here 1")
    $("#btnSignup").html("<i class = 'fa fa-spinner fa-spin'></i> Please Wait").css('margin', '10px');
    $("#btnSignup").attr("disabled", "disabled");

    function getBase64(file, onLoadCallback) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function () { resolve(reader.result); };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    var file = document.getElementById('file').files[0];
    var promise = getBase64(file);
    promise.then(function (result) {
        companyName = $("#companyName").val();
        companyAddress = $("#companyAddress").val();
        userName = $("#userName").val();
        password = $("#password").val();
        companyPhone = $("#companyPhone").val();
        email = $("#email").val();
        companyCertificate = result;

        console.log(companyCertificate)
        var dataObject = {
            companyName,
            companyAddress,
            userName,
            password,
            companyPhone,
            email,
            companyCertificate
        }

        $.ajax({
            url: "https://compupharmbackendservice.azurewebsites.net/api/Users/Create",
            data: dataObject,
            type: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            success: function (response) {
                console.log(response)
                if (response.statusCode === "0") {
                    swal("Account created!", "", "success").then(() => {
                        window.location.href = "/";
                    });
                }
            },
            error: function (response) {
            }
        });

    })
});