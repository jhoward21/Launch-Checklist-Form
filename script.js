// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      let pName = document.querySelector("input[name=pilotName]");
      let cName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if(pName.value === "" || cName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("Make Sure All Fields Are Done!");
         event.preventDefault();
      }
      if(isNaN(fuelLevel.value)){
         alert("Please enter a number for this field!");
         event.preventDefault();
      }
      if(isNaN(cargoMass.value)){
         alert("Please enter a number for this field!");
         event.preventDefault();
      }
      let faultyItems = document.getElementById("faultyItems");
      faultyItems.style.visibility = "visible";
      let pilotName = document.getElementById("pilotStatus");
      pilotName.innerHTML = `Pilot ${pName.value} is ready for launch! `;
      let copilotName = document.getElementById("copilotStatus");
      copilotName.innerHTML = `Co-pilot ${cName.value} is ready for launch! `;
      event.preventDefault();
      if(fuelLevel.value < 10000){
         let gaslevel = document.getElementById("fuelStatus");
         gaslevel.innerHTML = `There's not enough fuel to launch!`;
         let title = document.getElementById("launchStatus");
         title.innerHTML = `Shuttle not ready for launch`;
         document.getElementById("launchStatus").style.color = "Red"; 
      }else if(cargoMass.value > 10000){
         let massWeight = document.getElementById("cargoStatus");
         massWeight.innerHTML = `You have too much cargo!`;
         let title = document.getElementById("launchStatus");
         title.innerHTML = `Shuttle not ready for launch`;
         document.getElementById("launchStatus").style.color = "Red"; 
      }else {
         let title = document.getElementById("launchStatus");
         title.innerHTML = `Shuttle ready for launch`;
         document.getElementById("launchStatus").style.color = "Green"; 
      }
   });
//Json Data
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         console.log(json);
         const div = document.getElementById("missionTarget");
            div.innerHTML += `
               <h2>Mission Destination</h2>
                  <ol>
                     <li>Name: ${json[0].name}</li>
                     <li>Diameter: ${json[0].diameter}</li>
                     <li>Star: ${json[0].star}</li>
                     <li>Distance from Earth: ${json[0].distance}</li>
                     <li>Number of Moons: ${json[0].moons}</li>
                  </ol>
                  <img id="missionTarget img" src="${json[0].image}">
            `;
      });
   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
