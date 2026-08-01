<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- 贴左缘悬停显隐，点击回主页（打印/PDF 不输出） -->
  <div class="edge-home">
    <RouterLink class="edge-home__btn" to="/" title="回到首页">首页</RouterLink>
  </div>

  <main class="content" id="contentToExport" aria-label="简历正文">
    <p class="resume-back">
      <RouterLink to="/">← 返回首页</RouterLink>
    </p>
    <div class="person-info">
      <h1>郭旭泽</h1>
      <p>
        <span class="tag-white">离职</span>
        <span class="tag-white">高级前端工程师</span>
        <span class="tag-white">前端负责人</span>
      </p>
      <p class="black-text">前端工作经验 8 年</p>
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
          <strong>前端基础：</strong>
          精通
          JavaScript（原型链、闭包、事件循环、异步机制等），具备扎实的语言底层理解与问题分析能力
        </li>
        <li>
          <strong>框架体系：</strong>
          精通 Vue2/3 及生态（Pinia / Vue Router），理解响应式原理、Diff 算法及组件化设计思想；理解
          React 等主流开源框架的设计逻辑（虚拟 DOM、Fiber 调度、Diff 策略），能够快速上手并参与跨框架技术方案设计
        </li>
        <li>
          <strong>TypeScript：</strong>
          熟练使用泛型与类型设计，提升复杂业务场景下代码可维护性与可扩展性
        </li>
        <li>
          <strong>Web 安全：</strong>
          熟悉 HTTP/HTTPS 等网络协议及常见加密方式（AES/RSA/摘要算法），了解 XSS、CSRF、SQL
          注入等常见 Web 攻击形式及防控方法，具备生产环境传输加密与鉴权安全的落地经验
        </li>
        <li>
          <strong>工程化能力：</strong>
          熟悉 Webpack / Vite 构建原理，具备前端性能优化经验（LCP/FCP 优化、资源分包、缓存策略等）
        </li>
        <li>
          <strong>架构设计：</strong>
          具备低代码后台管理平台、组件化体系及微前端（qiankun）架构设计与落地经验，熟悉复杂配置类后台（页面渲染引擎、组件配置中心）的设计与实现
        </li>
        <li>
          <strong>复杂交互与数据处理：</strong>
          具备复杂数据建模与高频交互处理经验，能够优化大规模数据渲染与用户体验
        </li>
        <li>
          <strong>客户端通信与启动器：</strong>
          具备 Web 端与本地客户端（CATIA）通过 WebSocket 通信、拉起启动的落地经验，能够解决启动可靠性、请求丢失、数据一致性等稳定性问题
        </li>
        <li>
          <strong>支付与稳定性保障：</strong>
          具备支付/下单等核心链路稳定性问题的排查与解决经验（Token 过期无感续期、失败请求自动重放），保障关键业务链路连续可用
        </li>
        <li>
          <strong>全链路理解：</strong>
          理解后端工作逻辑与前后端协作流程，具备 Node.js 开发能力及 pnpm Monorepo 工程实践经验
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
          熟练使用 Cursor、Claude、Codex 等 AI
          编程工具辅助需求分析、架构设计、代码实现与问题定位；具备 Prompt Engineering 及 Context
          Engineering 实践经验，能够构建项目级开发规则（Rules）与知识库，辅助完成代码
          Review、性能优化、测试用例生成及技术文档沉淀，实现复杂业务场景下的人机协同开发
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
        <div class="time">2025-04 ~ 2026-03</div>
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
        <div class="time">2025-04 ~ 2026-03</div>
      </div>
      <div class="job-desc">前端负责人</div>
      <p>
        <span class="tag-white">Vue 3</span>
        <span class="tag-white">TypeScript</span>
        <span class="tag-white">Vite</span>
        <span class="tag-white">Pinia</span>
        <span class="tag-white">Element Plus</span>
      </p>

      <div class="project-title">MDM 物流管理平台</div>
      <strong class="resume-label">项目描述</strong>
      <p class="resume-desc">
        从零主导前端架构，覆盖虚拟列表、请求基础设施、内存与配置治理、内部组件库、性能与工程化建设等板块。
      </p>
      <strong class="resume-label">项目亮点</strong>
      <ul>
        <li>
          <strong>虚拟列表与渲染：</strong>
          万级列表快速滚动易白屏、抖动 → 双模式虚拟滚动（固定高直接寻址 / 动态高前缀和 + 二分 +
          ResizeObserver 增量），列表项用
          <code>translateY</code> 走合成层，底部 IO 触发加载 →
          <strong>万级节点滚动约 60fps。</strong>
        </li>
        <li>
          <strong>请求与安全：</strong>
          并发挂载重复打满相同接口 → TTL 内「共享 Promise」去重（幂等 key、LRU
          与定时淘汰）；生产传输安全 → Axios 拦截器统一 AES（POST 整包、GET
          逐字段），编译期开关区分开发/生产，业务无侵入。
        </li>
        <li>
          <strong>内存与配置持久化：</strong>
          Keep-Alive 长期驻留占内存；表格列配置含函数无法落盘 → 防抖汇总待移除路由并替换
          <code>include</code>
          新引用触发真回收；配置拆分数据面/行为面，dot-path 序列化与回填，完整恢复含 formatter
          的列配置。
        </li>
        <li>
          <strong>组件库：</strong>
          组件散落、主题与按需成本高 → pnpm Monorepo（组件/hooks/utils/tokens）、Headless + Design
          Token，Vite library 双格式与按需 resolver，Changesets + CI 发布私有化 npm → tree-shaking
          与换肤成本可控。
        </li>
        <li>
          <strong>性能工程：</strong>
          首屏偏大、劣化不易发现 → 路由粒度 manualChunks、Brotli/Gzip；运行时
          computed、<code>v-memo</code>、异步模块与 prefetch；接口 SWR、图片 WebP + lazy；CWV 采集 +
          Lighthouse CI 回归卡点 →
          <strong>首屏 JS 传输体积约降 60%。</strong>
        </li>
        <li>
          <strong>AI 协作开发：</strong>
          熟练使用 Cursor、Claude、Codex 等 AI
          编程工具辅助需求分析、架构设计、代码实现与问题定位；具备 Prompt Engineering 及 Context
          Engineering 实践经验，能够构建项目级开发规则（Rules）与知识库，辅助完成代码
          Review、性能优化、测试用例生成及技术文档沉淀，实现复杂业务场景下的人机协同开发。
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
      <strong class="resume-label">项目描述</strong>
      <p class="resume-desc">
        中后台大量表单与列表驱动搭建低代码平台，核心是页面渲染引擎（PRE）：依托页面配置渲染
        UI、加载组件、维护数据与交互。
      </p>
      <strong class="resume-label">主要职责</strong>
      <ul>
        <li>通用字典与矩阵类自定义组件（可配置 XY 轴、多类型单元格），支撑复杂配置场景。</li>
        <li>WebSocket 实时推送替代高频轮询，断线重连，降低带宽与接口压力。</li>
        <li>权限模块用浏览器缓存 + 时间戳降鉴权频次，封装权限组件统一判断口径。</li>
        <li>Axios 封装与响应拦截：错误处理、鉴权防抖、token 过期自动续期并回放未完成请求。</li>
        <li>
          客户端多进程窗口做重计算隔离；大数据列表三层 DOM + transform
          模拟滚动，支撑海量行展示与编辑。
        </li>
      </ul>
      <strong class="resume-label">项目亮点</strong>
      <ul>
        <li>
          <strong>组件与搭建：</strong>
          控件重复、页面拼装成本高 → 工厂/建造者/单例与配置中心化，批量产出基础件并组装复合布局 →
          低代码场景交付效率明显提升。
        </li>
        <li>
          <strong>首屏体验：</strong>
          缓存与资源策略不足导致 LCP 很差 → 数据缓存与加载/渲染优化 →
          <strong>LCP 约由 56s 降至 5s。</strong>
        </li>
      </ul>

      <div class="project-title">CATIA 客户端启动器与数据互通</div>
      <strong class="resume-label">项目描述</strong>
      <p class="resume-desc">
        基于 WebSocket 打通 Web 端与本地 CATIA 客户端：Web 端一键拉起客户端并传参，上传零件数据，接收客户端加工后的数据并同步回服务器。
      </p>
      <strong class="resume-label">项目亮点</strong>
      <ul>
        <li>
          <strong>启动可靠性：</strong>
          客户端启动偶发失败但 Web 端误判成功 → 增加进程检测、心跳检测与超时重试的启动状态检测机制 →
          启动成功判定更准确，误判率下降。
        </li>
        <li>
          <strong>通信可靠性：</strong>
          Web 与客户端交互易丢请求 → 每次操作生成唯一任务 ID，通过状态轮询/WebSocket 推送关联结果 →
          避免请求丢失，交互结果可追溯。
        </li>
        <li>
          <strong>数据一致性：</strong>
          本地模型与 Web 端展示数据偶发不一致 → 引入数据版本校验与失败恢复机制 →
          保证 Web 端数据与 CATIA 本地模型状态一致。
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
      <strong class="resume-label">项目描述</strong>
      <p class="resume-desc">
        车企产品全生命周期相关能力域，参与需求到上线的全流程协作与前端工程化、性能及稳定性建设。
      </p>
      <strong class="resume-label">主要职责</strong>
      <ul>
        <li>需求评审、技术方案与反讲、测试用例共建与评审，保持需求透明、节奏可控。</li>
        <li>渐进式重构 + 小流量灰度，平滑迁移至新前端架构。</li>
        <li>飞书与认证中心对接，实现多域名环境下的单点登录与会话打通。</li>
        <li>制定代码规范与 CR 看板，结合监控、告警与 oncall，推动问题闭环与复盘。</li>
      </ul>
      <strong class="resume-label">项目亮点</strong>
      <ul>
        <li>
          <strong>工程与首屏：</strong>
          包体偏大、Prefetch 不合理拖慢首屏 → 基于监控定策略，自定义插件治理 Prefetch →
          <strong>包体积约降 30%～50%，打包约 20s 内，FCP、LCP 约提升 80% 以上。</strong>
        </li>
        <li>
          <strong>大数据树形数据：</strong>
          反复拼装导致耗时高 → Map + 单次循环建树 O(n) → 复杂 BOM/配置树场景组装与交互更顺。
        </li>
        <li>
          <strong>研发效能与质量：</strong>
          RF devTools + 页面结构化日志 →
          <strong>典型线上问题定位由约 2h 缩至约 20min</strong>；组件/页面/BFF 单测与 GitLab 覆盖率
          CI 卡点、CR 强卡点，质量可度量。
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
      <strong class="resume-label">主要职责</strong>
      <ul>
        <li>多机型移动端适配与体验问题收敛。</li>
        <li>Token 过期无感刷新：拦截层自动重登并重放失败请求，保障下单与支付链路连续。</li>
        <li>Canvas 实现页面水印；抓拍图作底图叠加自定义边框，满足运营与营销素材需求。</li>
      </ul>
      <strong class="resume-label">项目亮点</strong>
      <ul>
        <li>
          <strong>埋点体系：</strong>
          高频埋点打爆网络 → 有感知埋点接入统一 SDK，本地聚合、延时批量上报，离页flush →
          请求次数下降，报表仍完整。
        </li>
        <li>A/B 分流与实验对比，持续迭代转化；多渠道（微信等）整合扩大触达。</li>
        <li>
          <strong>Service Worker：</strong>
          作轻量 API 网关，统一鉴权、格式化响应，前端业务层更薄、逻辑更一致。
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

.edge-home {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 14px;
  z-index: 10000;
  overflow: visible;
  transition: width 0.18s ease;
  &:hover {
    width: 96px;
  }
}
.edge-home__btn {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translate(calc(-100% - 6px), -50%);
  padding: 10px 14px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  background: #37b24d;
  border-radius: 0 10px 10px 0;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.12);
  opacity: 0;
  pointer-events: none;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}
.edge-home:hover .edge-home__btn {
  transform: translate(0, -50%);
  opacity: 1;
  pointer-events: auto;
  visibility: visible;
}
.edge-home:not(:hover) .edge-home__btn {
  visibility: hidden;
}
.edge-home__btn:hover {
  background: #2f9e44;
}

@media print {
  .edge-home {
    display: none !important;
  }
}

.resume-back {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 12px 40px 0;
  text-align: right;
  font-size: 0.9rem;
  a {
    color: #868e96;
    text-decoration: none;
  }
  a:hover {
    color: #37b24d;
  }
}
@media (max-width: 1040px) {
  .resume-back {
    padding: 12px 20px 0;
  }
}
</style>
