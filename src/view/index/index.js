import React, { useEffect } from 'react';
import TopicsList from '../../component/topicslist';
import IndexNav from './indexNav';
import {useSelector} from 'react-redux';
import { useTopicsList } from '../../store/action';
import qs from 'qs';
import { useLocation } from 'react-router';
function IndexPage(){
    let {data,loading}=useSelector(state=>state.topics);
    let getData=useTopicsList();
    let {search}=useLocation();
    let {tab,page}=qs.parse(search.substr(1));
    console.log(getData)
    useEffect(()=>{
        getData(tab,page);
      },[tab,page])
    return (<div>
        <IndexNav />
        <TopicsList 
            data={data}
            loading={loading}
        />
    </div>)
}
export default IndexPage;