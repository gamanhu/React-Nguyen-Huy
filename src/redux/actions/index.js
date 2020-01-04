import * as ActionType from "../constants/action-types.js";
import Axios from "axios";
export const actGetListMovieAPI = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05`
            
        })
        .then(result=>{
            dispatch({
                type:ActionType.GET_LIST_MOVIE,
                listMovie:result.data
            })
        })
        .catch(err=>{
            console.log(err);
        })

    }
}