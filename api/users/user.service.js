const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    const res = {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      email: data.email,
      password: data.password,
    };

    pool.getConnection((error, conn) => {
      conn.query("INSERT INTO users set ?", res, (error, results, fields) => {
        if (error) {
          return callBack(error);
          // console.log("error");
        }
        return callBack(null, results);
      });
    });
  },
};

// (error, results, fields) => {
//   if (error) {
//     return callBack(error);
//     // console.log("error");
//   }
//   return callBack(null, results);
// }
