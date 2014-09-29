class Words
  constructor: (@statement) ->
    @sanitize()
    @split()
    @count = {}
    @add word for word in @statement

  add: (word) ->
    last = @count[word] or 0
    @count[word] = last + 1

  sanitize: ->
    @statement = @statement.toLowerCase().replace /[^0-9a-z\s]/g, ''

  split: ->
    @statement = @statement.split /\s+/


module.exports = Words
