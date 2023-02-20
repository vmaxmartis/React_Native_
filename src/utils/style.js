export const styleItem = (index, length, begin, middle, end) => {
  if (length === 0) return {};
  else if (length === 1) return middle;
  else if (index === 0) return begin;
  else if (index === length - 1) return end;
  else return middle;
};