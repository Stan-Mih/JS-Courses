function sortAnArrayBy2Criteria(arr) {
    
    let sorted = arr.sort((a,b) => a.localeCompare(b)||a.length - b.length);
           
    console.log(sorted.join("\n"));
}   
sortAnArrayBy2Criteria(['alpha', 
'beta', 
'gamma']
) 
sortAnArrayBy2Criteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
) 
sortAnArrayBy2Criteria(['test', 
'Deny', 
'omen', 
'Default']
) 
