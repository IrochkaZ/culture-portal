import React, { useState, useEffect } from "react";
import { Container, Table, Badge } from "react-bootstrap";
import uniquid from "uniquid";

import getMainPageData from "../components/index/getMainPageData";
import Header from "../components/common/header";
import WorklogRow from "../components/worklog-row/worklog-row";
import Requirement from "../components/requirement/requirement";

const WorklogPage = () => {
  const windowGlobal = typeof window !== "undefined" && window;
  const [language, setLanguage] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    setLanguage(windowGlobal.localStorage.getItem("lang") || "ru");
    async function fetchData() {
      const response = await getMainPageData();
      setData(response);
    }
    fetchData();
  }, []);

  if (!windowGlobal || !data.length) return null;
  const pageInfo = data.filter(el => el.fields.lang === "mainInfo")[0].fields
    .data;
  windowGlobal.localStorage.setItem("lang", language);
  let worklog = data.filter(el => el.fields.id === "worklog");
  worklog = Object.values(worklog[0].fields.data);
  const difficulties = data.filter(el => el.fields.id === "difficulties");
  let requirements = data.filter(el => el.fields.id === "requirements");
  let members = data.filter(el => el.fields.id === "members")[0].fields.data;
  requirements = Object.values(requirements[0].fields.data);
  members = Object.values(members);
  members = members.map(item => item.en.name);
  return (
    <>
      <Header
        setLanguage={e => setLanguage(e.target.value)}
        lang={language}
        pageInfo={pageInfo}
      />
      <Container className="worklog">
        <h2>Worklog</h2>
        {members.map(item => {
          return (
            <div key={uniquid()}>
              <h3 key={uniquid()}>{item}</h3>
              <Table striped hover key={uniquid()}>
                <thead>
                  <tr>
                    <th>Time spent</th>
                    <th>Feature</th>
                  </tr>
                </thead>
                <tbody>
                  {worklog
                    .filter(item2 => item2.author === item)
                    .map(item3 => {
                      return <WorklogRow key={uniquid()} data={item3} />;
                    })}
                </tbody>
              </Table>
              <p key={uniquid()}>
                Total time:
                {worklog
                  .filter(item2 => item2.author === item)
                  .reduce((sum, item4) => {
                    return sum + item4.hours;
                  }, 0)}
              </p>
            </div>
          );
        })}
        <h2>Difficulties</h2>
        <p>{difficulties[0].fields.data[0][language]}</p>
        <h2>Requirements</h2>
        <ul>
          {requirements.map(item => {
            return <Requirement key={uniquid()} data={item} />;
          })}
        </ul>
        <Badge>
          Total points -&nbsp;
          {requirements
            .filter(item => item.status)
            .reduce((sum, item) => {
              return sum + item.points;
            }, 0)}
        </Badge>
      </Container>
    </>
  );
};

export default WorklogPage;
