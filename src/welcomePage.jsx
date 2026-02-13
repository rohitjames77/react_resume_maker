import { useState, useEffect } from "react";
import MainPage from "./mainPage";

export default function WelcomePage() {
  const [showMainPage, setShowMainPage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleOnClick = () => {
    setShowMainPage(true);
  };
  if (showMainPage) {
    return (
      <>
        <MainPage />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-purple-500 flex items-center justify-center p-8 overflow-hidden relative">
      <div className="absolute top-10 left-10 w-16 h-16 bg-orange-400 rounded-full opacity-60 animate-float-slow" />
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400 rounded-full opacity-40 animate-float-medium" />
      <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-purple-400 rounded-full opacity-60 animate-bounce-slow" />

      <div className="absolute bottom-10 right-10 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-orange-400 opacity-70 animate-float-reverse" />

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div
            className={`inline-flex items-center gap-2 text-sm transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          </div>

          <div className="space-y-4">
            <h1
              className={`text-5xl md:text-6xl font-bold text-white leading-tight transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="text-gray-50 text-5xl">Welcome to Resume Maker</p>
              <p className="text-gray-50 text-6xl">
                {" "}
                Your first Step to Dream Career
              </p>
              <br />
            </h1>

            <p
              className={`text-white text-lg max-w-md transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Build a professional resume in minutes. Choose from modern
              templates, customize easily,
            </p>
          </div>

          <div
            className={`flex gap-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <button
              onClick={handleOnClick}
              className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-5 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3"
            >
              Get Started
              <span className="inline-block animate-arrow-move text-2xl">
                →
              </span>
            </button>
          </div>
        </div>

        <div className="relative h-[600px] hidden md:block">
          <div
            className={`absolute top-20 left-10 bg-white rounded-lg shadow-xl p-4 w-48 transform hover:scale-105 transition-all duration-300 animate-float-slow ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="h-2 bg-gray-200 rounded mb-1" />
                <div className="h-2 bg-gray-200 rounded w-3/4" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-1.5 bg-gray-100 rounded" />
              <div className="h-1.5 bg-gray-100 rounded" />
              <div className="h-1.5 bg-gray-100 rounded w-2/3" />
            </div>
          </div>

          <div
            className={`absolute top-40 right-10 bg-white rounded-lg shadow-xl p-4 w-44 transform hover:scale-105 transition-all duration-300 animate-float-medium ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded" />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 bg-gray-100 rounded" />
                <div className="h-1.5 bg-gray-100 rounded" />
              </div>
            </div>
          </div>

          <div
            className={`absolute top-10 right-20 w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center shadow-lg animate-bounce-slow ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "1200ms" }}
          >
            <svg
              className="w-8 h-8 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>

          <div
            className={`absolute bottom-32 left-20 w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center shadow-lg animate-float-reverse ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "1400ms" }}
          >
            <svg
              className="w-7 h-7 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>

          <div
            className={`absolute bottom-20 right-16 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-lg animate-float-slow ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "1600ms" }}
          >
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <div className="absolute top-32 left-32 flex gap-2 animate-pulse">
            <div className="w-2 h-2 bg-orange-400 rounded-full" />
            <div className="w-2 h-2 bg-blue-400 rounded-full" />
            <div className="w-2 h-2 bg-purple-400 rounded-full" />
          </div>

          <div
            className="absolute bottom-48 right-32 flex gap-2 animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <div className="w-2 h-2 bg-orange-400 rounded-full" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-15px) translateX(10px);
          }
          50% {
            transform: translateY(-30px) translateX(-5px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(5deg);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(25px) translateX(10px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes arrow-move {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(8px);
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        .animate-arrow-move {
          animation: arrow-move 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
