import React from 'react';
import YtItem from './ytItem';
import { YtData } from '../../YutData';

const YtList = (props) => {
  console.log(props);
    return (
        <div className="yt-list">
        {props.children}
        {YtData.map((item, index) => {
         return ( //rendering map/list
            <YtItem
              key={item.id}
              image={item.image}
              title={item.title}
              auth={item.auth}
              avatar={item.avatar || item.image}
            />
          );
        })}
      </div>
    );
};

export default YtList;