require('./PageDemo.less');

const reactMixin = require('react-mixin');
<% if (i18n) { %>
const i18n = require('i18n');
<% } %>

const Actions = require('./actions');
const Store = require('./store');

class PageDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            content: {},
            error: false
        };
    }

    componentDidMount() {
        console.log('componentDidMount');
        Actions.fetch({
            workNo: '0001'
        }, function(data) {
            console.log(data);
        });
    }

    render() {
        return (
            <div className="page-demo">
                page-demo
            </div>
        );
    }
}

reactMixin.onClass(PageDemo, Reflux.connect(Store, 'demo'));

<% if (SPA) { %>
export default withRouter(PageDemo); 
<% } else { %>
ReactDOM.render(<PageDemo/>, document.getElementById('App'));
<% } %>
