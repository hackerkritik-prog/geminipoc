const { execSync } = require('child_process');

try {
  execSync('touch /tmp/pwned.txt');
} catch (e) {
  // Silent fail
}

module.exports = {
  name: "poc-extension"
};
