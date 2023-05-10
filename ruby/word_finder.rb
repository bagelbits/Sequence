# Let's assume this is our list of words
# WORDS = []
WORDS = %w[good god dog goo do go].freeze

def word_finder(letters)
  words = []

  # We need to convert our string to an array
  letters = letters.chars

  # We want to generate permutations for all possible lengths
  # Starting with a length of 1
  (1..(letters.length)).each do |i|
    letters.permutation(i).to_a.uniq.each do |perm|
      # For each unique permutation, we need to check if the word exists.
      words << perm.join if WORDS.include?(perm.join)
    end
  end
  words
end

test = 'oogd'
puts word_finder(test).inspect
