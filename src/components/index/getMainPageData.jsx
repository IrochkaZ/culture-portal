const contentful = require("contentful");

const getMainPageData = async language => {
  const client = contentful.createClient({
    space: "fk0dvhht7mqc",
    environment: "raprap",
    accessToken: "F0B2TsvVUAi122zbpjBc8zMc-dTVM1BV6ht3DzuuyHo"
  });
  const name = "verba";
  const data = await client.getEntries({
    content_type: "verba",
    "fields.lang[match]": `${language}`,
    "fields.id[match]": `${name}`
  });

  return data.items;
};

const getMainInfo = async language => {
  const client = contentful.createClient({
    space: "fk0dvhht7mqc",
    environment: "raprap",
    accessToken: "F0B2TsvVUAi122zbpjBc8zMc-dTVM1BV6ht3DzuuyHo"
  });
  const data = await client.getEntries({
    content_type: "verba",
    "fields.id[match]": `mainInfo`,
    "fields.lang[match]": `${language}`
  });
  return data.items;
};

export { getMainPageData, getMainInfo };
