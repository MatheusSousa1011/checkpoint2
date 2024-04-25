    function digit(value) {
        document.getElementById('result').value += value;
    }
    
    function equals() {
        var result = document.getElementById('result').value;
        var answer = eval(result);
        document.getElementById('result').value = answer;
    }

    function clearAll() {
        document.getElementById('result').value = '';
    }
    
    function addFloat() {
        var currentValue = document.getElementById('result').value;
        
        if (!currentValue.includes('.')) {
        document.getElementById('result').value += '.';
        }
        }
    
    function add() {
        document.getElementById('result').value += '+';
    }
    
    function subtract() {
        document.getElementById('result').value += '-';
    }
    
    function multiply() {
        document.getElementById('result').value += '*';
    }
    
    function divide() {
        document.getElementById('result').value += '÷';
    }
    
        document.addEventListener('keydown', function(event) {
            
        var key = event.key;
            
    if (!isNaN(parseInt(key)) || key === '+' || key === '-' || key === 'x' || key === '*' || key === '/' || key === '.') {
    digit(key);
    } else if (key === 'Enter' || key === '=') {
    equals();
    } else if (key === 'Escape') {
    clearAll();
    }
});