import React from 'react';
import { Menu, Icon } from 'antd';
import Datas from './../Datas/Datas.json';
import _ from 'lodash';

export default class SubMenu extends React.Component {

  render() {
    const { SubMenu } = Menu;

    const Names = _.filter(Datas, (e) => {
      return e.head === this.props.persona.head;
    });

    console.log(Names);

    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={['Derek Moss']}
        defaultOpenKeys={['Marketing']}
      >
        <SubMenu key={this.props.persona.head} title={<span><Icon type="user" />{this.props.persona.head}</span>}>
          {Names.map((e) => (
            <Menu.Item>
              {e.name}
            </Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    );
  }
}

