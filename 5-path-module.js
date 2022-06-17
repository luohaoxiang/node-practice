//path module
const path = require('path')

console.log(path.sep)
// prints a platform specific separator "/"
// on mac it's / 
// path.join method joins a seq\

const filePath = path.join('/content', 'subfolder', 'test.txt')
// will create a path /content/subfolder/test.txt 

//if you want the last portion of a file path

const base = path.basename(filePath);
// gives you the test.txt value
// There are other node methods to re
console.log(__dirname)

// path.resolve provides an absolute path
// use the global __dirname to 
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

/Users/adamrobinson/Desktop/Coding-Projects/Node_John_Smigla_Free_Code_Camp 


