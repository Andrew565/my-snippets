# Takes a single-dimensional array of numbers and returns the average of those numbers.
Array::avg = ->
  av = 0
  av = av + num for num in this
  av/@length
  
# Takes a single-dimensional array and returns a new array with only unique values kept.
Array::unique = ->
  output = {}
  output[@[key]] = @[key] for key in [0...@length]
  value for key, value of output