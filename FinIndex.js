const yael = {
  findIndex: (data, property, value) => {
    let result = -1;
    data.some(function (item, i) {
        if (item[property] === value) {
            result = i;
            return true;
        }
    });
    return result;
}
}
var data = [{name:"Pepe",age: 26},
            {name:"Rogelio",age: 27},
            {name:"Soledad",age: 34}]



console.log(yael.findIndex(data, 'name', 'Pepe'))