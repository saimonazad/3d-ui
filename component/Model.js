import "@google/model-viewer";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SideBar from "./SideBar";

export default function Model(props) {
  const ref = useRef(null);
  const { product } = props;
  const modelPath =
    "https://raw.githubusercontent.com/abidaqib/ModelViewer_TextureSwap/master/3d/2.gltf";

  const [model, setModel] = useState("");
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    setModel(product?.acf?.model);
  }, [product]);
  console.log(product);

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
    setSidebar(!sidebar);
    const modelViewerTexture = ref?.current;
    const baseTexture = await modelViewerTexture.createTexture(
      "https://raw.githubusercontent.com/abidaqib/ModelViewer_TextureSwap/master/3d/t2.png"
    );
    modelViewerTexture.model.materials[0].pbrMetallicRoughness[
      "baseColorTexture"
    ].setTexture(baseTexture);
  };
  const sidebarToggle = () => {
    setSidebar(!sidebar);
  };
  const style = {
    height: "84vh",
    width: "99vw",
  };
  const imgStyle = {
    marginRight: "20px",
    marginLeft: "20px",
    height: "10vh",
  };
  const container = {
    width: "97vw",
  };
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    initialSlide: 0,
  };
  const sideDesgin = {
    display: "flex",
  };
  return (
    <div className="">
      <>
        <model-viewer
          style={style}
          ref={ref}
          alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
          src={modelPath}
          ar
          ar-modes="webxr scene-viewer quick-look"
          environment-image=""
          poster=""
          seamless-poster
          shadow-intensity="1"
          camera-controls
          data-js-focus-visible
        ></model-viewer>
        <button onClick={handleClick}>Texture 1</button>
        <button onClick={handleClickOriginal}>Texture 2</button>

        <Slider {...settings} style={container}>
          {product?.acf?.textures &&
            product?.acf?.textures.length > 0 &&
            product?.acf?.textures.map((item, index) => {
              console.log(item);
              return (
                <div key={index}>
                  <img
                    style={imgStyle}
                    src={item?.texture_image}
                    alt="Landscape picture"
                  />
                </div>
              );
            })}
        </Slider>

        <div>
          {sidebar && (
            <SideBar
              setSidebar={setSidebar}
              handleClick={handleClick}
            />
          )}
        </div>
      </>
      {/* {product?.acf?.model ? (
        
      ) : (
        "No data"
      )} */}
    </div>
  );
}
