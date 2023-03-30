import React from "react";
import PropTypes from "prop-types";

const TiktokEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="720"
      height="1280"
      src={`https://www.tiktok.com/@zuhairi.ali/video/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded Tiktok"
    />
  </div>
);

TiktokEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default TiktokEmbed;
