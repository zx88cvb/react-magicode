export default class ArticlePage {
  constructor ({pageNum, pageSize, blogStatus, categoryId, tagId}) {
    this.pageNum = pageNum
    this.pageSize = pageSize
    this.blogStatus = blogStatus
    this.categoryId = categoryId
    this.tagId = tagId
  }
}

export function createArticlePage () {
  return new ArticlePage({
    pageNum: 1,
    pageSize: 10,
    blogStatus: 1,
    categoryId: 0,
    tagId: 0
  })
}
