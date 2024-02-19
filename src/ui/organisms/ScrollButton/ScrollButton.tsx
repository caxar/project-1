import React from "react";

const ScrollButton = () => {
  const [showScrollBtn, setShowScrollBtn] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowScrollBtn(true);
      } else if (window.scrollY < 400) {
        setShowScrollBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={() => goToTop()}
      className={`top-btn h-[55px] w-[55px] fixed bottom-[40px] right-[25px] rounded-full bg-purple-color
   flex items-center justify-center cursor-pointer z-[9] transition ease-in-out active:border-btn-pressed active:border-[3px] hover:bg-purple-color-hover
  ${showScrollBtn ? "flex" : "hidden"}`}
    >
      <div className="top-btn_img">
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 15L12 10L7 15"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ScrollButton;
