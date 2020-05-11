//DOM Elements
const time = document.getElementById('time'),
    greetings = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

const showAmPm = true;


//Display time
function displayTime() {
    let day = new Date,
        hour = day.getHours(),
        min = day.getMinutes(),
        sec = day.getSeconds();
    
    //Show AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Show time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`

    setTimeout(displayTime, 1000)
}

// Adding zero to the time
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set background and greetings
function setBackgroundAndGreeting() {
    let day = new Date,
        hr = day.getHours();
    
    if (hr < 12) {
        //Morning
        document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
        greetings.textContent = 'Good Morning, ';
    }
    else if (hr < 18) {
        //Afternoon
        greetings.textContent = 'Good Afernoon, ';
    }
    else {
        //Evening
        greetings.textContent = 'Good Evening, ';
        document.body.style.color = 'white'
    }
}

// Get name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]'
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set name
function setName(e) {
    if (e.type === 'keypress') {
        //make sure enter is pressed
        if (e.which === 13 || e.keyCode === 13) {
            localStorage.setItem(name, e.target.innerText);
            name.blur();
        }
        else {
            localStorage.setItem(name, e.target.innerText);
        }
    }
}

// Get focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]'
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set set
function setFocus(e) {
    if (e.type === 'keypress') {
        //make sure enter is pressed
        if (e.which === 13 || e.keyCode === 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
        else {
            localStorage.setItem('focus', e.target.innerText);
        }
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

displayTime();
setBackgroundAndGreeting();
getName()
getFocus()