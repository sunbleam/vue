export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    GetHomeIndex () {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/home/index').then(res => {
          resolve(res)
        })
      })
    },
    GetProductList ({store}, {page, pageSize, catId}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/product/list', {
          params: {
            page,
            page_size: pageSize,
            cat_id: catId
          }
        }).then(res => {
          resolve(res)
        })
      })
    },
    GetProductView ({store}, {id}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/product/view', {
          params: {
            product_id: id
          }
        }).then(res => {
          resolve(res)
        })
      })
    },
    GetArticleList () {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/article/list').then(res => {
          resolve(res)
        })
      })
    },
    GetClauseList ({store}, {productId}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/product/clause-list', {
          params: {
            product_id: productId
          }
        }).then(res => {
          resolve(res)
        })
      })
    },
    GetTrialSubmit ({store}, {product_id, genes}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.post('/api/trial/submit', {
          product_id,
          genes
        }).then(res => {
          resolve(res)
        })
      })
    },
    GetInsuredJob ({store}, {product_id}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/insured/job', {
          params: {
            product_id
          }
        }).then(res => {
          resolve(res)
        })
      })
    },
    GetHealthState ({store}, {product_id, genes}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.post('/api/health-state/view', {
          product_id,
          genes
        }).then(res => {
          resolve(res)
        })
      })
    },
    GetInsureAttr ({store}, {product_id}) {
      return new Promise((resolve, reject) => {
        this._vm.$http.get('/api/insure/attr', {
          params: {
            product_id
          }
        }).then(res => {
          resolve(res)
        })
      })
    },
    PostHealthSubmit ({store}, data) {
      return new Promise((resolve, reject) => {
        this._vm.$http.post('/api/health-state/submit', data).then(res => {
          resolve(res)
        })
      })
    }
  }
}
