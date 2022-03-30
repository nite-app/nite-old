import React from "react";
import "../App.css";
import { Link, Outlet } from "react-router-dom";
import temp from "../img/temp.png";
import seticon from "../img/setimg.png";
import searchicon from "../img/searchimg.png";

const Page3 = () => {
  return (
    <>
      <div className="App" id="Home">
        <div className="sidebar">
          <Link to="register" style={linkStyle}>
            <div className="account">
              <img src={temp} alt="" id="accImg" />
              <h1 className="accountheader">Katie McLeen</h1>
            </div>
          </Link>
          <div className="break">.</div>
          <div className="sidecontent">
            <div className="panel">
              <h1 className="panelheader">Home</h1>
              <p className="panelitem">Overview</p>
              <p className="panelitem">Daily Questions</p>
            </div>
            <div className="panel">
              <Link to="page2" style={linkStyle}>
                <h1 className="panelheader">Your Sleep</h1>
                <p className="panelitem">Add Sleep Insights</p>
                <p className="panelitem">Weekly Report</p>
                <p className="panelitem">Your Notes</p>
              </Link>
            </div>
            <div className="panel">
              <Link to="page3" style={linkStyle}>
                <h1 className="panelheader">Your Habits</h1>
                <p className="panelitem">View Habits</p>
                <p className="panelitem">Edit Habits</p>
                <p className="panelitem">Weekly Report</p>
              </Link>
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
                    <div className="inlinewordspg3">
                      <img
                        src={require("../img/illustrations/appleicon.png")}
                        alt=""
                        className="bottomimgpg3"
                      />
                      <h4 className="bottomwordpg3">Eat healthy</h4>
                      <input type="checkbox" className="ch" />
                    </div>
                    <div className="inlinewordspg3">
                      <img
                        src={require("../img/illustrations/readicon.png")}
                        alt=""
                        className="bottomimgpg3"
                      />
                      <h4 className="bottomwordpg3">Read 10 pages</h4>
                      <input type="checkbox" className="ch" />
                    </div>
                    <div className="inlinewordspg3">
                      <img
                        src={require("../img/illustrations/meditate.png")}
                        alt=""
                        className="bottomimgpg3"
                      />
                      <h4 className="bottomwordpg3">Meditate</h4>
                      <input type="checkbox" className="ch" />
                    </div>
                    <div className="inlinewordspg3">
                      <img
                        src={require("../img/illustrations/workouticon.png")}
                        alt=""
                        className="bottomimgpg3"
                      />
                      <h4 className="bottomwordpg3">Train yourself</h4>
                      <input type="checkbox" className="ch" />
                    </div>
                  </div>
                  <hr className="mainpanel3gridleftsep"></hr>
                  <div className="mainpanel3gridleftgridright">
                    <div className="inlinewordspg3">
                      <img
                        src={require("../img/illustrations/runicon.png")}
                        alt=""
                        className="bottomimgpg3"
                      />
                      <h4 className="bottomwordpg3">Run 5 km</h4>
                      <input type="checkbox" className="ch" />
                    </div>
                    <div className="inlinewordspg3">
                      <img
                        src={require("../img/illustrations/gamesicon.png")}
                        alt=""
                        className="bottomimgpg3"
                      />
                      <h4 className="bottomwordpg3">No games</h4>
                      <input type="checkbox" className="ch" />
                    </div>
                    <div className="inlinewordspg3">
                      <img
                        src={require("../img/illustrations/micicon.png")}
                        alt=""
                        className="bottomimgpg3"
                      />
                      <h4 className="bottomwordpg3">Listen to podcast</h4>
                      <input type="checkbox" className="ch" />
                    </div>
                    <div className="inlinewordspg3">
                      <img
                        src={require("../img/illustrations/alcoolicon.png")}
                        alt=""
                        className="bottomimgpg3"
                      />
                      <h4 className="bottomwordpg3">Don't drink alcool</h4>
                      <input type="checkbox" className="ch" />
                    </div>
                  </div>
                </div>
              </div>

              <hr className="mainpanel3sep"></hr>

              <div className="mainpanel3gridright">
                <h1 className="mainpanel3gridrighttitle">Set a new habit</h1>
                <div className="mainpanel3gridrightcontainer">
                  <div className="mainpanel3gridrighttxt">
                    <p className="mainpanel3gridrightintext1">Name</p>
                    <input type="text" className="mainpanel3gridrightinput" />
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
                      <div className="iconcircle"></div>
                    </div>
                    <div className="reminderselect">
                      <p className="mainpanel3gridrightintext">Reminders</p>
                      <button className="reminderbtn">Add a reminder</button>
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