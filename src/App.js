import React, { useEffect } from "react";
import { fabric } from "fabric";

function App() {
  useEffect(() => {
    // createCanvas(require("./13.png"));
    // createCanvas(require("./hi-res.jpeg"));
    createCanvas(require("./heavy-img.jpg"));
  }, []);

  const createCanvas = (img) => {
    const canvas = new fabric.Canvas("c", {
      hoverCursor: "pointer",
      selection: false,
    });

    for (let i = 0, len = 100; i < len; i++) {
      fabric.Image.fromURL(img, function (img) {
        img.set({
          left: fabric.util.getRandomInt(0, 600),
          top: fabric.util.getRandomInt(0, 500),
        });

        img.hasControls = img.hasBorders = false;

        img.opacity = 0.8;

        canvas.add(img);
      });
    }
  };

  return (
    <>
      <h1>Fabric JS Benchmark rendered 100 images</h1>
      <canvas id="c" width={window.innerWidth} height={window.innerHeight} />
    </>
  );
}

export default App;
