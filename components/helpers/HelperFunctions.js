function modalOpenShow(id) {
  if (process.browser) {
    let modal = document.getElementById(id);
    if (modal !== null) {
      if (modal.classList.contains("hidden")) {
        modal.classList.remove("hidden");
        modal.classList.add("block");
      } else {
        modal.classList.remove("block");
        modal.classList.add("hidden");
      }
    }
  }
}
const multipleMediaIdentifier = (media) => {
  if (media !== undefined) {
    let mediaArray = [];
    if (media.includes(",") === true) {
      media.split(",").map((row) => {
        let mediaObj = {
          media: row,
          status: true,
        };
        mediaArray.push(mediaObj);
      });
      return mediaArray;
    } else {
      let mediaObj = {
        media: media,
        status: false,
      };
      mediaArray.push(mediaObj);
      return mediaArray;
    }
  }
};
function closeModalProfile(id) {
  if (process.browser) {
    let modal = document.getElementById(id);
    modal.classList.add("hide");
    modal.style.display = "none";
  }
}
const cardStyle = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: "Arial, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#32325d",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};
export { modalOpenShow, multipleMediaIdentifier, closeModalProfile, cardStyle };
