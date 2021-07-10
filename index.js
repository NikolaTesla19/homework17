let string = prompt();
let vowelArr = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];
function filterFunction(str){
  let arr = str.split('');
  let newArr = arr.filter((element) => vowelArr.includes(element));
  console.log('Количество гласных ' + newArr.length + ' (filter)');
}
filterFunction(string);
function forEachFunction(str){
  let arr = str.split('');
  let newArr = [];
  arr.forEach(function(element){
    if (vowelArr.includes(element)) {
      newArr.push(element);
    }
  })
  console.log('Количество гласных ' + newArr.length + ' (forEach)');
};
forEachFunction(string);
function reduceFunction(str){
  let arr = str.split('');
  let newArr = [];
  arr.reduce(function(accumulator, currentValue){
    if (accumulator.includes(currentValue)) {
      newArr.push(currentValue);
    }
    return accumulator;
  }, vowelArr)
  console.log('Количество гласных ' + newArr.length + ' (reduce)');
}
reduceFunction(string);
