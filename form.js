document.getElementById("myform").onsubmit = function(e){
    e.preventDefault();
    fetch("https://script.google.com/macros/s/AKfycby5N8dIUZne6REVLVKfTpg6L-Cqycuq_p32ZRbK2PZkRLNPXElwFbEwFdEUf8jfg_19/exec", {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(new FormData(this))
    });
    alert("Form submitted!");
};

// function doPost(e){
//   var sheet =
//   SpreadsheetApp.getActiveSpreadsheet()
//   .getSheetByName("sheet1");
//   sheet.appendRow([
//     e.parameter.name,
//     e.parameter.rollno,
//     e.parameter.class,
//     e.parameter.hobbies
//   ]);
//   return
//   ContentService.createTextOutput("Success");
  
// };