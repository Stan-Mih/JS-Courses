function equalArrays(arr1, arr2){
   let sumAr1 = 0;
   
   let arr1String = "";
   let arr2String = "";

   for(i = 0; i < arr1.length; i++){
        
    
    sumAr1 += +(arr1[i]);
    arr1String += arr1[i];
   }
   for(i = 0; i < arr2.length; i++){
    arr2String += arr2[i];
   }
   if(arr1String === arr2String){
    console.log(`Arrays are identical. Sum: ${sumAr1}`);
   }else{
    for(i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
        }
    }
    
    
   }
  




}equalArrays(['10','20','39'], ['10','20','30'])