import path               from 'path'
import webpack            from 'webpack'
import HtmlWebpackPlugin  from 'html-webpack-plugin'
import webpackLoadPlugins from 'webpack-load-plugins'
import ExtractTextPlugin  from 'extract-text-webpack-plugin'

const LAUNCH_COMMAND = process.env.npm_lifecycle_event
const isProd         = LAUNCH_COMMAND === 'production'

const PATHS = {
  api        : path.join(__dirname, 'app/javascripts/api'),
  app        : path.join(__dirname, 'app'),
  build      : path.join(__dirname, 'build'),
  config     : path.join(__dirname, 'app/javascripts/config'),
  containers : path.join(__dirname, 'app/javascripts/containers'),
  components : path.join(__dirname, 'app/javascripts/components'),
  redux      : path.join(__dirname, 'app/javascripts/redux/modules'),
  store      : path.join(__dirname, 'app/javascripts/store'),
  utils      : path.join(__dirname, 'app/javascripts/utils')
}

// Plugins Config Starts
const prodPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

const commonsVendorChunk      = new webpack.optimize.CommonsChunkPlugin({
  name      : 'vendor',
  minChunks : Infinity,
  filename  : 'vendor.commons.js'
})

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template : PATHS.app + '/index.html',
  filename : 'index.html',
  inject   : 'body'
})

const extractTextPluginConfig  = new ExtractTextPlugin({
  allChunks : true,
  filename  : "style.css"
})
// Plugins Config Ends


process.env.BABEL_ENV = LAUNCH_COMMAND
process.env.LINT_ENV  = LAUNCH_COMMAND
process.env.isProd    = isProd

const base = {
  entry : {
    bundle : PATHS.app,
    vendor : ['axios', 'react', 'react-dom', 'react-redux', 'react-router', 'redux', 'redux-thunk']
  },
  output: {
    path     : PATHS.build,
    filename : '[name].js'
  },
  module: {
    loaders : [
      {
        enforce : 'pre',
        test    : /\.jsx$|\.js$/,
        loader  : 'eslint-loader',
        include : PATHS.app,
        exclude : /bundle\.js/
      },
      {
        test    : /\.jsx$|\.js$/,
        exclude : /node_modules/,
        loader  : 'babel-loader'
      },
      {
        test : /\.json$/,
        loader: 'json-loader'
      },
      {
        test   : /\.(scss|css)$/,
        loader : ExtractTextPlugin.extract('css-loader?localIdentName=[name]__[local]___[hash : base64 : 5]&modules&importLoaders=1!postcss-loader!sass-loader?outputStyle=expanded')
      },
    ]
  },
  // stats :
  /*postcss: function () {
    return [autoprefixer, precss]
  },*/
  resolve : {
    modules.   : [path.resolve('./app'), 'node_modules'],
    extensions : ['.js', '.jsx'],
    alias      : {
      '$api'        : PATHS.api,
      '$components' : PATHS.components,
      '$containers' : PATHS.containers,
      '$config'     : PATHS.config,
      '$redux'      : PATHS.redux,
      '$store'      : PATHS.store,
      '$utils'      : PATHS.utils
    }
  },
  target : 'web'
}

const commonPlugins = [HTMLWebpackPluginConfig, commonsVendorChunk, extractTextPluginConfig]

const prodConf = {
  entry : {
    bundle : PATHS.app,
    vendor : ['axios', 'react', 'react-dom', 'react-redux', 'react-router', 'redux', 'redux-thunk']
  },
  devtool : 'false',
  plugins : commonPlugins.concat([prodPlugin])
}

const devConf = {
  devtool   : 'cheap-module-inline-source-map',
  devServer : {
    contentBase : PATHS.build,
    hot         : true,
    inline      : true
  },
  plugins: commonPlugins.concat([new webpack.HotModuleReplacementPlugin()])
}

export default Object.assign({}, base, isProd ? prodConf : devConf)
