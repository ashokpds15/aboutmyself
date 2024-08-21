import React from "react";
import { Container } from "react-bootstrap";

function MeroshareEmbed() {
  return (
    <Container fluid className="meroshare-embed-section">
      <h2>MeroShare Portal</h2>
      <iframe
        src="https://meroshare.cdsc.com.np/#/login"
        width="100%"
        height="800px"
        style={{ border: "none" }}
        title="MeroShare Portal"
      />
    </Container>
  );
}

export default MeroshareEmbed;
