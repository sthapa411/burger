
//Import MySQL conection
var connection = require("../config/connection.js");


//to pass 3 values in mySQL query
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

//convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
 
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
          // if string with spaces, add quotations 
          if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
          }
          arr.push(key + "=" + value);
        }
      }
     // array of strings to a single comma-separated string
  return arr.toString();
}


