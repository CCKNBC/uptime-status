// 配置
window.Config = {

  // 站点名
  SiteName: 'CC的网站状态',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'uptimerobot.ccknbc.workers.dev',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm787423306-765eaeddc256471203fe8e56',
    'm787423310-70c5abfd189f39faff9ceb79',
    'm787423316-372026938992a9bd73c55a04',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
//     {
//       text: '主页',
//       url: 'https://www.ccknbc.cc'
//     },
//     {
//       text: '博客',
//       url: 'https://blog.ccknbc.cc'
//     },
    {
      text: '状态',
      url: 'https://stats.uptimerobot.com/Wop33SjO6Z'
    },
    {
      text: '事件',
      url: 'https://ccknbc.statuspage.io'
    }
  ]
};
