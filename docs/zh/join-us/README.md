---
title: 加入我们
lang: zh-CN
---
外交官，是由几位具有丰富的开源经验、边缘计算经验的开发者发起，于 2022 年 6 月正式启动。
如果您对「边缘计算」感兴趣或有建设性的建议等，外交官期待您的加入和贡献，与大家一起为外交官添砖加瓦，共同建设「边缘计算」开源框架。

# 外交官基础信息
### 负责人
* 郑策 [GitHub](https://github.com/zc2638)
* 王梓龙 [GitHub](https://github.com/TianTianBigWang)
* 孟旭东 [GitHub](https://github.com/MXuDong)
* 葛祖霞 [GitHub](https://github.com/zc2638)

📢 如有任何问题，可联系他们

### 外交官相关信息
[GitHub 仓库](https://github.com/99nil/diplomat)

[任务(问题)一览表](https://github.com/orgs/99nil/projects/7)

[社区文档]( https://99nil.github.io/diplomat-docs/)

# 如何加入「外交官」
参与 `外交官` 的方式，可以是对`外交官`提出和讨论问题，以及具有建设性的建议，也可以是给`外交官`提 PR。

## 提出及讨论问题
对于问题和任务的管理，统一通过 `issues` 来提出和讨论、记录，包括但不限于功能、修复、优化等，如对`外交官`有兴趣或有任何问题或建设性的建议，都可以在 `Issues` 上通过[创建 Issue](https://github.com/99nil/diplomat/issues) 来提交，相关负责人会第一时间回复处理。

1. 点击 [New Issue](https://github.com/99nil/diplomat/issues) 创建新的 Issue

![创建新的 Issue](/images/issues_1.jpg)

2. 提交 Issue

![提交 Issue](/images/issues_2.jpg)
提交后，您可以在 Issues 中看到您的提交，相关负责人会第一时间审核并处理，后续可关注一下。

## 参与协作开发
下面开始介绍如何给 `外交官` 提 PR 啦~

### 准备 GitHub 账号
因 `外交官` 托管在 `GitHub` 上，故需要一个 `GitHub` 账号来提 `Issues` 和 `PR`。如果小伙伴热爱开源但是还未有 `GitHub` 账号，需要先[注册 GitHub](https://github.com/)。

### 领取任务
项目统一通过 `issues` 来管理和记录任务、问题和建议，新加入的小伙伴可进入项目的 [Issues](https://github.com/99nil/diplomat/issues) ，选取自己想要参与协作开发的任务，并在 `Issues` 中把任务指定负责人（即 `Assignees`）修改为自己 `GitHub` 名称即可，即任务归属在您名下，后续还需同步任务的进度状态，下面会介绍如何更新任务状态。

1. 领取任务

  在 `issue` 中的 `Assignees` 指定负责人，可选多个：
  ![领取任务](/images/issue_assignees.jpg)

2. 查看任务

  为方便查看任务，领取任务后，可在[任务一览表](https://github.com/orgs/99nil/projects/7)中查看与你相关的任务：
  ![领取任务](/images/tasks.jpg)

### 变更任务状态
   领取任务后，在对应的 `issue` 中更新任务的状态。

  #### 状态类型
  |  类型   | Planing  | Todo  | Doing  | Done  | Reviewing |
  |  ----  | ----     |  ----  | ----  | ----   | ----     |
  | 状态    | 计划中    | 待办   | 进行中  | 已完成 | 审核中     |

  如未开始任务，请在对应的 `issue` 上变更任务状态为 `Todo`，如已开始，变更状态为 `Doing`，如已完成任务，则修改任务状态为 `Done`等，根据任务具体进度来更新任务状态，不仅提高效率，同时也保持自身良好的任务跟踪习惯，perfect~

  1. 变更任务状态

  在 `issue` 中变更状态：
  ![修改任务状态](/images/issue_status.jpg)

  2. 查看任务
    
  概览详见[任务一览表](https://github.com/orgs/99nil/projects/7)

### Fork 项目仓库
Fork 是服务端代码仓的克隆，通俗来说，是把目标代码仓克隆到自己的代码仓上，新的代码仓包含了源仓的的所有内容，如分支、Tag、提交等。我们称源仓为`上游仓库`，即 `upstream repository`。

1. 点击 Fork
    ![点击 fork](/images/fork.jpg)

2. 创建 Fork
    ![创建 fork](/images/fork_create.jpg)
  
3. 完成 Fork

    fork 完成后，我们会看见目标代码仓挂在了自己的 `Github` 仓库上，我们的 GitHub 仓库多了一个`新的目标仓库`，这时`源代码仓`成为了`上游仓库`，后续开发需要在`新的代码仓`上进行，接下来就可以基于`新的目标仓库`进行标准流程的开发啦~
    ![完成 fork](/images/forked.jpg)

### 协作开发和提交 PR
1. `clone` 远程仓库项目到本地

    fork 完成后，就可以开始日常的标准流程化协作开发啦~

    ``` shell
    git clone https://github.com/${YOUR-ACCOUNT}/${REPO-NAME}
    ```
    *注意，克隆的远程仓库是 `fork` 到你的 GitHub 账户下的代码仓噢~*

2. 添加上游远程仓库

    为避免功能代码同步以及冲突，需要实时同步上游仓库，使代码保持为最新。
    ``` shell
    git remote add upstream https://github.com/${UPSTREAM}/${REPO-NAME}
    ```

3. 新建新的分支

    *分支规范请查阅[分支规范]()*
    ``` shell
    git checkout -b ${BRANCH-NAME}
    ```

4. 开始任务
    
    新建分支后，在分支上进行开发。

5. 提交代码到远程仓
  * 添加修改的文件
    ``` shell
    git add ${CHANGE-FILE}
    ```
    或添加所有文件
    ``` shell
    git add .
    ```

  * 添加 `commit` 内容
    
      *`Commit 规范`详见 [Commit 规范]()*
    ``` shell
    git commit -m "message"
    ```
    
  * 提交代码
    ``` shell
    git push origin ${BRANCH-NAME}
    ```
  
6. 建立 PR
  * 创建 PR

    进入您的远程仓库代码仓下，点击「Pull requests」面板，点击「New pull request」来创建一个 `PR`：
    ![点击创建新的 PR](/images/pr_1.jpg)

  * 选择需要要合并到上游仓库的分支

    点击「New pull request」后，页面会跳转到`上游代码仓`，并让您选择您要合并到分支，此时，选择要合并分支：
    ![选择要合并的分支](/images/pr_2.jpg)

  * 创建 PR

    标题和描述可视情况编辑。
    选择要合并的分支后，点击「Create pull request」，即可创建 `PR`。

    创建 PR 后，相关负责人会第一时间审核，审核期间需要一点时间，请耐心等待~ 以及可能会在 PR 下进行相关的讨论，提交后请关注 PR 的审核进度。

7. 获取`上游代码仓`的最新代码
  创建 `PR` 后， 可进行其他的任务。进行其他任务前，需要同步存储库的分支，和获取上游代码仓的最新代码：
  同步上游代码仓有两种方式：`GitHub` 上界面操作、命令行同步
  * GitHub 上界面操作

      ![github](/images/upstream_fetch.jpg)
  
  * 命令行进行同步

      *添加 upstream 已在[这里](#开发和提交代码)的「添加上游远程仓库」讲述*
      ``` shell
      # 同步分支、获取上游代码仓的最新代码
      git fetch upstream

      # 切换主要分支(项目主要分支为main)
      git checkout main 

      # 将`上游代码仓`的代码 `rebase` 到本地
      git pull --rebase upstream main

      # 更新自己的远程仓库
      git push origin main
      ```
8. 开始新的任务

  重复 3 - 6 的步骤。

# 联系我们


## 加入微信群
