window.addEvent =function(o,s,fn){
  o.attachEvent?o.attachEvent('on'+s,fn):o.addEventListener(s,fn,false);
  return o;
}
function tip(title,isInfo,id)
{
  this.title=title;
  this.isInfo=isInfo;
  this.tipDom=document.getElementById(id);
}
tip.prototype=(function()
{
    function genTip(tipDomObject,title,isInfo)
	{
     if(isInfo==true)
      tipDomObject.innerHTML="<img /><span>"  + title + "</span>";
	 else
	  tipDomObject.innerHTML="<span>"+title+"</span>";
	}
	//王华杰 不能在此处应用this
	//alert(this.title+" in closure");
	return {
        showTip:function()
		{
			genTip(this.tipDom,this.title,this.isInfo);
            alert(this.tipDom.innerHTML);
		},
		hideTip:function()
		{
            
		}
	}
})();