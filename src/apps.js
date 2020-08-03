// import render from './render/VueRender';
// /**
//  * Step1 初始化应用（可选）
//  */
// render({ loading: true });

// const loader = loading => render({ loading });


// 数据传递方法二： 通过 props 传递给子应用

export default [
    {
        name: 'reactApp', // app name registered
        entry: '//localhost:7100', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
        container: '#reactApp',
        activeRule: '/react',
        // loader,
        props: {
            BASE_STORE: {
                title: 'I am React App from base App'
            }
        }
    },
    {
        name: 'vueApp', // app name registered
        entry: '//localhost:7101', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
        container: '#vueApp', // 容器名
        activeRule: '/vue', // 激活的路径
        // loader,
        props: {
            BASE_STORE: {
                title: 'I am Vue App from base App'
            }
        }

    },
    // {
    //     name: 'angularApp', // app name registered
    //     entry: '//localhost:7102', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    //     container: '#angularApp', // 容器名
    //     activeRule: '/angular', // 激活的路径
    //     props: { base: 'From Base App' }

    // }
]