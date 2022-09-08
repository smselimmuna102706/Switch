var letter = prompt("Enter the any letter : ");

letter = letter.toLowerCase();

switch(letter){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    document.write("vowel");
    break;

    default:
    document.write("consonent");

}