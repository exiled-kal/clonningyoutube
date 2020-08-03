import React from 'react';
import './SearchPage.css';

import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="660K"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
      />
      <hr />
      <VideoRow
        views="2.3M"
        description="do you want a free one hour training..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let build this clone"
        image="https://lh3.googleusercontent.com/a-/AOh14Gi2iqufHNs0z0afgoureecAdZF_BxuJGy3JDbXycg=s88-c-k-c0x00ffffff-no-rj-mo"
      />
    </div>
  );
}

export default SearchPage;
