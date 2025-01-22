/**
 * 社交按钮相关的配置同意放这
 */
module.exports = {
  // 社交链接，不需要可留空白，例如 CONTACT_WEIBO:''
    CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'kristywhim@gmail.com', // 邮箱地址 例如mail@tangly1024.com
  CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || 'https://twitter.com/kristywhim_', // 你的twitter个人主页
  CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || 'https://github.com/kristywhim', // 你的github个人主页 例如 https://github.com/tangly1024
  CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || 'https://www.linkedin.com/in/kristywhim/', // 你的linkedIn 首页
  CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || 'https://www.instagram.com/kristywhim_/', // 您的instagram地址
}
