import React, { useState } from "react";
import SearchInput, { createFilter } from "react-search-input";
import { Link } from "gatsby";
import Header from "../components/common/header";

const poetsData = JSON.parse(localStorage.poetsData).slice(1); // exclude project members [0] from poets array

const Poets = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang"));
  const [searchTerm, setSearchTerm] = useState("");
  const KEYS_TO_FILTERS = [
    `fields.data.${lang}.city`,
    `fields.data.${lang}.name`
  ];
  const filteredPoets = poetsData.filter(
    createFilter(searchTerm, KEYS_TO_FILTERS)
  );
  return (
    <>
      <Header setLanguage={e => setLang(e.target.value)} />
      <div>
        <SearchInput
          className="search-input"
          onChange={e => setSearchTerm(e.target.value)}
        />
        {filteredPoets.map(poet => {
          const { data } = poet.fields;
          return (
            <div className="result" key={poet.fields.id}>
              <Link className="summary" to={`poet/${poet.fields.id}`}>
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
