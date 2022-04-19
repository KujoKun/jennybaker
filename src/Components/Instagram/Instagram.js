import React from "react";

const Instagram = () => {
  // 1211703299568266
  const fetchObj = async () => {
    const obj = await fetch(
      "https://api.instagram.com/oauth/authorize?client_id=1211703299568266&redirect_uri=https://jennybaker.vercel.app/&scope=user_profile,user_media&response_type=code"
    );
    console.log(obj);
  };
  fetchObj();

  return <div>Instagram</div>;
};

export default Instagram;
