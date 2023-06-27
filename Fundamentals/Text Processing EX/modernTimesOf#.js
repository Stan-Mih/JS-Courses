function modernTimesOfHashTag(sentence) {
    const words = sentence.split(' ');

    for(const i of words){
        const hasHashInIt = i.startsWith('#');
        if(hasHashInIt && i.length > 1){
            const word = i.substring(1,(i.length));
            const onlyLetters = !/[^a-zA-Z]/.test(word);
           if(onlyLetters){
            console.log(word);
           }
        }
        
    }
   
}modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')