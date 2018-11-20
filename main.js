let winners = [];

function addRow(name, surname, email, phone) {
    let tableBody = document.getElementsByClassName('tbody')[0];
    let row = document.createElement('tr');
    row.innerHTML = '<td>' + name + '</td><td>' + surname + '</td><td>' + email + '</td><td>' + phone + '</td>';
    tableBody.appendChild(row)
}

function addMember(event) {
    event.preventDefault();
    let member = {};
    member.name = document.getElementById('name').value;
    member.surname = document.getElementById('surname').value;
    member.email = document.getElementById('email').value;
    member.phone = document.getElementById('phone').value;
    console.log(member);
    winners.push(member);
    console.log(winners);
    let inputs = document.getElementsByTagName('input');
    Array.from(inputs).forEach(function(item) {
            item.value = '';
        });
    addRow(member.name, member.surname, member.email, member.phone);
}

function winner(event) {
    let winIndex = Math.floor(Math.random()*winners.length);
    console.log(winIndex);
    document.getElementById('winner').innerHTML = winners[winIndex].name + ' ' + winners[winIndex].surname;
}

window.addEventListener('load', function () {
    let form = document.getElementById('form1');
    form.addEventListener('submit', addMember);
    let win = document.getElementById('newWinner');
    win.addEventListener('click', winner);
});