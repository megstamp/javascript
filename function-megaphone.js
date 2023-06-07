//megaphone
//objective
// create a function that converts a string to uppercase.
//ex. megaphone("hello world") => "HELLO WORLD"

//1. declare function
function getMegaphone(message) {
    const outPutSound = message.toUpperCase();
    return outPutSound;
}

//2. invoke function
const message = getMegaphone("hey you all!!");

//3. console.log
console.log(message);




function getWhisper(newMessage) {
    const newSound = message.toLowerCase();
    return newSound;
}
const newMessage = getWhisper("HUSH KIDS!");

console.log(newMessage);