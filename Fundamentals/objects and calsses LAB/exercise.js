function songs(input) {

    class Song {
        constructor(typeList, name, time){
           this.typeList = typeList;
           this.name = name;
           this.time = time; 
        }
    }
    const numOfSongs = input.shift();
    const whatTypeToPrint = input.pop();
    let songs = [];

    for (const song of input) {
        const [list, name, time] = song.split("_");
        let newSong = new Song(list, name, time);
        songs.push(newSong);
    }
    
    if(whatTypeToPrint === "all"){
        for (const song of songs) {            
            console.log(song.name);
        }
    }else{
        for (const song of songs) {
            if(whatTypeToPrint === song.typeList){
                console.log(song.name);
            }
        }
    }
}    
songs([3,
    'favourite_DownTown_3:14',
   'favourite_Kiss_4:16',
   'favourite_Smooth Criminal_4:01',
   'favourite']
    )
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    )
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    ) 