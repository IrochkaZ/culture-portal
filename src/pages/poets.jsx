import React, { useState, useEffect } from "react";
import SearchInput, { createFilter } from "react-search-input";
import { Link } from "gatsby";
import Header from "../components/common/header";

const Poets = () => {
  const windowGlobal = typeof window !== "undefined" && window;
  const [lang, setLang] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    setLang(windowGlobal.localStorage.getItem("lang") || "ru");
  }, []);

  const KEYS_TO_FILTERS = [
    `fields.data.${lang}.city`,
    `fields.data.${lang}.name`
  ];
  if (!windowGlobal) return null;
  let { poetsData } = windowGlobal.localStorage;
  if (!poetsData) return null;
  poetsData = JSON.parse(poetsData);
  const filteredPoets = poetsData.filter(
    createFilter(searchTerm, KEYS_TO_FILTERS)
  );
  return (
    <>
      <Header setLanguage={e => setLang(e.target.value)} />
      <div>
        <SearchInput
          className="search-input"
          onChange={value => setSearchTerm(value)}
        />
        {filteredPoets.map(poet => {
          const { data } = poet.fields;
          return (
            <div className="result" key={poet.fields.id}>
              <Link className="summary" to={`/poet/${poet.fields.id}`}>
                <p className="poet-name">
                  {data[lang].name}
                  <span className="poet-summary">{data[lang].summary}</span>
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
