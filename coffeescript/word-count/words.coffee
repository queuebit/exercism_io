class Words
  sanitize= (statement) ->
    statement.toLowerCase().replace /[^0-9a-z\s]/g, ''

  split = (statement) ->
    statement.split /\s+/

  constructor: (statement) ->
    words = split(sanitize(statement))
    @count = {}
    @count[word] = (@count[word] or 0) + 1 for word in words

module.exports = Words
