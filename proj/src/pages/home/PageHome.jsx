import { Component } from 'react';
<% if (SPA) { %>
import { withRouter } from 'react-router';
<% } else { %>
import ReactDOM from 'react-dom';
<% } %>
<% if (i18n) { %>
import i18n from 'i18n';
<% } %>
import './PageHome.less';

// 如果有`Action`和`Store`那么就使用`Reflux.Component`
// 这样可以用`Reflux`管理全部的`state`
// 在这里面改变`state`是不会生效的
// 否则，还是使用`React.Component`
// 更多用法请看PageDemo.js文件
class PageHome extends Component {

  render() {
    return (
      <div className="page-home">
        page-home
      </div>
    );
  }
}

<% if (SPA) { %>
export default withRouter(PageHome);
<% } else { %>
ReactDOM.render(<PageHome />, document.getElementById('App'));
<% } %>

