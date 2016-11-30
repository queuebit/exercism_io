# Etl

We are going to do the `Transform` step of an Extract-Transform-Load.

### ETL
Extract-Transform-Load (ETL) is a fancy way of saying, "We have some crufty, legacy data over in this system, and now we need it in this shiny new system over here, so
we're going to migrate this."

(Typically, this is followed by, "We're only going to need to run this
once." That's then typically followed by much forehead slapping and
moaning about how stupid we could possibly be.)

### The goal
We're going to extract some scrabble scores from a legacy system.

The old system stored a list of letters per score:

- 1 point: "A", "E", "I", "O", "U", "L", "N", "R", "S", "T",
- 2 points: "D", "G",
- 3 points: "B", "C", "M", "P",
- 4 points: "F", "H", "V", "W", "Y",
- 5 points: "K",
- 8 points: "J", "X",
- 10 points: "Q", "Z",

The shiny new scrabble system instead stores the score per letter, which
makes it much faster and easier to calculate the score for a word. It
also stores the letters in lower-case regardless of the case of the
input letters:

- "a" is worth 1 point.
- "b" is worth 3 points.
- "c" is worth 3 points.
- "d" is worth 2 points.
- Etc.

Your mission, should you choose to accept it, is to write a program that
transforms the legacy data format to the shiny new format.

### Notes

A final note about scoring, Scrabble is played around the world in a
variety of languages, each with its own unique scoring table. For
example, an "A" is scored at 14 in the Basque-language version of the
game while being scored at 9 in the Latin-language version.

## Setup

Go through the setup instructions for ECMAScript to
install the necessary dependencies:

http://exercism.io/languages/ecmascript

## Requirements

They are already described in the link above, but just as a
quick reference:

Install globally a tool to run [Gulp](http://gulpjs.com) if
it is not installed yet:

```bash
$ npm install -g gulp-cli
```

Install assignment dependencies:

```bash
$ npm install
```

## Making the test suite pass

Execute the tests with:

```bash
$ gulp test
```

In many test suites all but the first test have been skipped.

Once you get a test passing, you can unskip the next one by
changing `xit` to `it`.

## Source

The Jumpstart Lab team [http://jumpstartlab.com](http://jumpstartlab.com)