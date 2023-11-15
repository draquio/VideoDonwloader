import "./Layout.scss";
interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="main">
      <header>
        <nav>Nav</nav>
      </header>
      <div className="container">
          <div className="content_data">{children}</div>
      </div>
      <footer className="footer">footer</footer>
    </div>
  );
};
