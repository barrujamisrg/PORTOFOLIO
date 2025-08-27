"use client"

// Hapus baris ini:
// import Lottie from "lottie-react";

import dynamic from "next/dynamic";

// Gunakan dynamic import dengan ssr: false untuk memuat Lottie
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;