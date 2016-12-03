function doGet(e) {                                                            
    return HtmlService.createHtmlOutputFromFile('index')                       
        .setTitle('QueryExample')                                              
        .setSandboxMode(HtmlService.SandboxMode.IFRAME);                       
}                                                                              

function getSpreadSheetFiles(folder, path) {                                   
    if (folder == null && path == null) {                                      
        return getSpreadSheetFiles(DriveApp.getRootFolder(), "");              
    }                                                                          

    var files = [];                                                            
    path = path + "/" + folder.getName();                                      

    var fileIt = folder.getFilesByType(MimeType.GOOGLE_SHEETS);                
    while(fileIt.hasNext()) {                                                  
        var f = fileIt.next();                                                 
        files.push({id: f.getId(), path: path + "/" + f.getName()});           
    }                                                                          

    var folderIt = folder.getFolders();                                        
    while(folderIt.hasNext()) {                                                
        fs = getSpreadSheetFiles(folderIt.next(), path);                       
        for (var i = 0; i < fs.length; i++) {                                  
            files.push(fs[i]);                                                 
        }                                                                      
    }                                                                          
    return files;                                                              
}                                                                              

function getSheets(fileId) {                                                   
    var sheets = [];                                                           
    var spreadsheet = SpreadsheetApp.openById(fileId);                         
    var sheetsTmp = spreadsheet.getSheets();                                   
    for (var i = 0; i < sheetsTmp.length; i++) {                               
        var sheet = sheetsTmp[i];                                              
        sheets.push(sheet.getSheetName());                                     
    }                                                                          
    return sheets;                                                             
}                                                                              

function getUrl(fileId) {                                                      
    return SpreadsheetApp.openById(fileId).getUrl();                           
} 
