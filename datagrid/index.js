let result = [];

const createText = (value) => {
  return document.createTextNode(value);
}

const fillTable = (data) => {

  const tbodyRef = document.getElementById("table").getElementsByTagName("tbody")[0];
  let newRow = tbodyRef.insertRow(-1);

  for(let prop in data) {
    const value = newRow.insertCell(-1);
    value.appendChild(createText(data[prop]));

    if(prop !== "id")  {
      value.setAttribute("contenteditable", true);
      value.addEventListener("input", (e) => {
        console.log('event.target.value', e.target.innerHTML);
      });
    }
  }
}

const getData = async () => {
  return await fetch('data.json')
    .then(response => response.json())
    .then(arr => {
      result = arr;
      arr.map(data => {
        fillTable(data);
      });
    });
}