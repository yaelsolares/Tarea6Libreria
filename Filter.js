  
const yael = {

  filter: (array, callback) => {
    const filteredArray = []
    for (let i = 0; i < array.length; i++) {
      const newArray = array[i]
      if (callback(newArray)) {
            filteredArray.push(newArray)
    }
  }

    return filteredArray
  }
  }
  
  const nums = [2,3,4,5,6,5,5];
  const numbers= yael.filter(nums, num => num === 2); 
    console.log(numbers);