import contentful from "contentful";

const client = contentful.createClient({
  space: "fk0dvhht7mqc",
  environment: "raprap",
  accessToken: "F0B2TsvVUAi122zbpjBc8zMc-dTVM1BV6ht3DzuuyHo"
});

const getMainPageData = async () => {
  const info = await client.getEntries();
  return info.items;
};

export default getMainPageData;
