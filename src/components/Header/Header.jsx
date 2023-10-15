import React from "react";
import "./style.scss";
import { LogoutBtn, Logo, Container } from "../../components/index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <div className="main">
      <Container>
        <nav className="nav">
          <Link to="/">
            <Logo />
          </Link>
          <ul className="list">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name} className="listItem">
                    <button onClick={() => navigate(item.slug)}>
                      {item.name}
                    </button>
                  </li>
                )
            )}
          </ul>
          {authStatus && <LogoutBtn />}
        </nav>
      </Container>
    </div>
  );
}

export default Header;
