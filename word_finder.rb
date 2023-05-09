# Let's assume this is our list of words
# WORDS = []
WORDS = ["good", "god", "dog", "goo", "do", "go"]

def word_finder(letters)
  words = []
  letters = letters.split('')
  for i in 0..letters.length-1
    letters.permutation(i+1).to_a.uniq.each do |perm|
      words << perm.join if WORDS.include?(perm.join)
    end
  end
  words
end

test = 'oogd'
puts word_finder(test).inspect
