function rectangle(w, h, col) {

    const color = col.charAt(0).toUpperCase() + col.slice(1);    
    const rectangle = {
        width : w,
        height : h,
        color : color,
        calcArea : function (){
           return this.width * this.height; 
        }
    }
    return rectangle;
}


let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

