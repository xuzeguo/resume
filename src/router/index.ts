import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'entry',
      component: () => import('../views/EntryView.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/interview',
      component: () => import('../views/interview/InterviewLayout.vue'),
      redirect: '/interview/records',
      children: [
        {
          path: 'records',
          name: 'interview-records',
          component: () => import('../views/interview/InterviewRecordsView.vue')
        },
        {
          path: 'records/:id',
          name: 'interview-record-detail',
          component: () => import('../views/interview/InterviewRecordDetailView.vue')
        },
        {
          path: 'summary',
          name: 'interview-summary',
          component: () => import('../views/interview/InterviewSummaryView.vue')
        },
        {
          path: 'wrongbook',
          name: 'interview-wrongbook',
          component: () => import('../views/interview/InterviewWrongbookView.vue')
        }
      ]
    }
  ]
})

export default router
