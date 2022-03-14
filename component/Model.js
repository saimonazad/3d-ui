import "@google/model-viewer";
import React, { useEffect, useRef, useState } from "react";

export default function Model({ product }) {
  const ref = useRef(null);
  const { product } = props;
  const modelPath =
    "https://raw.githubusercontent.com/abidaqib/ModelViewer_TextureSwap/master/3d/2.gltf";

  // const [model, setModel] = useState("");

  // useEffect(() => {
  //   setModel(product?.acf?.model);
  // }, [product]);
  // console.log(product);

  const handleClick = async () => {
    const modelViewerTexture = ref?.current;
    const baseTexture = await modelViewerTexture.createTexture(
      "https://raw.githubusercontent.com/abidaqib/ModelViewer_TextureSwap/master/3d/t1.png"
    );
    console.log("modelViewerTexture", modelViewerTexture);
    modelViewerTexture.model.materials[0].pbrMetallicRoughness[
      "baseColorTexture"
    ].setTexture(baseTexture);
    console.log(modelViewerTexture.model.materials);
  };
  const handleClickOriginal = async () => {
    const modelViewerTexture = ref?.current;
    const baseTexture = await modelViewerTexture.createTexture(
      "https://raw.githubusercontent.com/abidaqib/ModelViewer_TextureSwap/master/3d/t2.png"
    );
    modelViewerTexture.model.materials[0].pbrMetallicRoughness[
      "baseColorTexture"
    ].setTexture(baseTexture);
  };
  useEffect(() => {
   
  }, []);

  return (
    <div className="container">
      <model-viewer
        ref={ref}
        id="model-viewer"
        alt="3d model"
        poster="/loading.gif"
        src={modelPath}
        ar=""
        ar-modes="webxr scene-viewer quick-look"
        seamless-poster
        shadow-intensity="1"
        camera-controls
        data-js-focus-visible
        preload=""
        ar-placement="floor"
        ar-scale="auto"
        xr-environment=""
        minimumrenderscale="1"
        background-color="#ffffff"
        environment-image="neutral"
        shadow-softness="1"
        auto-rotate=""
        ar-status="presenting"
      >
        <button slot="ar-button" id="ar-button">
          ✋ View in your space
        </button>

        <div id="ar-prompt">
          <img src="../../assets/hand.png" />
        </div>

        <button id="ar-failure">AR is not tracking!</button>
      </model-viewer>
    </div>
  );
}
