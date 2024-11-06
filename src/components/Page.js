import React from "react";
import Paragraph from "./Paragraph";

function Page({ content }) {
  return (
    <div className="page">
      {content.map((paragraph, index) => (
        <Paragraph key={index} index={index} text={paragraph} />
      ))}
    </div>
  );
}

export default Page;
