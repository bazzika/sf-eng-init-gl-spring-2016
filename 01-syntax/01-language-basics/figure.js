var pyramid = '';
var scale = 30;
var i;
var j;
for (i = 0; i <= scale / 8; i++) {
  for (j = 0; j <= scale; j++) {
    if ((j > (scale / 2 - i)) && (j < (scale / 2 + i))) {
      pyramid += '#';
    } else {
      pyramid += ' ';
    }
  }
  console.log(pyramid);
  pyramid = '';
}
for (i = 3; i <= scale / 4; i++) {
  for (j = 0; j <= scale; j++) {
    if ((j > (scale / 2 - i)) && (j < (scale / 2 + i))) {
      pyramid += '#';
    } else {
      pyramid += ' ';
    }
  }
  console.log(pyramid);
  pyramid = '';
}
for (i = 6; i <= scale / 2; i++) {
  for (j = 0; j <= scale; j++) {
    if ((j > (scale / 2 - i)) && (j < (scale / 2 + i))) {
      pyramid += '#';
    } else {
      pyramid += ' ';
    }
  }
  console.log(pyramid);
  pyramid = '';
}
