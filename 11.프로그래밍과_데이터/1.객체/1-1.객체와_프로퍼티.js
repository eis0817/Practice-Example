// 객체, key(property)-value

const myComputer = {
  manufacturer: 'Apple',
  modelName: 'MacBook M1 Pro',
  releaseYear: 2001,
  isLaptop: true,
  mainboard: {
    cpu: 'M1',
    ram: '16GB',
  },
};

const data = {
  'serial-number': 'ABC-123-XYZ',
  'last-update-date': '2025-11-12',
};

// 변수 표기 방법
// serialNumber // camel case
// SerialNumber // pascal case
// serial-number // kebab case
// serial_number // snake case

console.log('myComputer', myComputer);
console.log(typeof myComputer); // object
