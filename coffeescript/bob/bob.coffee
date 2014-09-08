class Bob
  hey: (statement) ->
    if @isShouting(statement)
      "Woah, chill out!"
    else if @isQuestioning(statement)
      "Sure."
    else if @isSilent(statement)
      "Fine. Be that way!"
    else
      "Whatever."

  isShouting: (statement) ->
    !@isSilent(statement) && statement.toUpperCase() == statement

  isQuestioning: (statement) ->
    !@isShouting(statement) && /\?$/.test statement
    
  isSilent: (statement) ->
    statement.trim() == ''

module.exports = Bob
