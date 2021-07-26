function getBinarySum(input) {
  const binaryNum = input < 0 ? Number(input.slice(1)).toString(2) : Number(input).toString(2);
  const sum = binaryNum.split('').reduce((acc, cur) => Number(acc) + Number(cur));
  
  setOutput(sum);
}

document.querySelector("#submit").addEventListener('click', () => {
  const input = document.querySelector('#integer').value.trim();

  if (input) {
    getBinarySum(input);
  } else {
    setOutput('You need to fill the field before submit')
  }
});

function setOutput(result) {
  const output = document.querySelector('.output');
  output.innerHTML = result;
}