class Words
  constructor: (@statement) ->
    @sanitize()
    @count = {}
    words = @statement.split /\s+/
    @add word for word in words

  add: (word) ->
    last = @count[word] || 0
    @count[word] = last + 1

  sanitize: ->
    @statement = @statement.toLowerCase().replace /[^0-9a-z\s]/g, ''


module.exports = Words
