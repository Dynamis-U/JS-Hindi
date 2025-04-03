// for each

coding = ["js", "ruby", "python", "java", "c++"]

// coding.forEach( function(key) {   //forEach require callback function means function that return but have no name
//     console.log(key);
// })

coding.forEach( (item) => {
    // console.log(item);
})

function printme( item ){
    console.log(item);
}

// coding.forEach(printme);

coding.forEach((item,index,arr) => {  //for each have my parameter access
    // console.log(item, index, arr);
})

const myCoding = [ 
    {
        language : "Javascript",
        languagefileName : "js"
    },
    {
        language : "C++",
        languagefileName : "cpp"
    },
    {
        language : "Python",
        languagefileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languagefileName);   //item is object and by dot operator we get its properties value how simple is that lawl
})

