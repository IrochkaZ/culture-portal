import React from "react";
import PropTypes from "prop-types";
import { Col, Card } from "react-bootstrap";

const TeamMember = ({ data }) => {
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
          <Card.Title>{data[localStorage.getItem("lang")].name}</Card.Title>
          <Card.Text>{data[localStorage.getItem("lang")].role}</Card.Text>
          <Card.Link href={data.link} target="_blank">
            <img
              src="https://avatars3.githubusercontent.com/u/9919?s=30&v=30"
              alt=""
            />
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

TeamMember.propTypes = {
  data: PropTypes.shape().isRequired
};

export default TeamMember;
