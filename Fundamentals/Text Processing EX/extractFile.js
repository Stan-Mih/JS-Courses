function extractFile(input) {
    const pathArray = input.split('\\');
    const fileAndExt = pathArray.pop();
    const index = fileAndExt.lastIndexOf('.');
    const file = fileAndExt.substring(0,index);
    const ext = fileAndExt.substring(index +1,(fileAndExt.length));
    

    console.log(`File name: ${file}\nFile extension: ${ext}`);
     


}extractFile('C:\\Internal\\training-internal\\Template.xx.pptx')
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')