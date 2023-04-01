//1.Create the function mocker which will return defined data with 1 second delay. It might be helpful in Front-end development when there is a need to make sure that your interface works well with data that you get asynchronously. The use of the function is shown below:

const users = [{id: 1, name: 'User1'}];
function mocker(users) {
  return function () {
    return new Promise((res, rej) => {
      setTimeout(() => res(users), 1000);
    });
  }
}
console.log(users)

//2.Create the function summarize1 that receives promises and returns promise with sum of their values as shown below:
const summarize1 = (...promises) => {
    return Promise.all(promises).then(nums => {
      let sum = 0;
      for (const num of nums) {
        sum += num;
      }
      return sum;
    })
  }
  const promise1 = Promise.resolve(4);
  const promise2 = new Promise((resolve) => resolve(2));
  summarize1(promise1, promise2).then((sum) => {
    console.log(sum);
  });

  //3.Create the async function summarize2 that receives promises and returns promise with sum of their values as shown below:
  const summarize2 = async (...promises) => {
    const nums = await Promise.all(promises);
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    return sum;
  }
  const promise2 = Promise.resolve(4);
  const promise1 = new Promise((resolve) => resolve(2));
  summarize2(promise1, promise2).then((sum) => {
    console.log(sum);
  });