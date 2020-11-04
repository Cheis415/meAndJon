const { BadRequestError } = require("../expressError");

// THIS NEEDS SOME GREAT DOCUMENTATION.

// We take in object data and use the key information and map them to sql queries in order to prevent sql injection. 
// An input of an object array is converted into the format of 'data is equal to sql query '$1'. 

function sqlForPartialUpdate(dataToUpdate, jsToSql) {

  //First we check to see if we are receiving data, if not throw a BadRequestError. 
  const keys = Object.keys(dataToUpdate);
  //
  if (keys.length === 0) throw new BadRequestError("No data");

  // {firstName: 'Aliya', age: 32} => ['"first_name"=$1', '"age"=$2']
  const cols = keys.map((colName, idx) =>
      `"${jsToSql[colName] || colName}"=$${idx + 1}`,
  );

  return {
    setCols: cols.join(", "),
    values: Object.values(dataToUpdate),
  };
}

module.exports = { sqlForPartialUpdate };
