const displayResult = function (fileName, input, result) {
  console.log(fileName, input, ':', result);
  return;
};

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Sum of _-_-_-_-_-_-_-_-_-_-_-_- */

const sumOf = function (numbers) {
  return numbers.reduce(function (sum, number) { return sum + number; }, 0);
};

displayResult('sum of', '[1, 2, 3, 4]', sumOf([1, 2, 3, 4])); // 10
displayResult('sum of', '[8, 8, 4, 4]', sumOf([8, 8, 4, 4])); // 24

/* _-_-_-_-_-_-_-_-_-_-_-_-_ product of _-_-_-_-_-_-_-_-_-_-_-_- */

const productOf = function (numbers) {
  return numbers.reduce(function (product, number) { return product * number; }, 1);
};

displayResult('Product of', '[1, 2, 3, 4]', productOf([1, 2, 3, 4])); // 24

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Average of _-_-_-_-_-_-_-_-_-_-_-_- */

const getSum = function (sum, number) {
  return sum + number;
};

const averageOf = function (numbers) {
  return numbers.reduce(getSum, 0) / numbers.length;
};

displayResult('Average of', '[1, 2, 3, 4, 5]', averageOf([1, 2, 3, 4, 5])); // 3

/* _-_-_-_-_-_-_-_-_-_-_-_-_ min of _-_-_-_-_-_-_-_-_-_-_-_- */

const minOf = function (numbers) {
  return numbers.reduce(function (minNo, number) {
    return number < minNo ? number : minNo;
  }, numbers[0]);
};

displayResult('Min of', '[3, 1, 4, 1, 5, 9, 2]', minOf([3, 1, 4, 1, 5, 9, 2])); // 1

/* _-_-_-_-_-_-_-_-_-_-_-_-_ max of _-_-_-_-_-_-_-_-_-_-_-_- */

const maxOf = function (numbers) {
  return numbers.reduce(function (maxNo, number) {
    return number > maxNo ? number : maxNo;
  }, 0);
};

displayResult('max of', '[3, 1, 4, 1, 5, 9, 2]', maxOf([3, 1, 4, 1, 5, 9, 2])); // 9

/* _-_-_-_-_-_-_-_-_-_-_-_-_ sum of Positive numbers _-_-_-_-_-_-_-_-_-_-_-_- */

const getSumOfPositives = function (sum, number) {
  const numberToAdd = number > 0 ? number : 0;
  return sum + numberToAdd;
};

const sumPositiveNumbers = function (numbers) {
  return numbers.reduce(getSumOfPositives, 0);
};

displayResult('Sum of Positives', '[1, -2, 3, -4]', sumPositiveNumbers([1, -2, 3, -4])); // 4

/* _-_-_-_-_-_-_-_-_-_-_-_-_ sum of Squares _-_-_-_-_-_-_-_-_-_-_-_- */

const getSumOfSquares = function (sum, number) {
  const numberToAdd = number ** 2;
  return sum + numberToAdd;
};

const sumOfSquares = function (numbers) {
  return numbers.reduce(getSumOfSquares, 0);
};

displayResult('Sum of Squares', '[1, 2, 3, 4]', sumOfSquares([1, 2, 3, 4])); //30

/* _-_-_-_-_-_-_-_-_-_-_-_-_ sum of odds _-_-_-_-_-_-_-_-_-_-_-_- */

const getSumOfOdds = function (sum, number) {
  const numberToAdd = number % 2 === 1 ? number : 0;
  return sum + numberToAdd;
};

const sumOfOddNumbers = function (numbers) {
  return numbers.reduce(getSumOfOdds, 0);
};

displayResult('sum of odds', '[1, 2, 3, 4, 5]', sumOfOddNumbers([1, 2, 3, 4, 5])); // 9

/* _-_-_-_-_-_-_-_-_-_-_-_-_ count negative numbers _-_-_-_-_-_-_-_-_-_-_-_- */

const getCountOfNegatives = function (count, number) {
  const countNo = number < 0 ? 1 : 0;
  return count + countNo;
};

const countNegativeNumbers = function (numbers) {
  return numbers.reduce(getCountOfNegatives, 0);
};

displayResult('Count of negatives', '[1, -2, 3, -4]', countNegativeNumbers([1, -2, 3, -4])); // 2

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Sum of even squares _-_-_-_-_-_-_-_-_-_-_-_- */

const getSumOfEvenSquares = function (sum, number) {
  const numberSquare = number ** 2;
  const numberToAdd = numberSquare % 2 === 0 ? numberSquare : 0;
  return sum + numberToAdd;
};

const findSumOfEvenSquares = function (numbers) {
  return numbers.reduce(getSumOfEvenSquares, 0);
};

displayResult('Sum of even squares', '[1, 2, 3, 4]', findSumOfEvenSquares([1, 2, 3, 4])); // 20

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Concatenate Words _-_-_-_-_-_-_-_-_-_-_-_- */

const concatenateWords = function (words) {
  return words.reduce(function (concatenatedWords, word) {
    return concatenatedWords + word;
  }, '');
};

displayResult('Concatenate Words', '["hello", "world"]', concatenateWords(["hello", "world"])); // "helloworld"

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Longest Word _-_-_-_-_-_-_-_-_-_-_-_- */

const longestWord = function (words) {
  return words.reduce(function (longestWord, word) {
    return longestWord.length < word.length ? word : longestWord;
  }, '');
};

const result = longestWord(["apple", "banana", "cherry", "kiwi"]);
displayResult('Longest word of', '["apple", "banana", "cherry", "kiwi"]', result); // "banana"

/* _-_-_-_-_-_-_-_-_-_-_-_-_ Shortest Word _-_-_-_-_-_-_-_-_-_-_-_- */

const shortestWord = function (words) {
  return words.reduce(function (shortestWord, word) {
    return word.length < shortestWord.length ? word : shortestWord;
  }, words[0]);
};

const shortest = shortestWord(["apple", "banana", "cherry", "kiwi"]);
displayResult('Shortest Word of', '["apple", "banana", "cherry", "kiwi"]', shortest); // kiwi

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = function (words) { };

// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = function (words) { };

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) { };

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) { };

// countVowelsInWords(["hello", "world"]) => "eoo"
const countVowelsInWords = function (words) { };

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const makeCamelCase = function (words) { };

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseString = function (words) { };

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicateNumbers = function (numbers) { };

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatenateArrays = function (arrays) { };

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = function (arrays) { };

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const uniqueNumbers = function (numbers) { };

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
const groupByLength = function (strings) { };

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const countOccurrences = function (strings) { };

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) { };

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) { };

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) { };

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) { };

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = function (arr1, arr2) { };

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) { };

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) { };

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) { };

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) { };

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) { };

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) { };

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) { };

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) { };

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) { };

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) { };

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupByType = function (array) { };

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

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) { };

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) { };

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) { };

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) { };

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesianProduct = function (arr1, arr2) { };

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }
const groupByDate = function (records) { };

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) { };

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }
const sumByCategory = function (items) { };
