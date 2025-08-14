# 知识挑战 - 答题网站

## 部署指南 (Netlify Drop)

1. 首先确保您的电脑上安装了Node.js和pnpm

2. 克隆或下载此项目到本地

3. 在项目根目录运行以下命令安装依赖:
   ```
   pnpm install
   ```

4. 构建生产版本:
   ```
   pnpm build
   ```

5. 构建完成后，您会看到一个`dist`文件夹

6. 访问 [Netlify Drop](https://app.netlify.com/drop)

7. 将`dist`文件夹中的所有内容拖放到Netlify Drop界面

8. 等待部署完成，您的网站将会上线

## 注意事项

- 确保只上传`dist`文件夹中的内容，而不是整个项目
- 如果部署后仍出现空白页，请检查Netlify控制台中的构建日志
- 本项目使用React Router，重定向规则已在`_redirects`文件中配置好