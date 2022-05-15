// git是用来管理代码的，在公司里面用于多人协作
// git init 初始化本地仓库，会生成 .git 隐藏文件
// 通过git status 查看当前文件状态
// 显示的状态：未被追踪的文件：untrack
// 可以使用 clear 清除屏幕信息
// 查看状态精简命令：git status -s
// ??表示当前文件未被追踪
// A表示当前文件已经处于追踪文件了
// M表示当前文件已经修改了
// D表示已经被删除了
// 添加追踪文件到暂存区：git add 要追踪的文件 -->  git add index.js
// 其中可以先书写两个字母，然后按下tab键可以补全路径
// 提交文件到仓库：git commit -m '描述信息'     命令后面的描述信息一定要写
// 暂存已修改的文件 git add 要追踪的文件
// 撤销上一步操作：git checkout -- 文件名
// 一次性添加多个文件到暂存区：git add .
// 跳过使用暂存区，直接将修改的文件存入git仓库：git commit -a -m '描述信息'   就是git add 和 git commit 的复合写法
// 忽略文件： .gitignore
// 查看提交的历史记录：git log
// 回退到之前的指定版本：git reset --hard commitID


// 取消单个暂存的文件：git reset HEAD 要移除的文件名  (了解)
// 取消所有暂存的文件：git reset HEAD .   (了解)
// 移除文件：git rm -f 要移除的文件(了解) (rm -> remove force强制)
// 只移除仓库里面的文件，保留本地的文件：git rm --cached 要移除的文件

