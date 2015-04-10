import re

def hey(what):
    what = what.strip()

    if is_question(what) and not is_forceful(what):
        return "Sure."
    elif is_silent(what):
        return "Fine. Be that way!"
    elif is_forceful(what):
        return "Whoa, chill out!"
    else:
        return "Whatever."

def is_question(what):
    return re.search("\?$", what)

def is_forceful(what):
    return (re.search("[A-Za-z]",what) and what.upper() == what)

def is_silent(what):
    return "" == what
