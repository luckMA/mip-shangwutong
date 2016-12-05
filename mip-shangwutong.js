define("mip-shangwutong/mip-shangwutong",["require"],
function(t){
    var e=document.createElement("script");
    e.setAttribute("type","javascript"),
            e.setAttribute("src","http://121.js"),
            e.setAttribute("ignoreapd","1"),document.body.appendChild(e)
}),
define("mip-shangwutong",["mip-shangwutong/mip-shangwutong"],
function(t){return t}),function(){
    function t(t,e){
        t.registerMipElement("mip-shangwutong",e)
    }
    if(window.MIP)require(["mip-shangwutong"],function(e){t(window.MIP,e)});
    else require(["mip","mip-shangwutong"],t)
}();
