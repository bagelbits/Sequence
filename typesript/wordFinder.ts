var list = [1, 2, 3];

var getPermutations = function (list, maxLen) {
  // Copy initial values as arrays
  var perm = list.map(function (val) {
    return [val];
  });
  // Our permutation generator
  var generate = function (perm, maxLen, currLen) {
    // Reached desired length
    if (currLen === maxLen) {
      return perm;
    }
    // For each existing permutation
    for (var i = 0, len = perm.length; i < len; i++) {
      var currPerm = perm.shift();
      // Create new permutation
      for (var k = 0; k < list.length; k++) {
        perm.push(currPerm.concat(list[k]));
      }
    }
    // Recurse
    return generate(perm, maxLen, currLen + 1);
  };
  // Start with size 1 because of initial values
  return generate(perm, maxLen, 1);
};

var res = getPermutations(list, 1);
console.log(res);
console.log(res.length); // 27

// This is the other approach I wrote in Ruby:
// # Let's assume this is our list of words
// # WORDS = []
// WORDS = ["good", "god", "dog", "goo", "do", "go"]

// def word_finder(letters)
//   words = []
//   letters = letters.split('')
//   tmp = ['']
//   for i in 0..letters.length-1
//     next_tmp = []
//     for word in tmp
//       for letter in letters
//         if word.count(letter) < letters.count(letter)
//         # if !word.include?(letter)
//           word_to_check = word + letter
//           words << word_to_check if WORDS.include?(word_to_check)
//           next_tmp << word_to_check
//         end
//       end
//     end
//     tmp = next_tmp
//   end
//   words.uniq
// end

// test = 'oogd'
// puts word_finder(test)
