console.log("in outlets.js")
$(document).ready(function () {
    console.log("here 1")
    $.ajax({
        url: 'https://compupharmbackendservice.azurewebsites.net/Api/Outlets/OutletList',
        type: "GET",
        dataType: "json",
        success: function (response) {
            let outlets = response.data
            let child = ""
            for (let index = 0; index < outlets.length; index++) {
                console.log("here 2")
                const outlet = outlets[index];
                console.log(outlet)
                // child += `<div class="grid">
                //             <section class="venue-theatre">
            
                //                 <div class="col-1-3">
                //                     <h2 style="color: #172F5E;">${outlet.name}</h2>
                //                     <p>${outlet.street} <br> ${outlet.city}, ${outlet.state}</p>
                //                     <p>${outlet.phoneNumber}</p>
                //                 </div><!--
                //                 --><iframe class="venue-map col-2-3" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBlC_mOS1A0Y9J-ZZgIzGKKXqNbpzy6Fpg&q=Ikeja+City+Mall, Ikeja+Nigeria" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                //             </section>
                //         </div>`
                child += `
                <tr>
                <td>${index + 1}</td>
                <td>${outlet.name}</td>
                <td>${outlet.email}</td>
                <td>${outlet.phoneNumber}</td>
                <td>${outlet.street}</td>
                <td>${outlet.city}</td>
                <td>${outlet.state}</td>
                <td>${outlet.country}</td>
                </tr>
                `;
                console.log("here 3")
                $("#parent").html(child)
            }
        },
        error: function (error) {
            console.log(`Error ${error}`);
        }
    });
})