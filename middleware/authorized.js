export default function (context) {
  const { store, redirect, route, req } = context
  /**
   * req, 服务端渲染时，判断headers有无cookie
   * 客户端渲染时， 判断store有无user
   */
  if (route.name === 'index') return

  if ((req && !req.headers.cookie) || (!['login', 'register'].includes(route.name) && !store.state.user)) {
    return redirect('/login')
  }
}