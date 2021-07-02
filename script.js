let entry = 100;

function FarenheitConverter(temp){
  return (temp *1.8)+32
}

function kelvinConverter(temp){
  return temp-(-273)
}


let convertF = FarenheitConverter(entry);
console.log(convertF);

let convertK = kelvinConverter(entry);
console.log(convertK);