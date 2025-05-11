import bcrypt from "bcrypt";

async function checkUser(id, username, password) {
  //!Naomi's part
  //?fetch user from DB using ORM()
  const userFromDb = ""; //!find user from users table using username and id
  if (!userFromDb) {
    return { success: false, message: "User not found!" };
  }
  const checkPassword = await bcrypt.compare(password, userFromDb.password); //?compare the hashed password with the one we get from the DB
  if (!checkPassword) {
    return { success: false, message: "Incorrect password" };
  }

  return { success: true, message: "User authenticated" };
}

export default checkUser;
