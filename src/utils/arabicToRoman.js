export function arabicToRoman(num) {
  const romanMap = {
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  let romanNum = ''

  for (const symbol in romanMap) {
    const value = romanMap[symbol]
    while (num >= value) {
      romanNum += symbol
      num -= value
    }
  }
  return romanNum
}
