var filter = {
    key:'',
    filterByKey(obj){
        return obj.filter((item)=>{
            return item.title.indexOf(filter.key)!=-1;
        });
    }
};
module.exports = filter;