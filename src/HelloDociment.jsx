import React, { Component } from 'react';
import { Link } from 'react-router';
import { Layout, Breadcrumb, Card } from 'antd';
import map from 'lodash/map';
import Datas from './Datas/Datas.json';
import FooterEmail from './Card/Card'
import SubMenu from './Elements/SubMenu'

class Index extends Component {
  render() {
    const { Header, Content, Footer, Sider } = Layout;
    return (
      <Layout>
        <Header className="header">
          <h1 className="header-name">
            React Email Generator
          </h1>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Hello</Breadcrumb.Item>
            <Breadcrumb.Item>Choose</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              {map(Datas, (persona) => (
                <SubMenu
                  key={persona.head}
                  persona={persona}
                />
              ))}
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Card bodyStyle={{ padding: '10px' }}>
                <div className="custom-dots">
                  {/* Icon Red*/}
                  <svg className="custom-icon color-red" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                    </defs>
                    <path d="M509.596765 510.976694m-434.43646 0a424.542 424.542 0 1 0 868.87292 0 424.542 424.542 0 1 0-868.87292 0Z" >
                    </path>
                  </svg>
                  {/* End Icon Red */}
                  {/* Icon Yellow*/}
                  <svg className="custom-icon color-yellow" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                    </defs>
                    <path d="M509.596765 510.976694m-434.43646 0a424.542 424.542 0 1 0 868.87292 0 424.542 424.542 0 1 0-868.87292 0Z" >
                    </path>
                  </svg>
                  {/* End Icon Yellow */}
                  {/* Icon Green*/}
                  <svg className="custom-icon color-green" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                    </defs>
                    <path d="M509.596765 510.976694m-434.43646 0a424.542 424.542 0 1 0 868.87292 0 424.542 424.542 0 1 0-868.87292 0Z" >
                    </path>
                  </svg>
                  {/* End Icon Green */}
                </div>
                <div className="custom-card">
                  <FooterEmail />
                </div>
              </Card>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <Link to="http://pencilsharpener.pl/">
            Pencil Sharpener
          </Link>
          &nbsp;©2017
        </Footer>
      </Layout>
    );
  }
}

export default Index;
