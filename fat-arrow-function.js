//passing function like other values
//fat arrow syntax(=>).
function ping() {
    setTimeout(function () { return console.log("Ping"); }, 1000);
}
ping(); //ping
