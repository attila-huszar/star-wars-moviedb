export function capitalizeString(str) {
  return typeof str === 'string' && str.length
    ? str.charAt(0).toUpperCase() + str.slice(1)
    : 'unknown'
}

export function transformDate(date) {
  return typeof date === 'number' && date < 0
    ? `${Math.abs(date)} BBY`
    : date || 'unknown'
}

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
