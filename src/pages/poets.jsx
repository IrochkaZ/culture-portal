import React, { useState } from "react";
import SearchInput, { createFilter } from "react-search-input";
import { Link } from "gatsby";
import Header from "../components/common/header";

const Poets = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang"));
  const [searchTerm, setSearchTerm] = useState("");
  const KEYS_TO_FILTERS = [
    `fields.data.${lang}.city`,
    `fields.data.${lang}.name`
  ];
  let { poetsData } = localStorage;
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
              <Link className="result-summary" to={`/poet/${poet.fields.id}`}>
                <h2 className="result-name">{data[lang].name}</h2>
                <img
                  className="result-img"
                  src={data[lang].picture}
                  alt={data.name}
                />
                <p className="result-life">{data[lang].dateOfBirth}</p>
                <p className="result-summary">{data[lang].summary}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Poets;
