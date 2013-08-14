###明道Node.js 版本的SDK，包含了用户鉴权和几个常用的API调用

此版本依赖于express框架，已经包含express模块，可用Webstorm 开发环境来进行编辑查看
***
调用API流程  
1. 修改配置文件(config.js)中“appKey”和“appSecret”为您在开放平台申请到的应用令牌信息  
2. 修改配置文件(config.js)中“GetRedirectUrl”，保证此处的回调地址和开放平台填写的Calback_Url回调地址一致  
3. 启动node，运行node index.js 后  ,访问浏览器在config.js配置的host和端口号启动应用， http://host:port/default 即可获取授权  
4. 授权成功后可以访问 /current_user 返回用户信息 或者 /current_project 返回当前公司信息  
***
公有云请到明道开放平台创建应用 <http://open.mingdao.com> 私有部署请联系管理员创建应用并获取令牌


具体开发指南请见《[明道开放平台指南](http://open.mingdao.com/md_develog_tread.html)》