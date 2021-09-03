const debounce = (fn, delay) => {
  let timeoutID;
  return function() {

    if(timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      fn();
    }, delay);
  }
}

document.getElementById("btn").addEventListener("click", debounce(e => {
  console.log('clicked');
}, 2000));

document.getElementById("input").addEventListener("keyup", debounce(e => {
  console.log('api call');
}, 1000));