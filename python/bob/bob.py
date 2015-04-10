import re

def hey(what):
    what = what.strip()
    with_force = (re.search("[A-Za-z]",what) and what.upper() == what)
    if re.search("\?$", what) and not with_force:
        return "Sure."
    elif "" == what:
        return "Fine. Be that way!"
    elif with_force:
        return "Whoa, chill out!"
    else:
        return "Whatever."
