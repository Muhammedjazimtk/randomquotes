import "./App.css";
import axios from "axios";
import { useEffect } from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function App() {
  useEffect(() => {
    axios.get("https://api.quotable.io/random").then((response) => {
      document.getElementById("qoute").innerHTML = response.data.content;
      document.getElementById("author").innerHTML = "-" + response.data.author;
    });
  }, []);

  function handleClick() {
    axios.get("https://api.quotable.io/random").then((response) => {
      document.getElementById("qoute").innerHTML = response.data.content;
      document.getElementById("author").innerHTML = response.data.author;
    });
    const element = document.getElementsByClassName("change");

    document.body.style.color = " black";
  }
  return (
    <div className="flex flex-col gap-4 justify-center items-center bg-green-300 h-screen w-full change">
      <div className="flex flex-col bg-white rounded-sm p-14 h-auto w-[550px] gap-4">
        <div>
          <p
            id="qoute"
            className="text-2xl font-medium text-center text-green-300"
          ></p>
        </div>
        <p id="author" className="text-right font-light text-green-300 "></p>
        <div className="flex items-center   justify-between ">
          <div className="flex gap-1  ">
            <div className="flex justify-center items-center h-[40px] w-[40px] bg-green-300">
              <InstagramIcon
                className=" text-white rounded-sm  "
                fontSize="small"
              />
            </div>
            <div className="flex justify-center items-center h-[40px] w-[40px] bg-green-300">
              <TwitterIcon
                className=" text-white rounded-sm "
                fontSize="small"
              />
            </div>
          </div>
          <button
            id="btn"
            onClick={handleClick}
            className="bg-green-300 text-white font-normal py-2 px-3 text-sm rounded-sm "
          >
            New quote
          </button>
        </div>
      </div>
      <p className="text-white text-sm">by jazim</p>
    </div>
  );
}

export default App;
