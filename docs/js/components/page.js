import React from 'react';
import {observer} from 'mobx-react';
import pageStore from '../stores/PageStore';

@observer
class Page extends React.PureComponent {


  constructor(props, context) {
    super(props, context);
    console.log("adsfsdf");
  }

  componentDidMount() {
    pageStore.loadPage(this.props.params.pageName);
  }

  componentDidUpdate(prevProps, prevState) {
    pageStore.loadPage(this.props.params.pageName);
  }

  render() {
    let content = {
      __html: pageStore.currentPage
    };
    return (
      <div dangerouslySetInnerHTML={content}></div>
    );
  }
}

export default Page;
