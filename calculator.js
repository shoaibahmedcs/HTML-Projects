document.getElementById('display').disabled = true;

function clearScreen() {
    document.getElementById('display').value = '';
}

function DelEndNum() {
    var currently = document.getElementById('display').value;
    document.getElementById('display').value = currently.slice(0, -1);
}

function ch(ch) {
    var display = document.getElementById('display');
    var currentValue = display.value;

    if(/[+\-*/%]/.test(ch) && /[+\-*/%]$/.test(currentValue)) {
        return;
    }

    display.value += ch;
}

function ans() {
    try {
        var screen = document.getElementById('display').value;
        var result = eval(screen);
        if (isNaN(result) || !isFinite(result))
            throw new Error('Invalid Input');
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (/[0-9+\-*/%=]|Enter|Escape/.test(key)) {
        event.preventDefault();

        if (key === 'Enter') {
            ans();
        } else if (key === 'Escape') {
            clearScreen();
        } else if (key === 'Backspace') {
            DelEndNum();
        } else {
            ch(key);
        }
    }
});
