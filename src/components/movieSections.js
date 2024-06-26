
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { UserAuth } from "../context/authContext";
// import { db } from "./firebase";
// import { arrayUnion, doc, updateDoc } from "firebase/firestore";
// import Aos from "aos";
// import "aos/dist/aos.css";

// const Sections = ({ title, fetchUrl,navigate }) => {
//   const [saved, setSaved] = useState(false);
//   const { user } = UserAuth();

//   const [movies, setMovies] = useState([]);
//   const [like, setLike] = useState({});

//   useEffect(() => {
//     axios.get(fetchUrl)
//       .then((res) => {
//         setMovies(res.data.results);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [fetchUrl]);

//   const saveShow = async (item, event) => {
//     event.stopPropagation();
//     if (user?.email) {
//       setLike((prevLikes) => ({
//         ...prevLikes,
//         [item.id]: !prevLikes[item.id],
//       }));
//       setSaved(true);
//       try {
//         await updateDoc(doc(db, "users", user.email), {
//           savedShows: arrayUnion({
//             id: item.id,
//             title: item.title,
//             img: item.backdrop_path,
//           })
//         });
//       } catch (error) {
//         console.error("Error saving show: ", error);
//         alert("Failed to save the show. Please check your permissions.");
//       }
//     } else {
//       alert("Please login to save a movie");
//     }
//   };

//   const routeToPlay = (id) => {
//     console.log(id, "id");
//     navigate(`/player/${id}`);
//   };

//   useEffect(() => {
//     Aos.init({ duration: 2000 });
//   }, []);

//   return (
//     <>
//       <h1 className="text-white font-bold md:text-xl p-4 bg-black">{title}</h1>
//       <div className="relative flex items-center bg-black">
//         <div id={"slider"} className="w-full h-[200px] overflow-auto scrollbar-hide whitespace-nowrap scroll-smooth relative no-scrollbar">
//           {movies.map((item, id) => {
//             const isLiked = like[item.id] || false;
//             return (
//               <div
//                 onClick={() => { routeToPlay(item.id); }}
//                 data-aos="fade-left"
//                 data-aos-duration="500"
//                 className="w-[160px] h=[160px] sm:w-[240px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 ml-4"
//                 key={id}
//               >
//                 <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
//                 <div className="absolute top-0 left-0 w-full h-full hover:bg-black/45 opacity-0 text-white hover:opacity-100">
//                   <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
//                     {item?.title.slice(0, 20)}
//                   </p>
//                   <div onClick={(event) => saveShow(item, event)}>
//                     {isLiked ? (
//                       <FaHeart className="absolute top-4 left-4 text-gray-300" />
//                     ) : (
//                       <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sections;
import axios from "axios";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/authContext";
import { db } from "./firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import Aos from "aos";
import "aos/dist/aos.css";

const Sections = ({ title, fetchUrl }) => {
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(fetchUrl)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log("Error fetching data: ", err);
      });
  }, [fetchUrl]);

  const saveShow = async (item, event) => {
    event.stopPropagation();
    if (user?.email) {
      setLike((prevLikes) => ({
        ...prevLikes,
        [item.id]: !prevLikes[item.id],
      }));
      setSaved(true);
      try {
        const userRef = doc(db, "users", user.email);
        await updateDoc(userRef, {
          savedShows: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path,
          }),
        });
        console.log("Show saved successfully");
      } catch (err) {
        console.error("Error saving show: ", err);
        alert("Failed to save the show. Please check your permissions.");
      }
    } else {
      alert("Please login to save a movie");
    }
  };

  const routeToPlay = (id) => {
    console.log(id, "id");
    navigate(`/player/${id}`);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <h1 className="text-white font-bold md:text-xl p-4 bg-black">{title}</h1>
      <div className="relative flex items-center bg-black">
        <div
          id={"slider"}
          className="w-full h-[200px] overflow-auto scrollbar-hide whitespace-nowrap scroll-smooth relative no-scrollbar"
        >
          {movies.map((item, id) => {
            const isLiked = like[item.id] || false;
            return (
              <div
                onClick={() => {
                  routeToPlay(item.id);
                }}
                data-aos="fade-left"
                data-aos-duration="500"
                className="w-[160px] h=[160px] sm:w-[240px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 ml-4"
                key={id}
              >
                <img
                  className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                  alt={item?.title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/45 opacity-0 text-white hover:opacity-100">
                  <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {item?.title.slice(0, 20)}
                  </p>
                  <div onClick={(event) => saveShow(item, event)}>
                    {isLiked ? (
                      <FaHeart className="absolute top-4 left-4 text-gray-300" />
                    ) : (
                      <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sections;
