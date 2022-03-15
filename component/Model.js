import "@google/model-viewer";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function Model({ product }) {
  const router = useRouter();
  const { color, material } = router.query;

  const ref = useRef(null);
  const modelPath = product?.acf?.["3d_model"]?.url;

  useEffect(() => {
    (async () => {
      if (product?.acf) {
        let materialIndex;
        const matchedArray = product?.acf?.material_section?.map((k) => {
          const filtered = k.textures_section.filter(
            (e) => e.color == color && e.material_name == material
          );
          return filtered.length > 0
            ? { ...filtered[0], model_material: k.model_material }
            : {};
        });
        const matched = matchedArray ? Object.assign(...matchedArray) : null;

        if (ref?.current) {
          const modelViewerTexture = ref?.current;

          modelViewerTexture.addEventListener("load", async (evt) => {
            const materials = modelViewerTexture?.model?.materials;
            if (matched != null) {
              materialIndex = materials.findIndex(function (item, i) {
                return item?.["name"] == matched?.model_material;
              });

              if (materialIndex != undefined) {
                const baseTexture = await modelViewerTexture.createTexture(
                  matched?.texture_image
                );
                modelViewerTexture.model.materials[
                  materialIndex
                ].pbrMetallicRoughness["baseColorTexture"].setTexture(
                  baseTexture
                );
              }
            }
          });
        }
      }
    })();
  }, [product]);

  return (
    <div className="container">
      <model-viewer
        ref={ref}
        id="model-viewer"
        alt="3d model"
        loading="eager"
        poster="/loading.gif"
        src={modelPath}
        seamless-poster
        shadow-intensity="1"
        camera-controls
        data-js-focus-visible
        minimumrenderscale="1"
        background-color="#ffffff"
        environment-image="neutral"
        shadow-softness="1"
        auto-rotate=""
      ></model-viewer>
    </div>
  );
}
