import axios from "axios";
import { setNowPlayingMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { Now_Playing_Movie_Url, options } from "../utils/constant";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const useNowPlayingMovies = async () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.owner.user);

  useEffect(() => {
    const getNowPlayingMovie=async()=>{
      if(user){
        try {
          
          const res = await axios.get(Now_Playing_Movie_Url, options);
          dispatch(setNowPlayingMovies(res.data.results));
          // toast.success('Movie fetched');
        } catch (err) {
          console.log(err);
          // toast.error('Error while fetching now playing movies');
        }
      }
    }
    getNowPlayingMovie()
  },[]);
};
export default useNowPlayingMovies;
