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

  function play() {
    var audio = document.getElementById("audio");
    audio.play();
    const text = document.getElementById("text");

    text.style.display = "block";
  }

  function handleClick() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    axios.get("https://api.quotable.io/random").then((response) => {
      document.getElementById("qoute").innerHTML = response.data.content;
      document.getElementById("author").innerHTML = "-" + response.data.author;
    });

    const elements = document.getElementsByClassName("change");
    const c = document.getElementsByClassName("c");

    for (let i = 0; i < c.length; ++i) {
      c[i].style.backgroundColor = "#" + randomColor;
    }

    for (let i = 0; i < elements.length; ++i) {
      elements[i].style.color = "#" + randomColor;
    }
  }
  return (
    <div className="flex flex-col gap-4 justify-center items-center bg-green-300 h-screen w-full c  ">
      <div className="w-[300px] flex flex-col bg-white rounded-sm p-14 h-auto md:w-[550px] gap-4">
        <div>
          <p
            id="qoute"
            className=" text-md md:text-2xl font-medium text-center text-green-300 change"
          ></p>
        </div>
        <p
          id="author"
          className="text-sm md:text-base text-right font-light text-green-300  change"
        ></p>
        <div className="flex flex-col h-[100px] justify-around md:flex-row  items-center   md:justify-between  ">
          <div className="flex gap-1  ">
            <a title="post on instagram" onClick={play}>
              <div className="flex justify-center items-center h-[40px] w-[40px] bg-green-300 rounded-sm c">
                <InstagramIcon
                  className=" text-white rounded-sm  "
                  fontSize="small"
                />
              </div>
            </a>

            <a
              title="post on twitter"
              target="_blank"
              rel="noreferrer"
              onClick={play}
            >
              <div className="flex justify-center items-center h-[40px] w-[40px] bg-green-300 rounded-sm c">
                <TwitterIcon
                  className=" text-white rounded-sm "
                  fontSize="small"
                />
              </div>
            </a>
          </div>
          <button
            id="btn"
            onClick={handleClick}
            className="bg-green-300 text-white font-normal py-2 px-3 text-sm rounded-sm c animate-pulse hover:filter
             "
          >
            New quote
          </button>
        </div>
      </div>
      <p className="text-white text-sm">by jazim</p>
      <audio id="audio" src="/rick.mp3"></audio>
      <p id="text" className="text-white animate-bounce hidden text-xl">
        there&apos;s always space left for fun 😜
      </p>
    </div>
  );
}

export default App;
