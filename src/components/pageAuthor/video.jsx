/* eslint-disable react/prop-types */
import React from "react";
import ModalVideo from "react-modal-video";
import PropTypes from "prop-types";
import LogoYoutube from "../../images/Logo_YouTube.png";
import "./styles/video.css";

export default class Video extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    const { data, pageinfo } = this.props;
    const { isOpen } = this.state;
    const { video } = pageinfo;
    return (
      <div>
        <h3>{video}</h3>
        <ModalVideo
          wmode="transparent"
          channel="youtube"
          isOpen={isOpen}
          videoId={data}
          onClose={() => this.setState({ isOpen: false })}
        />
        <button type="button" onClick={this.openModal}>
          <img src={LogoYoutube} alt="youtube" className="video-button" />
        </button>
      </div>
    );
  }
}

Video.propTypes = {
  data: PropTypes.string.isRequired
};
