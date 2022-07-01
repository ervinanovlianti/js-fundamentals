/* Higher - Order Function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen;
mengembalikan sebuah fungsi;
atau bahkan keduanya. */
// first class functions

const hello = () => {
    console.log('Hello!')
};

const say = (someFunction) => {
    someFunction();
}

const sayHello = () => {
    return () => {
        console.log('Hello!');
    }
}

hello();
say(hello);
sayHello()();

// penggunaan high order function
const pronaun = ['I', 'You', 'We', 'They'];

const arrayMap = (arr, action) => {
    const loopTrough = (arr, action, newArray = [], index = 0) => {
        const item = arr[index];
        if(!item) return newArray;
        return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);

    }
    return loopTrough(arr, action);
}

const newPronoun = arrayMap(pronaun, (name) => `${name}...`);

console.log(
    {
        pronaun, newPronoun,
    }
);