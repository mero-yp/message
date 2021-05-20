import React from 'react';
import {Col, List,Avatar} from 'antd'; 
import {UserOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import TopicTag from './topicTag';
import FromNow from './fromnow';
function TopicsList(props){
    let {loading,data}=props;
    return (<List 
        className="topics_list"
        loading={loading}
        dataSource={data}
        renderItem={(data)=>{
            let {author,last_reply_at,good,top,tab,title,id} = data;
          let {loginname,avatar_url} = author;
            return <List.Item>
                <Col 
                    xs={24}
                    md={20}
                >
                <Link to={`/user/${loginname}`}>
                    <Avatar 
                        icon={<UserOutlined />} 
                        src={avatar_url}
                        title={loginname}
                    />
                    <TopicTag 
                        tab={top?"top":(good?"good":tab)}
                    />
                    <Link to={`/topics/${id}`} style={{marginLeft:10}}>{title}</Link>
                    </Link>
                </Col>
                <Col 
                    xs={0}
                    md={4}
                    className="from_now"
                >
                    <FromNow date={last_reply_at} />
                </Col>
            </List.Item>
        }}
    />)
}
export default TopicsList;