import React from "react";

export function replaceNewLines(text: string) {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br className="m-3 bg-black" />
    </React.Fragment>
  ));
}
