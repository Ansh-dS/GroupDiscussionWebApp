import Page from "./Page";
import DecidingTime from "./DecidingTime";
import StartBasicCall from "./VideoCall";
import { Routes, Route } from "react-router-dom";

export default function Paths() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page />}></Route>
        <Route path="/Time" element={<DecidingTime />}></Route>
        <Route path="/Time/Call" element={<StartBasicCall />}></Route>

        <Route path="/*" element = {<Page/> }></Route>
      </Routes>
    </div>
  );
}
