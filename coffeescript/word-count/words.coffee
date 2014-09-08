class Words
  constructor: (@statement) ->
    words = @statement.split /\s/

module.exports = Words
