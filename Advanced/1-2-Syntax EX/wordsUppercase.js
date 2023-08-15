function wordsUppercase(input) {

    const regex = /[A-z0-9]+/g;
    const maching = input.mach(regex);
    //const newTExt = input.toUpperCase().split(" ");
   

    console.log(maching);
} 
wordsUppercase('Hi, how are you?')
wordsUppercase('hello')
