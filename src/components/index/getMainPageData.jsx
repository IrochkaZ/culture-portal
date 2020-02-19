const contentful = require("contentful");

const client = contentful.createClient({
  space: "fk0dvhht7mqc",
  environment: "raprap",
  accessToken: "F0B2TsvVUAi122zbpjBc8zMc-dTVM1BV6ht3DzuuyHo"
});

const getMainPageData = async name => {
  const info = await client.getEntries({
    content_type: "verba",
    "fields.id[match]": `mainInfo`
  });

  const data = await client.getEntries({
    content_type: "verba",
    "fields.id[match]": `${name}`
  });

  return [data.items, info.items];
};

export default getMainPageData;
