import React, { useState, useEffect } from "react";
import uniquid from "uniquid";

import getMainPageData from "../components/index/getMainPageData";
import Header from "../components/common/header";
import WorklogRow from "../components/worklog-row/worklog-row";
import Requirement from "../components/requirement/requirement";

const WorklogPage = () => {
  const windowGlobal = typeof window !== "undefined" && window;
  const [language, setLanguage] = useState("");
  const [data, setData] = useState({});
  // const [language, setLanguage] = useState(localStorage.getItem("lang"));

  useEffect(() => {
    setLanguage(windowGlobal.localStorage.getItem("lang") || "ru");
    async function fetchData() {
      const response = await getMainPageData();
      setData(response);
    }
    fetchData();
  }, []);

  if (!windowGlobal || !data.length) return null;
  // let members = data.filter(el => el.fields.id === "members")[0].fields.data;
  const pageInfo = data.filter(el => el.fields.lang === "mainInfo")[0].fields
    .data;
  // members = Object.values(members);
  // members = members.map(item => item[language].name);
  // let worklog = data.filter(el => el.fields.id === "worklog");
  // worklog = Object.values(worklog[0].fields.data);
  // const difficulties = data.filter(el => el.fields.id === "difficulties");
  // let requirements = data.filter(el => el.fields.id === "requirements");
  // requirements = Object.values(requirements[0].fields.data);

  windowGlobal.localStorage.setItem("lang", language);

  // if (!data.length) return null;
  // const pageInfo = data.filter(el => el.fields.lang === "mainInfo");
  // const pageMainInfo = pageInfo[0].fields.data[language];
  // localStorage.setItem("lang", language);
  // localStorage.setItem("buttons", pageMainInfo.buttons);
  let worklog = data.filter(el => el.fields.id === "worklog");
  worklog = Object.values(worklog[0].fields.data);
  const difficulties = data.filter(el => el.fields.id === "difficulties");
  let requirements = data.filter(el => el.fields.id === "requirements");
  requirements = Object.values(requirements[0].fields.data);
  let members = localStorage.getItem("teamMembers");
  members = Object.values(JSON.parse(members));
  members = members.map(item => item[language].name);
  return (
    <>
      <Header
        setLanguage={e => setLanguage(e.target.value)}
        lang={language}
        pageInfo={pageInfo}
      />
      <h2>Worklog</h2>
      {members.map(item => {
        return (
          <div key={uniquid()}>
            <h3 key={uniquid()}>{item}</h3>
            <table border="1" key={uniquid()}>
              <tbody>
                <tr>
                  <th>Time spent</th>
                  <th>Feature</th>
                </tr>
                {worklog
                  .filter(item2 => item2.author === item)
                  .map(item3 => {
                    return <WorklogRow key={uniquid()} data={item3} />;
                  })}
              </tbody>
            </table>
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
      <p>
        Total points -&nbsp;
        {requirements
          .filter(item => item.status)
          .reduce((sum, item) => {
            return sum + item.points;
          }, 0)}
      </p>
    </>
  );
};

export default WorklogPage;
