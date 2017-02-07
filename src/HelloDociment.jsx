import React, { Component } from 'react';
import { Link } from 'react-router';
import { Layout, Breadcrumb, Card, Menu, Icon } from 'antd';
import map from 'lodash/map';
import find from 'lodash/find';
import merge from 'lodash/merge';
import reduce from 'lodash/reduce';
import Datas from './Datas/Datas.json';
import EmailCard from './Card/Card'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInformation: null,
    }
  }
  handelSelect = (data) => {
    const personas = reduce(Datas, (c, e) => c.concat(e.personas), []);

    const persona = find(personas, (e) => e.name === data.key);

    this.setState({
      currentInformation: persona,
    });
  }

  render() {
    const { Header, Content, Footer, Sider } = Layout;
    const { SubMenu } = Menu;

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
              <Menu
                mode="inline"
                style={{ height: 100 }}
                onSelect={this.handelSelect}
              >
                {map(Datas, (cos) => (
                  <SubMenu key={cos.name} title={<span><Icon type="user" />{cos.name}</span>}>
                    {map(cos.personas, (e) => (
                      <Menu.Item
                        key={e.name}
                      >
                        {e.name}
                      </Menu.Item>
                    ))}
                  </SubMenu>
                ))}
              </Menu>
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
                  <EmailCard
                    persona={this.state.currentInformation}
                  />
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
