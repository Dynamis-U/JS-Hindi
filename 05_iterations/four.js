const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myCoding[key]}`)
}

const programming = ["js", "java", "C", "py", "cpp"]

for (const key in programming) {
    console.log(key);
}

const map = new Map
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);    //print nothing because map is not iteratable
}