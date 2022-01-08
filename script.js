heroElement = document.getElementById('hero')
var hero = {
    x: 300,
    y: 300
}

var enemies = [{x:50, y:50}, {x:250, y:50}, {x:450, y:200}];
var bullets = [];

function displayHero() {
    heroElement.style['left'] = hero.x + 'px'
    heroElement.style['top'] = hero.y + 'px'
}

function displayEnemies() {
    var output = '';
    for (let i = 0; i < enemies.length; i++) {
        output += `<div class='enemy1' style='top:${enemies[i].y}px; \
        left:${enemies[i].x}px;'></div>`;
    }
    document.getElementById('enemies').innerHTML = output;
}

function moveEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].y +=5;
        if (enemies[i].y > 540) {
            enemies[i].y = 0;
            enemies[i].x = Math.random()*500;
        }
    }
}
function moveBullets() {
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].y -=5;
        if (bullets[i].y<0) {
            bullets[i] = bullets[bullets.length-1]
            bullets.pop();
        }
    }
}

function displayBullets() {
    var output = '';
    for (let i = 0; i < bullets.length; i++) {
        output += `<div class='bullet' style='top:${bullets[i].y}px; \
        left:${bullets[i].x}px;'></div>`;
    }
    document.getElementById('bullets').innerHTML = output;
}

function gameLoop() {
    displayHero();
    moveEnemies();
    displayEnemies();
    moveBullets();
    displayBullets();
}

setInterval(gameLoop, 20)

document.onkeydown = function(e) {
    switch(e.key) {
        case 'ArrowLeft': hero.x -= 10; break;
        case 'ArrowRight': hero.x += 10; break;
        case 'ArrowUp': hero.y -= 10; break;
        case 'ArrowDown': hero.y += 10; break;
        case ' ': bullets.push({x: hero.x+5,y: hero.y-13})
    }
    displayHero();
    displayEnemies();
}