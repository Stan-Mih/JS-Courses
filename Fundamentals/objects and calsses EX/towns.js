function towns(arr) {

    // class Town{
    //     constructor(name, lat, long){
    //         this.town = name;
    //         this.latitude = Number(lat).toFixed(2);
    //         this.longitude = Number(long).toFixed(2);
    //     }
       let town = {}; 
    
    for(let i of arr){

        // let townInfo = i.split(" | ");
        // let townName = townInfo[0];
        // let lat = townInfo[1];
        // let long = townInfo[2];

        let[townName,lat, long] = i.split(" | ");
       

       // let townToPrint = new Town(townName, lat, long)
      //  console.log(townToPrint);
      town.town = townName;
      town.latitude = Number(lat).toFixed(2);
      town.longitude = Number(long).toFixed(2);
        
      console.log(town);
    }
}towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)
towns(['Plovdiv | 136.45 | 812.575'])