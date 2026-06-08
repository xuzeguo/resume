/** 面试记录索引（按公司分类） */
export interface InterviewItem {
  id: string
  company: string
  title: string
  date: string
}

export const interviewsByCompany: Record<string, InterviewItem[]> = {
  字节: [
    {
      id: 'bytedance-r1',
      company: '字节',
      title: '一面 · 面试记录分析与建议',
      date: '2026-04-08'
    }
  ]
}
