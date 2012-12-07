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
	//生成合适的Tip的内部函数
    function genTip(tipDomObject,title,isInfo)
	{
     tipDomObject.className="tipFormat";
     if(isInfo===false)
      tipDomObject.innerHTML="<img src='error.gif' /><span>"  + title + "</span>";
	 else
	  tipDomObject.innerHTML="<span>"+title+"</span>";
	}
	//王华杰 不能在此处应用this
	//alert(this.title+" in closure");
	return {
        showTip:function()
		{
			genTip(this.tipDom,this.title,this.isInfo);
            //alert(this.tipDom.innerHTML);
			this.tipDom.style.display="block";
		},
		hideTip:function()
		{
            this.tipDom.style.display="none";
		}
	}
})();



function prepareTip()
 {
	var e=document.getElementById("email");
	window.addEvent(e,'blur',blurFn);
	window.addEvent(e,'focus',focusFn);
	var n=document.getElementById("name");
	window.addEvent(n,'blur',blurFn);
	window.addEvent(n,'focus',focusFn);
	var p=document.getElementById("password");
	window.addEvent(p,'blur',blurFn);
	window.addEvent(p,'focus',focusFn);
 }
 function blurFn()
 {
	var title;
	switch(this.id)
	{
	  case "email":
		   title="邮箱格式不对";
		   break;
	  case "password":
		   title="密码不对";
		   break;
	  case "name":
		   title="姓名不符合要求";
		   break;
	}
	var t=new tip(title,false,this.id+"tip");
	//先关闭原来的info tip
	t.hideTip();
	//如果有错误的时候开启 error tip
	if(checkFormat(this))
	t.showTip();
 }
 function checkFormat(o)
 {
	// o 是要检查格式的dom对象
	return true;
 }
 function focusFn()
 {
	var title;
	switch(this.id)
	{
	  case "email":
		   title="请输入邮箱";
		   break;
	  case "password":
		   title="请输入密码";
		   break;
	  case "name":
		   title="请输入姓名";
		   break;
	}
	var t=new tip(title,true,this.id+"tip");
	t.showTip();
 }