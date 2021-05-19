import { Menu } from "antd";
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { indexNav, types} from '../../router/index';
import qs from 'qs';
function IndexNav(){
    let {search} =useLocation();
    let {tab}=qs.parse(search.substr(1));
    let activeIndex=tab==undefined?0:(types.indexOf(tab));
    return (<Menu
        mode={"horizontal"}
        defaultSelectedKeys={[activeIndex+'']}
        className="index_nav"
    >
        {indexNav.map((item,index)=>{
            return <Menu.Item key={index}>
                <Link to={item.to}>{item.txt}</Link>
            </Menu.Item>
        })}
    </Menu>)
}
export default IndexNav;