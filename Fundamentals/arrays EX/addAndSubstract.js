function addAndSubstract(input) {
    // let index = 0;
    // let arr = [];
    // let sumOriginal = 0;
    // let sumMod = 0;
    // for(i = 0; i < input.length; i++){
    //     let num = input[index];
    //     if(num % 2 !== 0){
    //       arr.push(num - index); 
    //     }else{
    //         arr.push(num + index);
    //     }sumMod += arr[index];
    //     sumOriginal += num;
    //     index++;
        
    // }console.log(arr);
    // console.log(sumOriginal);
    // console.log(sumMod);

   

    let sumOriginal = 0;
    let sumMod = 0;
    let inputL = input.length;

    for(i = 0; i < inputL; i++){
        sumOriginal += input[i];
        if(input[i] % 2 !== 0){
           input[i] -= i;
        }else{
            input[i] += i;
        }sumMod += input[i];
    }
    console.log(input);
    console.log(sumOriginal);
    console.log(sumMod);

}addAndSubstract([5, 15, 23, 56, 35])