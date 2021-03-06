import MainContainer from '$containers/Main/MainContainer'

const loadRoute = (callback) => (module) => callback(null, module.default)
const errorLoading = () => {
  // Send Error Logs, pass error from parmas to use it
}

const routes = () => {
  const rootRoute = {
    component   : MainContainer,
    childRoutes : [
      {
        path : '/',
        getComponent(location, callback) {
          System.import('javascripts/containers/List/ListContainer')
            .then(loadRoute(callback))
            .catch(errorLoading)
        }
      },
      {
        path : 'products/:id',
        getComponent(location, callback) {
          System.import('javascripts/containers/Details/DetailsContainer')
            .then(loadRoute(callback))
            .catch(errorLoading)
        }
      },
      {
        path : 'cart',
        getComponent(location, callback) {
          System.import('javascripts/containers/Cart/CartContainer')
            .then(loadRoute(callback))
            .catch(errorLoading)
        }
      }
    ]
  }

  return rootRoute
}

export default routes
