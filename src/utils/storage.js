import AsyncStorage from "@react-native-async-storage/async-storage";

// Lưu dữ liệu vào bộ nhớ tạm thời
const set = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

// Lấy dữ liệu từ bộ nhớ tạm thời
function get(key) {
  let values = [];
  {
    async () => {
      try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          values.push(value);
        }
      } catch (error) {
        console.log(error);
      }
    };
  }
  return values;
}

// Xóa dữ liệu từ bộ nhớ tạm thời
function remove(key) {
  async () => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };
}
const storage = { set, get, remove };
export default storage;
