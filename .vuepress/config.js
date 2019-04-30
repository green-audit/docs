module.exports = {
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

}