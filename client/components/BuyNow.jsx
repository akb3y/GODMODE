import React from 'react';
import { FaAmazon } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiWalmart, SiTarget } from "react-icons/si";

function BuyNow(props) {
return (
  <>
    <FcGoogle /> &nbsp; &nbsp;
    <FaAmazon className="amazon"/> &nbsp; &nbsp;
    <SiWalmart className="walmart"/>&nbsp; &nbsp;
    <SiTarget className="target" />&nbsp; &nbsp;
  </>
  );
}

export default BuyNow;
