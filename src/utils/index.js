import { every, isEmpty } from "lodash";
function isValidEmail(value) {
  if (value.trim().length > 0) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  } else {
    return "empty";
  }
}

function validateEmail(value) {
  if (!isValidEmail(value)) {
    return "Invalid Email";
  } else if (isValidEmail(value) === "empty") {
    return "Empty Email";
  } else {
    return null;
  }
}
function validateName(value) {
  if (value.length < 6) {
    return "UserName must be 6 characters";
  } else if (value.length === 0) {
    return "Name is empthy";
  } else {
    return;
  }
}

function validatePassword(value) {
  if (value.length < 9) {
    return "Password must be 9 characters";
  } else if (value.length === 0) {
    return;
  } else {
    return;
  }
}
function checkNullFormField(listCheck) {
  return !every(listCheck, (item) => item.trim().length > 0);
}
function removeById(arr, id) {
  return arr.filter((item) => item.id !== id);
}
function increaseQuantityById(arr, id, key) {
  const existing = arr.find((item) => item.id === id);
  if (existing) {
    if (key === "add") {
      existing.quanlity++;
    } else if (key === "sub") {
      existing.quanlity--;
    }
  }
  return arr;
}
const utils = {
  validateName,
  isValidEmail,
  validateEmail,
  validatePassword,
  checkNullFormField,
  removeById,
  increaseQuantityById,
};

export default utils;
