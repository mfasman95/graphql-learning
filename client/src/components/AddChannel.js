import React from 'react';
import { gql, graphql } from 'react-apollo';
import { channelsListQuery } from './ChannelsListWithData';

const AddChannel = ({ mutate }) => {
  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      e.persist();
      mutate({ 
        variables: { name: e.target.value },
        refetchQueries: [ { query: channelsListQuery }],
      }).then( res => e.target.value = '' );
    }
  };
  return <input type='text' placeholder='New channel' onKeyUp={handleKeyUp} />;
};

const addChannelMutation = gql`
  mutation addChannel($name: String!) {
    addChannel(name: $name) {
      id
      name
    }
  }
`;

const AddChannelWithMutation = graphql(addChannelMutation)(AddChannel);
export default AddChannelWithMutation;