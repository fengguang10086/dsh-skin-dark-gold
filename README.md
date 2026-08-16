# dsh-skin-dark-gold

暗金粒子皮肤插件 —— DeepSeek Harness Web GUI 的客户端插件。

- **背景**：暗金色渐变（无条件暗金主视觉，不再跟随系统深浅色）
- **粒子**：全屏漂浮的金色粒子 + 邻近连线，随鼠标轻微扰动
- **文字**：暖白黄色（`#f9efcf` / `#e6cd8b`），整体重映射 `--dsw-alias-*` 主题令牌并强制深色渲染

## 结构

```
dsh-skin-dark-gold/
├── package.json       # dsh.client（浏览器端） + dsh.bundle（一条命令安装）声明
├── cordis.patch.yml   # bundle patch：安装后自动注册 skin-dark-gold 加载器行
├── lib/
│   ├── index.js       # Node 端：向首页注入预加载底色，避免白屏闪烁
│   └── client.js      # 浏览器端：皮肤 CSS + 粒子引擎（window.__ModuleLoader__.load）
├── LICENSE
└── README.md
```

## 安装（社区用户 · 一条命令）

```sh
# 在 profile 内安装（以 web profile 为例），bundle 会自动注册插件行：
dsh plugin --profile web add dsh-skin-dark-gold
# 重启 dsh web（bundle patch 在启动时应用），打开页面即生效
```

> 注意：通过 bundle 安装后**不要**再手动往 `cordis.patch.yml` 加行，避免重复 id。

## 安装（本机手动方式 · 不依赖 npm）

1. 将本目录复制到 profile 可解析的 node_modules：
   `C:\Users\Administrator\.dsh\profiles\node_modules\dsh-skin-dark-gold\`
2. 在 `C:\Users\Administrator\.dsh\profiles\web\cordis.patch.yml` 追加：

   ```yaml
   - insert:
       - id: skin-dark-gold
         name: dsh-skin-dark-gold
   ```

3. profile 对 `cordis.patch.yml` 有热重载监听，改动后刷新浏览器页面即可生效（无需重启服务器）。

## 卸载

- bundle 方式：`dsh plugin --profile web remove dsh-skin-dark-gold`，再重启服务器。
- 手动方式：从 `cordis.patch.yml` 移除该行（热重载自动摘除），并删除 node_modules 中的目录。

## 发布到 npm（社区）

1. 确认包名未被占用：`npm view dsh-skin-dark-gold version`（占用则改用 `@你的用户名/dsh-skin-dark-gold`）。
2. `cd dsh-skin-dark-gold && npm login && npm publish`。
3. 之后任何人（包括你自己换机器）都能用上面的「一条命令」安装。
4. 迭代更新：改代码后 `npm version patch && npm publish`。

## 说明

- 粒子画布为装饰层：`pointer-events: none`、不参与交互；尊重 `prefers-reduced-motion`；页面隐藏时暂停动画。
- 皮肤无条件渲染暗金：插件会在 apply 时强制 `data-ds-dark-theme` 与深色 colorScheme，并用 MutationObserver 防止主题切换把页面带回浅色；卸载插件后恢复原主题行为。
