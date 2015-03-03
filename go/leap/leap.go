package leap

func IsLeapYear(i int) bool {
	switch {
	case i%4 == 0 && i%400 == 0:
		return true
	case i%4 == 0 && i%100 == 0:
		return false
	case i%4 == 0:
		return true
	default:
		return false
	}
}
