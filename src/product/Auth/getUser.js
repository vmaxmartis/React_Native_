import users from "../../FakeData/user";

export const getUser = (email, password) => {
  return users.find(
    (item) => item.email === email && item.password === password
  );
};
