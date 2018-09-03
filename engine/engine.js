var superagent = require('superagent');
var charset = require('superagent-charset');
var he = require("he");
charset(superagent);
const cheerio = require('cheerio');
var engine = {
    selectText:'',
    singleSearch(url,filter,profix){
        var items = [];
        superagent.get(url)
            .charset('utf-8')
            .end(function(err, sres) {
                if (err) {
                    console.log('ERR: ' + err);
                    return;
                }
                var $ = cheerio.load(sres.text);
                $(engine.selectText).each(function(idx, element) {
                    var $element = $(element);
                    items.push({
                        title: profix+he.decode($(element).html())
                    });
                });
                items = filter(items);
                console.log(url,items);
            });

    },
    search(url,filter,config){
        if(config){
            var begin = config.from;
            var timer = setInterval(()=>{
                engine.singleSearch(config.urlPro+begin+config.urlAfter,filter,begin+"------");
                if(begin == config.to){
                    clearInterval(timer);
                }
                begin++;
            },config.interval*1000);
        }else{
            engine.singleSearch(url,filter);
        }
    }
};
module.exports = engine;