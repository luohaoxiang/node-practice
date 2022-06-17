//os is a built in module so you don't need a path
//some you may need to install
// you could destructure it if you knew exactly which part of
// the module you wanted 
const os = require('os')

// gets info about current user
const user = os.userInfo()
console.log(user)

//method returns system uptime in seconds
console.log(`The system uptime is ${os.uptime()}`)

//method return system 
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)

// Node lets you interact with the file system

 


