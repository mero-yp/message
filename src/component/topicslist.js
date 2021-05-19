import React from 'react';
import {List} from 'antd'; 

function TopicsList(props){
    let {loading,data}=props;
    return (<List 
        className="topics_list"
        loading={loading}
        dataSource={data}
        renderItem={(data)=>{
            console.log(data)
            return <List.Item>{111}</List.Item>
        }}
    />)
}
export default TopicsList;