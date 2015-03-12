package clock

import (
  "fmt"
)

const TestVersion = 2

type Clock int

func Time(hour, minute int) Clock {
  var min = hour * 60 + minute
  c := Clock(min)
  for (c < 0) {
    c = c + 1440
  }
  if (c >= 1440) {
    c = c - 1440
  }
  return c
}

func (c Clock) Add(minutes int) Clock {
  c = c + Clock(minutes)
  for (c < 0) {
    c = c + 1440
  }
  if (c >= 1440) {
    c = c - 1440
  }
  return c
}

func (c Clock) String() string {
  return fmt.Sprintf("%02d:%02d", c/60, c%60)
}

func (c Clock) Equal(d Clock) bool {
  return c == d
}
