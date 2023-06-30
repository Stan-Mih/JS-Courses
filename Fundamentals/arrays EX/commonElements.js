function commonElements(arr1, arr2) {

    //   for(i = 0; i < arr1.length; i++){
    //     for(u = 0; u < arr2.length; u++){
    //         if(arr1[i] === arr2[u]){
    //             console.log(arr1[i]);
    //         }
    //     }
    // }

    // for(i of arr1){
    //     if(arr2.includes(i)){
    //         console.log(i);
    //     }
    // }

    for (const i of arr1) {
        arr2.includes(i) ? console.log(i):console.log();
        }

}commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])