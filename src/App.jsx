import "./App.css";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import PostPage from "./pages/PostPage"
import BlogPosts  from "./data/blogposts";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <div className="flex-grow flex justify-center lg:p-4">
        <div className="lg:w-3/4 w-full lg:p-6 max-w-full box-border">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            {/* <Route path="/projects" element={<ProjectsPage />} /> */}
            <Route path="/blog/post/:id" element={<BlogPosts />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  </Router>
  
  
  );
}

function Header() {
  return (
    <div className="w-full flex justify-center p-2">
      <div className="lg:w-1/2 w-full flex justify-between border-b-2 border-stone-500">
        <div>hilkin</div>
        <div>
          <Link to="/" className="px-2">about</Link>
          {/* <Link to="/projects" className="px-2">projects</Link> */}
          <Link to="/blog" className="px-2">blog</Link>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="w-full flex justify-center p-4">
      <div className="lg:w-1/2 w-full flex justify-between border-t-2 border-stone-500">
        <span className="py-2">Nikhil Dhariwal</span>
        <div className="flex py-2 gap-4">
          <Link to="mailto:nikhildhariwal2004@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5"><path d="M24 1l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-13 8.63c1.013-1.574 1.955-2.256 2.938-2.55l.234 1.448c-.663.256-1.215.806-1.965 1.971l-1.207-.869zm11-4.729c-.928 1.473-1.748 2.104-2.566 2.322l.254 1.436c.746-.176 1.521-.583 2.312-1.391v-2.367zm-3.855 2.385c-.883-.103-1.92-.365-2.938-.376l.236 1.462c.873.068 1.931.345 2.963.395l-.261-1.481z"/></svg>
          </Link>
          <Link to="https://github.com/404Nikhil">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5"  viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </Link>
          <Link to="https://www.linkedin.com/in/nikhil-dhariwal-800b64247/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5"  viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
          </Link>
          <Link to="https://x.com/404Nikhil">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5" strokeLinecap="round" strokeLinejoin="round">
              <title>X</title>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
