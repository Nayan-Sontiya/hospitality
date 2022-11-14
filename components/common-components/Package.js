import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import {
  PostRequest,
  GetRequest,
  userDataProvider,
} from "../helpers/ApiHelper";
import shortid from "shortid";
import swal from "sweetalert";
import { cardStyle } from "../helpers/HelperFunctions";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};
const key_id = "rzp_live_Mf8HxSlupOrAIy";
function Package() {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [packageData, setPackageData] = useState([]);
  let [userName, setUserName] = useState("");
  let [userId, setUserId] = useState("");
  const router = useRouter();
  const userData = userDataProvider();
  useEffect(() => {
    if (userData !== undefined && userData !== "" && userData !== null) {
      setUserName(userData.name);
      setUserId(userData._id);
    }
  }, [userData]);
  useEffect(() => {
    if (router.query.packageId !== undefined) {
      getPackageData();
    }
  }, [router]);
  const getPackageData = async () => {
    setProcessing(true);
    if (router.query.packageId !== undefined) {
      let result = await GetRequest(
        "getSinglePackage/" + router.query.packageId
      );
      if (result.status === 200) {
        setPackageData(result.data[0]);
        // AddPackage(result.data[0]);
        // return;
        createPaymentIntent(result.data, result.data[0]);
      } else {
        swal("Info", result.message, "error");
        setProcessing(false);
      }
    }
  };
  const createPaymentIntent = async (data, resultData) => {
    setProcessing(true);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      swal("Info", "Razorpay SDK failed to load. Are you online?", "error");
      return;
    }

    let currency = "INR";
    let amount = data[0]?.price;

    let item = {
      currency: currency,
      amount: amount,
      receipt: shortid.generate(),
    };

    let resp = await PostRequest("createOrder", item);

    if (resp.razorpay_order_id !== "" && resp.razorpay_payment_id !== null) {
      handleSubmit(resp, resultData);
    } else {
    }
  };
  async function handleSubmit(resp, resultData) {
    let item = {
      order_id: "",
      payment_id: "",
      razorpay_signature: "",
    };
    const options = {
      key: key_id,
      currency: resp.currency,
      amount: resp.amount.toString(),
      order_id: resp.id,
      description: "Thank you",
      image: "/images/logo.png",
      handler: (response) => {
        item.payment_id = response.razorpay_payment_id;
        item.order_id = response.razorpay_order_id;
        item.razorpay_signature = response.razorpay_signature;
        verifyOrder(item, resultData);
      },
      modal: {
        ondismiss: () => {
          router.push("packs");
        },
      },
    };
    setProcessing(false);
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  const verifyOrder = async (item, resultData) => {
    setProcessing(true);
    const payload = PostRequest("verifyOrder", item);
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      AddPackage(resultData);
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };
  const AddPackage = async (resultData) => {
    setProcessing(true);
    if (!resultData) {
      setProcessing(false);
      return;
    }
    let packageId = resultData._id;
    let validity_days = resultData.validity;
    let no_of_resumes = resultData.no_of_resumes;
    let packageName = resultData.name;
    let price = resultData.price;

    let item = {
      packageId: packageId,
      validity_days: validity_days,
      no_of_resumes: no_of_resumes,
      name: packageName,
      price: price,
    };
    let returnValue = await PostRequest(
      "purchasePackage/" + userData?._id,
      item
    );
    if (returnValue.status === 200) {
      setProcessing(false);
      swal({
        title: `Thank You for your purchase of ${packageName} plan! Your payment has been done successfully. Happy Hiring :)`,
        text: "",
        icon: "success",
        // buttons: ["", "Ok"],
        // dangerMode: true,
      }).then(function (isConfirm) {
        if (isConfirm) {
          router.push("/all-user");
        }
      });
    } else {
      paymentObject.close();
      swal("Info", returnValue.message, "error");
    }
  };
  if (processing) {
    return <Loader />;
  }
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default Package;
