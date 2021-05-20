import React, { useEffect } from 'react';
import TopicsList from '../../component/topicslist';
import IndexNav from './indexNav';
import {useSelector} from 'react-redux';
import { useTopicsList } from '../../store/action';
import qs from 'qs';
import { useLocation } from 'react-router';
import IndexPagination from './indexpagination';
function IndexPage(){
  console.log(useSelector(state=>state))
    let {data,loading}=useSelector(state=>state.topics);
    let getData=useTopicsList();
    let {search}=useLocation();
    let {tab="all",page=1}=qs.parse(search.substr(1));//默认值解决性能问题
    useEffect(()=>{
        getData(tab,page);
      },[tab,page])
    return (<div>
        <IndexNav />
        <TopicsList 
            data={data}
            loading={loading}
        />
      { loading?"":<IndexPagination />} {/*解决底部导航条默认选中按钮点击其他按钮不切换回初始状态*/}
    </div>)
}
export default IndexPage;