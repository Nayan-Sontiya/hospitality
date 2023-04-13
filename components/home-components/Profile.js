import Link from "next/link";
import { awsUrl } from "../helpers/ApiHelper";

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
      <div
        className="bg-[#FFFFFF] mx-2 p-3 rounded cursor-pointer"
        style={{
          maxHeight: "360px",
          minHeight: "360px",
        }}
      >
        <div className="grid justify-items-center py-5">
          {photo ? (
            <img
              fetchPriority="high"
              src={awsUrl + photo?.split(",")[0]}
              className="h-16 w-16 3xl:h-24 3xl:w-24 rounded-full border"
            />
          ) : (
            <img
              fetchPriority="high"
              className="h-16 w-16 3xl:h-24 3xl:w-24 rounded-full border"
              src={
                "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
              }
            />
          )}
        </div>
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
    </Link>
  );
};

export default Profile;
