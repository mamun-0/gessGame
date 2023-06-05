const low_val = 1;
const high_val = 10;
const correcr_ans =
  Math.floor(Math.random() * (high_val - low_val + 1)) + low_val;
let flag = 1;
let input;
while (flag) {
  input = prompt('Enter your gess (integer)');
  let parseVal = getInput(input);
  if (parseVal) {
    if (correcr_ans > parseVal) {
      alert('Correct answer is greater! ');
    } else if (correcr_ans < parseVal) {
      alert('Correct answer is smaller!');
    } else if (correcr_ans === parseVal) {
      alert('You Win');
      break;
    }
    if (flag === 3) {
      alert('You lose!');
      break;
    }
  } else {
    alert('Invalid input');
    break;
  }
  flag++;
}

function getInput(user_input) {
  const parse = parseFloat(user_input);
  if (parse === 0) return true;
  return user_input == parse ? parse : undefined;
}
