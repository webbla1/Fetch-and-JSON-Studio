window.addEventListener("load", async ()=> {
    const response = await fetch("https://handlers.education.launchcode.org/static/astronauts.json");
    const json = await response.json();
    const astronauts = document.getElementById("container");
    astronauts.innerHTML = `
        <h3>Total Astronauts: ${json.length}</h3>
        `;
        const sortedAstros = json.sort(
            (a,b) => b.hoursInSpace - a.hoursInSpace
        );
    for (let astronaut of json) {
        if (astronaut.active) {
            astronauts.innerHTML += `
            <div class = "astronaut">
                <div class="bio">
                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                <ul>
                    <li>Hours in Space: ${astronaut.hoursInSpace}</li>
                    <li style="color:green">Active: ${astronaut.active}</li>
                    <li>Skills: ${astronaut.skills.join(', ')}</li>
                </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}" />
            </div>
            `;
        } else {astronauts.innerHTML += `
            <div class = "astronaut">
                <div class="bio">
                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                <ul>
                    <li>Hours in Space: ${astronaut.hoursInSpace}</li>
                    <li>Active: ${astronaut.active}</li>
                    <li>Skills: ${astronaut.skills.join(', ')}</li>
                </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}" />
            </div>
            `;}
    }
});