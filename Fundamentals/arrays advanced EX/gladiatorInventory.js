function gladiatorInventory(arr) {

    let inventory =  arr.shift().split(" ");

    for (const el of arr) {
        let splited = el.split(" ");
        let [command,item] = splited;
        switch (command) {
            case "Buy":
                if(!inventory.includes(item)){
                    inventory.push(item);
                }
                break;
            case "Trash":
                if(inventory.includes(item)){
                    let index = inventory.indexOf(item);
                    inventory.splice(index,1);
                }
                break;
            case "Repair":
                if(inventory.includes(item)){
                    let index = inventory.indexOf(item);
                    let splicedItem = inventory.splice(index,1);   
                    inventory.push(splicedItem[0])
                }
                break;
            case "Upgrade":
                let insertionElements = item.split("-");                
                if(inventory.includes(insertionElements[0])){
                    let index = inventory.indexOf(insertionElements[0]);                    
                    let itemToInsert = `${insertionElements[0]}:${insertionElements[1]}`;
                    inventory.splice(index+1,0,itemToInsert)
                }                
                break;
                        
            default:
                break;
        }
    
    }
    console.log(inventory);
}
gladiatorInventory(['SWORD Shield Spear','Buy Bag','Trash Shield','Repair Spear','Upgrade SWORD-Steel'])
gladiatorInventory(['SWORD Shield Spear','Trash Bow','Repair Shield','Upgrade Helmet-V'])

