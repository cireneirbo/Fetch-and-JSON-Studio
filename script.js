document.addEventListener("DOMContentLoaded", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        response.json().then( function(json) {
            const div = document.getElementById("container");
            for (let i = 0; i < json.length; i++) {
                div.innerHTML += `
                    <fieldset>
                        <li>ID #: ${json[i].id}</li>
                        <li>Active: ${json[i].active}</li>
                        <li>First Name: ${json[i].firstName}</li>
                        <li>Last Name: ${json[i].lastName}</li>
                        <li>Skills: ${json[i].skills}</li>
                        <li>Hours In Space: ${json[i].hoursInSpace}</li>
                        <img class="images" src="${json[i].picture}" />
                    </fieldset>
                `;                
            }            
        });
    });
});
