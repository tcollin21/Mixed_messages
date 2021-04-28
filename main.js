const array1 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const array2 = ['will', 'won\'t', 'should', 'shouldn\'t', 'might'];
const array3 = ['pizza', 'pasta', 'a burger', 'tacos', 'a salad', 'grilled cheese', 'chicken']

const getRandom = arr => {
    return Math.floor(Math.random() * arr.length);
}

const randPhrase = (arr1, arr2, arr3) => {
    const day = arr1[getRandom(arr1)];
    const yn = arr2[getRandom(arr2)];
    const food = arr3[getRandom(arr3)];

    const phrase = `On ${day} you ${yn} have ${food}.`
    console.log(phrase);
}

randPhrase(array1, array2, array3);