import axios from 'axios';

let util = {};

const ajaxUrl = process.env.NODE_ENV === 'development'
  // 测试环境api接口
  ? 'http://localhost:6789/api/v1'
  // 线上环境api接口
  : 'http://192.168.31.226.com/api/v1';


util.api = ajaxUrl;
util.oauthUrl = ajaxUrl;

export default util;
