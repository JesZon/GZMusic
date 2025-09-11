// 图片加载
export const ImagePath = {
    logoUrl: new URL('@renderer/assets/images/logo.png', import.meta.url).href, // logo 图片
    captchaCode: new URL('@renderer/assets/images/test/image.png', import.meta.url).href, // 验证码图片
    addIcon: new URL('@renderer/assets/images/add.svg', import.meta.url).href, // 添加图标
    LeftHarvest: new URL('@renderer/assets/images/left-harvest.svg', import.meta.url).href, // 左收起图标
    skinIcon: new URL('@renderer/assets/images/skin.svg', import.meta.url).href, // 皮肤图标
    settingIcon: new URL('@renderer/assets/images/setting.svg', import.meta.url).href, // 设置图标
    closeIcon: new URL('@renderer/assets/images/close.svg', import.meta.url).href, // 关闭图标
    maxIcon: new URL('@renderer/assets/images/max.svg', import.meta.url).href, // 最大化图标
    minIcon: new URL('@renderer/assets/images/min.svg', import.meta.url).href, // 最小化图标
    suspensionIcon: new URL('@renderer/assets/images/suspension.svg', import.meta.url).href, // 悬浮窗图标
    zhiwoIcon: new URL("@renderer/assets/images/zhiwo.jpg", import.meta.url).href, // 测试图片-知我
    screenIcon: new URL('@renderer/assets/images/screen.svg', import.meta.url).href, // 屏幕图标
    LoveIcon: new URL('@renderer/assets/images/love.svg', import.meta.url).href, // 喜欢图标
    // 音乐类型分类
    musicType: {
        1: new URL('@renderer/assets/images/music-type/1.jpg', import.meta.url).href,
        2: new URL('@renderer/assets/images/music-type/2.jpeg', import.meta.url).href,
        3: new URL('@renderer/assets/images/music-type/3.jpeg', import.meta.url).href,
        4: new URL('@renderer/assets/images/music-type/4.jpeg', import.meta.url).href,
        5: new URL('@renderer/assets/images/music-type/5.jpeg', import.meta.url).href,
        6: new URL('@renderer/assets/images/music-type/6.jpeg', import.meta.url).href,
        7: new URL('@renderer/assets/images/music-type/7.jpg', import.meta.url).href,
        8: new URL('@renderer/assets/images/music-type/8.jpg', import.meta.url).href,
        9: new URL('@renderer/assets/images/music-type/9.jpeg', import.meta.url).href
    },
    // 为您打造
    CreatedYouIcon: {
        1: new URL('@renderer/assets/images/CreatedYou/推荐1.png', import.meta.url).href,
        2: new URL('@renderer/assets/images/CreatedYou/推荐2.png', import.meta.url).href,
        3: new URL('@renderer/assets/images/CreatedYou/推荐3.png', import.meta.url).href,
        4: new URL('@renderer/assets/images/CreatedYou/推荐4.png', import.meta.url).href,
        5: new URL('@renderer/assets/images/CreatedYou/推荐5.png', import.meta.url).href
    },
    // 艺术家图片
    ArtistIcon: {
        1: new URL('@renderer/assets/images/ArtistIcon/陈奕迅.jpg', import.meta.url).href,
        2: new URL('@renderer/assets/images/ArtistIcon/邓紫棋.jpg', import.meta.url).href,
        3: new URL('@renderer/assets/images/ArtistIcon/林俊杰.jpg', import.meta.url).href,
        4: new URL('@renderer/assets/images/ArtistIcon/汪苏泷.jpg', import.meta.url).href
    },
    // 今日推荐展示
    recommend: new URL('@renderer/assets/images/recommend1.jpeg', import.meta.url).href,
    // 音乐文件
    musicFile: {
        zhiwo: new URL('@renderer/assets/testMusic/知我.mp3', import.meta.url).href
    }
} as const;