function search() {
   const temp =  document.querySelectorAll('li');
   for(let i =0; i <temp.length; i++){
      document.querySelectorAll('li')[i].style.fontWeight = '';
      document.querySelectorAll('li')[i].style.textDecoration = '';
   }
   const search = document.getElementById("searchText").value.toLowerCase();
   const towns = Array.from(document.querySelectorAll('li'));
   let counter = 0;

   towns.forEach((el, index)=> {
      const town = el.textContent.toLowerCase();
      if(town.includes(search)){
         counter++;
         document.querySelectorAll('li')[index].style.fontWeight = 'bold';
         document.querySelectorAll('li')[index].style.textDecoration = 'underline';
      }
   });
   document.getElementById("result").textContent = `${counter} matches found`

}
