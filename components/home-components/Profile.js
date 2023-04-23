import Link from "next/link";
import { awsUrl } from "../helpers/ApiHelper";
import style from "../../styles/Profile.module.css";

const Profile = ({ data }) => {
  const getWords = (monthCount) => {
    function getPlural(number, word) {
      return (number === 1 && word.one) || word.other;
    }
    var months = { one: "month", other: "months" },
      years = { one: "year", other: "years" },
      m = monthCount % 12,
      y = Math.floor(monthCount / 12),
      result = [];
    y && result.push(y + " " + getPlural(y, years));
    m && result.push(m + " " + getPlural(m, months));
    return result.join(" , ");
  };
  const {
    name_of_candidate: name,
    photo_of_candidate: photo,
    experience_in_month,
    salary_expectation,
    category,
    _id,
  } = data;

  return (
    <Link href={`/view-user?userId=${_id}`}>
      <div className={style["card"]}>
        <div class={`${style.face} ${style.face1}`}>
          <div className={style["content"]}>
            <div>
              {photo ? (
                <img
                  fetchPriority="high"
                  src={awsUrl + photo?.split(",")[0]}
                  width={"100%"}
                  height={"100%"}
                />
              ) : (
                <img
                  fetchPriority="high"
                  width={"100%"}
                  height={"100%"}
                  src={
                    "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
                  }
                />
              )}
            </div>
          </div>
        </div>
        <div class={`${style.face} ${style.face2}`}>
          <div className={style["content"]}>
            <p
              className="text-center text-black text-lg 3xl:text-3xl mb-2"
              style={{ fontWeight: "bold" }}
            >
              {name}
            </p>
            <div>
              <p className="text-center text-black text-md text-sm mb-5">
                {category && category?.length ? category.join(",") : "-"}
              </p>
            </div>
            <p className="text-center text-black text-lg 3xl:text-3xl mb-2">
              <b> Experience: </b>
              {getWords(experience_in_month)}
            </p>
            <p className="text-center text-black text-lg 3xl:text-3xl mb-2">
              <b> Salary: </b> {salary_expectation}
              <p>(Negotiable)</p>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Profile;
