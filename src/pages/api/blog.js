import { renderToString } from "react-dom/server";
import BlogPage from "../BlogPage"; // Adjust the path based on your project structure

export default function handler(req, res) {
  const html = renderToString(<BlogPage />);

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}
