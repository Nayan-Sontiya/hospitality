
import React from "react";
import { useRouter } from "next/router";
import Home from "./home";
const  PageNotFound=()=> {
  const router = useRouter();
  return (
    <>
    <Home/>
  
    </>
  );
}

export default PageNotFound;
