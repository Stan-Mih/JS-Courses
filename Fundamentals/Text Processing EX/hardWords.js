function hardWords(input) {

    const words = input[1];
    let text = input[0];
    const textL = text.length;

    let consecUnderScore = 0;

    for(let i = 0; i < textL; i++){
        if(text[i] === '_'){
            consecUnderScore ++;
        }else if(consecUnderScore > 0 && text[i] !== '_'){

            for(let u of words){
                if( consecUnderScore === u.length){
                    const underscore = '_'.repeat(consecUnderScore);
                    let replacedText = text.replace(underscore, u);
                    text = replacedText;
                    consecUnderScore = 0;
                    break;
                }
            }
            
        }
    }
    console.log(text);
}hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)
