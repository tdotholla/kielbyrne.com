import { Container } from "@chakra-ui/react";
import React from "react";
import { Document, Page } from "react-pdf";
const index = () => {
  return (
    <div>
      <Container maxW={"container.xl"} height={"container.xl"}>
        <object data="KHB_Resume.pdf" type="application/pdf" width="100%">
          <p>
            Unable to display PDF file. <a href="KHB_Resume.pdf">Download</a>{" "}
            instead.
          </p>
        </object>
      </Container>
    </div>
  );
};

export default index;
