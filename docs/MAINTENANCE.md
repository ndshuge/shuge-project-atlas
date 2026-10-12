# 维护 / 发布

## 数据是单一事实源
修改 `data/projects.json` 后，网页会自动反映：标题、主分类、状态、技术栈、价值、下一步及链接。保持条目唯一 `id`，只填**确认存在**的 https 外部链接。

已建立的分类 Markdown 是本次整理时的静态快照。教育类以网页实时筛选和 JSON 为准；更新项目时也应同步更改适用的 `categories/*.md` 和首页 README。

## 本地预览
无需构建依赖。进入仓库后使用 Python 或任意静态服务器，例如：

```sh
python -m http.server 8080
```
在浏览器打开 `http://127.0.0.1:8080/`。不要直接用 `file://` 打开，因为数据 JSON 使用 `fetch`。

## 验证
```sh
node --check app.js
node -e "const x=require('./data/projects.json'); if(!Array.isArray(x.projects)) process.exit(1); console.log(x.projects.length)"
```

## 公开边界
1. 不收集和推送任何工程根目录，不从源码自动复制 .env、登录信息、个人聊天、竞赛 A 集或许可不清楚的模型素材。
2. 新增截图必须先确认原创/允许再分发，以及画面不泄露私人信息。
3. 对外链接需明确是否是真实在线试玩还是仅有 GitHub 代码。
4. 没有统一替其他作品授予许可证。具体项目有各自授权规则。
5. 对“已完成”的表达必须有独立证据；尚未实测的标注为计划或开发中。
