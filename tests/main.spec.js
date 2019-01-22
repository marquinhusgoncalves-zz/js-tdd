// describe('Main', () => {
//   describe('Method A', () => {
//     context('Case 1', () => {
//       it('should happen blabla', () => {

//       });
//     });

//     context('Case 2', () => {
//       it('should happen blabla', () => {

//       });

//       it('should happen mimimi', () => {

//       });
//     });
//   });

//   describe('Method B', () => {

//   });
// });

describe('Main', () => {
  let arr = [];

  // roda uma vez, antes do bloco
  before(() => {

  });

  after(() => {

  });

  beforeEach(() => {
    arr = [1, 2, 3];
  });

  afterEach(() => {

  });

  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    console.log(arr.length); // 4
  });

  it('should have a size of 2 when pop a value from the array', () => {
    arr.pop();
    console.log(arr.length); // 2
  });

  it('should remove the value 3 when use pop in the array', () => {
    arr.pop();
    console.log(arr.pop() === 3); // true
  });
});
