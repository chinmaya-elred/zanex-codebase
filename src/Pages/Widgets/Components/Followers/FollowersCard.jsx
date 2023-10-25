import React from 'react';
import FollowerList from './FollowerList/TotalFolloowerList';

const FollowerCard = () => {
  return (
    <div className="row">
      <FollowerList iconClass="fa-user" count="17,533" label="Total Followers" bgColor="bg-primary" />
      <FollowerList iconClass="fa-heart" count="10,257" label="Total Likes" bgColor="bg-secondary" />
      <FollowerList iconClass="fa-comment" count="87" label="Total Comments" bgColor="bg-success" />
      <FollowerList iconClass="fa-envelope" count="485" label="Total Posts" bgColor="bg-danger" />
    </div>
  );
};

export default FollowerCard;
