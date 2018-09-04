<% if (SPA) { %>
export default {
    path: 'demo',
    title: 'demo',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./PageDemo'));
        }, 'demo');
    },
};<%}else{%>
import PageDemo from './PageDemo';

export default PageDemo;

<% } %>