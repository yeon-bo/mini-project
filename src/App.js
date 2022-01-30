import "./styles.css";
import styled from "@emotion/styled";

import { Topbar } from "../Component/Topbar";
import { Backallow } from "../Component/Backallow";
import { AboutLink } from "../Component/AboutLink";

export default function App() {
  const Img = styled.img`
    position: absolute;
    opacity: 50%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  `;
  return (
    <div className="App">
      {/* <Img src="./image/About page.png" Backallow="Allow" /> */}
      <Topbar />
      <Backallow />
      <AboutLink />
    </div>
  );
}
