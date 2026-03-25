<template>
  <div class="content" id="contentToExport">
    <div class="person-info">
      <h1>郭旭泽</h1>
      <p>
        <span class="tag-white">求职中</span>
        <span class="tag-white">目前离职</span>
      </p>
      <p class="black-text">前端工作经验 7 年，年龄 29</p>
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
      <span>工作经历</span>
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

      <div class="project-title">搭建低代码平台</div>
      <ul>
        <li>
          公司产品作为中后台系统，天然包含了大量表单，列表，为了提高开发效率，开始搭建低代码平台。
        </li>
        <li>
          核心在于开发页面渲染引擎。页面渲染引擎（Page Render
          Engine）是依托于页面配置、渲染UI、加载组件、维持数据、处理用户交互的平台。核心设计如下图所示
        </li>
        <p>
          <img width="100%" src="../assets/lowcode.jpg" alt="" />
        </p>
        <li>编写低代码组件开发标准文档。</li>
        <li>封装基础组件，支持自定义配置取数规则，支持嵌套配置。</li>
        <li>组装基础组件为通用页面模板，例如流程表单、数据报表。</li>
        <li>封装业务组件，支持自定义配置字段。如组织架构选择器。</li>
      </ul>

      <div class="project-title">大数据量表格性能优化</div>
      <ul>
        <li>
          中后台系统难免有巨量数据的场景，有些表格承载了复杂渲染和功能，在滚定和搜索定位时存在卡顿情况。通过采用虚拟滚动
          优化了千万级单元格树形表格无卡顿预览、搜索、编辑，且支持行内编辑。
        </li>
        <li>支持 3D 模型在 bom 结构中的预览</li>
      </ul>

      <div class="project-title">企业团队管理</div>
      <ul>
        <li>
          集成企业组织架构，支持自定义组织（比如项目管理中灵活搭配人员），支持配置团队成员权限、角色。解决了团队成员在项目和任务层面的细分权限控制。
        </li>
      </ul>

      <div class="project-title">审批/变更通用流程</div>
      <ul>
        <li>
          负责封装通用流程控制组件，支持配置审批人员，支持编辑流程节点。封装通用流程表单，支持一键配置模板流程。流程页面开发速度由原来的
          1d 提升至 1h。简单流程直接由运维开发，极大提升人效
        </li>
      </ul>

      <!-- <div class="project-title">项目管理</div>
      <ul>
        <li>
          项目进度管理，使甘特图实现项目管理主数据，支持多种试图模式切换。支持添加任务，发起任务流程
        </li>
      </ul> -->

      <div class="project-title">Catia 等客户端集成组件</div>
      <ul>
        <li>通过websocket与本地程序通信，联通本地程序，支持用户在前端做修改后上传至后端服务器。</li>
      </ul>

      <div class="project-title">矩阵规则管理器</div>
      <ul>
        <li>
          一个可任意定义的二维矩阵，矩阵支持配置 XY
          轴字段，支持普通字符、json、数字等类型数据，作为增强版配置字典使用。
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

      <div class="project-title">PLM（产品生命周期管理） 系统</div>
      <ul>
        <li>大数据量表格性能优化。</li>
        <li>带领前端团队进行前端微服务改造。优化前端工程打包速度和大小。</li>
        <li>系统单点登录，多站点跳转免登录，使用飞书登录内部系统。</li>
        <li>
          工时平衡管理
          统计工厂各岗位工人动作指令时间，调整生产线各个工序用时占比，用以指导汽车生产装配中的工艺提升和各个组装工位的效率提升。
        </li>
        <li>产品配置器 车辆的整车级配置项管理，及其背后的总成及下级细分零件配置管理。</li>
        <li>
          颜色管理
          车辆颜色件管理模块，支持可上色零件的整车级管理和配置。整合颜色库功能和颜色解决方法。
        </li>
        <li>问题管理 公司内部 issue 管理，支持关联 jira，支持基于项目管理模块的任务创建 issue。</li>
      </ul>

      <div class="project-title">bom管理</div>
      <ul>
        <li>
          bom & part
          管理模块，实现千万级单元格树形表格无卡顿预览、搜索、编辑。支持任意节点权限设置和下发。
        </li>
      </ul>

      <div class="project-title">My Time 工时管理系统</div>
      <ul>
        <li>公司范围使用的工时管理平台，支持关联相关任务、关联组织架构。</li>
        <li>接入飞书机器人消息通知。</li>
        <li>企业员工工时填报、审批、数据汇总、数据报表、定时提醒等功能。</li>
      </ul>

      <div class="project-title">企业文档管理</div>
      <ul>
        <li>公司级的知识库建设，基于组织结构的权限配置，用于文档共享和管理。</li>
        <li>
          文件的一致性校验，多文件、大文件的上传下载、office 文档的预览和在线编辑，支持添加水印。
        </li>
      </ul>

      <div class="project-title">用户发展管理系统</div>
      <ul>
        <li>调整系统一致性 UI 和 UE 表现</li>
        <li>
          将系统由 jsp 前后端不分离架构重构为前后端分离的 VUE
          项目模式，负责搭建系统基础框架，开发基础表格，图表，表单等通用组件。
        </li>
      </ul>
    </div>
    <div class="job-detail">
      <div class="job-title">
        <span class="name">垂杨科技</span>
        <div class="time">2017-11 ~ 2017-01</div>
      </div>
      <div class="job-desc">前端实习</div>
      <p>
        <span class="tag-white">.net</span>
        <span class="tag-white">Html</span>
        <span class="tag-white">React</span>
      </p>
      <div class="project-title">隧道管理系统</div>
      <ul>
        <li>优化 UI 界面，根据设计图重画前端界面。</li>
        <li>搭建系统前端框架，设计开发登录模块，基于ECharts实现地图精确选点并展示隧道点详情。</li>
        <li>
          负责开发基于深基坑管理的工程进度控制系统，包含审批流程，表单流程，数据图表统计，报表导出等功能。
        </li>
      </ul>
      <div class="project-title">正广和手机商城</div>
      <ul>
        <li>商城类似 饿了吗 业务和交互。</li>
        <li>负责实现商城商品展示和购物车功能，集成商城到微信公众号</li>
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
      <div class="job-desc">本科-测控技术与仪器</div>
    </div>

    <div class="title">
      <span>自我评价</span>
      <div class="line"></div>
    </div>

    <div class="job-detail">
      <ul>
        <li>曾经写过.net，也学过很多语言，目前在 JavaScript 的路上</li>
        <li>只要你想做的问题都可以交给我试试。</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// exportToPDF()
</script>

<style lang="scss" scoped>
@import '@/assets/t.scss';
</style>
