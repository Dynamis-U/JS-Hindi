const accountId =  144353
let accountEmail = "ujjwal@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

//accountId = 2 //Not allowed

accountEmail = "us@us.com"
accountPassword = "212112121"
accountCity = "Banglore"

console.log(accountId);

/* 
Prefer not to use var
because of the issue of block scope and function scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);