//Write a function that will take a short line of text, and write it to the 
//console log within a box.

// logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

//bread down drawing box into seperate functions
  //border
  //padding funciton
  // content funciton

function drawBorder(width) {
  let border = '+';
  for (let count = 0; count < width; count += 1) {
    border += '-';
  }
  border += '+';
  console.log(border);
}

function drawPadding(width) {
  let padding = '|';
  for (let count = 0; count < width; count += 1) {
    padding += ' ';
  }
  padding += '|';
  console.log(padding);
}

function drawContent(text) {
  let contentLine = '| ';
  for (let index = 0; index < text.length; index += 1) {
    contentLine += text[index];
  }
  console.log(contentLine += ' |');
}

function logInBox(text) {
  let boxWidth = text.length + 2;
  drawBorder(boxWidth);
  drawPadding(boxWidth);
  drawContent(text);
  drawPadding(boxWidth);
  drawBorder(boxWidth);
}

logInBox('To bodly go where no one has gone before.', 5);
logInBox('');