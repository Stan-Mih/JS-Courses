function cutAndReverse(input) {

    const first = input.substring(0,input.length / 2);
    const last = input.substring(input.length / 2, input.length);

    let firstPrint = '';
    let lastPrint = '';

    for(let i = first.length -1; i >= 0; i--){
        firstPrint += first[i];
    }
    for(let i = last.length -1; i >= 0; i--){
        lastPrint += last[i];
    }
    console.log(firstPrint);
    console.log(lastPrint);
}cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')
    