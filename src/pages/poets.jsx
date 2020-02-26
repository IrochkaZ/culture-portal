import React, { Component, Fragment } from "react";
import SearchInput, { createFilter } from "react-search-input";
import Header from "../components/common/header";
import { Link } from "gatsby";

const poetsData = JSON.parse(localStorage.poetsData).slice(1); // exclude project members [0] from poets array

class Poets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  render() {
    const lang = localStorage.lang;
    const KEYS_TO_FILTERS = [
      `fields.data.${lang}.city`,
      `fields.data.${lang}.name`
    ];
    const filteredPoets = poetsData.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );
    return (
      <Fragment>
        <Header setLanguage={e => setLanguage(e.target.value)} />
        <div>
          <SearchInput className="search-input" onChange={this.searchUpdated} />
          {filteredPoets.map(poet => {
            const { data } = poet.fields;
            return (
              <div className="result" key={poet.fields.id}>
                <Link className="summary" to={`poet/${poet.fields.id}`}>
                  <p className="poet-name">
                    {data[lang].name}{" "}
                    <span className="poet-summary">{data[lang].summary}</span>
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }
}

export default Poets;
