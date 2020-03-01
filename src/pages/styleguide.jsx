import React, { useState, useEffect } from "react";
import "../scss/styleguide.scss";
import { Container, Table } from "react-bootstrap";
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
      <Container>
        <h3>Project styleguide</h3>
        <p>
          We use default react-bootstrap styles in our project. To use it you
          should install it with comand:
        </p>
        <code>npm install react-bootstrap bootstrap</code>
        <Table>
          <tr>
            <th>Item</th>
            <th>Example</th>
          </tr>
          <tr>
            <td>Headers</td>
            <td>
              <h1>h1 we</h1>
              <h2>h2 love</h2>
              <h3>h3 Rolling</h3>
              <h4>h4 Scopes</h4>
              <h5>h5 very</h5>
              <h6>h6 much</h6>
            </td>
          </tr>
          <tr>
            <td>Text</td>
            <td>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" className="btn btn-primary">
                Button
              </button>
            </td>
            <td>
              <code>
                .btn-primary
                {" {"}
                <br />
                &emsp; color: #fff;
                <br />
                &emsp; background-color: #7649bc;
                <br />
                &emsp; border-color: #7649bc;
                <br />
                &#125;
              </code>
            </td>
          </tr>
          <tr>
            <td className="primary-color">Primary color</td>
            <td>
              <code>$primary: #7649bc;</code>
            </td>
          </tr>
          <tr>
            <td className="secondary-color">
              <span>Secondary color</span>
            </td>
            <td>
              <code>$secondary: #f5f6f7;</code>
            </td>
          </tr>
          <tr>
            <td className="link-color">Link color</td>
            <td>
              <code>$link-color: #78797b;</code>
            </td>
          </tr>
          <tr>
            <td className="link-hover-color">Link hover color</td>
            <td>
              <code>$link-hover-color: #7649bc;</code>
            </td>
          </tr>
        </Table>
      </Container>
    </>
  );
};

export default Styleguide;
