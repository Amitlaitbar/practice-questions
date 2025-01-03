const displayResult = console.log;

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Sum of _-_-_-_-_-_-_-_-_-_-_-_- */
const getSum = function (sum, number) {
  return sum + number;
};

const sumOf = function (numbers) {
  return numbers.reduce(getSum);
};

displayResult('sum of', '[1, 2, 3, 4]:', sumOf([1, 2, 3, 4])); // 10
displayResult('sum of', '[8, 8, 4, 4]:', sumOf([8, 8, 4, 4])); // 24

/* _-_-_-_-_-_-_-_-_-_-_-_-_ product of _-_-_-_-_-_-_-_-_-_-_-_- */

const productOf = function (numbers) {
  return numbers.reduce(function (product, number) { return product * number; });
};

displayResult('Product of', '[1, 2, 3, 4]:', productOf([1, 2, 3, 4])); // 24

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Average of _-_-_-_-_-_-_-_-_-_-_-_- */
const averageOf = function (numbers) {
  return numbers.reduce(getSum) / numbers.length;
};

displayResult('Average of', '[1, 2, 3, 4, 5]:', averageOf([1, 2, 3, 4, 5])); // 3

/* _-_-_-_-_-_-_-_-_-_-_-_-_ min of _-_-_-_-_-_-_-_-_-_-_-_- */

const minOf = function (numbers) {
  return numbers.reduce(function (minNo, number) {
    return number < minNo ? number : minNo;
  });
};

displayResult('Min of', '[3, 1, 4, 1, 5, 9, 2]:', minOf([3, 1, 4, 1, 5, 9, 2])); // 1

/* _-_-_-_-_-_-_-_-_-_-_-_-_ max of _-_-_-_-_-_-_-_-_-_-_-_- */

const maxOf = function (numbers) {
  return numbers.reduce(function (maxNo, number) {
    return number > maxNo ? number : maxNo;
  });
};

displayResult('max of', '[3, 1, 4, 1, 5, 9, 2]:', maxOf([3, 1, 4, 1, 5, 9, 2])); // 9

/* _-_-_-_-_-_-_-_-_-_-_-_-_ sum of Positive numbers _-_-_-_-_-_-_-_-_-_-_-_- */

const getSumOfPositives = function (sum, number) {
  const numberToAdd = number > 0 ? number : 0;
  return sum + numberToAdd;
};

const sumPositiveNumbers = function (numbers) {
  return numbers.reduce(getSumOfPositives);
};

displayResult('Sum of Positives', '[1, -2, 3, -4]:', sumPositiveNumbers([1, -2, 3, -4])); // 4

/* _-_-_-_-_-_-_-_-_-_-_-_-_ sum of Squares _-_-_-_-_-_-_-_-_-_-_-_- */

const getSumOfSquares = function (sum, number) {
  const numberToAdd = number ** 2;
  return getSum(sum, numberToAdd);
};

const sumOfSquares = function (numbers) {
  return numbers.reduce(getSumOfSquares);
};

displayResult('Sum of Squares', '[1, 2, 3, 4]:', sumOfSquares([1, 2, 3, 4]));
//30

/* _-_-_-_-_-_-_-_-_-_-_-_-_ sum of odds _-_-_-_-_-_-_-_-_-_-_-_- */

const isOdd = (number) => number % 2 === 1;
const getSumOfOdds = function (sum, number) {
  const numberToAdd = isOdd(number) ? number : 0;
  return getSum(sum, numberToAdd);
};

const sumOfOddNumbers = function (numbers) {
  return numbers.reduce(getSumOfOdds);
};

displayResult('sum of odds', '[1, 2, 3, 4, 5]:', sumOfOddNumbers([1, 2, 3, 4, 5])); // 9

/* _-_-_-_-_-_-_-_-_-_-_-_-_ count negative numbers _-_-_-_-_-_-_-_-_-_-_-_- */

const getCountOfNegatives = function (count, number) {
  const countNo = number < 0 ? 1 : 0;

  return getSum(count, countNo);
};

const countNegativeNumbers = function (numbers) {
  return numbers.reduce(getCountOfNegatives);
};

displayResult('Count of negatives', '[1, -2, 3, -4]:', countNegativeNumbers([1, -2, 3, -4])); // 2

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Sum of even squares _-_-_-_-_-_-_-_-_-_-_-_- */

const isEven = (number) => number % 2 === 0;

const getSumOfEvenSquares = function (sum, number) {
  const numberSquare = number ** 2;
  const numberToAdd = isEven(numberSquare) ? numberSquare : 0;

  return getSum(sum, numberToAdd);
};

const findSumOfEvenSquares = function (numbers) {
  return numbers.reduce(getSumOfEvenSquares);
};

displayResult('Sum of even squares', '[1, 2, 3, 4]:', findSumOfEvenSquares([1, 2, 3, 4])); // 20

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Concatenate Words _-_-_-_-_-_-_-_-_-_-_-_- */

const concatenateWords = function (words) {
  return words.reduce(function (concatenatedWords, word) {
    return concatenatedWords.concat(word);
  }, '');
};

displayResult('Concatenate Words', '["hello", "world"]:', concatenateWords(["hello", "world"])); // "helloworld"

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Longest Word _-_-_-_-_-_-_-_-_-_-_-_- */

const longestWord = function (words) {
  return words.reduce(function (longestWord, word) {
    return longestWord.length < word.length ? word : longestWord;
  }, '');
};

const result = longestWord(["apple", "banana", "cherry", "kiwi"]);
displayResult('Longest word of', '["apple", "banana", "cherry", "kiwi"]:', result); // "banana"

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Shortest Word _-_-_-_-_-_-_-_-_-_-_-_- */

const shortestWord = function (words) {
  return words.reduce(function (shortestWord, word) {
    return word.length < shortestWord.length ? word : shortestWord;
  }, words[0]);
};

const shortest = shortestWord(["apple", "banana", "cherry", "kiwi"]);
displayResult('Shortest Word of', '["apple", "banana", "cherry", "kiwi"]:', shortest); // kiwi

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Join with comma _-_-_-_-_-_-_-_-_-_-_-_- */

const getJoinedWithComma = function (resultantStr, string) {
  return resultantStr.concat(string, ',');
};

const joinWithComma = function (words) {
  return words.reduce(getJoinedWithComma, '').slice(0, -1);
};

const stringsWithCommas = joinWithComma(["apple", "banana", "cherry"]);
displayResult('Join with comma', '["apple", "banana", "cherry"]:', stringsWithCommas); // "apple,banana,cherry"

/* _-_-_-_-_-_-_-_-_-_-_-_-_ reverse words _-_-_-_-_-_-_-_-_-_-_-_- */

const getReversedWords = function (reversedWords, word) {
  return word.concat(' ', reversedWords);
};

const reverseWords = function (words) {
  return words.reduce(getReversedWords, '').slice(0, -1);
};

displayResult('Reverse words of', '["hello", "world"]', reverseWords(["hello", "world"])); //"world hello"

/* _-_-_-_-_-_-_-_-_-_-_-_-_ join words with space _-_-_-_-_-_-_-_-_-_-_-_- */

const getJoinedWithSpace = function (resultantStr, string) {
  return resultantStr.concat(string, ' ');
};

const joinWordsWithSpace = function (words) {
  return words.reduce(getJoinedWithSpace, '').slice(0, -1);
};

const stringsWithSpace = joinWordsWithSpace(["apple", "banana", "cherry"]);

displayResult('Join with space', '["apple", "banana", "cherry"]', stringsWithSpace); // "apple banana cherry"

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Concatenate Names _-_-_-_-_-_-_-_-_-_-_-_- */

const getConcatenatedNames = function (concatenatedNames, name) {
  return concatenatedNames.concat(name);
};

const concatenateNames = function (names) {
  return names.reduce(getConcatenatedNames);
};

displayResult('Conacatenate words of', '["John", "Jane", "Doe"]', concatenateNames(["John", "Jane", "Doe"])); // "JohnJaneDoe"

// countVowelsInWords(["hello", "world"]) => "eoo"
const countVowelsInWords = function (words) { };

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Make camel case _-_-_-_-_-_-_-_-_-_-_-_- */

const getCamelCase = function (string, word) {
  const [firstChar, ...remainString] = [...word];
  return string.concat(firstChar.toUpperCase(), remainString.join(''));
};

const makeCamelCase = function (words) {
  const [firstChar, ...remainingString] = [...words.reduce(getCamelCase, '')];
  return firstChar.toLowerCase().concat(remainingString.join(''));
};

const cameCaseString = makeCamelCase(["hello", "world", "how", "are", "you"]);
displayResult('Make camel case of', '["hello", "world", "how", "are", "you"]', cameCaseString); // "helloWorldHowAreYou"

/* _-_-_-_-_-_-_-_-_-_-_-_-_ reverse String _-_-_-_-_-_-_-_-_-_-_-_- */

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"

const getReverseString = function (reverseStr, word) {
  return reverseStr.concat([...word].reverse().join(''));
};

const reverseString = function (words) {
  return words.reduce(getReverseString, '');
};

displayResult('reverse String of', '["apple", "banana", "cherry"]', reverseString(["apple", "banana", "cherry"])); // "elppaananabyrrehc"

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Duplicate Numbers _-_-_-_-_-_-_-_-_-_-_-_- */

const getDuplicateNumbers = function (duplicateNums, number) {
  return [...duplicateNums, number, number];
};

const duplicateNumbers = function (numbers) {
  return numbers.reduce(getDuplicateNumbers, []);
};

displayResult('Duplicate numbers of', '[1, 2, 3]', duplicateNumbers([1, 2, 3])); // [ 1, 1, 2, 2, 3, 3 ]

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Concatenate Arrays _-_-_-_-_-_-_-_-_-_-_-_- */

const getConcatenatedArray = function (concatenatedArray, array) {
  return [...concatenatedArray, ...array];
};

const concatenateArrays = function (arrays) {
  return arrays.reduce(getConcatenatedArray, []);
};

displayResult('Concatenated Array of', '[[1, 2], [3, 4], [5, 6]]', concatenateArrays([[1, 2], [3, 4], [5, 6]])); // [ 1, 2, 3, 4, 5, 6 ]

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Flatten array _-_-_-_-_-_-_-_-_-_-_-_- */

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const getFlattenArray = function (flattenArray, array) {
  const arr = [...flattenArray, ...array];
  return arr;
};

const flattenArray = function (arrays) {
  return arrays.reduce(getFlattenArray, []);
};

displayResult('Flatten Array of', '[[1, 2], [3, 4], [5, 6]]', flattenArray([[1, 2], [3, 4], [5, 6]])); //[ 1, 2, 3, 4, 5, 6 ]

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Unique Numbers _-_-_-_-_-_-_-_-_-_-_-_- */

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]

const getUniqueNumbers = function (uniqueNumbersArray, number) {
  return uniqueNumbersArray.includes(number) ? [...uniqueNumbersArray] :
    [...uniqueNumbersArray, number];
};

const uniqueNumbers = function (numbers) {
  return numbers.reduce(getUniqueNumbers, []);
};

displayResult('Unique numbers of', '[1, 2, 2, 3, 4, 4, 5]', uniqueNumbers([1, 2, 2, 3, 4, 4, 5])); //[ 1, 2, 3, 4, 5 ]

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Group by lengths _-_-_-_-_-_-_-_-_-_-_-_- */

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple"], 6: ["banana", "cherry"], 4: ["date"] }

const getGroupByLength = function (groupByLengthObj, string) {
  const length = string.length;
  const obj = { ...groupByLengthObj };

  if (!(length in obj)) {
    obj[length] = [];
  }

  obj[length].push(string);
  return obj;
};

const groupByLength = function (strings) {
  return strings.reduce(getGroupByLength, {});
};

displayResult('Group By length of', '["apple", "banana", "cherry", "date"]', groupByLength(["apple", "banana", "cherry", "date"]));
/* { "4": [ "date" ], "5": [ "apple" ], "6": [ "banana", "cherry" ] } */

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Count Occurrences _-_-_-_-_-_-_-_-_-_-_-_- */

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }

const getCountOfOccurances = function (groupByLengthObj, string) {
  const obj = { ...groupByLengthObj };
  obj[string] = string in obj ? obj[string] + 1 : 1;

  return obj;
};

const countOccurrences = function (strings) {
  return strings.reduce(getCountOfOccurances, {});
};

displayResult('Occurances of', '["apple", "banana", "cherry", "banana"]', countOccurrences(["apple", "banana", "cherry", "banana"]));
// { apple: 1, banana: 2, cherry: 1 } 

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Merge objects _-_-_-_-_-_-_-_-_-_-_-_- */

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) {
  return objects.reduce((result, obj) => {
    const resultObject = { ...result };
    const keys = Object.keys(obj);

    for (const key of keys) {
      resultObject[key] = key in resultObject ?
        resultObject[key] + obj[key] : obj[key];
    }

    return resultObject;
  }, {});
};

displayResult('Merge Objects of', '[{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]', mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }])); //{ a: 5, b: 3, c: 4 }

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Zip _-_-_-_-_-_-_-_-_-_-_-_- */

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }

const zip = function (keys, values) {
  return values.reduce((result, value) => {
    const obj = { ...result };

    obj.resultObject[keys[obj.count]] = value;
    obj.count += 1;

    return obj;
  }, { count: 0, resultObject: {} }).resultObject;
};

displayResult('Zip of', '["a", "b", "c"], [1, 2, 3]',
  zip(["a", "b", "c"], [1, 2, 3])); //{ a: 1, b: 2, c: 3 }

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Make object _-_-_-_-_-_-_-_-_-_-_-_- */

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }

const makeObject = function (keys, values) {
  return values.reduce((result, value) => {
    const obj = { ...result };

    obj.resultObject[keys[obj.count]] = value;
    obj.count += 1;

    return obj;
  }, { count: 0, resultObject: {} }).resultObject;
};

displayResult('Make object of', '["city", "country"], ["Paris", "France"]', makeObject(["city", "country"], ["Paris", "France"])); // { city: "Paris", country: "France" }

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Invert object _-_-_-_-_-_-_-_-_-_-_-_- */

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }

const getInvertedObject = function (keys, values) {
  return values.reduce((resultObj, value) => {
    const result = { ...resultObj };

    result.inverted[value] = keys[result.count];
    result.count += 1;

    return result;
  }, { count: 0, inverted: {} });
};

const invertObject = function (obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  return getInvertedObject(keys, values).inverted;
};

displayResult('Inverted object of', '{ "a": 1, "b": 2, "c": 3 }', invertObject({ "a": 1, "b": 2, "c": 3 })); //{ "1": "a", "2": "b", "3": "c" }

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Merge Arrays _-_-_-_-_-_-_-_-_-_-_-_- */

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }

const mergeArrays = function (arr1, arr2) {
  const mergedArray = [...arr1, ...arr2];

  return mergedArray.reduce((result, arr) => {
    const mergedObj = { ...result };
    mergedObj[arr[0]] = arr[1];

    return mergedObj;
  }, {});
};

displayResult('MergedArray of', '[["a", 1], ["b", 2]], [["c", 3], ["d", 4]]', mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]])); //{ a: 1, b: 2, c: 3, d: 4 }

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Group by property _-_-_-_-_-_-_-_-_-_-_-_- */

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }

const groupByProperty = function (objects) {
  return objects.reduce((result, object) => {
    const groupedObject = { ...result };
    groupedObject[object.age] = [object];

    return groupedObject;
  }, {});
};

displayResult('GroupByProperty object of', '[{name: "John", age: 25}, {name: "Jane", age: 30}]', groupByProperty([{ name: "John", age: 25 }, { name: "Jane", age: 30 }]));/*{
"25": [{ name: "John", age: 25 }],
"30": [{ name: "Jane", age: 30 }]
}*/

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Ascending Groups _-_-_-_-_-_-_-_-_-_-_-_- */

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) { };

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Flatten to object _-_-_-_-_-_-_-_-_-_-_-_- */

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }

const flattenToObject = function (pairs) {
  return pairs.reduce((resultObj, pair) => {
    const flattenObj = { ...resultObj };
    flattenObj[pair[0]] = pair[1];

    return flattenObj;
  }, {});
};

displayResult('Flatten to object of', "[['a', 1], ['b', 2], ['c', 3]]", flattenToObject([['a', 1], ['b', 2], ['c', 3]])); //{ a: 1, b: 2, c: 3 }

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Flatten to object _-_-_-_-_-_-_-_-_-_-_-_- */

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) { };

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) { };

/* _-_-_-_-_-_-_-_-_-_-_-_-_ sum and count _-_-_-_-_-_-_-_-_-_-_-_- */

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) {
  return numbers.reduce((object, number) => {
    const obj = { ...object };

    obj.sum = obj.sum + number;
    obj.count = obj.count + 1;

    return obj;
  }, { sum: 0, count: 0 });
};

displayResult('Sum and count of ', '[1, 2, 3, 4]', sumAndCount([1, 2, 3, 4]));
//{ sum: 10, count: 4 }

/* _-_-_-_-_-_-_-_-_-_-_-_-_ deep flatten _-_-_-_-_-_-_-_-_-_-_-_- */

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
// const getFlattenArray = function (resultArr, array) {

// };

// const deepFlatten = function (arr) {
//   return arr.reduce(getFlattenArray);
// };

// displayResult('Deep faltten array of', '[[1,2], [3,4, [5,6]], 7]', deepFlatten([[1, 2], [3, 4, [5, 6]], 7]));

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) { };

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) { };

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) { };

/* _-_-_-_-_-_-_-_-_-_-_-_-_ group by type _-_-_-_-_-_-_-_-_-_-_-_- */

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupByType = function (array) {
  return array.reduce((result, element) => {
    const groupByTypeObj = { ...result };
    const type = isNaN(+element) ? 'string' : 'number';

    groupByTypeObj[type].push(element);

    return groupByTypeObj;

  }, { number: [], string: [] });
};

displayResult('GroupByType of', "[1, 'a', 2, 'b', 3, 'c', 4]", groupByType([1, 'a', 2, 'b', 3, 'c', 4])); //{ number: [ 1, 2, 3, 4 ], string: [ "a", "b", "c" ] }

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) { };

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) { };

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) { };

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) { };

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) { };

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) { };

/* _-_-_-_-_-_-_-_-_-_-_-_ Merge Consecutive Duplicates _-_-_-_-_-_-_-_-_-_-_ */

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]

const getMergedConsecutiveDuplicates = function (uniqueElements, number) {
  const arr = [...uniqueElements];
  return arr.includes(number) ? [...arr] : [...arr, number];
};

const mergeConsecutiveDuplicates = function (array) {
  return array.reduce(getMergedConsecutiveDuplicates, []);
};

displayResult('Merge Consecutive Duplicates of', '[1,1,1,2,3,3,4]', mergeConsecutiveDuplicates([1, 1, 1, 2, 3, 3, 4])); //[ 1, 2, 3, 4 ]

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) { };

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) { };

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) { };

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Cartesian Product _-_-_-_-_-_-_-_-_-_-_-_- */

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]

const getCartesianProduct = function (arr2) {
  return function (cartesianProductArray, value) {
    return [...cartesianProductArray, ...arr2.map((element) =>
      [value, element])];
  };
};

const cartesianProduct = function (arr1, arr2) {
  return arr1.reduce(getCartesianProduct(arr2), []);
};

displayResult('Cartesian Product of', "[1, 2], ['a', 'b']", cartesianProduct([1, 2], ['a', 'b']));
//[ [ 1, "a" ], [ 1, "b" ], [ 2, "a" ], [ 2, "b" ] ]

/* _-_-_-_-_-_-_-_-_-_-_-_-_ group by date _-_-_-_-_-_-_-_-_-_-_-_- */

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }

const getGroupByDate = function (groupByDateObj, record) {
  const obj = { ...groupByDateObj };

  if (!(record.date in obj)) {
    obj[record.date] = [];
  }

  obj[record.date].push(record.value);

  return obj;
};

const groupByDate = function (records) {
  return records.reduce(getGroupByDate, {});
};

displayResult('Group by Date of', "[{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]", groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]));
//{ "2024-01-01": [ 10, 20 ], "2024-01-02": [ 30 ] }

/* _-_-_-_-_-_-_-_-_-_-_-_-_ find MinMax _-_-_-_-_-_-_-_-_-_-_-_- */

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }

const getMinMax = function (minMaxObj, number) {
  const obj = { ...minMaxObj };

  obj.min = obj.min > number ? number : obj.min;
  obj.max = obj.max < number ? number : obj.max;

  return obj;
};

const findMinMax = function (numbers) {
  return numbers.reduce(getMinMax, { min: Infinity, max: -Infinity });
};

displayResult('Find min max of', '[1, 2, 3, 4, 5]', findMinMax([1, 2, 3, 4, 5])); //{ min: 1, max: 5 }

/* _-_-_-_-_-_-_-_-_-_-_-_-_ sum By Category _-_-_-_-_-_-_-_-_-_-_-_- */

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }

const isCategoryPresent = function (obj, item) {
  return item.category in obj;
};

const getSumByCategory = function (sumByCategoryObj, item) {
  const obj = { ...sumByCategoryObj };
  obj[item.category] = isCategoryPresent(obj, item) ?
    obj[item.category] + item.value : item.value;

  return obj;
};

const sumByCategory = function (items) {
  return items.reduce(getSumByCategory, {});
};

const resultOfSumByCategory = sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]);
displayResult("Sum by category of", "[{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]", resultOfSumByCategory);
//{ A: 40, B: 20 }