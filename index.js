let string = prompt();

function filter(str){
  let vowelArr = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];
  let arr = str.split('');
  let newArr = arr.filter((element) => vowelArr.includes(element));
  console.log('Количество гласных ' + newArr.length);
}
filter(string);
