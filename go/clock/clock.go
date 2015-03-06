package clock

import (
  "fmt"
)

const TestVersion = 2

type Clock int

func Time(hour, minute int) Clock {
  var min = hour * 60 + minute
  c := Clock(min)
  return c
}

func (c Clock) Add(minutes int) Clock {
  c = c + Clock(minutes)
  return c
}

func (c Clock) String() string {
  return fmt.Sprintf("%d:%d", c/60, c%60)
}

func (c Clock) Equal(d Clock) bool {
  return c == d
}
