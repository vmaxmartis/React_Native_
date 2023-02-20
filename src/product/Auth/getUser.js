import users from "../../FakeData/user";

export const getUser = (email, password) => {
  console.log(users);
  return users.find(
    (item) => item.email === email && item.password === password
  );
};
