// import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
const OAuth = require("oauth-1.0a");
const crypto = require("crypto");
const https = require("https");

const ModelViewer = dynamic(() => import("../../component/Model"), {
  ssr: false,
});

// eslint-disable-next-line react/display-name
export default function App(props) {
  const { product } = props;
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return <ModelViewer product={product} />;
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()
  const {
    query: { slug },
  } = context;

  const oauth = OAuth({
    consumer: {
      key: `${process.env.NEXT_PUBLIC_CONSUMER_KEY}`,
      secret: `${process.env.NEXT_PUBLIC_CONSUMER_SECRET}`,
    },
    signature_method: "HMAC-SHA1",
    hash_function(base_string, key) {
      return crypto
        .createHmac("sha1", key)
        .update(base_string)
        .digest("base64");
    },
  });
  const request_data = {
    url: `${process.env.NEXT_PUBLIC_API_URL}/${slug}`,
    method: "GET",
  };
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${slug}`,
    {
      headers: { ...oauth.toHeader(oauth.authorize(request_data)) },
    },
    { agent }
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { product: data || [] } };
}
