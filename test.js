let array = [{
  code: 'pants',
  price: 33,
  nose: 'hola',
},
{
  code: 'camisa',
  price: 33,
  nose: 'hola',
},
];

let promise = (array) => {
  return new Promise((resolve, reject) => {
    resolve(array.map((i) => {
      return {
        code: i.code,
        price: i.price,
      };
    }));
  });
};

let x = () => {
  return promise().then((data) => {
    return data;
  }).catch((err) => {
    return err;
  })
}

console.log(x)