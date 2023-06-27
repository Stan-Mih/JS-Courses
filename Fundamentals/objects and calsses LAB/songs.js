function songs(input) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let numberOfSongs = input.shift();
    let typeOfSong = input.pop();

    for(let i = 0; i < numberOfSongs; i++){
        let currentSong = input[i];
        let songStats = currentSong.split("_");
        let song = new Song (songStats[0], songStats[1], songStats[2]);
        songs.push(song);

    } 
    for(let i of songs){
        if(i.type === typeOfSong){
            console.log(i.name);
        }else if(typeOfSong === "all"){
            console.log(i.name);
        }
    }
    
 }songs([3,
     'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
     )
// songs([4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater']
//     )
// songs([2,
//     'like_Replay_3:15',
//     'ban_Photoshop_3:48',
//     'all']
//     ) 