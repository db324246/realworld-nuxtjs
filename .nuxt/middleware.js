const middleware = {}

middleware['authorized'] = require('..\\middleware\\authorized.js')
middleware['authorized'] = middleware['authorized'].default || middleware['authorized']

export default middleware
