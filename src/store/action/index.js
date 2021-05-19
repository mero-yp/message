import axios from 'axios';
import { useDispatch } from 'react-redux';
const http=axios.create({
    baseURL: " https://cnodejs.org/api/v1"
});
function useTopicsList(){
    let dispatch = useDispatch();
    return function(tab="all",page=1,limit=20,mdrender=true){
        dispatch({
            type:"topics_loading"
        })
        http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then((res)=>{
            dispatch({
                type:"topics_loadover",
                data: res.data.data
            })
        });
    }
}
export  {useTopicsList};