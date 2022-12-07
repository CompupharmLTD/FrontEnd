console.log("in about.js")
$(document).ready(function () {
    console.log("here 1")
    $.ajax({
        url: 'https://compupharmbackendservice.azurewebsites.net/api/CompanyExecutive/ExecutiveList',
        type: "GET",
        dataType: "json",
        success: function (response) {
            let executives = response.data
            let child = ""
            for (let index = 0; index < executives.length; index++) {
                console.log("here 2")
                const executive = executives[index];
                console.log(executive)
                if (index == 0 || index % 2 == 0) {
                    child += `<div class="client_1">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <div class="image_7"><img src="${executive.image}" style="padding-bottom: 20px;"></div>
                                    </div>
                                    <div class="col-sm-9">
                                        <h1 class="loksans_text">${executive.title} ${executive.name}, ${executive.position}</h1>
                                        <p class="dolor_ipsum_text">${executive.fullDescription}</p>
                                        <p class="dolor_ipsum_text">${executive.email}</p>
                                    </div>
                                </div>
                            </div>`
                } else {
                    child += `<div class="client_2">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <div class="image_7"><img src="${executive.image}" style="padding-bottom: 20px;"></div>
                                    </div>
                                    <div class="col-sm-9">
                                        <h1 class="loksans_text">${executive.title} ${executive.name}, ${executive.position}</h1>
                                        <p class="dolor_ipsum_text">${executive.fullDescription}</p>
                                        <p class="dolor_ipsum_text">${executive.email}</p>
                                    </div>
                                </div>
                            </div>`
                }
                console.log("here 3")
                $("#parent").html(child)
            }
        },
        error: function (error) {
            console.log(`Error ${error}`);
        }
    });
})