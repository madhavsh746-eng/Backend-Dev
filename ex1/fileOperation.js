import fs from "fs";   //importing file system module to perform file opertation.
function wordCounter() {
    fs.readFile("input.txt", (err, data) => {                //reading the file input.txt and passing a callback function to handle error and data.
        if (err) {
        console.log("Error reading file:", err);
        return;
        }

        const text = data.toString().trim();               //convert the data to string and trim any whitespace.
        const words = text.split(/\s+/);             //split the text into words using whitespace.
        const count = words.length;             //count the no. of words.

        fs.writeFile("output.txt", "Word Count: " + count, (err) => {          //writing the word count to output.txt file.
        if (err) console.log("Error writing file:", err);             //handling error if any.
        else console.log("Word count written to output.txt");
        });
    });
}

wordCounter();      //calling the function to execute the