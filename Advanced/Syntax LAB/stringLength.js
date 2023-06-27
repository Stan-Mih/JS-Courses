function stringLength(n1,n2,n3) {

    const n1L = n1.length;
    const n2L = n2.length;
    const n3L = n3.length;

    const numsL = n1L + n2L + n3L;
    const avrgL = numsL / 3;

    console.log(numsL);
    console.log(Math.floor(avrgL));
    
    
}stringLength('chocolate', 'ice cream', 'cake')
stringLength('pasta', '5', '22.3')