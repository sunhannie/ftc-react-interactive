import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import overviewCss from './overview.scss';
class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div class="overview-container">
        <div class="title">数据新闻</div>
        <div class="content">
            <p>国际市场调查公司益普索-莫里（Ipsos-MORI）近期发布2016年认知偏差（Perils of Perception poll)年度报告，调查首度横跨40个国家和地区，探讨全球各地民众对社会状态的认识与真实情况的落差。</p>

            <p>调查显示，全球人民对国家社会的认知有待加强。我们一方面低估社会财富分配不均的基本事实（不平等的程度远超过人们的想像），另一方面又悲观的认为人们普遍不幸福（事实上自认幸福的比例仍是多数）。</p>

            <p>这份调查也根据受访民众是否认识所处社会的真实状态，把40个国家地区按照"无知（ignorance）"程度进行排名：中国仅次于印度，被认为民众认知和实际情况的差距最大。至于第三到第五名，依序为台湾、南非与美国。</p>

            <p>我们把这份认知调查制作成以下测验（English version） ，通过7道题目，测验看看你是否真实认识自己所处的社会，还有机会能比较你与其他FT读者答案的差距</p>

    </div>
      </div>
    );
  }
}


export default Overview;
