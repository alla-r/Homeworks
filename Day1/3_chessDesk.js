function getChessBoard(rows, columns, sign) {
  let chessBoard = '';

  for (let i = 0; i < rows; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < columns; j++) {
        if (j % 2 === 0) {
          chessBoard += sign;
        } else {
          chessBoard += ' ';
        }
      }
    } else {
      for (let j = 0; j < columns; j++) {
        if (j % 2 === 0) {
          chessBoard += ' ';
        } else {
          chessBoard += sign;
        }
      }
    }
    
    chessBoard += '\n';
  }

  setOutput(`<pre>${chessBoard}</pre>`);
}

document.querySelector("#submit").addEventListener('click', () => {
  const height = document.querySelector('#height-chess').value.trim();
  const width = document.querySelector('#width-chess').value.trim();
  const sign = document.querySelector('#symbol-chess').value.trim();

  if (height && width && sign) {
    getChessBoard(+height, +width, sign);
  } else {
    setOutput('You need to fill all fields before submit')
  }
});

function setOutput(result) {
  const output = document.querySelector('.output');
  output.innerHTML = result;
}