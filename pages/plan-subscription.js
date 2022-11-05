import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Package from "../components/common-components/Package";

function PlanSubscription() {
  // const PUBLISHABLE_KEY =
  //   "pk_test_51KUWvdSHzAHML0g436B9c0BaXCLp1EqoMypAUPolRNZqUGkVfl0NbTe0GcdGvWvFMNjrJjTtCzwRA0rbICDLgfxt00zaDdj4uN";
  const PUBLISHABLE_KEY =
    "pk_live_51KUWvdSHzAHML0g4TAb706xJitun3TnxPiFncuOMWYhzooEeD8BY5UrdSrFp0s22lp4FXjrE3dNOj62azAMrW9Qo00YN5mcz2U";
  const stripePromise = loadStripe(PUBLISHABLE_KEY);
  return <Package />;
}

export default PlanSubscription;
