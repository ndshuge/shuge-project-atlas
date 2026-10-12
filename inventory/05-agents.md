# AI Agent 与生产力工具

可追溯、受控的自动化及个人实用工具。

[← 返回图鉴首页](../README.md) · [了解优先级](../docs/VALUE_ASSESSMENT.md)

**收录 5 条**。表中的 A/B/C 是主观展示优先级；标为“子作品”的内容已有母项目承载，不计为新仓库。

| 作品 | 阶段 | 优先级 | 作品价值 | 访问 |
| --- | --- | :---: | --- | --- |
| **Mice Hole / 本机 AI 工具桥** | 公开仓库 | A | 把 AI 助手接入授权本地文件与工程动作，价值在权限边界、可观测性和真实自动化协作。 | [GitHub](https://github.com/ndshuge/micehole) |
| **Project Lab / Agent 控制平面** | 持续开发 | B | 围绕 Agent 的持久状态、Git worktree、有限授权执行与验证门禁构建本机工程控制层。 | 暂未公开 |
| **FactGuard / 多智能体事实核验** | 持续开发 | A | 跨文档证据解析、出处追溯、冲突校核与拒绝无依据引用，强调可审计 AI 工作流。 | 暂未公开 |
| **小芽 OPC / 个人成长 Agent** | 本地原型 | A | 面向大学生的课程、DDL、目标和生活管理，规则建议结合有授权的行动与桌宠互动。 | 暂未公开 |
| **Classnote / 课堂笔记** | 公开仓库 | B | 本地课堂记录、备份与可选 AI 摘要，属于具有实际日常场景的轻量生产力工具。 | [GitHub](https://github.com/ndshuge/ndshuge-classnote) |

## 技术与核验依据

### Mice Hole / 本机 AI 工具桥

- **技术：** Node.js / MCP / Windows
- **价值：** 把 AI 助手接入授权本地文件与工程动作，价值在权限边界、可观测性和真实自动化协作。
- **依据/边界：** 已公开仓库声明 v0.1 Beta：远程 shell 默认禁用；本机新版本不自动等于公开版能力。
- **公开入口：** [GitHub](https://github.com/ndshuge/micehole)

### Project Lab / Agent 控制平面

- **技术：** Python / SQLite / Git
- **价值：** 围绕 Agent 的持久状态、Git worktree、有限授权执行与验证门禁构建本机工程控制层。
- **依据/边界：** README.md：本地优先 V2，真实适配器边界及恢复测试；不代表全部生产化。
- **公开入口：** 暂未公开

### FactGuard / 多智能体事实核验

- **技术：** Python / Skill / PDF-DOCX-XLSX
- **价值：** 跨文档证据解析、出处追溯、冲突校核与拒绝无依据引用，强调可审计 AI 工作流。
- **依据/边界：** Docs/STATUS.md：测试集 A 8/8 离线解析，正式 TeleAgent FG0 平台验证仍未通过。
- **公开入口：** 暂未公开

### 小芽 OPC / 个人成长 Agent

- **技术：** HTML / JavaScript / Node.js
- **价值：** 面向大学生的课程、DDL、目标和生活管理，规则建议结合有授权的行动与桌宠互动。
- **依据/边界：** Docs/STATUS.md：OPC1 本地 Node 12/12、Edge 21/21；无真实 LLM、人类试测与系统通知。
- **公开入口：** 暂未公开

### Classnote / 课堂笔记

- **技术：** 笔记 / 可选 AI 工作流
- **价值：** 本地课堂记录、备份与可选 AI 摘要，属于具有实际日常场景的轻量生产力工具。
- **依据/边界：** GitHub 公开仓库描述已核实；本次未重新执行功能测试。
- **公开入口：** [GitHub](https://github.com/ndshuge/ndshuge-classnote)


---

说明：表内“本地验收”依据既有工程文档，并非本轮重新跑过完整测试；源码依然留在原项目。
