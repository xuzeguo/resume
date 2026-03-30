<template>
  <main class="content" id="contentToExport" aria-label="简历正文">
    <div class="person-info">
      <h1>郭旭泽</h1>
      <p>
        <span class="tag-white">在职</span>
        <span class="tag-white">前端负责人</span>
      </p>
      <p class="black-text">前端工作经验 8 年</p>
      <p class="black-text">电话 176****3871 &nbsp;&nbsp; 邮箱 *******@foxmail.com</p>
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
          <strong>前端基础：</strong>
          精通 JavaScript（原型链、闭包、事件循环、异步机制等），具备扎实的语言底层理解与问题分析能力
        </li>
        <li>
          <strong>框架体系：</strong>
          精通 Vue2/3 及生态（Pinia / Vue Router），理解响应式原理、Diff 算法及组件化设计思想
        </li>
        <li>
          <strong>TypeScript：</strong>
          熟练使用泛型与类型设计，提升复杂业务场景下代码可维护性与可扩展性
        </li>
        <li>
          <strong>工程化能力：</strong>
          熟悉 Webpack / Vite 构建原理，具备前端性能优化经验（LCP/FCP 优化、资源分包、缓存策略等）
        </li>
        <li>
          <strong>架构设计：</strong>
          具备低代码平台、组件化体系及微前端（qiankun）架构设计与落地经验
        </li>
        <li>
          <strong>复杂交互与数据处理：</strong>
          具备复杂数据建模与高频交互处理经验，能够优化大规模数据渲染与用户体验
        </li>
        <li>
          <strong>全链路理解：</strong>
          具备 Node.js 基础能力，理解前后端协作流程及接口设计规范
        </li>
        <li>
          <strong>稳定性与质量保障：</strong>
          熟悉代码规范、CI/CD 流程及前端监控体系建设，具备线上问题快速定位与解决能力
        </li>
        <li>
          <strong>团队协作与推进能力：</strong>
          具备需求分析、技术方案设计、任务拆解及进度推进经验，能够在复杂环境中保障项目交付
        </li>
        <li>
          <strong>AI 协作开发：</strong>
          在开发流程中引入 AI 工具（ChatGPT / Copilot），用于代码生成、方案设计与问题排查，提升研发效率
        </li>
      </ul>
    </div>

    <div class="title">
      <span>工作经历</span>
      <div class="line"></div>
    </div>

    <div class="job-detail work-summary">
      <div class="job-title">
        <span class="name">晶栅科技（上海）</span>
        <div class="time">2025-04 ~ 至今</div>
      </div>
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
        <span class="name">晶栅科技（上海）</span>
        <div class="time">2025-04 ~ 至今</div>
      </div>
      <div class="job-desc">前端负责人</div>
      <p>
        <span class="tag-white">Vue 3</span>
        <span class="tag-white">TypeScript</span>
        <span class="tag-white">Vite</span>
        <span class="tag-white">Pinia</span>
        <span class="tag-white">Element Plus</span>
        <span class="tag-white">Module Federation</span>
      </p>

      <div class="project-title">MDM 物流管理平台</div>
      <strong class="resume-label">项目描述：</strong>
      <p class="resume-desc">
        主导平台前端架构从零搭建：以 URL 适配层收敛单体与微服务路由差异；在请求层注入 Gray-Version Header
        做灰度染色，业务对部署形态与灰度策略无感知。负责虚拟列表、请求基础设施、内存与配置治理、Module Federation
        微前端、内部组件库及性能与 AI 工程等方向落地。
      </p>
      <strong class="resume-label">项目亮点：</strong>
      <ul>
        <li>
          <strong>虚拟列表与渲染性能：</strong>
          遇到万级列表快速滚动白屏、布局抖动的问题 → 设计双模式虚拟滚动（固定高 O(1) 寻址 / 动态高前缀和 + 二分 +
          ResizeObserver 增量），渲染层统一 <code>translateY</code> 走合成层、<code>IntersectionObserver</code>
          触发加载，避免 scroll 轮询 →
          <strong>万级节点场景滚动帧率稳定在约 60fps。</strong>
        </li>
        <li>
          <strong>请求层：</strong>
          遇到并发挂载导致相同接口重复打满、以及生产环境传输安全的问题 → 以「共享 Promise」做 TTL
          内请求去重（递归排序 + JSON 幂等 key、LRU 上限与定时淘汰），并在 Axios 拦截器统一 AES（POST 整包 /
          GET 逐字段）加解密，编译期开关分离开发/生产 →
          重复请求与带宽浪费显著下降，业务侧零侵入接入密文通道。
        </li>
        <li>
          <strong>内存与配置持久化：</strong>
          遇到 Keep-Alive 长期运行实例不释放、以及列配置含函数无法落 localStorage 的问题 →
          待移除视图经防抖批量替换 <code>include</code> 新引用强制回收；配置「数据/行为」分层，dot-path 提取/还原函数引用 →
          SPA 内存堆积与表格高级配置丢失问题消除。
        </li>
        <li>
          <strong>微前端（Module Federation）：</strong>
          遇到多子应用重复打包 Vue 生态、沙箱与样式污染风险 → 主 Shell + 子应用拆分，Vue/Vue Router/Pinia 等
          <code>shared singleton</code>；Proxy 沙箱与按场景的 CSS 隔离策略；bootstrap/mount/unmount 协议清理副作用；props /
          CustomEvent / 共享 store 三层通信 →
          公共依赖体积收敛，多次挂载卸载无泄漏与状态割裂。
        </li>
        <li>
          <strong>组件库建设：</strong>
          遇到业务侧组件分散、主题与按需接入成本高的问题 → pnpm Monorepo 分层（components/hooks/utils/tokens），Headless + Design
          Token 主题体系，Vite library 双格式 + 条件导出与按需 resolver，Changesets 管版本与 CHANGELOG、CI 发布私有源 →
          消费方近乎零配置获 tree-shaking，品牌换肤以覆盖 alias token 完成。
        </li>
        <li>
          <strong>性能优化（构建与体验）：</strong>
          遇到首屏 JS 体积大、性能回退难以及时发现的问题 → Rollup <code>manualChunks</code> 按路由分层 vendor /
          公共 / 页面，Brotli + Gzip 双压缩；运行时以 <code>computed</code>、<code>v-memo</code>、异步 +
          Suspense 与空闲 prefetch；网络层 stale-while-revalidate 与图片 WebP、lazy；CWV 采集 + Lighthouse CI
          流水线卡点 →
          <strong>首屏 JS 传输体积降低约 60%</strong>，关键页面性能劣化可被 CI 拦截。
        </li>
        <li>
          <strong>AI 工程：</strong>
          遇到业务需流式对话、上下文成本与幻觉控制的问题 → 封装 <code>useStreamChat</code>（ReadableStream + AbortController）；Prompt
          分层与 JSON 上下文截断；本地知识库分块 + embedding，Worker 内相似度检索 Top-K 拼入 prompt →
          主线程不被检索阻塞，回答更贴单据与手册。
        </li>
        <li>
          <strong>AI 与业务闭环：</strong>
          遇到模型需在系统内执行查单、审批等动作的问题 → 自建 MCP Server 暴露业务工具，由 tool call
          驱动；前端作 MCP Client 做注册、路由与结果回传 → AI Agent 可在权限与审计约束下完成闭环操作。
        </li>
      </ul>
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
          <strong>组件库与搭建效率：</strong>
          遇到基础控件重复开发、页面模块手工拼装成本高的问题 → 采用工厂/建造者/单例与配置项集中管理，批量产出按钮/表单项并装配头部等复合布局 →
          组件复用与页面搭建效率明显提升，低代码场景交付节奏显著加快。
        </li>
        <li>
          <strong>性能优化（LCP）：</strong>
          遇到首屏与资源策略导致 LCP 过高、体验差的问题 → 通过数据缓存与加载/渲染策略优化 →
          <strong>LCP 由约 56s 降至约 5s。</strong>
        </li>
        <li>
          <strong>性能优化（端侧与多媒体）：</strong>
          遇到 32 位浏览器解码占用过高、视频弱网易卡顿的问题 → 优化解码缓冲区，配合断流重连与追帧 →
          内存压力与播放稳定性改善，弱网下可用性提升。
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
          <strong>工程与首屏性能：</strong>
          遇到包体偏大、Prefetch 不合理拖慢首屏的问题 → 基于监控制定优化方案并自定义插件治理 Prefetch →
          <strong>包体积约降 30%–50%，打包约 20s 内，FCP、LCP 约提升 80% 以上。</strong>
        </li>
        <li>
          <strong>数据处理性能：</strong>
          遇到树形数据反复拼装、大数据量下耗时偏高的问题 → 采用 Map + 单次循环构建树，时间复杂度 O(n) →
          组装耗时显著下降，复杂列表/配置场景交互更流畅。
        </li>
        <li>
          <strong>组件与质量侧贡献：</strong>
          遇到线上问题靠人工捞日志、单次定位动辄数小时的问题 → 建设 RF devTools 与页面结构化日志能力 →
          <strong>典型问题排查由约 2h 缩短至约 20min；</strong>
          同时推动单测、GitLab 覆盖率 CI 卡点与 CR 看板，组件/页面/BFF 质量可度量。
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
