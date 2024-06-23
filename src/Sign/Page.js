import * as Avatar from "@radix-ui/react-avatar";
import comfort from "../Images/comfort.png";
import schedule from "../Images/schedule.png";
import social from "../Images/social.png";
import login from "../Images/login.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import React, { useState, useEffect } from "react";
import { useNavigate , Link} from "react-router-dom";


export default function Page() {
  const Text = [
    "Show your skills to friends you're comfortable with",
    "Pick a time that works for you and your friends, not just your teachers.",
    "Boost your social skills.",
  ];
  const Image = [comfort, schedule, social];
  let [avatar, setAvatar] = useState(() => AvatarForLeftDiv);
  let [text, setText] = useState(Text[0]);
  let [count, setCount] = useState(0);
  let [image, setImage] = useState(Image[0]);
  let [heading, setHeading] = useState("SignUP");

  function ForwardArrow() {
    setCount((prevCount) => {
      const newCount = prevCount >= 2 ? 0 : prevCount + 1;
      setText(Text[newCount]);
      setImage(Image[newCount]);
      setAvatar(() => AvatarForLeftDiv);

      return newCount;
    });
  }

  function BackwardArrow() {
    setCount((prevCount) => {
      const newCount = prevCount === 0 ? 2 : prevCount - 1;
      setText(Text[newCount]);
      setImage(Image[newCount]);
      setAvatar(() => AvatarForLeftDiv);

      return newCount;
    });
  }

  useEffect(() => {
    setAvatar(() => AvatarForLeftDiv);
  }, [count, image]);
  function ChangingLeft() {
    setAvatar(() => AvatarSubstitute);
    setText("Please log in to your account to continue.");
    setHeading("SignIn");
  }

  function AvatarForLeftDiv() {
    return (
      <div className="flex p-5 justify-between">
        <button onClick={BackwardArrow}>
          <ArrowBackIosNewIcon fontSize="large"></ArrowBackIosNewIcon>
        </button>
        <img
          src={image}
          className="max-w-[6rem] max-h-[6rem] flex flex-1 rounded-full "
          alt=""
        />
        <button onClick={ForwardArrow}>
          <ArrowForwardIosIcon fontSize="large"></ArrowForwardIosIcon>
        </button>
      </div>
    );
  }

  function AvatarSubstitute() {
    return (
      <div>
        <div className="flex flex-col ml-5">
          <div>
            <Avatar.Root className="bg-blackA1 inline-flex max-h-[6rem] max-w-[6rem] flex flex-1 select-none items-center justify-center overflow-hidden rounded-full align-middle">
              <Avatar.Image
                className="max-h-[5rem] max-w-[5rem] rounded-[inherit] object-cover"
                src={login}
              ></Avatar.Image>
              <Avatar.Fallback></Avatar.Fallback>
            </Avatar.Root>
          </div>
          <h2 className="text-roboto text-violet-600 font-extrabold text-3xl">
            Welcome Again!
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black w-screen h-screen flex justify-center font-Roboto">
      <div className="flex flex-col my-32">
        <div className="text-white text-5xl mb-0 pb-2">{heading}</div>

        <div
          className="rounded-2xl bg-gray-100 mt-2 pt-0 shadow-md shadow-gray-200"
          style={{ height: "70vh", width: "70vw" }}
        >
          <div className="flex justify-around">
            <div>
              <LeftDiv avatar={avatar} text={text}></LeftDiv>
            </div>
            <div>
              <RightDiv ChangingLeft={ChangingLeft}></RightDiv>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftDiv({ avatar: AvatarComponent, text }) {
  return (
    <div>
      <div className="flex flex-col mt-5 p-5 max-w-[20rem] rounded-lg">
        <AvatarComponent />
        <div className="mt-7 px-5 flex pb-[4.8rem] justify-center">
          <h3 className="text-blue-500 text-lg py-10 font-lato">{text}</h3>
        </div>
      </div>
    </div>
  );
}

function RightDiv({ ChangingLeft } ) {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [buttonColor, setButtonColor] = useState("#9F7AEA");
  let [inputName, setInputName] = useState(InputName);
  let [submitButton, setSubmitButton] = useState("Create Account");
  let [havingAccount, setHavingAccount] = useState(
    "do you already have an account?"
  );

  const navigate = useNavigate();
  function SubmitHandler(event) {
    event.preventDefault();
   
  }

  useEffect(() => {
    if (name) {
      if (name && email && password) {
        setButtonColor("#7C3AED");
      } else {
        setButtonColor("#9F7AEA");
      }
    } else {
      if (email && password) {
        setButtonColor("#7C3AED");
      } else {
        setButtonColor("#9F7AEA");
      }
    }
  }, [email, password]);

  function InputName() {
    return (
      <input
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        className="shadow mt-5 mx-5 p-2 max-w-96 flex flex-1 rounded-md"
      ></input>
    );
  }

  function LoginHandler() {
    setInputName(null);
    setSubmitButton("Login");
    setHavingAccount(null);
    ChangingLeft();
  }

  return (
    <div className="flex flex-1">
      <form
        onSubmit={SubmitHandler}
        className="shadow-inner shadow-lg  flex justify-center p-5 mt-10 max-w-[30rem] flex-col rounded-lg flex-1"
      >
        {inputName}
        <input
          placeholder="Email"
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="shadow mt-5 flex p-2 max-w-96 mx-5 flex-1 rounded-md"
        ></input>
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="shadow mt-5 p-2 max-w-96 mx-5 flex flex-1 rounded-md"
        ></input>
        <div className="flex justify-between">
          <button
            onClick={LoginHandler}
            type="button"
            className="mt-10 text-blue-800 mx-5 font-lato flex flex-1"
          >
            <b>{havingAccount}</b>
          </button>
         
          <button
            type="submit"
            className="text-gray-100 flex py-2 px-2 justify-center border-black rounded-full m-10 mr-[1.5rem]"
            style={{ backgroundColor: buttonColor }}
          >{(submitButton==="Create Account")?
            <Link to="/">
            {submitButton}
            </Link> :
             <Link to="/Time">
          {submitButton}
          </Link>}
          </button>
        </div>
      </form>
    </div>
  );
}
