// Modules -- common JS (and node) every file is module by default
// Modules -- Encapsulated Code (only share minimum)

// modules let you separate out these elements of the code 
// you can declare these variables in one module and export
const secret = 'SUPER SECRET'
const name1 = 'John'
const name2 = 'Will'
const name3 = 'Jenn'
const name4 = 'Tim'
//exporting these will put them in the modules object 
// console.log(module)
//module has an exports:{} object that shows global exports
// module.exports = {name1, name2, name3, name4}
// if you don't declare secret it won't export 

// to import a module (another file you exported) you "require"
// 
// to view in console log, put in a variable
// const names = require('./path of file - omit extension is optional')
// returns the object you exported
const sayHi = (yourName) => {
    console.log(`How's it hanging ${yourName}`)
}
// export this function by module.export = sayHi
// const sayHi = require('./path to function)

// keeping the naming consistent helps but not required
// just needs to match the function call in this app below
// which is say hi


// becuase the module was put into a variable names it has to
// be deconstructed
// const {john, will, jenn, tim} = require('./path to variables)
sayHi('name1') 
sayHi('name2') 
sayHi('name3') 
sayHi('name4') 
// sayHi(john)
// sayHi(will)
// sayHi(jenn)
// sayHi(tim)

// or if you don't want to destructure you can 
// sayHi(names.john)

// OR EXPORT AS YOU GO SET UP EXPORT ON AN OBJECT AS YOU GO
// module.exports.items = ['item1', 'item2']
//module.exports.person = {name: 'Tom', age: 76, status: 'awesome'}
// 