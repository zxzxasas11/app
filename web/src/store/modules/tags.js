const tags = {
    state: {
        visitedViews: [{name: "后台管理系统", url: "/SysHome", close: false}],//存放所有浏览过的且不重复的路由数据
        activeIndex: "/",
        keepAlive: ["SysHome"]
    },
    mutations: {
        add_visit(state, view) {
            state.visitedViews.push({
                name: view.name,
                url: view.url,
                close: true
                //isActive:true
            });
            state.keepAlive.push(view.url);
        },
        del_visit(state, route) {
            let index = 0;
            for (let option of state.visitedViews) {
                if (option.url === route) {
                    break;
                }
                index++;
            }
            state.visitedViews.splice(index, 1);
            state.keepAlive.splice(index,1);
        },
        empty_visit(state){
            state.visitedViews=[{name: "后台管理系统", url: "/SysHome", close: false}];
        },
        set_active_index(state, route) {
            state.activeIndex = route;
        }
    },
    actions: {
        addVisitedViews({commit}, view) {
            commit('add_visit', view);
        },
        delVisitedViews({commit}, route) {
            commit('del_visit', route);
        },
        emptyVisitedViews({commit}){
            commit("empty_visit");
        },
        setActiveIndex({commit}, route) {
            commit('set_active_index', route);
        }
    }
}
export default tags
