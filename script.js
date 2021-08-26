let arrayMovies = ["Star Wars 3", "Batman: The Dark Knight", "The Lord of The Rings", "Apocalypse Now"]
let array = [1, 2, 3, 4, 5, 6, 7];

const newForEach = (array, callback) => {
    for (index = 0; index < array.length; i++) {
        let element = array[index];
        callback(element, i, array)
    }
}

const newFill = (array, valor, inicio = 0, fim = array.length) => {
    for (let i = inicio; i < fim; i++) {
        array[i] = valor
    }
    return array
}

const mapCallback = (currentValue) => {
    return `${currentValue} é um dos melhores filmes!`
}

const newMap = (array, callback, index = 0) => {
    let output = []
    for (index; index < array.length; index++) {
        let currentValue = array[index]
        output.push(callback(currentValue))
    }
    return output
}

const newSome = (array, callback, index = 0) => {
    for (index; index < array.length; index++) {
        let currentValue = array[index];
        if (callback(currentValue)) {
            return true
        }
    }
    return false
}

const newFind = (array, callback) => {
    let output = 0;
    for (let i = 0; i < array.length; i++) {
        if (callback(currentValue, array, index)) {
            output = array[i];
            return output;
        }
    }
}

const newFindIndex = (array, callback) => {
    let output = -1;
    for (let i = 0; i < array.length; i++) {
        if (callback(currentValue, array, index)) {
            result = i;
            return result;
        }
    }
    return output
}

const newEvery = (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        let currentValue = array[index];
        if (!callback(currentValue, i, array)) {
            return false
        }
    }
    return true
}

const newFilter = (array, callback) => {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(currentValue, array, index)) {
            output.push(array[i]);
        }
    }
    return output
}

const newConcat = (currentValue1, currentValue2) => {
    let output = [];
    for (let i = 0; i < currentValue1.length; i++) {
        output.push(currentValue1[i]);
    }
    for (let i = 0; i < currentValue2.length; i++) {
        output.push(currentValue2[i]);
    }
    return output
}

const newIncludes = (array, callback, searchElement) => {
    for (let index = 0; index < array.length; index++) {
      return callback(array[index], searchElement)
    }
}

const newIndexOf = (array, element) => {
    let output = -1;
    for (let i = 0; i < array.length; i++) {
        if (element === array[i]) {
            output = i
        }
    }
    return output
}

const newJoin = (array, separator) => {
    let output = "";
    for (let index = 0; index < array.length; index++) {
        output += array[index] + separator;
    }
    return output
}

const newReduce = (array, callback, initialValue) => {
    let output = initialValue;
    for (let index = 0; index < array.length; index++) {
        let currentValue = array[index];
        output = callback(output, currentValue, i, array)
    }
    return output
}