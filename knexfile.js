require("dotenv").config({ path: "../.env" });

const config = async () => {
  return {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 1,
      max: 20,
      propagateCreateError: false,
    },
    acquireConnectionTimeout: 120_000,
  };
};

module.exports = config();
