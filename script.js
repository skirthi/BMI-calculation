let str = "hfshbf vskbskn shv hhfjhd h hdjdjh hjs jhfgfk dfn hh fakha-hfgi bjksqsj h hgh y y ggg g y hudh udguugd h"
let count = 1; // Initialize count to 1 since the first word is already counted
for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
        count = count + 1; // Increment count for each space (indicating a new word)
    }
}
console.log(count);
