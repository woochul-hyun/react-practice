import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Sample from '../components/sample';
import { getPostThunk, getUserThunk } from '../modules/sample';

const SampleContainer = ({
  getPostThunk,
  getUserThunk,
  post,
  users,
  loadingPost,
  loadingUsers
}) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await getPostThunk(1);
        await getUserThunk();
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getPostThunk, getUserThunk]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading.GET_POST,
    loadingUsers: loading.GET_USERS
  }),
  {
    getPostThunk,
    getUserThunk
  }
)(SampleContainer);
