import Header from "./Header";

export default function Layout({ children, title, description, path }) {
  return (
    <>
      <Header title={title} description={description} path={path} />
      {children}
    </>
  );
}
