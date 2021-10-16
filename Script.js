const countelement = () => {
    let noc = document.getElementById('words').value.length;
    let now = document.getElementById('words').value;
    now = now.match(/\w+/g);
    now = now.length;
    document.getElementById('showchar').innerHTML = " The total Characters = " + noc;
    document.getElementById('showwords').innerHTML = " The total Words = " + now;
    var now2 = document.getElementById('words').value;

}