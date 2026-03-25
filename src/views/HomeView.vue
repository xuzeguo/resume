<template>
  <main class="content" id="contentToExport" aria-label="简历正文">
    <div class="person-info">
      <h1>郭旭泽</h1>
      <p>
        <span class="tag-white">求职中</span>
        <span class="tag-white">目前离职</span>
      </p>
      <p class="black-text">前端工作经验 8 年，年龄 30</p>
      <p class="black-text">
        电话 <a href="tel:17621063871">17621063871</a> &nbsp;&nbsp; 邮箱
        <a href="mailto:xuzeguo@foxmail.com">xuzeguo@foxmail.com</a>
      </p>
      <p>
        <span class="tag-white">Vue</span>
        <span class="tag-white">JavaScript/TypeScript</span>
        <span class="tag-white">Node.js</span>
        <span class="tag-white">Webpack/Vite</span>
        <span class="tag-white">CSS</span>
        <span class="tag-white">Html</span>
      </p>
    </div>

    <div class="title">
      <span>专业技能</span>
      <div class="line"></div>
    </div>

    <div class="job-detail">
      <ul>
        <li>
          熟练使用 JavaScript 的 ES6 新特性、DOM 操作、原型链、闭包、class、事件轮询等
        </li>
        <li>熟悉使用 TypeScript 强类型语言对数据进行约束，包括泛型、类型体操等</li>
        <li>
          熟练 Vue2/3 全家桶，了解相关底层双向数据绑定、数组方法重写、组件化、自定义指令、diff
          算法源码的设计思路
        </li>
        <li>熟练使用 Vue2、3，熟悉底层原理之间的优劣差异与设计思路</li>
        <li>熟悉混合开发以及微前端 qiankun 等低代码平台方案</li>
        <li>熟练使用 ECharts 与地图完成可视化大屏数据展示开发</li>
        <li>
          了解常用算法和基础数据结构，应用于优化 DOM 操作、处理大量数据、实现复杂的用户交互等方面
        </li>
        <li>
          熟练掌握前端 SOLID 设计原则以及前端常用设计模式，主导设计过部门内部前端组件的经验；掌握前端常见性能优化手段，显著降低
          FCP 和 LCP 时间
        </li>
        <li>具备较强的跨团队协作与推动能力，拥有独立开发能力</li>
        <li>针对生产环境遇到的问题，具有排查问题和定位问题的能力</li>
        <li>
          有前端项目管理，需求分析、工期安排、技术难点 demo、任务分配、进度把控、项目架构的能力
        </li>
      </ul>
    </div>

    <div class="title">
      <span>工作经历</span>
      <div class="line"></div>
    </div>

    <div class="job-detail work-summary">
      <div class="job-title">
        <span class="name">敏桥科技</span>
        <div class="time">2021-09 ~ 2024-09</div>
      </div>
      <div class="job-title">
        <span class="name">蔚来（吾创）</span>
        <div class="time">2017-11 ～ 2021-09</div>
      </div>
      <div class="job-title">
        <span class="name">垂杨科技</span>
        <div class="time">2017-01 ~ 2017-11</div>
      </div>
    </div>

    <div class="title">
      <span>项目经历</span>
      <div class="line"></div>
    </div>

    <div class="job-detail">
      <div class="job-title">
        <span class="name">敏桥科技</span>
        <div class="time">2021-09 ~ 2024-09</div>
      </div>
      <div class="job-desc">高级前端工程师</div>
      <p>
        <span class="tag-white">TypeScript</span>
        <span class="tag-white">Vue</span>
        <span class="tag-white">Pinia</span>
        <span class="tag-white">Vue Router</span>
        <span class="tag-white">乾坤</span>
        <span class="tag-white">低代码</span>
      </p>

      <div class="project-title">低代码后台管理平台</div>
      <strong class="resume-label">项目描述：</strong>
      <p class="resume-desc">
        公司产品作为中后台系统，天然包含了大量表单、列表，为了提高开发效率，开始搭建低代码平台。核心在于开发页面渲染引擎。页面渲染引擎（Page
        Render Engine）是依托于页面配置、渲染 UI、加载组件、维持数据、处理用户交互的平台。
      </p>
      <strong class="resume-label">项目职责：</strong>
      <ul>
        <li>
          设计前端通用字典转译自定义组件（如一个可任意定义的二维矩阵，矩阵支持配置 XY
          轴字段，支持普通字符、JSON、数字等类型数据，作为增强版配置字典使用）
        </li>
        <li>
          保障实时数据刷新，替换接口轮询对接方式，采用 WebSocket 技术进行实时推送、断开重连，降低接口频次，节约带宽请求成本
        </li>
        <li>
          设计权限模块，采用浏览器缓存 + 时间戳的形式降低权限接口的调用频率。封装权限组件，统一全项目权限判断方式
        </li>
        <li>
          封装 Axios 请求，利用响应拦截器，建立了全面的响应错误处理机制，实现函数调用传参发送请求，并配合防抖控制鉴权频率，实现
          token 过期之后自动授权并恢复上次请求
        </li>
        <li>
          通过在主进程配置多进程窗口，实现了复杂逻辑处理与卓越的资源隔离，满足了复杂算法业务场景下用户多样化的需求；
        </li>
        <li>
          封装无限滚动组件，采用 3 级 DOM 结构，第一层是固定高度的 scroll-view，第二层是拥有当前已获取的所有元素总高度的空白元素，第三层是固定元素渲染层。通过监听滚动高度动态计算需要展示列表的起始位置和结束位置，不断替换第三层中渲染的数据，并通过改变
          transform 属性使其始终保持在可视区域内，模拟滚动效果。
        </li>
      </ul>
      <strong class="resume-label">项目亮点：</strong>
      <ul>
        <li>
          整体系统框架搭建，采用工厂模式批量生产一些常用组件（如：按钮）和统一管理下拉框、多选框等配置项，使用建造者模式对组件进行组装，生成想要的结构（如：将标题、按钮和面包屑导航等组件组装成头部组件），使用单例模式确保某些组件在应用程序中只有一个组件实例
        </li>
        <li>
          缩短上市时间：通过低代码平台的快速开发能力，大幅缩短了新功能上线的时间，帮助业务团队更快响应市场需求
        </li>
        <li>
          动态表单生成：实现了基于数据模型的动态表单生成功能，使得非技术人员也能轻松创建和修改表单，提高了业务敏捷性。
        </li>
        <li>
          基于内核 + 插件架构对表单流程进行封装，提供常用校验的原子化插件和自定义扩展的能力，降低了表单校验业务逻辑和功能实现的耦合。
        </li>
        <li>
          通过合理运用数据缓存策略，成功地优化了前端应用的性能，为用户提供了更快速、流畅的使用体验，将 LCP 从 56 秒优化到 5 秒；
        </li>
        <li>
          通过优化解码缓冲区解决 32 位浏览器内存瓶颈；通过断流重连、追帧等方式进行视频流的优化，提升用户体验
        </li>
      </ul>
    </div>

    <div class="job-detail">
      <div class="job-title">
        <span class="name">蔚来（吾创）</span>
        <div class="time">2017-11 ～ 2021-09</div>
      </div>
      <div class="job-desc">前端工程师</div>
      <p>
        <span class="tag-white">TypeScript</span>
        <span class="tag-white">Vue</span>
        <span class="tag-white">Vuex</span>
        <span class="tag-white">Vue Router</span>
      </p>

      <div class="project-title">PLM（产品生命周期管理）系统</div>
      <strong class="resume-label">项目职责：</strong>
      <ul>
        <li>
          进行需求评审、技术设计评审、技术反讲、测试用例共建、测试评审等前期工作。过程中及时沟通，需求明确，意见统一，开发透明。
        </li>
        <li>采用渐进式重构方案，结合小流量逐步平稳过渡到新版本。</li>
        <li>通过认证中心与飞书，实现不同域名下的单点登录</li>
        <li>
          高质量代码：制定代码规范，并配置 CR 看板，每周披露 CR 数据；每周披露 bug 质量及跟进线上问题解决与复盘
        </li>
        <li>
          提供代码监控及使用方数据监控能力；监控组件告警，建立快速响应的 oncall 机制等。
        </li>
      </ul>
      <strong class="resume-label">项目亮点：</strong>
      <ul>
        <li>
          使用 chrome.runtime、chrome.devtools.panels 等 Chrome 的能力开发 RF devTools
          工具，主要提供 context 数据状态查看、关联关系日志查看、管道条件状态等能力，帮助研发通过 devTools
          调试页面，提升研发效率与体验；同时通过 devTools 的日志功能，排查线上问题耗时由原来的 2h 减少到 20m 以内
        </li>
        <li>
          稳定性建设：组件、页面及 BFF 均增加了单元测试，同时结合 GitLab Codebase 能力增加覆盖率
          CI/CD 卡点，在研发标准流程中增加自测覆盖率、大项项目增加众测、自动化测试等流程，保障线上平稳。同时制定代码规范，并完成多组宣推，增加代码静态卡点，提升代码稳健，同时增加
          code review 强卡点，并配置 code review 看板，提升 code review 率。
        </li>
        <li>
          根据前端监控平台的量化指标数据，制定对应优化策略方案，实现既定优化目标。并自定义插件处理 Prefetch
          预加载问题，降低 30%–50% 的打包体积，打包时间减少到 20s 内。FCP、LCP 提升 80% 以上。
        </li>
        <li>
          数据优化，使用 map + 循环的方式对数据进行 tree 结构处理，时间复杂度为 O(n)，极大地提高了运算性能
        </li>
      </ul>
    </div>

    <div class="job-detail">
      <div class="job-title">
        <span class="name">垂杨科技</span>
        <div class="time">2017-01 ~ 2017-11</div>
      </div>
      <p>
        <span class="tag-white">.net</span>
        <span class="tag-white">Html</span>
        <span class="tag-white">Js</span>
      </p>

      <div class="project-title">正广和手机商城</div>
      <strong class="resume-label">项目职责：</strong>
      <ul>
        <li>解决移动端的各大手机机型兼容适配问题</li>
        <li>使用中 Token 过期无缝重新调用以及重新请求服务器 login 接口</li>
        <li>
          使用原生 Canvas，完成平台页面水印功能以及在抓拍图片为背景图基础上绘制的自定义边框。
        </li>
      </ul>
      <strong class="resume-label">项目亮点：</strong>
      <ul>
        <li>
          设计通用的埋点框架，并落地埋点同步离线的标准任务，埋点为有感知业务埋点，需要在触发位置上调用方法，触发埋点
          PV、UC、click、滚动曝光，在同一时刻多次调用埋点时会先缓存触发的埋点，在一定时间后提交相关的埋点信息（页面离开将埋点提交），减少网络请求并提供统一完善的数据报表供业务进行数据分析与业务决策；
        </li>
        <li>用户体验优化：注重用户体验，通过优化界面设计和功能实现，提升了用户满意度。</li>
        <li>多渠道整合：实现了线上线下多渠道整合，提高了市场覆盖范围和用户触达能力</li>
        <li>
          A/B 测试与优化：实施了 A/B 测试策略，通过对不同版本的效果对比分析，不断优化产品功能，提升转化率
        </li>
        <li>
          API 网关模式：通过 Service Worker 充当 API 网关角色，统一处理所有对外接口请求，进行数据格式化、鉴权验证等工作，简化前端业务逻辑
        </li>
      </ul>
    </div>

    <div class="title">
      <span>教育经历</span>
      <div class="line"></div>
    </div>

    <div class="job-detail">
      <div class="job-title">
        <span class="name">河南大学</span>
        <div class="time">2013-09 ~ 2017-06</div>
      </div>
      <div class="job-desc">本科 - 测控技术与仪器</div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/t.scss';
</style>
