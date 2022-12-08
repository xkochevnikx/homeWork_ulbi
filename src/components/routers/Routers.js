import About from "../../pages/About";
import Login from "../../pages/Login";
import PageNotFound from "../../pages/PageNotFound";
import PostIdPage from "../../pages/PostIdPage";
import Posts from "../../pages/Posts";

export const privateRoutes = [
  { path: "/about", component: <About />, exact: true },
  { path: "/posts", component: <Posts />, exact: true },
  { path: "/posts/:id", component: <PostIdPage />, exact: true },
  { path: "/*", component: <PageNotFound />, exact: true },
];

export const publicRoutes = [
  { path: "/login", component: <Login />, exact: true },
];
