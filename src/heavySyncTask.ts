export default function () {
  console.log("Heavy sync task running");
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += Math.random();
  }
  return sum;
}
