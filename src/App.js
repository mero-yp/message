import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import {route} from './router/index';
import {Layout} from 'antd';
import Header from './component/header';
import Footer from './component/footer';
import './static/css/index.css';
function App() {
  return (
    <Layout className="page">
      <Header />
        <Layout.Content>
          <div className="wrap">
              <Switch>
                {route.map((itemData,index)=>{
                  return(<Route
                    key={index}
                    path={itemData.path}
                    exact={itemData.exact}
                    render={(props)=>{
                      return itemData.render(props)
                    }}
                  />)
                })}
              </Switch>
            </div>
    </Layout.Content>
    <Footer />
    </Layout>
  );
}

export default App;
