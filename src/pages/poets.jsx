import React, { useState, useEffect } from "react";
import SearchInput, { createFilter } from "react-search-input";
import { Link } from "gatsby";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

import uniquid from "uniquid";

import Header from "../components/common/header";
import getMainPageData from "../components/index/getMainPageData";

const Poets = () => {
  const windowGlobal = typeof window !== "undefined" && window;
  const [lang, setLang] = useState("");
  const [data, setData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLang(windowGlobal.localStorage.getItem("lang") || "ru");
    async function fetchData() {
      const response = await getMainPageData();
      setData(response);
    }
    fetchData();
  }, []);

  const KEYS_TO_FILTERS = [
    `fields.data.${lang}.city`,
    `fields.data.${lang}.name`
  ];

  if (!windowGlobal || !data.length)
    return (
      <Spinner
        animation="grow"
        style={{ marginTop: "25%", marginLeft: "50%" }}
      />
    );
  const poetsData = data.filter(el => el.fields.lang === "multi");
  const pageInfo = data.filter(el => el.fields.lang === "mainInfo")[0].fields
    .data;
  const filteredPoets = poetsData.filter(
    createFilter(searchTerm, KEYS_TO_FILTERS)
  );
  windowGlobal.localStorage.setItem("lang", lang);

  return (
    <>
      <Header
        setLanguage={e => setLang(e.target.value)}
        lang={lang}
        pageInfo={pageInfo}
      />
      <Container className="poets">
        <div className="search-input-wrapper">
          <FaSearch />
          <SearchInput
            className="search-input"
            onChange={value => setSearchTerm(value)}
          />
        </div>

        <Row>
          {filteredPoets.map(poet => {
            const info = poet.fields.data;
            return (
              <Col lg={4} md={6} xs={12} key={uniquid()}>
                <Card key={poet.fields.id}>
                  <Link to={`/poet/${poet.fields.id}`}>
                    <Card.Img
                      variant="top"
                      width="30"
                      src={info[lang].picture}
                      alt={info[lang].name}
                    />
                    <Card.Body>
                      <Card.Title>{info[lang].name}</Card.Title>
                      <Card.Text>{info[lang].summary}</Card.Text>
                    </Card.Body>
                    <Card.Footer>{info[lang].dateOfBirth}</Card.Footer>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export default Poets;
