//Day 0: Hello, World.
function processData(inputString) {
    // Your first line of output goes here
    process.stdout.write("Hello, World.");

    // Write the second line of output
    var input = inputString;
    process.stdout.write("\n" + input)
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});