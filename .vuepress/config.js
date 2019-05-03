module.exports = ctx => ({
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '绿网审核系统',
            description: '图片/视频过滤系统'
        },
    },
    plugins: [

        [
            '@vuepress/pwa', {
                serviceWorker: true,
            }
        ],
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-73440236-2'
            }
        ]
    ]

})