import React, { useEffect, useState } from "react";

// styles
import "./style.scss";

// icons
import { ImQuotesLeft } from "react-icons/im";
import { IconContext } from "react-icons";

const ImageSlider = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    let current = 1;

    const cycleReviews = () => {
      if (current === 4) {
        current = 1;
      } else {
        current += 1;
      }
      setActiveSlide(current);
    };

    const intervalId = setInterval(() => {
      cycleReviews();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const reviews = [
    // slide 1
    {
      quote:
        "Trello makes it easy to keep everyone on the same page. As changes happen, the real-time updates with email notifications have been key",
      p1Strong: "HAYDON DOTSON",
      p1: "- Sales Manager, Detroit Red Wings",
      p2Strong: "Sport",
      p2: "Industry: ",
      images:
        "//images.ctfassets.net/rz1oowkt5gyp/7lYMIrJ4C3qzbliMFrounD/42b0bd6e2a60c2685289b2fdb161f208/detroit-red-wings.svg",
    },
    // slide 2
    {
      quote:
        "Now that we've switched to a remote environment, with the use of Trello, we can now limit the number of meetings we have regarding specific projects and turn to Trello for updates instead.",
      p1Strong: "HALEY ENNES",
      p1: " - HR Manager, Sprout Social",
      p2Strong: "Marketing",
      p2: "Industry: ",
      images:
        "//images.ctfassets.net/rz1oowkt5gyp/7nXolb9JdcJnMUUnrq4HGO/79745cbc1df4920d6596db73d065897a/sprout-social.svg",
    },
    // slide 3
    {
      quote:
        "Everyone loves it; it has democratized our finance function. In some ways Trello shattered hierarchy and brought us together. ",
      p1Strong: "BHARATH SUNDAR",
      p1: " - Finance, eBay",
      p2Strong: "eCommerce",
      p2: "Industry: ",
      images:
        "//images.ctfassets.net/rz1oowkt5gyp/6fuM8z1xpeF4hbcwea2bVV/9307ee47c45122c399c33b7536024bd6/ebay.svg",
    },
    // slide 4
    {
      quote:
        "Very simple to use, great automation and keeps me on track with all I need to do. I also like that it can be shared with others.",
      p1Strong: "KERRY PARKER-EVAN",
      p1: " - IT Project Manager, Egencia",
      p2Strong: "Travel",
      p2: "Industry: ",
      images:
        "//images.ctfassets.net/rz1oowkt5gyp/II3Kz8QYmBOB2hZw2OpWa/019c22804631400fc7ed850908c5829c/egencia.svg",
    },
  ];

  return (
    <div className="Slider">
      <div className="wrapper">
        <ul className="list">
          {reviews.map((review, index) => {
            const { images, p1, quote, p1Strong, p2, p2Strong } = review;
            const count = index + 1;
            return (
              <li
                className={`item
                ${count === activeSlide ? " active" : ""}
                ${count < activeSlide ? " left" : ""}
                ${count > activeSlide ? " right" : ""}
              `}
                key={count}
              >
                <blockquote className="quote">
                  <div className="wrap-quotes">
                    <IconContext.Provider value={{ className: "icons" }}>
                      <ImQuotesLeft />
                    </IconContext.Provider>
                    <p className="value-quotes">{quote}</p>
                  </div>
                  <div className="caption">
                    <span className="p">
                      <strong>{p1Strong}</strong> {p1}
                    </span>
                    <span className="p">
                      {p2}
                      <strong>{p2Strong}</strong>
                    </span>
                    <div className="image">
                      <img src={images}></img>
                    </div>
                  </div>
                </blockquote>
              </li>
            );
          })}
          <li className="indicator">
            <span className={`dot${activeSlide === 1 ? " active" : ""}`} />
            <span className={`dot${activeSlide === 2 ? " active" : ""}`} />
            <span className={`dot${activeSlide === 3 ? " active" : ""}`} />
            <span className={`dot${activeSlide === 4 ? " active" : ""}`} />
          </li>
        </ul>
        {/* <p>Active Slide = {activeSlide}</p> */}
      </div>
    </div>
  );
};

export default ImageSlider;

// import Carousel from "react-bootstrap/Carousel";

// // styles
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.scss";

// const ImageSlider = () => {
//   let btn = document.getElementsByClassName('btn')
//   let slide = document.getElementById('slide')

//   // btn[0].onClick = function() {}
//   const handleBtn = (e) => {
//     const btn = e.target.value
//     for (let i = 0; i < btn.length; i++) {
//       btn[0].
//     }
//   }

//   return (
//     <div className="Slider">
//       <div className="container">
//         <div className="indicator">
//           <span className="btn active" onClick={handleBtn}></span>
//           <span className="btn" onClick={handleBtn}></span>
//           <span className="btn" onClick={handleBtn}></span>
//           <span className="btn" onClick={handleBtn}></span>
//         </div>
//         <div className="testimonial">
//           <div className="slide-row" id="slide">
//             {/* columng 1 */}
//             <div className="slide-col">
//               <div className="user-text">
//                 <p>lorem ipsum dolor</p>
//                 <h3>Kadal 1</h3>
//                 <hp>Kadal 2</hp>
//               </div>
//             </div>

//             {/* column 2 */}
//             <div className="slide-col">
//               <div className="user-text">
//                 <p>lorem ipsum dolor</p>
//                 <h3>Kadal 1</h3>
//                 <hp>Kadal 2</hp>
//               </div>
//             </div>

//             {/* column 3 */}
//             <div className="slide-col">
//               <div className="user-text">
//                 <p>lorem ipsum dolor</p>
//                 <h3>Kadal 1</h3>
//                 <hp>Kadal 2</hp>
//               </div>
//             </div>

//             {/* column 4 */}
//             <div className="slide-col">
//               <div className="user-text">
//                 <p>lorem ipsum dolor</p>
//                 <h3>Kadal 1</h3>
//                 <hp>Kadal 2</hp>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
