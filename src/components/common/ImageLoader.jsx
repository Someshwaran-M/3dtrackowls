import React, { useEffect, useState } from "react";

const ImageLoader = ({
  onComplete,
  duration = 2000,
  image = "/images/logo2/logo-remove-logo.png",
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalTime = 25;
    const increment = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + increment, 100);

        if (next >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            if (onComplete) onComplete();
          }, 200);

          return 100;
        }

        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  return (
    <div className="image-loader">
      <div className="loader-content">

        <div className="loader-spinner">
          <div className="loader-image">
            <img
              src={image}
              alt="Loading"
              style={{
                "--reveal": `${progress}%`,
              }}
            />
          </div>
        </div>

        <div className="loader-percentage">
          {Math.floor(progress)}%
        </div>

      </div>
    </div>
  );
};

export default ImageLoader;

const styles = `
.image-loader {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
}

.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
}

.loader-spinner {
  width: 140px;
  height: 140px;
  border: 3px solid #e8eedc;
  border-top: 3px solid #ADD122;
  border-radius: 50%;
  animation: loaderRotate 0.8s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.loader-image {
  width: 135px;
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  background: #ffffff;
}

.loader-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: loaderImageCounter 0.8s linear infinite;

  /* Top-to-bottom image reveal */
  clip-path: inset(0 0 calc(100% - var(--reveal)) 0);
}

.loader-percentage {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #062B49;
}

@keyframes loaderRotate {
  to {
    transform: rotate(360deg);
  }
}

@keyframes loaderImageCounter {
  to {
    transform: rotate(-360deg);
  }
}

@media (max-width: 768px) {
  .loader-spinner {
    width: 140px;
    height: 140px;
  }

  .loader-image {
    width: 130px;
    height: 125px;
  }

  .loader-percentage {
    font-size: 14px;
  }
}
`;

if (
  typeof document !== "undefined" &&
  !document.getElementById("image-loader-styles")
) {
  const style = document.createElement("style");
  style.id = "image-loader-styles";
  style.innerHTML = styles;
  document.head.appendChild(style);
}