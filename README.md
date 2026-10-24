# 波奇酱喵喵喵

适用于 DeepSeek Harness 的个人主题插件：樱花粉与奶油白、右侧波奇立绘、侧栏拍立得，以及音乐和猫爪装饰。支持跟随 DSH 切换浅色、深色外观。

## 当前状态

版本：1.0.0（试用）。曾在 Windows 桌面版 DeepSeek Harness 0.2.1-rc.3 中安装并显示；其他系统与版本尚未验证。已有会话曾出现正文过窄，当前代码已加入修正，但修正后的最终界面验证尚未完成。

## 安装

### 使用 GitHub 仓库地址

在 DeepSeek Harness 侧栏打开 **插件 → 添加插件**，填写以下仓库地址，安装并启用：

```text
https://github.com/dingfz-cyber/dsh-theme-bocchi-meow
```

- 公开仓库可以直接分享地址。
- 私有仓库要求安装者具备仓库访问权限，且其 Git 环境已完成相应认证。
- 启用前请关闭其他整套界面主题，避免多个主题同时修改外观。
- 本仓库已经包含 `lib/` 构建结果和图片，无需安装者自行构建。

### 使用解压后的本地目录

将本项目完整下载并解压到长期保留的位置，例如 `D:\DeepSeekHarness\Themes\bocchi-meow`。

在 **插件 → 添加插件** 中填写实际文件夹的绝对路径。所选文件夹里应直接包含 `package.json`、`cordis.patch.yml` 和 `lib/`。安装后请保留该文件夹，不要移动或删除。

DSH 支持包名、Git 地址和本地绝对路径安装，见 [官方插件管理说明](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/client/ui-plugin-manager/README.zh.md)。

## 使用与恢复

- 外观明暗跟随 DSH 自身设置。
- 右侧立绘会按聊天区域宽度收起，为正文、输入框和工作区面板留出空间。
- 关闭本主题即可恢复 DSH 默认外观，也可再启用之前的主题。
- 安装后请检查新会话、已有聊天、输入框、模型菜单和窗口缩放效果。
- 如需重启，请等待正在运行的任务结束后再退出 DSH。

## 开发

需要 Node.js 20 或更新版本。构建脚本仅使用 Node.js 内置模块，无需安装额外 npm 依赖。

```sh
node scripts/build.mjs
node --check lib/index.js
node --check lib/client.js
```

修改 `src/` 或 `assets/` 后，重新构建并将更新后的 `lib/client.js` 一起提交；通过 GitHub 安装时会直接使用这个构建文件。

- `src/`：可编辑客户端代码和主题样式。
- `assets/`：角色、拍立得和装饰 PNG。
- `lib/`：随仓库提供的构建结果。
- `locale/`：中文与英文插件名称、描述。
- `cordis.patch.yml`：DSH 组合包加载入口。

图片嵌入构建结果，运行时不需要访问外部图片网站。本项目不包含 API Key、账号配置或聊天记录。

## 素材和许可

角色参考由用户提供；主题素材依据参考与确认的设计生成。角色及美术权利归相应权利人，原始参考图不在本仓库中。许可说明见 [LICENSE](LICENSE)。
