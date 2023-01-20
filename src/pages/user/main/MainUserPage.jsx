import React, { useEffect, useState } from 'react';
import { darcula as colorSchema } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./main-page.sass";
import { useNavigate } from "react-router";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useQuery } from "react-query";
import user from "../../../user.js";
import "../../login/login.sass";
import Logo from "../../../component/logo/Logo.jsx";
import DefaultButton from "../../../component/button/DefaultButton.jsx";
import configuration from "../../../configuration.js";

function MainUserPage(props) {
  const [projectName, setProjectName] = useState("");
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      !await user.isExists() ? navigate("/register") : null;
    })();
  }, []);

  async function checkProjects() {
    const client = await user.getUserByCookie();
    const json = await (await fetch(`${configuration.api.url}/project?userId=${client.Id}`)).json();
    setProjects((prev) => [...json]);
  }

  useEffect(() => {
    checkProjects();
  }, [projects[0]?.Id]);

  const {
    status, data, error, refetch,
  } = useQuery("postProject", async () => {
    const client = await user.getUserByCookie();
    const response = await fetch(`${configuration.api.url}/post/project?userIdCreator=${client.Id}&name=${projectName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, { enabled: false });

  const projectNotSelected = (
    <>
      <p className="def-size title def-family">
        <p className="highlight-success">Create</p>
        your first project
      </p>
      <div>
        <fieldset>
          <legend>Enter project name</legend>
          <input
            type="text"
            className="input"
            onChange={(e) => {
              setProjectName(e.target.value);
            }}
          />
          <DefaultButton
            text="Create project"
            onclick={() => {
              refetch().then(() => {
                checkProjects();
              });
            }}
          />
        </fieldset>
      </div>
    </>
  );

  const projectSelected = (
    <div className="project-sider flex" style={{ maxWidth: "80vw" }}>
      <div className="header">{selectedProject?.Name}</div>
      <div className="errors">
        {(selectedProject.errors?.length) ? selectedProject.errors.map((error) => (
          <SyntaxHighlighter language="javascript" style={colorSchema} showLineNumbers wrapLongLines>
            {error.Body}
          </SyntaxHighlighter>
        )) : <p className="highlight-success def-family def-size">Great! No errors found in current project!</p>}
      </div>
      <div style={{ paddingTop: "5rem" }}>
        <p className="def-family def-size def-color" style={{ lineHeight: "2rem" }}>
          Here is your API key:
          <span style={{ color: "lightskyblue" }}>
            <span className="concentrate">
              {" " + selectedProject.TokenAPI}
            </span>
          </span>
          <div>
            <a href="/documentation" className="highlight-success concentrate">
              How to track errors in this project?
              Check out documentation!
            </a>
          </div>
        </p>
      </div>
    </div>
  );

  return (
    <div className="f-screen flex">
      <img className="diag-back" src="image/charts-diagrams.png" alt="" onDragStart={(e) => e.preventDefault()} />
      <div className="sider">
        <div style={{ marginLeft: "-1rem" }}>
          <Logo />
        </div>
        <div style={{ paddingTop: "1rem" }}>
          {projects.map((item, index) => (
            <DefaultButton
              key={index}
              text={item.Name}
              classes={["project"]}
              onclick={(e) => {
                const selProject = projects.find((project) => project.Name === e.target.textContent);
                setSelectedProject(() => selProject);
              }}
            />
          ))}
          <div className="flex justify-center">
            <DefaultButton
              text="Add new project"
              onclick={(e) => {
                setSelectedProject({});
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex col justify-center" style={{ paddingLeft: "16rem" }}>
        {
          Object.keys(selectedProject).length ? projectSelected : projectNotSelected
        }
      </div>
    </div>
  );
}

export default MainUserPage;
export const route = {
  href: "/profile",
};
