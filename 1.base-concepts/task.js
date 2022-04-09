function solveEquation(a, b, c) {
  let arr = [];
  let D;
  D = Math.pow(b,2)-4*a*c;
  if(D == 0){
    x1 =(-(b)/(2*a));
    arr.push(x1);
  }
  else if(D>0){
    x1 =(-b+(Math.sqrt(D)))/(2*a);
    x2 =(-b-(Math.sqrt(D)))/(2*a);
    arr.push(x1);
    arr.push(x2);
  }
  else if(D<0){
    return []
  }
  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  // не нашла описание задачи №2
  return totalAmount;
}
