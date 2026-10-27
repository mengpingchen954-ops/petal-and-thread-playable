花间裁衣 · Petal & Thread

1. 将压缩包完整解压到一个文件夹。
2. 确保已安装 Node.js 22.12 或更新版本。
3. 双击 start-game.cmd，保持启动窗口开启。
4. 用 Chrome 或 Edge 打开 http://127.0.0.1:4173

macOS / Linux：在解压文件夹运行 node scripts/serve.mjs，然后打开相同地址。

这是本地离线运行版，不需要 npm install，不需要外网，不支持直接双击 dist/index.html。
需要支持 WebGL 2 的浏览器。没有外部发布或联网账号。

操作：左键使用工具，右键旋转镜头，滚轮缩放。
Ctrl+Z 撤销，Ctrl+Shift+Z 重做，Ctrl+S 保存，R 恢复视角，Esc 收起工具。
沿两片纸样轮廓裁剪 → 沿两侧和腰线缝合 → 放置装饰 → 模特试穿 → 交付与收藏。

可在作品集中导入 examples 文件夹里的两个示例 JSON。
作品保存在当前浏览器和端口，建议导出 JSON 文件备份。

docs 中包含参考核对、资源来源、测试说明和 Three.js MIT 许可。
