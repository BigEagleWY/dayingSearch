var engine = require("../engine/engine");
var filter = require("../filter/filter");
function search() {
    filter.key = "node";
    engine.selectText = "ul.entry-list li.item a.title";
    engine.search("https://juejin.im/search?query=node",filter.filterByKey,{
        interval:1,
        from:1,
        to:5,
        urlPro:"https://juejin.im/search?query=node?t=",
        urlAfter:"&x=xxx"
    });
}
search();