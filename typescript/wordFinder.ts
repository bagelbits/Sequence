/**
 * Generate all possible permutations of various lengths from the given input string.
 * @param input The string to generate permutations from.
 * @returns An array of unique permutations.
 */
function getPermutations(input: string): string[] {
  let results: Set<string> = new Set();

  /**
   * Recursively generate permutations.
   * @param current The current permutation being generated.
   * @param remaining The remaining characters to add to the permutation.
   */
  function backtrack(current: string, remaining: string) {
    // If the current permutation is not empty, add it to the results set.
    if (current.length > 0) {
      results.add(current)
    }

    // For each character in the remaining string, add it to the current permutation
    // and recursively call backtrack with the updated permutation and remaining characters.
    for (let i = 0; i < remaining.length; i++) {
      backtrack(current + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
    }
  }

  // Start the recursion with an empty permutation and the input string.
  backtrack('', input)

  // Convert the set of unique permutations to an array and return it.
  return Array.from(results);
}

/**
 * Finds all possible words using the inputed string.
 * @param input The string to find all possible words from.
 * @returns An array of unique words using the input.
 */
function wordFinder(input: string) {
  // First, get all permutations of input.
  const permutations = getPermutations(input);

  let results: string[] = [];

  // Compare each permutation against our list of valid words.
  for(let permutation of permutations) {
    if (WORDS.includes(permutation)) {
      results.push(permutation);
    }
  }
  return results;
}

// const WORDS = [];
const WORDS = ["good", "god", "dog", "goo", "do", "go", "test"];
let test = 'oogd';
console.log(wordFinder(test));
