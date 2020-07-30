export default [
    {
        name: 'reactApp', // app name registered
        entry: '//localhost:7100', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
        container: '#reactApp',
        activeRule: '/react',
    },
    {
        name: 'vueApp', // app name registered
        entry: '//localhost:7101', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
        container: '#vueApp', // 容器名
        activeRule: '/vue', // 激活的路径
        props: { base: 'From Base App' }

    }
]