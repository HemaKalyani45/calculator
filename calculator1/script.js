function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function deleteChar() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
  }
  
  function calculateResult() {
    let result = document.getElementById('result').value;
    let output;
    try {
      output = eval(result);
    } catch (error) {
      output = 'Error';
    }
    document.getElementById('result').value = output;
  }
  