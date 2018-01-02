/**
 * @author: xhb
 * @create: 2017-12-31
 * @description: 云药样式文件
 */

mui.init();
//全局定义路径跳转
mui('body').on('tap', '[data-url]', function() {location.href = this.dataset.url});


