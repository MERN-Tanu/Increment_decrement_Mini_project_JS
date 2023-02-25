const countValue = document.getElementById('counter');
function increment () {
    // get the value from UI
    let value = parseInt(countValue.innerText);
    value = value +1;
    // set the value onto UI
    countValue.innerText = value;
};

function decrement () {
    // get the value from UI
    let value = parseInt(countValue.innerText);
    // updating the value
    value = value -1;
    // set the value onto UI
    countValue.innerText = value;
};

