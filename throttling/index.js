const throttle = (fn, delay) => {

  let flag = true;
  return (...args) => {
    if(flag) {
      fn(...args);
      flag = false;

      setTimeout(() => {
        flag = true;
      }, delay);
    }
  }
}

document.getElementById("btn").addEventListener("click", throttle((e) => {
  console.log('clicked');
}, 2000));
