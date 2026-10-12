# 科学、数学与复杂系统

基于真实公式/计算的实验和可视化。

[← 返回图鉴首页](../README.md) · [了解优先级](../docs/VALUE_ASSESSMENT.md)

**收录 6 条**。表中的 A/B/C 是主观展示优先级；标为“子作品”的内容已有母项目承载，不计为新仓库。

| 作品 | 阶段 | 优先级 | 作品价值 | 访问 |
| --- | --- | :---: | --- | --- |
| **Physics Frontier Lab / 物理前沿实验室** | 本地验收 | A | 从预测、参数计算、数值误差到结果报告的科学实验闭环，可展现科研严谨性和可解释性 UI。 | 暂未公开 |
| **EvoWorld / 生命进化实验室** | 本地验收 | A | 将资源、个体差异、生命周期与群体变化做成可观察的微缩生态系统；适合科学教育与复杂系统研究展示。 | 暂未公开 |
| **Math Universe / 数学宇宙** | 公开展示 | A | 七个实时计算的数学世界，把微分方程、引力、分形、矢量场与集体同步变成可交互视觉体验。 | [试玩/浏览](https://ndshuge.github.io/ndshuge-galaxy/art/math-universe/) |
| **Chaos / 洛伦兹混沌展厅** · 子作品 | 公开展示 | A | 直接观察奇异吸引子和初值敏感性，是非线性动力学的高辨识度教学入口；不是单独的完整 Chaos Lab 仓库。 | [试玩/浏览](https://ndshuge.github.io/ndshuge-galaxy/art/math-universe/chaos.html) |
| **Gravity Garden / 重力花园** · 子作品 | 公开展示 | B | 以小型重力物理沙盒探索轨道、力学与交互设计；可供快速理解运动系统。 | [试玩/浏览](https://ndshuge.github.io/ndshuge-game/games/gravity-garden/) |
| **Silicon Lab / 半导体学习实验室** | 早期探索 | C | 把半导体物理、PN 结、MOSFET、CMOS 与电路/EDA 学习串成逐级实验课程。 | 暂未公开 |

## 技术与核验依据

### Physics Frontier Lab / 物理前沿实验室

- **技术：** React / TypeScript / Worker / 数值计算
- **价值：** 从预测、参数计算、数值误差到结果报告的科学实验闭环，可展现科研严谨性和可解释性 UI。
- **依据/边界：** Docs/STATUS.md：V0.4，13 实验与 83 参数解释，159/68/110/6/16 各类测试记录通过。
- **公开入口：** 暂未公开

### EvoWorld / 生命进化实验室

- **技术：** JavaScript / Browser Simulation
- **价值：** 将资源、个体差异、生命周期与群体变化做成可观察的微缩生态系统；适合科学教育与复杂系统研究展示。
- **依据/边界：** STATUS.md：V0.4，62 项 Node、101 项静态浏览器检查通过；科学核心与历史数据保留。
- **公开入口：** 暂未公开

### Math Universe / 数学宇宙

- **技术：** JavaScript / Canvas / WebGL
- **价值：** 七个实时计算的数学世界，把微分方程、引力、分形、矢量场与集体同步变成可交互视觉体验。
- **依据/边界：** README.md：7 个世界；GitHub 上有艺术回廊部署目录。
- **公开入口：** [试玩/浏览](https://ndshuge.github.io/ndshuge-galaxy/art/math-universe/)

### Chaos / 洛伦兹混沌展厅

- **技术：** Lorenz system / 粒子可视化
- **价值：** 直接观察奇异吸引子和初值敏感性，是非线性动力学的高辨识度教学入口；不是单独的完整 Chaos Lab 仓库。
- **依据/边界：** math-universe/chaos.html 已存在，远端 art/math-universe/chaos.html 路径已核验。
- **公开入口：** [试玩/浏览](https://ndshuge.github.io/ndshuge-galaxy/art/math-universe/chaos.html)

### Gravity Garden / 重力花园

- **技术：** Browser Physics Sandbox
- **价值：** 以小型重力物理沙盒探索轨道、力学与交互设计；可供快速理解运动系统。
- **依据/边界：** GitHub 公开独立遗留仓库，现归入 ndshuge-game 游戏厅。
- **公开入口：** [试玩/浏览](https://ndshuge.github.io/ndshuge-game/games/gravity-garden/)

### Silicon Lab / 半导体学习实验室

- **技术：** HTML / 科学教育
- **价值：** 把半导体物理、PN 结、MOSFET、CMOS 与电路/EDA 学习串成逐级实验课程。
- **依据/边界：** COURSE.md 明确第 1 章第 1 节，未验收；不可称完整芯片仿真平台。
- **公开入口：** 暂未公开


---

说明：表内“本地验收”依据既有工程文档，并非本轮重新跑过完整测试；源码依然留在原项目。
