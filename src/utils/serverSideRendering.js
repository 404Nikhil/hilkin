import React from "react";
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";

export function renderComponentToString(Component) {
  const html = renderToString(<Component />);
  const helmet = Helmet.renderStatic();

  return `
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <!-- Add any other head elements here -->
      </head>
      <body>
        <div id="root">${html}</div>
        <!-- Add any scripts or other body elements here -->
      </body>
    </html>
  `;
}
