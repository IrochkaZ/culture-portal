import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../scss/poet.scss";
import { Container, Row, Col } from "react-bootstrap";

import getMainPageData from "../components/index/getMainPageData";
import WriterCard from "../components/pageAuthor/writercard";
import ListAutors from "../components/pageAuthor/listAutors";
import Timelines from "../components/pageAuthor/timelines";
import Gallery from "../components/pageAuthor/gallery";
import Video from "../components/pageAuthor/video";
import Maps from "../components/pageAuthor/maps";
import Header from "../components/common/header";

import "../scss/poet.scss";

const Poet = ({ pageContext }) => {
  const windowGlobal = typeof window !== "undefined" && window;
  const [language, setLanguage] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    setLanguage(windowGlobal.localStorage.getItem("lang"));
    async function fetchData() {
      const response = await getMainPageData();
      setData(response);
    }
    fetchData();
  }, []);

  if (!windowGlobal || !data.length) return null;
  const poetsInfo = data.filter(el => el.fields.lang === "multi");
  const poetData = poetsInfo
    .map(info => info.fields)
    .find(fields => fields.id === pageContext.id).data;
  const pageInfo = data.filter(el => el.fields.lang === "mainInfo")[0].fields
    .data;
  localStorage.setItem("lang", language);

  return (
    <>
      <Header
        setLanguage={e => setLanguage(e.target.value)}
        lang={language}
        pageInfo={pageInfo}
      />
      <Container className="poet">
        <WriterCard data={poetData[language]} />
        <ListAutors data={poetData[language]} pageinfo={pageInfo[language]} />
        <Row className="life-story">
          <Col lg={6}>
            <Timelines
              data={poetData[language]}
              pageinfo={pageInfo[language]}
            />
          </Col>
          <Col lg={6}>
            <Gallery data={poetData.images} pageinfo={pageInfo[language]} />
          </Col>
        </Row>
        <Video data={poetData.video} pageinfo={pageInfo[language]} />
        <Maps data={poetData.coords} pageinfo={pageInfo[language]} />
      </Container>
    </>
  );
};

Poet.propTypes = {
  pageContext: PropTypes.shape().isRequired
};

export default Poet;
