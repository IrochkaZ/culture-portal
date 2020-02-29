import React from "react";
import PropTypes from "prop-types";
import { Col, Card } from "react-bootstrap";
import { FaGithubSquare } from "react-icons/fa";

const TeamMember = ({ data, lang }) => {
  return (
    <Col lg={4} md={4} xs={6}>
      <Card>
        <Card.Img
          variant="top"
          width="50"
          src={data.avatar}
          alt="Member photo"
        />
        <Card.Body>
          <Card.Title>{data[lang].name}</Card.Title>
          <Card.Text>{data[lang].role}</Card.Text>
          <Card.Link href={data.link} target="_blank">
            <FaGithubSquare size="4rem"/>
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

TeamMember.propTypes = {
  data: PropTypes.shape().isRequired,
  lang: PropTypes.string.isRequired
};

export default TeamMember;
