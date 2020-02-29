import React, { useState, useEffect } from "react";
import SearchInput, { createFilter } from "react-search-input";
import { Link } from "gatsby";

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

  if (!windowGlobal || !data.length) return null;
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
      <div>
        <SearchInput
          className="search-input"
          onChange={value => setSearchTerm(value)}
        />
        {filteredPoets.map(poet => {
          const info = poet.fields.data;
          return (
            <div className="result" key={poet.fields.id}>
              <Link className="summary" to={`/poet/${poet.fields.id}`}>
                <p className="poet-name">
                  {info[lang].name}
                  <span className="poet-summary">{info[lang].summary}</span>
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Poets;
