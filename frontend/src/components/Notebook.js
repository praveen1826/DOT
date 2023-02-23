import React from "react";
import NavigationBar from "./NavBar";

function Notebook() {
  return (
    <div>
      <NavigationBar />
      <iframe
        src="https://www.kaggle.com/embed/praveen0123/tarp-project?kernelSessionId=120031001"
        height={800}
        style={{ margin: "0 auto", width: "100%" }}
        frameBorder={0}
        scrolling="auto"
        title="Tarp Project"
      ></iframe>
    </div>
  );
}

export default Notebook;
