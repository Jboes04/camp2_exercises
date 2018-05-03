const path = require('path');

function getHtlm(request, result) {
   result.sendFile(path.join(__dirname, '../index.html'));
}

module.exports = getHtlm;
