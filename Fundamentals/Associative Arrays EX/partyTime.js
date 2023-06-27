function partyTime(arr) {

    let index = 0;
    let input = arr[index];
    let partyList = [];

    while(input !== "PARTY"){
        partyList.push(input);
        index++;
        input = arr[index];
    }
    index++;

    while(input){
        input = arr[index]; 
        if(partyList.includes(input)){
            let indexOf = partyList.indexOf(input);
            let removal  = partyList.splice(indexOf,1);
        }
        index++;
    }
    console.log(partyList.length);

    let vip = [];
    let regular = [];

    for(let i of partyList){
        let firstDigit = Number(i[0]);
        if(firstDigit){
            vip.push(i);
        }else{
            regular.push(i);
        }
    }for(let i of vip){
        console.log(i);
    }for(let u of regular){
        console.log(u);
    }
}partyTime([
'7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
])
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]
)
