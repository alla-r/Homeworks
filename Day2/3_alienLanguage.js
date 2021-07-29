function alienLanguage(str){
  const result = str.split(" ")
    .map(el => `${el.slice(0, el.length - 1).toUpperCase()}${el.slice(el.length - 1).toLowerCase()}`)
    .join(" ");
  return result;
}

console.log(alienLanguage("My name is John")) // "My NAMe Is JOHn"
console.log(alienLanguage("this is an example")) // "THIs Is An EXAMPLe"
console.log(alienLanguage("Hello World")) // "HELLo WORLd"
