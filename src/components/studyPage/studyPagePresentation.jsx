import React, { useEffect, useRef } from "react";
import s from "./studyPagePresentation.module.css";
import Modal from "react-modal";
import ReactGoogleSlides from "react-google-slides";

const customStyles = {
  content: {
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "#000",
    transform: "translate(0%, 0%)",
    textAlign: "left",
    border: "0",
  },
};

const StudyPagePresentation = (props) => {
  let modalHeader,
    modalItem1,
    modalItem2,
    modalItem3,
    modalItem4,
    modalStartButton;
  const [modal1IsOpen, setIsOpen1] = React.useState(false);
  const [modal2IsOpen, setIsOpen2] = React.useState(false);

  if (props.link == "") return "";

  function openModal1() {
    setIsOpen1(true);
  }

  function afterOpenModal1() {
    modalHeader.style.opacity = "1";
    modalItem1.style.opacity = "1";
    modalItem2.style.opacity = "1";
    modalItem3.style.opacity = "1";
    modalItem4.style.opacity = "1";
    modalStartButton.style.opacity = "1";
  }

  function closeModal1() {
    setIsOpen1(false);
  }

  function openModal2() {
    setIsOpen2(true);
  }

  function closeModal2() {
    setIsOpen2(false);
  }

  return (
    <div>
      <button onClick={openModal1} className={s.hiddenButton}>
        Open presentation
      </button>
      <Modal
        isOpen={modal1IsOpen}
        onAfterOpen={afterOpenModal1}
        onRequestClose={closeModal1}
        style={customStyles}
        contentLabel="Presentation Mode"
      >
        <div className={s.topBar}>
          <a href="#" onClick={(closeModal1, openModal2)}>
            <div
              className={s.startButton}
              ref={(_modalStartButton) =>
                (modalStartButton = _modalStartButton)
              }
              style={{ width: "120px", height: "44px" }}
            >
              <div>Start</div>
              <img src={process.env.PUBLIC_URL + `/icons/button_arrow.svg`} />
            </div>
          </a>
        </div>
        <div className={s.modalTemp}>
          <h1
            className={s.modalHeader}
            ref={(_modalHeader) => (modalHeader = _modalHeader)}
          >
            Overview
          </h1>
          <h2
            className={s.modalItem1}
            ref={(_modalItem1) => (modalItem1 = _modalItem1)}
          >
            Project background
          </h2>
          <h2
            className={s.modalItem2}
            ref={(_modalItem2) => (modalItem2 = _modalItem2)}
          >
            Task description
          </h2>
          <h2
            className={s.modalItem3}
            ref={(_modalItem3) => (modalItem3 = _modalItem3)}
          >
            Design process
          </h2>
          <h2
            className={s.modalItem4}
            ref={(_modalItem4) => (modalItem4 = _modalItem4)}
          >
            Key results
          </h2>
        </div>
      </Modal>
      <Modal
        isOpen={modal2IsOpen}
        onRequestClose={closeModal2}
        style={customStyles}
        contentLabel="Presentation Mode"
      >
        <ReactGoogleSlides
          width="100%"
          height="100%"
          slidesLink={props.link}
          position={1}
          containerStyle={{ backgroundColor: "black", border: "none" }}
        />
      </Modal>
    </div>
  );
};

export default StudyPagePresentation;
