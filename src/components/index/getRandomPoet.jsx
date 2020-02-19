const contentful = require("contentful");

const getSummaryInfo = async () => {
  const client = contentful.createClient({
    space: "fk0dvhht7mqc",
    environment: "raprap",
    accessToken: "F0B2TsvVUAi122zbpjBc8zMc-dTVM1BV6ht3DzuuyHo"
  });

  const data = await client.getEntries({
    content_type: "verba",
    "fields.id[match]": `sum`
  });
  return data.items[0].fields.data;
};

const getRandomPoet = async () => {
  const data = await getSummaryInfo();
  const poetsCount = data.total;
  const day = new Date().getDate();
  if (day <= poetsCount) return day;
  const curr = day - Math.floor(day / poetsCount) * poetsCount;
  if (!curr) return data.keys[poetsCount];
  return data.keys[curr];
};

export default getRandomPoet;
