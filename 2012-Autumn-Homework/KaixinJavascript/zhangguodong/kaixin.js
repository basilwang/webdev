window.addEvent =function(element,event,fn){  
  if(element.addEventListener)
  {
	  element.addEventListener(event,fn,false);
	  
  }
  else if(element.attachEvent){
	  //第一个参数是onclick”,”onload”等等，第二个参数是具体的事件函数
     element.attachEvent("on"+event, function(){ fn.call(element) });
     
   }
}
 //isinfo表示文本框中的内容是否错误,即：显示时是否带叹号图片
function tip(title,isInfo,id)  
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
     if(isInfo===false)
	 {
      tipDomObject.innerHTML="<img src='images/error.gif' style='margin-top:-6px;'/><span>"  + title + "</span>";
	  //当文本框中的内容错误时修改tip的背景色和文字颜色
	 tipDomObject.className="tipFormatFalse";
	 }
	 else
	 {
		  //该对象的css为tipFormat
	  tipDomObject.className="tipFormatTrue";    
	  tipDomObject.innerHTML="<span>"+title+"</span>";
	 }
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
	 //取得body对象
	var bd=document.getElementsByTagName('body')[0];  
	//特别注意冒泡执行，先执行那个小的div的click事件，然后再执行body的onclick
	window.addEvent(bd,'click',autoemailhide);   
	var e=document.getElementById("email");
	 //给email绑定一个事件
	window.addEvent(e,'blur',blurFn); 
	window.addEvent(e,'focus',focusFn);
	window.addEvent(e,'keypress',autoemailshow);
	 //输入一个字符时，触发writeemail
	window.addEvent(e,'keyup',writeEmail);
	for(i=1;i<11;i++)
	{
		  //给所有的小的邮箱提示都绑定事件
		var mail=document.getElementById("mail"+i);       
		window.addEvent(mail,'mouseover',mailmouseover);
	    window.addEvent(mail,'mouseout',mailmouseout);
	    window.addEvent(mail,'click',writeOnText);
	}
	var n=document.getElementById("name");
	window.addEvent(n,'blur',blurFn);
	window.addEvent(n,'focus',focusFn);
	var p=document.getElementById("password");
	window.addEvent(p,'blur',blurFn);
	window.addEvent(p,'focus',focusFn);
	//给选择城市绑定事件
	var citytext=document.getElementById("city");
	window.addEvent(citytext,'click',showcity);
	var closebutton=document.getElementById("closecity");
	window.addEvent(closebutton,'click',hidecity);
    //给所有的城市绑定事件
	for(j=1;j<36;j++)
	{
		var selectcity=document.getElementById("city"+j);
	    window.addEvent(selectcity,'click',writeOnCity);
	}
	//给标题栏中的导航栏绑定事件
	var headdirdiv=document.getElementById("directiondiv");
	window.addEvent(headdirdiv,'mouseover',dirshow);
	window.addEvent(headdirdiv,'mouseout',dirhide);
	//给下边的大的导航栏绑定事件防止导航栏消失
	var direction=document.getElementById("direction");
	window.addEvent(direction,'mouseover',dirshow);
	window.addEvent(direction,'mouseout',dirhide);
	for(i=1;i<10;i++)
	{
	var littleDirLeft=document.getElementById("dleft"+i);
	window.addEvent(littleDirLeft,'mouseover',alterRed);
	window.addEvent(littleDirLeft,'mouseout',alterBackColor);
	var littleDirRight=document.getElementById("dright"+i);
	window.addEvent(littleDirRight,'mouseover',alterRed);
	window.addEvent(littleDirRight,'mouseout',alterBackColor);
	}
 }
 function alterRed()
 {
	 this.style.backgroundColor="rgb(235, 75, 85)";
 }
 function alterBackColor()
 {
	 this.style.backgroundColor="rgb(250,250,250)";
 }
 function dirshow()
 {
	 var dir=document.getElementById("direction");
	 var headdiv=document.getElementById("directiondiv")
	 headdiv.style.backgroundColor="#F04E58";
	 dir.style.display="block";
 }
 function dirhide()
 {
	 var dir=document.getElementById("direction");
	 var headdiv=document.getElementById("directiondiv")
	 headdiv.style.backgroundColor="rgb(228, 64, 73)";
	 dir.style.display="none";
 }
 function writeOnCity()
 {
	 var citytext=document.getElementById("city");
	 citytext.value=this.firstChild.nodeValue;
	 hidecity();
	 var image=document.getElementById("rightimgcity");
	 image.style.display="inline";
 }
 function showcity()
 {
	 var citydiv=document.getElementById("selctcity");
	 citydiv.style.display="block";
 }
 function hidecity()
 {
	 var citydiv=document.getElementById("selctcity");
	 citydiv.style.display="none";
 }
 function autoemailshow()
 {
	
	var ae=document.getElementById("autoemail");
	ae.style.display='block';
 }
 function autoemailhide()
 { 
	 var ae=document.getElementById("autoemail");
	 ae.style.display='none';
 }
 function writeOnText()
 {
	    //特别注意！！当点击时，文本框会失去焦点，下面的autoemail自动隐藏
     var emailtext=document.getElementById("email");
     emailtext.value=this.innerHTML;
	 var emailtip=document.getElementById("emailtip");
	  //点击补全邮箱后，需要把文本错误的提示框隐藏！！
	 emailtip.style.display="none";     
 }
 function mailmouseover()
 {
   // var mail=document.getElementById(m.id);
    this.style.backgroundColor="#f4f4f4";
 }
 function mailmouseout()
 {
    // var mail=document.getElementById("mail1");
	 this.style.backgroundColor="#FFFFFF";
 }

 function writeEmail()
 {
	 var emailtextvalue=document.getElementById("email").value;
	 document.getElementById("mail1").innerHTML=emailtextvalue+"@qq.com";
	 document.getElementById("mail2").innerHTML=emailtextvalue+"@126.com";
	 document.getElementById("mail3").innerHTML=emailtextvalue+"@163.com";
	 document.getElementById("mail4").innerHTML=emailtextvalue+"@sina.com";
	 document.getElementById("mail5").innerHTML=emailtextvalue+"@sina.cn";
	 document.getElementById("mail6").innerHTML=emailtextvalue+"@hotmail.com";
	 document.getElementById("mail7").innerHTML=emailtextvalue+"@gmail.com";
	 document.getElementById("mail8").innerHTML=emailtextvalue+"@sohu.cn";
	 document.getElementById("mail9").innerHTML=emailtextvalue+"@yahoo.cn";
	 document.getElementById("mail10").innerHTML=emailtextvalue+"@139.cn";
 }
 function blurFn()
 {
	var title;
	switch(this.id)
	{
	  case "email":
		   title="请填写有效电子邮箱";
		   break;
	  case "password":
		   title="密码应该由6-20个字母、数字或特殊字符组成";
		   break;
	  case "name":
		   title="请填写你的真实中文姓名";
		   break;
	}
	var t=new tip(title,false,this.id+"tip");
	//先关闭原来的info tip
	t.hideTip();
	//如果有错误的时候开启 error tip
	if(checkFormat(this))
	{
	hiderightimg(this.id);
	t.showTip();
	}
	else
	showrightimg(this.id);
	//当文本框中的内容为空时，也不显示绿色的对号！
	if(this.value.toString().length==0)
	hiderightimg(this.id);
 }
 function showrightimg(id)
 {
	 var img
	 switch(id)
	 {
		 case "email":
			 img=document.getElementById("rightimgemail");
			 break;
		 case "password":
		     img=document.getElementById("rightimgpassword");
			 break;
		 case "name":
		     img=document.getElementById("rightimgname");
		     break;
	 }
	 img.style.display="inline";
 }
 function hiderightimg(id)
 {
	// alert("在执行");
	 var img
	 switch(id)
	 {
		 case "email":
			 img=document.getElementById("rightimgemail");
			 break;
		 case "password":
		     img=document.getElementById("rightimgpassword");
			 break;
		 case "name":
		     img=document.getElementById("rightimgname");
		     break;
	 }
	 img.style.display="none";
 }
 function checkFormat(o)
 {
	// o 是要检查格式的dom对象
//	alert(o.id);
    var check=o.value.toString();
	switch(o.id)
	{
		case "email":
		{
           if(check.indexOf("@qq.com")>0)
	           return false;
	      else if(check.indexOf("@126.com")>0)
	           return false;
	      else if(check.indexOf("@163.com")>0)
	           return false;
	      else if(check.indexOf("@sina.com")>0)
	           return false;
	      else if(check.indexOf("@hotmail.com")>0)
	           return false;
	      else if(check.indexOf("@gmail.com")>0)
	           return false;
	      else if(check.indexOf("@sohu.cn")>0)
	           return false;
	      else if(check.indexOf("@yahoo.cn")>0)
	           return false;
	      else if(check.indexOf("@139.cn")>0)
	           return false;
			     //当文本框为空时也不显示tip
		  else if(check.length==0)     
		       return false;
	      else
	           return true;
		}
		break;
		case "password":
		{
			if(check.length<6&&check.length!=0)
			return true;
			else
			return false;
		}
		break;
		case "name":
		{   //用正则表达式判断文本框中是否是中文
			if(/.*[u4e00-u9fa5]+.*$/.test(o.value)) 
			return true;
			else
			return false;
		}
		break;
	}
 }
 function focusFn()
 {
	var title;
	switch(this.id)
	{
	  case "email":
		   title="请填写有效电子邮箱，推荐使用<span style='color:rgb(211, 37, 3);'>QQ邮箱</span>";
		   break;
	  case "password":
		   title="由6-20个字母、数字或特殊字符组成";
		   break;
	  case "name":
		   title="请填写你的真实中文姓名";
		   break;
	}
	var t=new tip(title,true,this.id+"tip");
	t.showTip();
 }