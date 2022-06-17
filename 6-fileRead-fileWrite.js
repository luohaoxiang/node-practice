// File system module -- fs 
// two options
// asynchronously aka non blocking
// or synchronously blocking 
// different methods, but have different uses

const { readFileSync, writeFileSync, readFile, writeFile } = require('fs')
// can also const fs = require('fs') and the destructure later with
//fs.readFile = ...

const first = readFileSync('./Content/first.txt', 'utf-8')
const second = readFileSync('./Content/second.txt', 'utf8')
// Hey silly! You put the comma in the file name rather than outside the quote
// It happens : ) Be kind to yourself 


console.log(first)
console.log(second)


writeFileSync(
    './Content/result-file.txt', 
    `hello, this is the result: ${first} AND ${second}`)
// first will be a path
// the file will be created if the path/file doesn't exist but not likely the directory
// It will overwrite all files in app or create it

// NOTE -- the above is overwrite or create. To appeand you have to
// do something different -- set an options object with a flag
const hello = 'hello from this lesson'
writeFileSync('./Content/second-result-file.txt', 
    `This is a second written file: {hello}`,
    {flag: 'a'}
)
// the 'a' flag lets node that it can append it'

// the above are synchronous
// below are asynchronous
 
// These are callbacks
// callbacks are run when the function is done 
// when the functionality is complete, then the callback is run
// sort of like an event listener that calls the function after the event runs


// callback takes two arguments

readFile('./Content/first.txt', 'utf-8', (err, result) => {
    // if there is an error can return null or console log error
    if (err) {
        console.log(err)
        return
        //return just returns null or you can specify null 
    }
    console.log(result)
    }
)

writeFile('./Content/result-fourth.txt', 
    `Here is the result: ${first} AND ${second}`,
    (err, result)=> {
        if (err){
            console.log(err)
            return
    }
    console.log(result)
}
)
// blocking == synchronous
// non blocking == asynch
// the reason asynch is such a big deal is that it lets node split its time between
// users' tasks. SO if one user has a task that takes a while, node
// doesn't wait for that task to complete before starting the
// tasks of other users. That's why it's so important
// it lets other tasks proceed 
// but readFileSync writeFileSync are probably useful when 
// you need functions to proceed in a particular order 
// use cases may differ so good to know both
