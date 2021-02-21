// 1. Install fingerpose npm install fingerpose
// 2. Add Use State
// 3. Import emojis and finger pose import * as fp from "fingerpose";
// 4. Setup hook and emoji object
// 5. Update detect function for gesture handling
// 6. Add emoji display to the screen

import React, { useRef } from "react";

// access to webcam
import Webcam from "react-webcam";

// running handpose detection
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";

// draws handpose in canvas
import { drawHand } from "../utils";

export default function App({project_name = "Tensorflow.js React Hand Recognition"}) {

  return (  
    <h1>{project_name}</h1>
  )
}

// video: https://www.youtube.com/watch?v=9MTiQMxTXPE
// github: https://github.com/nicknochnack/GestureRecognition/tree/main/src
