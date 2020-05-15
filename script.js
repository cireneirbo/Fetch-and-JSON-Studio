 //30 lines or less challenge
//const import json file 

 document.addEventListener("DOMContentLoaded", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        response.json().then( function(json) {
            const div = document.getElementById("container");
            div.innerHTML = `
                <ul>
                    <li>ID #: ${json.id}</li>
                    <li>Active: ${json.active}</li>
                    <li>First Name: ${json.firstName}</li>
                    <li>Last Name: ${json.lastName}</li>
                    <li>Skills: ${json.skills}</li>
                    <li>Hours In Space: ${json.hoursInSpace}</li>
                    <img src="${json.picture}" />
                </ul>
            `;
        });
    });
});
