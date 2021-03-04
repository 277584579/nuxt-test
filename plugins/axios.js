export default function ({ $axios,redirect  }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })

  // Set baseURL to something different
  // api.setBaseURL('http://retailcloud-website-dev.rc.oneretail.cn/')
  api.setHeader('Content-Type', 'application/json', [
    'post'
  ])
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 404) {
      redirect('/404')
    }
  })
  // Inject to context as $api
  inject('api', api)
}