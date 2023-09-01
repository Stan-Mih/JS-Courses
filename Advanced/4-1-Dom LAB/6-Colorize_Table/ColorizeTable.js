function colorize() {
    const list = document.querySelectorAll("tr");
    for (let i = 1; i < list.length; i++) {
        if(i % 2 !==0){
            document.querySelectorAll("tr")[i].style.background="teal"
        }
    }
}