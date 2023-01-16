import React, { useEffect } from 'react';
import "./main-page.sass";
import { useNavigate } from "react-router";
import user from "../../../user.js";

function MainUserPage(props) {
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      !await user.isExists() ? navigate("/register") : null;
    })();
  }, []);

  return (
    <div />
  );
}
export const route = {
  href: "/profile",
};
export default MainUserPage;
