import "./DivColor.css";
import { useEffect, useState } from "react";
import * as Separator from "@radix-ui/react-separator";
import {Link} from 'react-router-dom'
import groupImage from "../Images/groupImage.png";
import groupIcon from "../Images/groupIcon.png";
import phoneIcon from "../Images/phone.png";
import "@radix-ui/themes/styles.css";
import add from "../Images/add.png";
import * as Dialog from "@radix-ui/react-dialog";
import CloseIcon from "@mui/icons-material/Close";
import { Card } from "@radix-ui/themes";
import * as Avatar from "@radix-ui/react-avatar";




// Images...
import girl1 from "../Images/Girls/girl1.jpg";
import girl2 from "../Images/Girls/girl2.jpg";
import girl3 from "../Images/Girls/girl3.jpg";
import girl4 from "../Images/Girls/girl4.jpg";
import girl5 from "../Images/Girls/girl5.jpg";

import boy1 from "../Images/Boys/boy1.jpg";
import boy2 from "../Images/Boys/boy2.jpg";
import boy3 from "../Images/Boys/boy3.jpg";
import boy4 from "../Images/Boys/boy4.jpg";
import boy5 from "../Images/Boys/boy5.jpg";
import { useNavigate } from "react-router-dom";

export default function DecidingTime() {
  const [groupName, setGroupName] = useState("");

  function catchingGroupName(groupName) {
    setGroupName(groupName);
  }

  return (
    <div className="absolute z-0 bg-black w-screen h-screen flex justify-center">
      <div className="relative z-1 rounded-sm flex flex-col md:flex-row justify-center my-16 max-w-[90vw] max-h-[90vh]">
        <LeftComponent groupName={groupName} />
        <Separator.Root
          orientation="vertical"
          className="hidden md:block"
          style={{
            width: "0.06rem",
            height: "30rem",
            backgroundColor: "black",
          }}
        />
        {groupName ? (
          <RightComponentSubstitute groupName={groupName} />
        ) : (
          <RightComponent catchingGroupName={catchingGroupName} />
        )}
      </div>
    </div>
  );
}

function LeftComponent({ groupName }) {
  const [isEmailEntered, setIsEmailEntered] = useState("");
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);
  const [nameArr, setNameArr] = useState([]);
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [previousCount, setpreviousCount] = useState("");
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setArr([...arr, count]);
    console.log(previousCount, count);
  }, [count, previousCount]);

  function newGroupMember() {
    const boys = [boy1, boy2, boy3, boy4, boy5];
    const girls = [girl1, girl2, girl3, girl4, girl5];

    function storeGender(e, val) {
      if (e.target.value) {
        setGender(val);
      }
    }

    {
      /*Provides avatar to card wrt their gender and adds new card in member state*/
    }
    function addMembersHandler() {
      let selectedImage = "";
      if (gender === "male") {
        let index = Math.floor(Math.random() * boys.length);
        selectedImage = boys[index];
      } else {
        let index = Math.floor(Math.random() * girls.length);
        selectedImage = girls[index];
      }

      setMembers([...members, { id: count, image: selectedImage }]);
      setCount(count + 1);
    }

    return (
      <Dialog.Root>
        <Dialog.Trigger>
          <button>
            <img
              src={add}
              alt="Can't find the image"
              className="w-14 bg-violet-400 p-2 shadow-lg shadow-gray-400 p-1 rounded-full h-14"
            />
          </button>
        </Dialog.Trigger>

        <form action="">
          <Dialog.Portal>
            <Dialog.Overlay className="backdrop-blur-lg bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="bg-gray-200 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <Dialog.Title className="font-bold text-blue-600 font-roboto text-2xl mt-0 p-0 mb-5">
                New Member
              </Dialog.Title>

              <fieldset className="mb-[15px] flex items-center gap-5">
                <input
                  className="text-violet11 shadow-lg h-[3rem] shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] mt-[2rem] outline-none focus:shadow-[0_0_0_2px]"
                  onChange={(e) => setIsEmailEntered(e.target.value)}
                  id="name"
                  placeholder="Please enter your friend's email address"
                />
              </fieldset>
              <div className="bg-white mt-[1.8rem] shadow-lg p-2 py-3 flex justify-around rounded-lg">
                <div>
                  <input
                    onChange={(e) => storeGender(e, "male")}
                    type="radio"
                    name="gender"
                    className="w-10 h-3"
                  />
                  <span className="font-lato text-lg text-blue-500">Male</span>
                </div>
                <div>
                  <input
                    onChange={(e) => storeGender(e, "female")}
                    type="radio"
                    name="gender"
                    className="w-10 h-3"
                  />
                  <span className="font-lato text-lg text-blue-500">
                    Female
                  </span>
                </div>
                <div>
                  <input
                    onChange={(e) => storeGender(e, "others")}
                    type="radio"
                    name="gender"
                    className="w-10 h-3"
                  />
                  <span className="font-lato text-lg text-blue-500">
                    Others
                  </span>
                </div>
              </div>

              <div className="mt-[1rem] flex justify-end">
                <Dialog.Close asChild>
                  <button
                    type="submit"
                    onClick={addMembersHandler}
                    className="bg-violet-400 mt-[0.5rem] hover:bg-violet-600 font-lato text-gray-100 shadow text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                  >
                    Add Member
                  </button>
                </Dialog.Close>
              </div>
              <Dialog.Close asChild>
                <button
                  className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[28px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                  aria-label="Close"
                >
                  <CloseIcon className="hover:bg-red-200 rounded-full" />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </form>
      </Dialog.Root>
    );
  }

  {
    /*Stores name and Avatar of new members*/
  }
  function CardComponent({ image }) {
    return (
      <Card
        className="bg-gray-400 mx-5 my-2 mt-3 bg-gradient-to-r from-violet-900 to-blue-400 text-violet-600"
        size="2"
      >
        <div className="flex flex-row">
          <Avatar.Root className="bg-blackA1 shadow-lg shadow-black inline-flex max-h-[4rem] max-w-[4rem] flex flex-1 select-none items-center justify-center overflow-hidden rounded-full align-middle">
            <Avatar.Image
              className="max-h-[5rem] max-w-[5rem] p-2 rounded-[inherit] object-cover"
              src={image}
            />
            <Avatar.Fallback />
          </Avatar.Root>
          <h2 className="font-lato ml-10 text-lg font-bold text-black">Hii</h2>
        </div>
      </Card>
    );
  }

  return (
    <div className="relative  z-100 bg-gray-100 max-w-full md:max-w-[30rem] max-h-full md:max-h-[35rem] rounded-sm flex flex-1 flex-col">
      <div className="relative z-100 bg-gray-200 flex justify-around p-4">
        <h1 className="text-4xl text-blue-700 font-bold font-roboto m-6">
          Group Members
        </h1>
        {groupName && newGroupMember()}
      </div>
      <Separator.Root
        className="w-full"
        style={{ height: "0.06rem", backgroundColor: "black" }}
      />
      <div className="overflow-scrol">
        {members.map((member) => (
          <CardComponent key={member.id} image={member.image} />
        ))}
      </div>
    </div>
  );
}

{
  /*Before you added group Name*/
}
function RightComponent({ catchingGroupName }) {
  function Img({ catchingGroupName }) {
    const [groupName, setGroupName] = useState("");

    function Substitute() {
      catchingGroupName(groupName);
    }

    return (
      <div>
        <Dialog.Root>
          <Dialog.Trigger>
            <button>
              <img
                src={groupIcon}
                alt="Can't find the image"
                className="w-14 bg-violet-400 shadow-sm shadow-violet-400 p-1 rounded-full h-14"
              />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="backdrop-blur-lg bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="bg-gray-200 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <Dialog.Title className="font-bold text-blue-600 font-roboto text-2xl mt-0 p-0 mb-5">
                New Group
              </Dialog.Title>

              <fieldset className="mb-[15px] flex items-center gap-5">
                <input
                  className="text-violet11 shadow-lg shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] mt-[1.5rem] outline-none focus:shadow-[0_0_0_2px]"
                  id="name"
                  onChange={(event) => setGroupName(event.target.value)}
                  placeholder="Enter a New Group Name"
                />
              </fieldset>

              <div className="mt-[1rem] flex justify-end">
                <Dialog.Close asChild>
                  <button
                    onClick={Substitute}
                    className="bg-violet-400 hover:bg-violet-600 font-lato text-gray-100 shadow text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                  >
                    Create Group
                  </button>
                </Dialog.Close>
              </div>
              <Dialog.Close asChild>
                <button
                  className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[28px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                  aria-label="Close"
                >
                  <CloseIcon className="hover:bg-red-200 rounded-full" />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    );
  }

  return (
    <div className="relative z-100 bg-gray-200 w-full md:w-[70rem] max-h-full md:h-[35rem] rounded-sm flex flex-1 flex-col justify-center p-4 md:p-0">
      <div className="flex justify-center pt-5">
        <img
          src={groupImage}
          alt="Can't find the image"
          className="max-w-[8rem] max-h-[8rem]"
        />
      </div>
      <div className="font-roboto mt-2 text-4xl text-blue-700 text-center font-bold pt-4 pb-4">
        Make Groups Improve Skills
        <br />
        <span className="text-violet-600 text-base font-lato">
          Tap the button to start a new group
        </span>
      </div>
      <div className="flex justify-end mb-10 pr-24 pt-10">
        <Img catchingGroupName={catchingGroupName} />
      </div>
    </div>
  );
}

{
  /*after you added group Name */
}

function RightComponentSubstitute({ groupName }) {

  return (
    <div className="relative z-100 bg-gray-200 w-full md:w-[70rem] max-h-full md:h-[35rem] rounded-sm flex flex-1 flex-col justify-center p-4 md:p-0">

      <div className="flex mb-[1.4rem] mx-2 flex-row mb-1 rounded-lg p-3 justify-between ">
        <div className="text-blue-700  text-4xl mt-2 font-bold ml-10">
          {groupName}
        </div>
        <Link to="/Time/Call"> 
        <div className="bg-violet-400 rounded-full  shadow-lg shadow-gray-400 mr-10">
          <img src={phoneIcon}  alt="Can't find image" className="w-14 p-3" />
        </div>
        </Link>
      </div>

      {/*second*/}
      <div className=" rounded-lg shadow shadow-md mx-8 bg-gradient-to-r from-purple-500 to-pink-500 flex flex-row py-[12rem] mb-1  justify-center">
        <span className="text-white font-open text-xl mx-5">Click the button at the top left to add members </span>
      </div>

   
    </div>
  );
}
