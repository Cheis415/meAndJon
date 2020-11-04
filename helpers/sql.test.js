const { sqlForPartialUpdate } = require("./sql");
const { BadRequestError } = require("../expressError");


describe("sqlForPartialUpdate", function () {
    test("works: for users", function () {
    const thisFunc = sqlForPartialUpdate(
      {firstName: "Marty"},  {firstName: 'first_name'}
    )
      
      expect(thisFunc).toEqual({
        setCols: '"first_name"=$1',
        values: ["Marty"]
      });
    });
  
    test("works: for companies", function () {
      const thisFunc = sqlForPartialUpdate(
        {numEmployees: '7'},  {numEmployees: 'num_employees'}
      )
        
        expect(thisFunc).toEqual({
          setCols: '"num_employees"=$1',
          values: ["7"]
        });
    });
    // if (keys.length === 0) throw new BadRequestError("No data");

    // // {firstName: 'Aliya', age: 32} => ['"first_name"=$1', '"age"=$2']
    // const cols = keys.map((colName, idx) =>
    //     `"${jsToSql[colName] || colName}"=$${idx + 1}`,
    // );
  
    // return {
    //   setCols: cols.join(", "),
    //   values: Object.values(dataToUpdate),
    // };
    // test("works: default no admin", function () {
    //   // given the security risk if this didn't work, checking this specifically
    //   const token = createToken({ username: "test" });
    //   const payload = jwt.verify(token, SECRET_KEY);
    //   expect(payload).toEqual({
    //     iat: expect.any(Number),
    //     username: "test",
    //     isAdmin: false,
    //   });
    // });
  });