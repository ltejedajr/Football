"use strict";

window.onload = function () {
  initDropdown();
}

function initTeamsDropDown() {

  let teams = [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
  ];

  const footballTeamList = document.getElementById("footballTeamList");

  let numTeams = teams.length;
  for (let i = 0; i < numTeams; i++) {

    let options = new Option(numTeams[i].name, numTeams[i].code)

    footballTeamList.appendChild(options);
  }
}
