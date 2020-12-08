const shrineNote = [
  0b01010111,
  0b01101000,
  0b01101111,
  0b00100000,
  0b01101001,
  0b01110011,
  0b00100000,
  0b01001010,
  0b01010000,
  0b00111111,
]

const secretNote = [
  0b01000010,
  0b01100001,
  0b01100010,
  0b01100001,
  0b01100010,
  0b01101111,
  0b01101111,
  0b01100101,
  0b01111001,
]

function decode(data: number[]) {
  return data.map((x) => String.fromCharCode(x)).join('')
}

console.log(decode(shrineNote))
console.log(decode(secretNote))
