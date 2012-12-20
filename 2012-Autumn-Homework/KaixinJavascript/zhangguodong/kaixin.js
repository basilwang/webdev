window.addEvent =function(element,event,fn){  
  if(element.addEventListener)
  {
	  element.addEventListener(event,fn,false);
	  
  }
  else if(element.attachEvent){
	  //��һ��������onclick��,��onload���ȵȣ��ڶ��������Ǿ�����¼�����
     element.attachEvent("on"+event, function(){ fn.call(element) });
     
   }
}
 //isinfo��ʾ�ı����е������Ƿ����,������ʾʱ�Ƿ��̾��ͼƬ
function tip(title,isInfo,id)  
{
  this.title=title;
  this.isInfo=isInfo;
  this.tipDom=document.getElementById(id);
}

//��������function���岢������ִ�У�ִ�к󷵻ظ�tip������������showtip()��hidetip()
tip.prototype=(function()
{
	//���ɺ��ʵ�Tip���ڲ�����
    function genTip(tipDomObject,title,isInfo)
	{
     if(isInfo===false)
	 {
      tipDomObject.innerHTML="<img src='images/error.gif' style='margin-top:-6px;'/><span>"  + title + "</span>";
	  //���ı����е����ݴ���ʱ�޸�tip�ı���ɫ��������ɫ
	 tipDomObject.className="tipFormatFalse";
	 }
	 else
	 {
		  //�ö����cssΪtipFormat
	  tipDomObject.className="tipFormatTrue";    
	  tipDomObject.innerHTML="<span>"+title+"</span>";
	 }
	}
	//������ �����ڴ˴�Ӧ��this
	//alert(this.title+" in closure");
	return {
        showTip:function()                               //�հ�����
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
	 //ȡ��body����
	var bd=document.getElementsByTagName('body')[0];  
	//�ر�ע��ð��ִ�У���ִ���Ǹ�С��div��click�¼���Ȼ����ִ��body��onclick
	window.addEvent(bd,'click',autoemailhide);   
	var e=document.getElementById("email");
	 //��email��һ���¼�
	window.addEvent(e,'blur',blurFn); 
	window.addEvent(e,'focus',focusFn);
	window.addEvent(e,'keypress',autoemailshow);
	 //����һ���ַ�ʱ������writeemail
	window.addEvent(e,'keyup',writeEmail);
	for(i=1;i<11;i++)
	{
		  //�����е�С��������ʾ�����¼�
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
	//��ѡ����а��¼�
	var citytext=document.getElementById("city");
	window.addEvent(citytext,'click',showcity);
	var closebutton=document.getElementById("closecity");
	window.addEvent(closebutton,'click',hidecity);
    //�����еĳ��а��¼�
	for(j=1;j<36;j++)
	{
		var selectcity=document.getElementById("city"+j);
	    window.addEvent(selectcity,'click',writeOnCity);
	}
	//���������еĵ��������¼�
	var headdirdiv=document.getElementById("directiondiv");
	window.addEvent(headdirdiv,'mouseover',dirshow);
	window.addEvent(headdirdiv,'mouseout',dirhide);
	//���±ߵĴ�ĵ��������¼���ֹ��������ʧ
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
	    //�ر�ע�⣡�������ʱ���ı����ʧȥ���㣬�����autoemail�Զ�����
     var emailtext=document.getElementById("email");
     emailtext.value=this.innerHTML;
	 var emailtip=document.getElementById("emailtip");
	  //�����ȫ�������Ҫ���ı��������ʾ�����أ���
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
		   title="����д��Ч��������";
		   break;
	  case "password":
		   title="����Ӧ����6-20����ĸ�����ֻ������ַ����";
		   break;
	  case "name":
		   title="����д�����ʵ��������";
		   break;
	}
	var t=new tip(title,false,this.id+"tip");
	//�ȹر�ԭ����info tip
	t.hideTip();
	//����д����ʱ���� error tip
	if(checkFormat(this))
	{
	hiderightimg(this.id);
	t.showTip();
	}
	else
	showrightimg(this.id);
	//���ı����е�����Ϊ��ʱ��Ҳ����ʾ��ɫ�ĶԺţ�
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
	// alert("��ִ��");
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
	// o ��Ҫ����ʽ��dom����
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
			     //���ı���Ϊ��ʱҲ����ʾtip
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
		{   //��������ʽ�ж��ı������Ƿ�������
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
		   title="����д��Ч�������䣬�Ƽ�ʹ��<span style='color:rgb(211, 37, 3);'>QQ����</span>";
		   break;
	  case "password":
		   title="��6-20����ĸ�����ֻ������ַ����";
		   break;
	  case "name":
		   title="����д�����ʵ��������";
		   break;
	}
	var t=new tip(title,true,this.id+"tip");
	t.showTip();
 }