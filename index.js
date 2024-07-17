let homeScore = 0;
let guestScore = 0;

function updateScore(team, points) {
    if (team === 'home') {
        homeScore += points;
        document.getElementById('homeScore').textContent = homeScore;
    } else if (team === 'guest') {
        guestScore += points;
        document.getElementById('guestScore').textContent = guestScore;
    }
    highlightLeader();
}

function highlightLeader() {
    const homeTeam = document.getElementById('homeTeam');
    const guestTeam = document.getElementById('guestTeam');

    if (homeScore > guestScore) {
        homeTeam.classList.add('highlight');
        guestTeam.classList.remove('highlight');
    } else if (guestScore > homeScore) {
        guestTeam.classList.add('highlight');
        homeTeam.classList.remove('highlight');
    } else {
        homeTeam.classList.remove('highlight');
        guestTeam.classList.remove('highlight');
    }
}