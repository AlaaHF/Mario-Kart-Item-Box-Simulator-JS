// Mario Kart Item Box Simulator

// Global Variables
let numBanana = 0;
let numGreen = 0;
let numStar = 0;
let numGolden = 0;
let numBullet = 0;
let position;

// Event Listener
document.getElementById('main-img').addEventListener('click', generateItem);
document.getElementById('reset').addEventListener('click', resetPage);


// Event Function
function resetPage() {
    document.getElementById('results').innerHTML = '';
    document.getElementById('input').value = '';
    numBanana = 0;
    document.getElementById('banana').innerHTML = '0';
    numGreen = 0;
    document.getElementById('green').innerHTML = '0';
    numStar = 0;
    document.getElementById('star').innerHTML = '0';
    numGolden = 0;
    document.getElementById('golden').innerHTML = '0';
    numBullet = 0;
    document.getElementById('bullet').innerHTML = '0';
}

function generateItem() {
    position = Number(document.getElementById('input').value);
    console.log('position is' + position);
    // Generate Random Number
    let randNum = Math.random();

    // if position is less than or equal to 6
    if (position <= 6) {
        console.log('1-6');
        if (randNum <= 0.45) {
            numBanana += 1;
            document.getElementById('banana').innerHTML = numBanana;
            document.getElementById('results').innerHTML += '<img src ="images/Banana_Mario_Kart_.png">';
            
            console.log('numBanana' + numBanana);
        } else if (randNum <= 0.80) {
            numGreen += 1;
            document.getElementById('green').innerHTML = numGreen;
            document.getElementById('results').innerHTML += '<img src ="images/Green-shell.png">';
            
        } else if (randNum <= 0.95) {
            numStar += 1;
            document.getElementById('star').innerHTML = numStar;
            document.getElementById('results').innerHTML += '<img src ="images/Star.png">';
            
        } else if (randNum <= 0.99) {
            numGolden += 1;
            document.getElementById('golden').innerHTML = numGolden;
            document.getElementById('results').innerHTML += '<img src ="images/Golden_Mushroom.png">';
            
        } else {
            numBullet += 1;
            document.getElementById('bullet').innerHTML = numBullet;
            document.getElementById('results').innerHTML += '<img src ="images/Bullet_Bill_Wii.png">';
            
        }
    } else {
        console.log('7-12');
        if (randNum <= 0.05) {
            numBanana += 1;
            document.getElementById('banana').innerHTML = numBanana;
            document.getElementById('results').innerHTML += '<img src ="images/Banana_Mario_Kart_.png">';
            
        } else if (randNum <= 0.10) {
            numGreen += 1;
            document.getElementById('green').innerHTML = numGreen;
            document.getElementById('results').innerHTML += '<img src ="images/Green-shell.png">';
            
        } else if (randNum <= 0.35) {
            numStar += 1;
            document.getElementById('star').innerHTML = numStar;
            document.getElementById('results').innerHTML += '<img src ="images/Star.png">';
            
        } else if (randNum <= 0.70) {
            numGolden += 1;
            document.getElementById('golden').innerHTML = numGolden;
            document.getElementById('results').innerHTML += '<img src ="images/Golden_Mushroom.png">';
            
        } else {
            numBullet += 1;
            document.getElementById('bullet').innerHTML = numBullet;
            document.getElementById('results').innerHTML += '<img src ="images/Bullet_Bill_Wii.png">';
            
        }
    }
}