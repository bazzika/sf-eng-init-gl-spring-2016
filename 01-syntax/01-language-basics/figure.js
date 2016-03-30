var pyramid = "";
d = 50;
for (var j = 0; j <= d ; j++ ) {
  for (var i = 0; i <= d/2; i++){
    if ((j > (d/2-i))&&(j < (d/2+i))){
      pyramid += "#";
    } else {
      pyramid += " ";
    }
    /*if ((i > (d/2-j))&&(i < (d/2+j))){
      pyramid += "#";
    } else {
      pyramid += " ";
    }*/
  }
  for (var i = 0; i <= d/2; i++){
    if ((i > (d / 2 + j)) && (i < (d / 2 - j))) {
      pyramid += "#";
    } else {
      pyramid += " ";
    }
  }
    console.log(pyramid);
  pyramid = "";
}
/*for (var j = 0; j <= d ; j++ ) {
  for (var i = 0; i <= d; i++){
    if ((j > (d/2-i))&&(j < (d/2+i))){
      pyramid += "#";
    } else {
      pyramid += " ";
    }
  }
  console.log(pyramid);
  pyramid = "";
} */


