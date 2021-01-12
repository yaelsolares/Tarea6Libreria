const yael = {}

yael.forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
         callback(array[i],i);
  }
}


const numbers = [6,3,7,9,5,7,5];
      yael.forEach(numbers, function (num,index) {
      console.log( `${index+1}:${num}`);
      }
    )