window.addEvent =function(element,event,fn){   //fn表示函数名  
  if(element.addEventListener)
  {
	  element.addEventListener(event,fn,false);
	  
  }
  else if(element.attachEvent){
     element.attachEvent("on"+event, function(){ fn.call(element) });//第一个参数是onclick”,”onload”等等，第二个参数是具体的事件函数
     
   }
}
function tip(title,isInfo,id)   //isinfo表示文本框中的内容是否错误,即：显示时是否带叹号图片
{
  this.title=title;
  this.isInfo=isInfo;
  this.tipDom=document.getElementById(id);
}

//匿名函数function定义并且立即执行，执行后返回给tip函数连个方法showtip()和hidetip()
tip.prototype=(function()
{
	//生成合适的Tip的内部函数
    function genTip(tipDomObject,title,isInfo)
	{
     tipDomObject.className="tipFormat";     //该对象的css为tipFormat
     if(isInfo===false)
      tipDomObject.innerHTML="<img src='error.gif' /><span>"  + title + "</span>";
	 else
	  tipDomObject.innerHTML="<span>"+title+"</span>";
	}
	//王华杰 不能在此处应用this
	//alert(this.title+" in closure");
	return {
        showTip:function()                               //闭包？？
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
	window.addEvent(e,'blur',blurFn);  //给email绑定一个事件
	window.addEvent(e,'focus',focusFn);
	/* 暂时注销掉
	var n=document.getElementById("name");
	window.addEvent(n,'blur',blurFn);
	window.addEvent(n,'focus',focusFn);
	var p=document.getElementById("password");
	window.addEvent(p,'blur',blurFn);
	window.addEvent(p,'focus',focusFn);
	*/
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