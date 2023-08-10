/**
 * src/components/[ComponentName]/index.js 파일들을 ComponentName으로 import 할 수 있게 해 준다.
 * ex) import { Button } from 'components';
 */
const req = require.context(".", true, /\.\/[^/]+\/[^/]+\/index\.js$/);

req.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, "$1");
  module.exports[componentName] = req(key).default;
});
