function loadingBar(loaded) {
    // let loadingBar = ['.','.','.','.','.','.','.','.','.','.',]
    // let loadingProgress = loaded / 10;
    // for(let i = 0; i < loadingProgress; i++){
    //     loadingBar[i] = "%";
    // }
    // if(loadingProgress === 10){
    //     console.log("100% Complete!");
    //     console.log("[%%%%%%%%%%]");
    // }else{
    //     console.log(`${loaded}% [${loadingBar.join("")}]`);
    //     console.log('Still loading...');
    // }
    
    let compleated = '%'.repeat(loaded / 10);
    let inpcompleted = '.'.repeat(10 - compleated.length);

    if(compleated.length === 10){
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    }else{
        console.log(`${loaded}% [${compleated}${inpcompleted}]`);
        console.log('Still loading...');
    }
    

}
loadingBar(100)
loadingBar(20)

