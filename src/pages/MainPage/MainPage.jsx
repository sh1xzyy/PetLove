import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../components/header/Header/Header";

const MainPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [stage, setStage] = useState("initial"); // "initial", "loading", "done"
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (location.pathname === "/") {
      const initialTimer = setTimeout(() => {
        setStage("loading");
      }, 3000);

      const loadingTimer = setTimeout(() => {
        setStage("done");
        navigate("/home");
      }, 8000);

      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100 && stage === "loading") {
            return prev + 1;
          }
          return prev;
        });
      }, 50);

      return () => {
        clearTimeout(initialTimer);
        clearTimeout(loadingTimer);
        clearInterval(progressInterval);
      };
    }
  }, [navigate, location.pathname, stage]);

  if (location.pathname === "/") {
    return (
      <div className="relative z-50 mx-auto flex h-[812px] w-[375px] items-center justify-center md:h-[1024px] md:w-[768px] lg:h-[800px] lg:w-[1280px]">
        <picture className="absolute inset-0">
          <source
            media="(max-width: 767px)"
            srcSet="/common/phone/main-dog-phone@1x.png, /common/phone/main-dog-phone@2x.png 2x"
          />
          <source
            media="(min-width: 768px) and (max-width: 1279px)"
            srcSet="/common/laptop/main-dog-laptop@1x.png, /common/laptop/main-dog-laptop@2x.png 2x"
          />
          <source
            media="(min-width: 1280px)"
            srcSet="/common/desktop/main-dog-desktop@1x.png, /common/desktop/main-dog-desktop@2x.png 2x"
          />
          <img
            src="/common/phone/main-dog-phone@1x.png"
            alt="PetLove Background"
            className="h-full w-full object-cover"
          />
        </picture>
        {stage === "initial" && (
          <h1 className="z-10 text-6xl font-bold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]">
            PetLove
          </h1>
        )}
        {stage === "loading" && (
          <div className="z-10 flex flex-col items-center">
            <h1 className="mb-5 text-4xl font-semibold">{progress}%</h1>
            <div className="h-5 w-[300px] overflow-hidden rounded-xl border-2 border-gray-700">
              <div
                className="h-full bg-green-600 transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <section>
      <Header />
      <Outlet />
    </section>
  );
};

export default MainPage;
