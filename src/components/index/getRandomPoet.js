const getRandomPoet = count => {
  const day = new Date().getDate();
  if (day <= count) return day;
  const modulo = day - Math.floor(day / count) * count;
  if (!modulo) return count;
  return modulo;
};

export default getRandomPoet;
