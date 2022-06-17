// Globals -- no window oject
    // but there are global variables
    // that can be accessed anywhere in the app
    //below are some of the variables 
// __dirname - path to current directory    
// __filename - name of file
// require -- function to use modules, common  to JS
// module -- info about the current module (file) 
// process -- info about the env where the environment is being executed
    // we need to keep in mind where the environment
    // is being executed -- very important
    //
// console.log(__dirname)
// console.log(__filename)
// console.log(require)
// console.log(module)
// console.log(process)

let myIntervale = setInterval(() => {
    console.log('hello, World!')
}, 1000)