function movies(arr) {

    const movies = [];
    const moviesAndInfo = [];
        

    arr.forEach(line => {
        
        if(line.includes("addMovie")){
            const movieName = line.split("addMovie ");
            movies.push(movieName[1]);
        }else if(line.includes("directedBy")){
            let [name,director] = line.split(" directedBy ");
            if(movies.includes(name)){                
                moviesAndInfo.push({name : name, directior : director});
            }
        }else if(line.includes("onDate")){
            let [name,date] = line.split(" onDate ");
            if(movies.includes(name)){
                moviesAndInfo.push({name : name, date : date});
            }
        }
    });

    // for(let i of arr){
    //     let currentInput = i.split(" ");
    //     let command = currentInput.shift();
    //     let currentMovie = currentInput.join(" ");

    //     if(command === "addMovie"){
    //         movies.push(currentMovie);

    //     }else if(currentInput.includes("directedBy")){

    //     }
    // }




        // arr.forEach(input => {
    //     const inputLine = input.split(" ");
    //     const addCommand = inputLine[0];
    //     const addDirector = inputLine[1];
    //     const addDate = inputLine[1];

    //     if(addCommand === "addMovie"){

    //     }else if(addDirector === "directedBy"){

    //     }else if(addDate === "addDate"){

    //     }
    // });
}movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )
// movies([
//     'addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo'
//     ]
//     )