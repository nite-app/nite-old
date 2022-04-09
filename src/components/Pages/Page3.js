import React, { useState, useEffect } from "react";
import "../../App.css";
import { Link, Outlet } from "react-router-dom";
import temp from "../../img/temp.png";
import seticon from "../../img/setimg.png";
import searchicon from "../../img/searchimg.png";
import signoutimg from "../../img/signoutimg.png";
import { useAuth } from "../../contexts/AuthContext";
import Input from "@mui/material/Input";
import Habit from "../Habit";
import { v4 as uuidv4 } from "uuid";

const Page3 = () => {
  const [error, setError] = useState("");
  const { name } = useAuth();
  const { signout } = useAuth();

  //HABITS
  const [habitText, setHabitText] = useState("");
  const [habitListLeft, setHabitListLeft] = useState([]);
  const [habitListRight, setHabitListRight] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(habitListLeft.length + habitListRight.length);
    console.log("count: " + count);
  }, []);

  const handleAddHabit = () => {
    if (count < 4) {
      setHabitListLeft([...habitListLeft, habitText]);
      setHabitText("");
    } else if (count > 3 && count < 8) {
      setHabitListRight([...habitListRight, habitText]);
      setHabitText("");
    } else {
      alert("Puoi inserire al masismo 8 Habits!");
    }

    setCount(count + 1);
    console.log(count);
  };

  const habitTextChange = (event) => {
    setHabitText(event.target.value);
  };

  const habitIconChange = (event) => {
    setHabitText(event.target.value);
  };

  return (
    <>
      <div className="App" id="Home">
        <div className="sidebar">
          <Link to="/register" style={linkStyle}>
            <div className="account">
              <img src={temp} alt="" id="accImg" />
              <h1 className="accountheader">{name}</h1>
              <img src={signoutimg} alt="" id="signoutimg" onClick={signout} />
            </div>
          </Link>
          <div className="break">.</div>
          <div className="sidecontent">
            <div className="panel">
              <Link to="/" style={linkStyle}>
                <h1 className="panelheader">Home</h1>
                <p className="panelitem">Overview</p>
                <p className="panelitem">Daily Questions</p>
              </Link>
            </div>
            <div className="panel">
              <Link to="/page2" style={linkStyle}>
                <h1 className="panelheader">Your Sleep</h1>
                <p className="panelitem">Add Sleep Insights</p>
                <p className="panelitem">Weekly Report</p>
                <p className="panelitem">Your Notes</p>
              </Link>
            </div>
            <div className="panel">
              <h1 className="panelheader">Your Habits</h1>
              <p className="panelitem">View Habits</p>
              <p className="panelitem">Edit Habits</p>
              <p className="panelitem">Weekly Report</p>
            </div>
          </div>
          <div className="break">.</div>
          <div className="sidemenu">
            <div className="menuitem">
              <img src={seticon} alt="" className="sidemenuicon" />
              <p className="sidemenup">Settings</p>
            </div>
            <div className="menuitem">
              <img src={searchicon} alt="" className="sidemenuicon" />
              <p className="sidemenup">Find</p>
            </div>
          </div>
        </div>
        <div className="maincontainer">
          <h1 className="containerheader">Your Habits</h1>
          <div className="mainpanel1">
            <div className="mainpanel3grid">
              <div className="mainpanel3gridleft">
                <div className="mainpanel3gridleftgridheader">
                  Current habits
                </div>
                <div className="mainpanel3gridleftgrid">
                  <div className="mainpanel3gridleftgridleft">
                    {habitListLeft.map((habit) => {
                      return <Habit icon={"alcoolicon.png"} text={habit} />;
                    })}
                  </div>
                  <hr className="mainpanel3gridleftsep"></hr>
                  <div className="mainpanel3gridleftgridright">
                    {habitListRight.map((habit) => {
                      return <Habit icon={"alcoolicon.png"} text={habit} />;
                    })}
                  </div>
                </div>
              </div>

              <hr className="mainpanel3sep"></hr>

              <div className="mainpanel3gridright">
                <h1 className="mainpanel3gridrighttitle">Set a new habit</h1>
                <div className="mainpanel3gridrightcontainer">
                  <div className="mainpanel3gridrighttxt">
                    <p className="mainpanel3gridrightintext1">Name</p>
                    <input
                      type="text"
                      className="mainpanel3gridrightinput"
                      value={habitText}
                      onChange={habitTextChange}
                      required
                    />
                  </div>
                  <div className="colorsselect">
                    <p className="mainpanel3gridrightintext1">Color</p>
                    <div className="colorsgrid">
                      <div className="colorcircle red"></div>
                      <div className="colorcircle orange"></div>
                      <div className="colorcircle yellow"></div>
                      <div className="colorcircle green"></div>
                      <div className="colorcircle aqua"></div>
                      <div className="colorcircle blue"></div>
                      <div className="colorcircle purple"></div>
                      <div className="colorcircle pink"></div>
                      <div className="colorcircle white"></div>
                    </div>
                  </div>
                  <div className="mainpanel3gridrightadd">
                    <div className="iconselect">
                      <p className="mainpanel3gridrightintext">Icon</p>
                      <div className="iconcircle">
                        <label htmlFor="iconSelect" className="selectIconBtn">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <Input
                          id="iconSelect"
                          type="file"
                          className="iconcircle"
                          text=""
                          style={{ visibility: "hidden" }}
                          inputProps={{
                            accept: "image/png, image/gif, image/jpeg",
                          }}
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                    <div className="reminderselect">
                      <p className="mainpanel3gridrightintext">Add</p>
                      <button className="reminderbtn" onClick={handleAddHabit}>
                        Add Habit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mainpanelscont">
            <div className="bottompanel"></div>
            <div className="bottompanel"></div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Page3;

const linkStyle = {
  textDecoration: "none",
  color: "#000",
  textAlign: "left",
};