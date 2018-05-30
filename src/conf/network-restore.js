const path = require('path')

const BASE_DIR = path.join(__dirname, '../..')
const BUILD_DIR = path.join(BASE_DIR, 'build/contracts')
const NETWORKS_FILE_PATH = path.join(BASE_DIR, 'networks.json')
const BUILD_DIR_UTIL_CONTRACTS =
  path.join(BASE_DIR, 'node_modules/@gnosis.pm/util-contracts/build/contracts')

module.exports = {
  buildDir: BUILD_DIR,
  buildDirDependencies: [
    BUILD_DIR_UTIL_CONTRACTS
  ],
  networksFile: NETWORKS_FILE_PATH
  // extracttNetworkFilter: ({ name }) => (name === 'MyContract')
}
