module.exports = function multiply(first, second) {
  let arrFirst = first.split('').reverse();
  let arrSecond = second.split('').reverse();

  console.log(first);
  console.log(second);
  let stack = [];
//умножаем значения в столбик
  for (let i = 0; i < arrFirst.length; i++) {
    for (let j = 0; j < arrSecond.length; j++) {
      let powElem = arrFirst[i] * arrSecond[j];  //умножаем элементы двух массивов
      if (stack[i+j])         //проверка стека на наличие элемента
      stack[i + j] += powElem;  //если элемент есть, то прибавляем к нему 
      else                    //если нет
      stack[i + j] = powElem;   //добавляем новый элемент
     
    }
  }

  for (let i = 0; i < stack.length; i++) {
    let num = stack[i] % 10;                //
    let move = Math.floor(stack[i] / 10);
    stack[i] = num;

    if (stack[i + 1])
      stack[i + 1] += move;  //прибавляем значение в ячейку выше
    else if (move != 0)         //если ячейки закончились
      stack[i + 1] = move;      //добавляем новые
  }


  return stack.reverse().join('');  //приводим строку в нормальный вид
}
