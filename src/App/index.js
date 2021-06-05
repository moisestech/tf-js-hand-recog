// 1. Install fingerpose npm install fingerpose
// 2. Add Use State
// 3. Import emojis and finger pose import * as fp from "fingerpose";
// 4. Setup hook and emoji object
// 5. Update detect function for gesture handling
// 6. Add emoji display to the screen

import React, { useRef, useState, useEffect } from 'react';

// access to webcam
import Webcam from 'react-webcam';

// running handpose detection
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';

// draws handpose in canvas
import { drawHand } from '../utils';

// infers custom gesture
import { loveYouGesture } from '../utils/loveyou.js';

// port lib and assets for custom gesture
import * as fp from 'fingerpose';
import victory from './victory.png';
import thumbs_up from './thumbs_up.png';

export default function App({
  project_name = 'Tensorflow.js React Hand Recognition',
}) {
  const webCamRef = useRef(null);
  const canvasRef = useRef(null);

  // init emoji state
  const [emoji, setEmoji] = useState(null);
  const images = { thumbs_up: thumbs_up, victory: victory };

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log('Handpose model loaded.');
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      // console.log(hand);

      ///////// NEW STUFF ADDED GESTURE HANDLING

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          fp.Gestures.VictoryGesture,
          fp.Gestures.ThumbsUpGesture,
          loveYouGesture,
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          console.log(gesture.gestures);

          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          // console.log(gesture.gestures[maxConfidence].name);
          setEmoji(gesture.gestures[maxConfidence].name);
          console.log(emoji);
        }
      }

      ///////// NEW STUFF ADDED GESTURE HANDLING

      // Draw mesh
      const ctx = canvasRef.current.getContext('2d');
      drawHand(hand, ctx);
    }
  };

  useEffect(() => {
    runHandpose();
  }, []);

  return (
    <div clasName="App">
      <h1>{project_name}</h1>
      <header>
        {/* where one intakes data for tfjs  */}
        <Webcam ref={webcamRef} className="react-webcam" />

        {/* where one draws the segmentation layer */}
        <Canvas ref={canvasRef} className="react-canvas" />

        {/* NEW STUFF */}
        {emoji !== null ? (
          <img
            src={images[emoji]}
            style={{
              position: 'absolute',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: 400,
              bottom: 500,
              right: 0,
              textAlign: 'center',
              height: 100,
            }}
          />
        ) : (
          ''
        )}

        {/* NEW STUFF */}
      </header>
    </div>
  );
}

// video: https://youtu.be/9MTiQMxTXPE?t=396
// video: https://youtu.be/WajtPtLAg-o
// github: https://github.com/nicknochnack/GestureRecognition/tree/main/src
// github: https://github.com/nicknochnack/CustomGestureRecognition/blob/main/src/App.js
