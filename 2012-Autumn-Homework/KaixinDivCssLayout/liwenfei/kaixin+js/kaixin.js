window.addEvent =function(element,event,fn){
  if(element.addEventListener)
  {
	  element.addEventListener(event,fn,false);
	  
  }
  else if(element.attachEvent){
     element.attachEvent("on"+event, function(){ fn.call(element) });
     
   }
}
function prepareTip()
 {
	var e=document.getElementById("email");
	window.addEvent (e,'input',inputFn);
	window.addEvent(e,'blur',blurFn);
	window.addEvent(e,'focus',focusFn);
	var n=document.getElementById("name");
	window.addEvent(n,'blur',blurFn);
	window.addEvent(n,'focus',focusFn);
	var p=document.getElementById("password");
	window.addEvent(p,'blur',blurFn);
	window.addEvent(p,'focus',focusFn);
	var m1=document.getElementById ("qq");//����������ʾ
	window .addEvent (m1,'click',eclick);
	var m2=document .getElementById ("126");
	window .addEvent (m2,'click',eclick);
	var m3=document .getElementById ("163");
    window .addEvent (m3,'click',eclick);
    var m4=document .getElementById ("sina");
    window .addEvent (m4,'click',eclick);
    var m5=document .getElementById ("sina1");
    window .addEvent (m5,'click',eclick);
    var m6=document .getElementById ("hotmail");
    window .addEvent (m6,'click',eclick);
    var m7=document .getElementById ("gmail");
    window .addEvent (m7,'click',eclick);
    var m8=document .getElementById ("sohu");
    window .addEvent (m8,'click',eclick);
    var m9=document .getElementById ("yahoo");
    window .addEvent (m9,'click',eclick);
    var m10=document .getElementById ("139");
    window .addEvent (m10,'click',eclick);
    var ad=document .getElementById ("adress_text");
    window.addEvent (ad,'click',aclick);
    var a1=document .getElementById ("beijing");
    window .addEvent (a1,'click',hclick);
    var a2=document .getElementById ("shanghai");
    window .addEvent (a2,'click',hclick);
    var a3=document .getElementById ("tianjin");
    window .addEvent (a3,'click',hclick);
      var a4=document .getElementById ("chongqing");
    window .addEvent (a4,'click',hclick);
      var a5=document .getElementById ("hei");
    window .addEvent (a5,'click',hclick);
      var a6=document .getElementById ("ji");
    window .addEvent (a6,'click',hclick);
      var a7=document .getElementById ("liao");
    window .addEvent (a7,'click',hclick);
      var a8=document .getElementById ("lu");
    window .addEvent (a8,'click',hclick);
      var a9=document .getElementById ("jin");
    window .addEvent (a9,'click',hclick);
      var a10=document .getElementById ("shan");
    window .addEvent (a10,'click',hclick);
      var a11=document .getElementById ("hebei");
    window .addEvent (a11,'click',hclick);
      var a12=document .getElementById ("yu");
    window .addEvent (a12,'click',hclick);
      var a13=document .getElementById ("hubei");
    window .addEvent (a13,'click',hclick);
      var a14=document .getElementById ("xiang");
    window .addEvent (a14,'click',hclick);
      var a15=document .getElementById ("qiong");
    window .addEvent (a15,'click',hclick);
      var a16=document .getElementById ("su");
    window .addEvent (a16,'click',hclick);
    var a17=document .getElementById ("jiangxi");
    window .addEvent (a17,'click',hclick);
    var a18=document .getElementById ("guangdong");
    window .addEvent (a18,'click',hclick);
    var a19=document .getElementById ("guangxi");
    window .addEvent (a19,'click',hclick);
    var a20=document .getElementById ("yunnan");
    window .addEvent (a20,'click',hclick);
    var a21=document .getElementById ("guizhou");
    window .addEvent (a21,'click',hclick);
    var a22=document .getElementById ("sichuan");
    window .addEvent (a22,'click',hclick);
    var a23=document .getElementById ("neimenggu");
    window .addEvent (a23,'click',hclick); 
    var guan=document .getElementById ("guanbi");
    window .addEvent (guan,'click',gclick); 
	var sex=document .getElementById("sex");
	window.addEvent(sex,'click',sclick);
	var state=document .getElementById("state");
	window.addEvent(state,'click',sclick);
	var tongyi=document .getElementById("tongyi");
	window.addEvent(tongyi,'click',sclick);
	var d=document.getElementById("select_d");
	window.addEvent(d,'change',schange);
	var daohang=document.getElementById("daohang");
	window.addEvent(daohang,'mouseover',mouseover);
	window.addEvent(daohang,'mouseout',daohangout);
	var navigate=document.getElementById("navigate");
	window.addEvent(navigate,'mouseout',naviout);
    window.addEvent(navigate,'mouseover',mouseover);
	var submit=document.getElementById("submit");
	window.addEvent(submit,'click',subclick);
 }
function tip(title,isInfo,id)
{
  this.title=title;
  this.isInfo=isInfo;
  this.tipDom=document.getElementById(id);
}
tip.prototype=(function()
{
	//���ɺ��ʵ�Tip���ڲ�����
    function genTip(tipDomObject,title,isInfo)
	{
     if(isInfo===false)
     {
      tipDomObject.className="tipFormat_f";
      tipDomObject.innerHTML="<div class='eimg'><img src='../picture/error.gif'/></div><div class='emsg'><span>"  + title + "</span></div>";
      }
	 else
	 {
	  tipDomObject.className="tipFormat_t";
	  tipDomObject.innerHTML="<span>"+title+"</span>";
	  }
	}
	function genTip2(tipDomObject)
	{
	  tipDomObject.className="tipFormat_r";
	  tipDomObject.innerHTML="<img src='../picture/right.gif'/>";
	}
	//������ �����ڴ˴�Ӧ��this
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
    	},
		showTip2:function ()
		{
		   genTip2(this.tipDom);
		   this.tipDom.style.display="block";
		}
	}
})();
 function blurFn()
 {
    var mtype=document .getElementById ("mail_type");
	var title;
	switch(this.id)
	{
	  case "email":
		   title="����д��Ч�ص�������";
		   //mtype.style.display="none";
		   break;
	  case "password":
		   title="����Ӧ��6-20����ĸ�����ֻ������ַ����";
		   break;
	  case "name":
		   title="����д��ʵ��������";
		   break;
	}
	var t=new tip(title,false,this.id+"tip");
	//�ȹر�ԭ����info tip
	if(title=="����д��Ч�ص�������")
	 {
		mtype.style.display="none";
	 }
	if(this.value=="")
	 {
		t.hideTip();
	 }
	else
	 {
	  //����д����ʱ���� error tip
	  if(checkFormat(this))
	  t.showTip2();
	  else 
	  t.showTip();
	 }
 }
 function checkFormat(o)
 { 
    switch(o.id)
	{
	  case "email":
		   return checkEmail(o);
		   break;
	  case "password":
		   return checkPsw(o);
		   break;
	  case "name":
		   return checkName(o);
		   break;
	}
 }
 function checkEmail(o)//��֤����
 {
    if(o.value.indexOf("@qq.com")>0||o.value.indexOf("@126.com")>0||o.value.indexOf("@163.com")>0||o.value.indexOf("@sina.com")>0||o.value.indexOf("@sina.cn")>0||o.value.indexOf("@hotmail.com")>0||o.value.indexOf("@gmail.com")>0||o.value.indexOf("@sohu.cn")>0||o.value.indexOf("@yahoo.cn")>0||o.value.indexOf("@139.cn")>0)
    return true ;
    else 
    return false ;
 }
 function checkPsw(o)//��֤����
 {
	if(o.value.length>5&&o.value.length<21)
	return true ;
    else 
    return false ;
 }
 function checkName(o)//��֤����
 {
    result=o.value.charCodeAt(o.value.length-1)>=10000 ;
    if(result && (o.value.length==3||o.value.length==2))
	return true;
    else
	return false;

 }
 function focusFn()
 {
	var title;
	switch(this.id)
	{
	  case "email":
		   title="����д��Ч�������䣬�Ƽ�ʹ��<a href='www.qq.com'>QQ����</a>";
		   break;
	  case "password":
		   title="��6~20����ĸ�����ֻ������ַ����";
		   break;
	  case "name":
		   title="����д�����ʵ��������";
		   break;
	}
	var t=new tip(title,true,this.id+"tip");
	t.showTip();
 }
 function inputFn()//������ʾ
 {
    var mtype=document .getElementById ("mail_type");
    mtype.style.display="block";
    var m1=document .getElementById ("qq");
    m1.innerHTML=this.value+"@qq.com";
    var m2=document .getElementById ("126");
    m2.innerHTML=this.value+"@126.com";
    var m3=document .getElementById ("163");
    m3.innerHTML=this.value+"@163.com";
    var m4=document .getElementById ("sina");
    m4.innerHTML=this.value+"@sina.com";
    var m5=document .getElementById ("sina1");
    m5.innerHTML=this.value+"@sina.cn";
    var m6=document .getElementById ("hotmail");
    m6.innerHTML=this.value+"@hotmail.com";
    var m7=document .getElementById ("gmail");
    m7.innerHTML=this.value+"@gmail.com";
    var m8=document .getElementById ("sohu");
    m8.innerHTML=this.value+"@sohu.cn";
    var m9=document .getElementById ("yahoo");
    m9.innerHTML=this.value+"@yahoo.cn";
    var m10=document .getElementById ("139");
    m10.innerHTML=this.value+"@139.cn";
 }
 function eclick()//�������¼�
 {
    var e=document.getElementById("email");
	e.focus();
    e.value=this.innerHTML;
    var mtype=document .getElementById ("mail_type");
    mtype.style.display="none";
	var t=new tip(title,false,e.id+"tip");
	if(checkFormat(e))
	t.showTip2();
	else 
	t.showTip();
 }
 function aclick()//��ַ
 {
    var h=document .getElementById ("hometown");
    h.style.display="block";
 }
 function hclick()
 {
    var h=document .getElementById ("hometown");
    h.style.display="none";
    var a=document .getElementById ("adress_text");
    a.value=this .innerHTML;
    var t=new tip(title,false,a.id+"tip");
	t.showTip2();
 }
 function gclick()
 {
    var h=document .getElementById ("hometown");
    h.style.display="none";
 }
 function sclick()
 {
	 var t=new tip(title,false,this.id+"tip");
	 t.showTip2();
 }
 function schange()//������
 {
	var m=document.getElementById("select_m");
	var y=document.getElementById("select_y");
	 var t=new tip(title,false,this.id+"tip");
	 if(m.value!=="--" && y.value!="��ѡ��")
	 t.showTip2();
 }
function mouseover()
{
	var n=document.getElementById("navigate");
	n.style.display="block";
}
function naviout()//����Ƴ�����
{
	this.style.display="none";
}
function daohangout()//����Ƴ�����
{
   var n=document.getElementById("navigate");
	n.style.display="none";
}
function subclick()
{
	var e=document.getElementById("email");
	if(e.value=="")
	 var t=new tip("��������Ч�ص�������",false,e.id+"tip");
	 t.showTip();
}