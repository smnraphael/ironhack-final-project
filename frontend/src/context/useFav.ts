import { useContext } from "react";
import { FavContext } from "./FavContextWrapper";
const useFav = () => useContext(FavContext);

export default useFav;
