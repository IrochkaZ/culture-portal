import React, { useState, useEffect } from "react";
import Header from "../components/common/header";
import getMainPageData from "../components/index/getMainPageData";

const Styleguide = () => {
  const windowGlobal = typeof window !== "undefined" && window;
  const [lang, setLang] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    setLang(windowGlobal.localStorage.getItem("lang") || "ru");
    async function fetchData() {
      const response = await getMainPageData();
      setData(response);
    }
    fetchData();
  }, []);

  if (!windowGlobal || !data.length) return null;
  const pageInfo = data.filter(el => el.fields.lang === "mainInfo")[0].fields
    .data;

  return (
    <>
      <Header
        setLanguage={e => setLang(e.target.value)}
        lang={lang}
        pageInfo={pageInfo}
      />

      <table>
        <caption>
          <h2>Project styleguide</h2>
        </caption>
        <tr>
          <th>Item</th>
          <th>Example</th>
        </tr>

        <tr>
          <td>Headers</td>
          <td>h1 h2 h3 h4 h5 h6</td>
        </tr>
        <tr>
          <td>Text</td>
          <td>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
            inventore iste ab earum ipsa, saepe facilis asperiores modi
            explicabo dolor repellendus nesciunt deserunt error possimus
            perferendis nisi cum soluta quasi.
          </td>
        </tr>
        <tr>
          <td>Font</td>
          <td>Font-family</td>
        </tr>
        <tr>
          <td>Buttons</td>
          <td>btn example</td>
        </tr>
        <tr>
          <td>Links</td>
          <td>link example</td>
        </tr>
      </table>
    </>
  );
};

export default Styleguide;
