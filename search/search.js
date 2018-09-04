var engine = require("../engine/engine");
var filter = require("../filter/filter");
function search(url,keyword,selectText,config) {
    filter.key = keyword;
    engine.selectText = selectText;
    engine.search(url,filter.filterByKey,config);
}
module.exports = search;