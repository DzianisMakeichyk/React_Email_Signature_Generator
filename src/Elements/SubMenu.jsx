import React from 'react';
import { Menu } from 'antd';
import Datas from './../Datas/Datas.json';
import _ from 'lodash';

export default class SubMenu extends React.Component {

  render() {

    const Names = _.filter(Datas, (e) => {
      return e.head === this.props.persona.head;
    });

    return (
      <div>
          {Names.map((e) => (
            <Menu.Item>
              {e.name}
            </Menu.Item>
          ))}
      </div>
    );
  }
}

