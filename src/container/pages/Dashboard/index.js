import React from "react";

// styles
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// icons
import { RiPlayCircleLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { HiPlusSm } from "react-icons/hi";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineGlobal,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

// pages
import ImageSlider from "../../../components/Atoms/ImageSlider";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* content 1 */}
      <div className="content1">
        <div className="wrapper">
          <div className="left">
            <h1>Every team works differently.</h1>
            <h1>Let them.</h1>
            <h5>
              One size shouldn't fit all. Manage projects and organize work the
              way your team actually works.
            </h5>
            <input className="handleInput" type="text" placeholder="Email" />
            <button>Sign up - it's free</button>
            <Link to={null}>
              <h6>Watch video</h6>
              <IconContext.Provider value={{ className: "icons" }}>
                <RiPlayCircleLine />
              </IconContext.Provider>
            </Link>
          </div>
          <div className="right">
            <img
              src="//images.ctfassets.net/rz1oowkt5gyp/5QIzYxue6b7raOnVFtMyQs/113acb8633ee8f0c9cb305d3a228823c/hero.png?w=576"
              alt=""
              loading="lazy"
              className="Picture__Image-sc-1wdxyb4-0 eYmxm"
            />
          </div>
        </div>
      </div>

      {/* content 2 */}
      <div className="content2">
        <div className="wrapper">
          <hr />
          <div className="card-wrapper">
            <div className="card1">
              <img
                src="//images.ctfassets.net/rz1oowkt5gyp/2ozLp25HsHeANpiNqAwzGI/d60a017d2f214c28f774b35d03499782/tag.svg"
                alt=""
                loading="lazy"
                className="Picture__Image-sc-1wdxyb4-0 eYmxm"
              />
              <div className="desc">
                <h4>See Trello pricing</h4>
                <p>
                  Whether you’re a team of 2 or 2,000, Trello can be customized
                  for your organization. Explore which option is best for you.
                </p>
                <button>Compare pricing</button>
              </div>
            </div>
            <div className="card2">
              <img
                src="//images.ctfassets.net/rz1oowkt5gyp/6rRWTcHzPKupQ3ZDqBaxu6/aecd045f4b31a92288a85bdb4a9dfe2c/compass.svg"
                alt=""
                loading="lazy"
                className="Picture__Image-sc-1wdxyb4-0 eYmxm"
              />
              <div className="desc">
                <h4>What is Trello?</h4>
                <p>
                  Trello is the visual tool that empowers your team to manage
                  any type of project, workflow, or task tracking.{" "}
                </p>
                <button>Tour Trello</button>
              </div>
            </div>
            <div className="card3">
              <img
                src="//images.ctfassets.net/rz1oowkt5gyp/5AE4nXLOennRxmmUMcgMLM/747e96bdd16cf4113e4ef867bd85fd29/solutions.svg"
                alt=""
                loading="lazy"
                className="Picture__Image-sc-1wdxyb4-0 eYmxm"
              />
              <div className="desc">
                <h4>Discover Trello Enterprise</h4>
                <p>
                  The productivity tool teams love, paired with the features and
                  security needed for scale.
                </p>
                <button>Learn more</button>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>

      {/* content 3 */}
      <div className="content3">
        <div className="wrapper">
          <h2>It’s more than work. It’s a way of working together.</h2>
          <p>
            Start with a Trello board, lists, and cards. Customize and expand
            with more features as your teamwork grows. Manage projects, organize
            tasks, and build team spirit—all in one place.
          </p>
          <button>Start doing</button> <br />
          <img
            className="big-images"
            src="//images.ctfassets.net/rz1oowkt5gyp/7pYWhpQ3vnntxoShaImNws/777fabbf069416489167ab92027ce086/board.png?w=576"
            alt="Illustration of a team Trello Board"
            loading="lazy"
          />
          <p>
            Join over 2,000,000 teams worldwide that are using Trello to get
            more done.
          </p>
          {/* logo */}
          <div className="logo">
            <ul>
              <li>
                <img
                  src="//images.ctfassets.net/rz1oowkt5gyp/7nR3kQlx8IP5mfCCBTatsy/0b3952a6be3ebb10116d62aa93be7bbb/coinbase.svg"
                  alt="Coinbase Logo"
                  width="162"
                  height="80"
                  loading="lazy"
                  className="Picture__Image-sc-1wdxyb4-0 eYmxm"
                />
              </li>
              <li>
                <img
                  src="//images.ctfassets.net/rz1oowkt5gyp/6VwRn7PI4zrZo84Uoa8rnt/b0ae3da34916a3ff02d26e2120efe9b8/johnDeere.svg"
                  alt="John Deere logo"
                  width="162"
                  height="109"
                  loading="lazy"
                  className="Picture__Image-sc-1wdxyb4-0 eYmxm"
                />
              </li>
              <li>
                <img
                  src="//images.ctfassets.net/rz1oowkt5gyp/5KdQPApAFJpLMv9AntiNLk/530cef2a4b56ad758c1e91fad5c3e7ac/Grand-Hyatt.svg"
                  alt="Grand Hyatt logo"
                  width="162"
                  height="80"
                  loading="lazy"
                  className="Picture__Image-sc-1wdxyb4-0 eYmxm"
                />
              </li>
              <li>
                <img
                  src="//images.ctfassets.net/rz1oowkt5gyp/2zdwHAyV1sdTRtu3VZWrnp/cdabf13fb68d433667812689add7cdc8/Google.svg"
                  alt="Google logo"
                  width="162"
                  height="80"
                  loading="lazy"
                  className="Picture__Image-sc-1wdxyb4-0 eYmxm"
                />
              </li>
              <li>
                <img
                  src="//images.ctfassets.net/rz1oowkt5gyp/1zdBcYqeqkDsLUfggfKFRO/a732e0001ca5153ef7195eea63ff6a3b/Visa.svg"
                  alt="Visa logo"
                  width="162"
                  height="80"
                  loading="lazy"
                  className="Picture__Image-sc-1wdxyb4-0 eYmxm"
                />
              </li>
              <li>
                <img
                  src="//images.ctfassets.net/rz1oowkt5gyp/2Im844Kon73pvCD2ljoxeL/4073e041eb8eb961a0f9505965dec09b/Zoom.png?w=576"
                  alt="Zoom logo"
                  width="162"
                  height="80"
                  loading="lazy"
                  className="Picture__Image-sc-1wdxyb4-0 eYmxm"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* content 4 */}
      <div className="content4">
        <div className="wrapper">
          <div className="el1">
            <div className="desc">
              <h2>Features to help your team succeed</h2>
              <p>
                Powering a productive team means using a powerful tool (and
                plenty of snacks). From meetings and projects to events and goal
                setting, Trello’s intuitive features give any team the ability
                to quickly set up and customize workflows for just about
                anything.
              </p>
            </div>
            <div className="images"></div>
          </div>

          <div className="el2">
            <div className="images">
              <img
                src="//images.ctfassets.net/rz1oowkt5gyp/4gcdup5C0Z1rQEQDGfeWth/71156837ac2d75293bf0eec8010aeb6e/view.svg"
                alt="Cursor choosing one of 6 different Trello board views."
                // width="415"
                // height="313"
                loading="lazy"
                className="Picture__Image-sc-1wdxyb4-0 eYmxm"
              />
            </div>
            <div className="desc">
              <p className="title">CHOOSE A VIEW</p>
              <h2>The board is just the beginning</h2>
              <p>
                Lists and cards are the building blocks of organizing work on a
                Trello board. Grow from there with task assignments, timelines,
                productivity metrics, calendars, and more.
              </p>
              <Link to={null}>
                <IconContext.Provider value={{ className: "icons" }}>
                  <HiPlusSm />
                </IconContext.Provider>

                <h4>Learn More</h4>
              </Link>
            </div>
          </div>

          <div className="el3">
            <div className="desc">
              <p className="title">DIVE INTO THE DETAILS</p>
              <h2>Cards contain everything you need</h2>
              <p>
                Lists and cards are the building blocks of organizing work on a
                Trello board. Grow from there with task assignments, timelines,
                productivity metrics, calendars, and more.
              </p>
              <Link to={null}>
                <IconContext.Provider value={{ className: "icons" }}>
                  <HiPlusSm />
                </IconContext.Provider>
                <h4>Learn More</h4>
              </Link>
            </div>
            <div className="images">
              <img
                src="//images.ctfassets.net/rz1oowkt5gyp/4B1RPRoUspHQXgYCRAndBX/466053fb07ff2cdc0ae06649d5f30d8f/card-back.svg"
                alt="Illustration of elements on a Trello card back."
                // width="339"
                // height="275"
                loading="lazy"
                className="Picture__Image-sc-1wdxyb4-0 eYmxm"
              />
            </div>
          </div>

          <div className="el4">
            <div className="images">
              <img
                src="//images.ctfassets.net/rz1oowkt5gyp/1zR830Rgv5hpZbwuiyAFkq/326d72f720d090342f0744a8deb8b727/automation.png?w=576"
                alt="Illustration of a robot moving tasks in order"
                width="489.5"
                height="370"
                loading="lazy"
                className="Picture__Image-sc-1wdxyb4-0 eYmxm"
              />
            </div>
            <div className="desc">
              <p className="title">MEET YOUR NEW BUTLER</p>
              <h2>No-code automation</h2>
              <p>
                Let the robots do the work—so your team can focus on work that
                matters. With Trello’s built-in automation, Butler, reduce the
                number of tedious tasks (and clicks) on your project board by
                harnessing the power of automation across your entire team.{" "}
              </p>
              <Link to={null}>
                <IconContext.Provider value={{ className: "icons" }}>
                  <HiPlusSm />
                </IconContext.Provider>

                <h4>Learn More</h4>
              </Link>
            </div>
          </div>

          <div className="el5">
            <div className="desc">
              <p className="title">POWER-UPS</p>
              <h2>Integrate top work tools</h2>
              <p>
                Easily connect the apps your team already uses into your Trello
                workflow, or add a Power-Up that helps fine-tune one specific
                need. With hundreds of Power-Ups available, your team’s workflow
                wishes are covered.{" "}
              </p>
              <Link to={null}>
                <IconContext.Provider value={{ className: "icons" }}>
                  <HiPlusSm />
                </IconContext.Provider>

                <h4>Learn More</h4>
              </Link>
            </div>
            <div className="images">
              <img
                src="//images.ctfassets.net/rz1oowkt5gyp/17AXIwjhGkuPEpvcWzwoIJ/e6e767d503809a89be375846ac81bbef/power-ups.png?w=576"
                alt="Graphic showing integrations like Slack, Google Drive, Dropbox and Microsoft Teams."
                // width="376.5"
                // height="339"
                loading="lazy"
                className="Picture__Image-sc-1wdxyb4-0 eYmxm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* content 5 */}
      <div className="content5">
        <div className="wrapper">
          <ImageSlider />
        </div>
      </div>

      {/* content 6 */}
      <div className="content6">
        <div className="wrapper">
          <h4>
            Sign up and get started with Trello today. A world of productive
            teamwork awaits!
          </h4>
          <div className="form">
            <input className="input" type="text" placeholder="Email" />
            <button>Sign up</button>
          </div>
        </div>
      </div>

      {/* content 7 */}
      <div className="content7">
        <div className="wrapper">
          <div className="text">
            <h5>Trello also works great on your smaller screen.</h5>
          </div>
          <div className="logo">
            <div className="image">
              <img
                src="//images.ctfassets.net/rz1oowkt5gyp/1A08O96pP0xMdLEGWQsqFl/1bdabd473356ca3f47b6f2bc1c4dd710/app-store.svg"
                alt="Available on the App Store"
                loading="lazy"
                className="Picture__Image-sc-1wdxyb4-0 eYmxm"
              />
              <img
                src="//images.ctfassets.net/rz1oowkt5gyp/ySXuMiOD6CoFYE7olrufg/612dce982aca4bbe1218b703f8541544/play-store.svg"
                alt="Get it on Google Play"
                loading="lazy"
                className="Picture__Image-sc-1wdxyb4-0 eYmxm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="footer">
        <div className="wrapper1">
          <ul className="ul1">
            <li className="li1">
              <div className="firstText">
                <div className="left">
                  <p>Trello</p>
                </div>
                <p>Log In</p>
              </div>
            </li>

            <hr className="hrLi" />

            <li className="li1">
              <Link className="a1">
                <div className="text">
                  <p>About Trello</p>
                  <p>What's behind the boards.</p>
                </div>
              </Link>
            </li>

            <hr className="hrLi" />

            <li className="li1">
              <Link className="a1">
                <div className="text">
                  <p>Jobs</p>
                  <p>Learn about s=open roles on the Trello team.</p>
                </div>
              </Link>
            </li>

            <hr className="hrLi" />

            <li className="li1">
              <Link className="a1">
                <div className="text">
                  <p>Apps</p>
                  <p>
                    Download the Trello App for your Dekstop or Mobile devices.
                  </p>
                </div>
              </Link>
            </li>

            <hr className="hrLi" />

            <li className="li1">
              <Link className="a1">
                <div className="text">
                  <p>Contact us</p>
                  <p>Need anything? Get in touch and we can help.</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <hr />

        <div className="wrapper2">
          <div className="bottom">
            <form>
              <IconContext.Provider value={{ className: "iGlobe" }}>
                <AiOutlineGlobal />
              </IconContext.Provider>
              <select>
                <option>satu</option>
                <option>dua</option>
                <option>tiga</option>
                <option>empat</option>
                <option>ima</option>
              </select>
            </form>

            <ul className="ul2">
              <li className="li2">
                <Link className="a2">Privacy Policy</Link>
              </li>
              <li className="li2">
                <Link className="a2">Terms</Link>
              </li>
              <li className="li2">
                <Link className="a2">Cookie Seettings</Link>
              </li>
              <li className="li2">
                <p>Copyright &copy; 2022 Atlassian</p>
              </li>
            </ul>

            <div className="icons">
              <Link>
                <IconContext.Provider value={{ className: "icons" }}>
                  <AiOutlineInstagram />
                </IconContext.Provider>
              </Link>

              <Link>
                <IconContext.Provider value={{ className: "icons" }}>
                  <FaFacebookF />
                </IconContext.Provider>
              </Link>

              <Link>
                <IconContext.Provider value={{ className: "icons" }}>
                  <FaLinkedinIn />
                </IconContext.Provider>
              </Link>

              <Link>
                <IconContext.Provider value={{ className: "icons" }}>
                  <AiOutlineTwitter />
                </IconContext.Provider>
              </Link>

              <Link>
                <IconContext.Provider value={{ className: "icons" }}>
                  <AiFillYoutube />
                </IconContext.Provider>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
