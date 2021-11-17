import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src={"/noDashboard.jpg"}
        alt={"And this is where I'd put my dashboard, if I had one!"}
        width={"500"}
        height={"696"}
      />
    </>
  );
}
