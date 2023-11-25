const { sql } = require("@vercel/postgres");

let getUserInfo = async (name) => {
  const { rows } =
    await sql`SELECT * from test_table where lower(name)=${name}`;

  if (rows && rows.length > 0) {
    return rows[0].info;
  }
  return "No info :(";
};

module.exports = {
  getUserInfo,
};
