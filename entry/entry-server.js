import { createApp } from '../public/src/main'
export default context => {
    return new Promise((resolve, reject) => {
        const {app, router, store, axios} = createApp()

        // 更改路由
        router.push(context.url)

        // 获取相应路由下的组件
        const matchedComponents = router.getMatchedComponents()

        // 如果没有组件，说明该路由不存在，报错404
        if (!matchedComponents.length) { return reject({ code: 404 }) }

        // 遍历路由下所以的组件，如果有需要服务端渲染的请求，则进行请求
        Promise.all(matchedComponents.map(component => {
            if (component.serverRequest) {
                return component.serverRequest({store, router})
            }
        })).then(() => {
            context.state = store.state
            resolve(app)
        }).catch(reject)
    })

}