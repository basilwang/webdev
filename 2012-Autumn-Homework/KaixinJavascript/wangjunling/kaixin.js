
window.addEvent =function(element,event,fn){
  if(element.addEventListener)
  {
	  element.addEventListener(event,fn,false);
	  
  }
  else if(element.attachEvent){
     element.attachEvent("on"+event, function(){ fn.call(element) });
     
   }
}
function tip(title,isInfo,id)
{
  this.title=title;
  this.isInfo=isInfo;
  this.tipDom=document.getElementById(id);
}

function prepareTip()
 {
	var e=document.getElementById("email");
	window.addEvent(e,'blur',blurFn);
	window.addEvent(e,'focus',focusFn);
	window.addEvent(e,'keyup',email_type);
	var n=document.getElementById("name");
	window.addEvent(n,'blur',blurFn);
	window.addEvent(n,'focus',focusFn);
	var p=document.getElementById("password");
	window.addEvent(p,'blur',blurFn);
	window.addEvent(p,'focus',focusFn);
	var a=document.getElementById("year");
	window.addEvent(a,'change',check_birthday);
	var b=document.getElementById("month");
	window.addEvent(b,'change',check_birthday);
	var c=document.getElementById("day");
	window.addEvent(c,'change',check_birthday);
	var a0=document.getElementById("a0");
	window.addEvent(a0,'click',email_choose);
	var a1=document.getElementById("a1");
	window.addEvent(a1,'click',email_choose);
	var a2=document.getElementById("a2");
	window.addEvent(a2,'click',email_choose);
	var a3=document.getElementById("a3");
	window.addEvent(a3,'click',email_choose);
	var a4=document.getElementById("a4");
	window.addEvent(a4,'click',email_choose);
	var a5=document.getElementById("a5");
	window.addEvent(a5,'click',email_choose);
	var a6=document.getElementById("a6");
	window.addEvent(a6,'click',email_choose);
	var a7=document.getElementById("a7");
	window.addEvent(a7,'click',email_choose);
	var d=document.getElementById("div_daohang");
	window.addEvent(d,'mouseover',bianse);
	window.addEvent(d,'mouseout',fanhui);
	var x=document.getElementById("div_bangzhu");
	window.addEvent(x,'mouseover',bianse);
	window.addEvent(x,'mouseout',fanhui);
	var y=document.getElementById("div_zhuce");
	window.addEvent(y,'mouseover',bianse);
	window.addEvent(y,'mouseout',fanhui);
	var z=document.getElementById("div_denglu");
	window.addEvent(z,'mouseover',bianse);
	window.addEvent(z,'mouseout',fanhui);
	
	
 }
 function blurFn()
 {
	var title;
	switch(this.id)
	{
	  case "email":
		   mail_turnNone();
		   document.getElementById('emailtip').style.display = "none";
		   break;
	  case "password":
		   check_password();
		    document.getElementById('passwordtip').style.display = "none";
		   break;
	  case "name":
	      check_name ();
		  document .getElementById ('nametip').style.display="none";
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
	switch(this.id)
	{
	  case "email":
		    mail_turnNone();
		   break;
	  case "password":
		   check_password();
		   break;
	  case "name":
		   check_name ();
		   break;
	}
	//var t=new tip(title,true,this.id+"tip");
	//t.showTip();
 }
 
 function email_type()
 {
      document.getElementById('email_type').style.display="block";
      var type=document.getElementById('email').value;
      document.getElementById('a0').innerHTML=type+"@qq.com";
      document.getElementById('a1').innerHTML=type+"@163.com";
      document.getElementById('a2').innerHTML=type+"@126.com";
      document.getElementById('a3').innerHTML=type+"@hotmail.com";
      document.getElementById('a4').innerHTML=type+"@gmail.com";
      document.getElementById('a5').innerHTML=type+"@sina.com";
      document.getElementById('a6').innerHTML=type+"@yahoo.com";
      document.getElementById('a7').innerHTML=type+"@139.com";
 }
 
 function email_choose()
 {
     var tempid=this.id;
      document.getElementById('email').value=document.getElementById(tempid).innerHTML;
      document.getElementById('email_type').style.display="none";
      mail_turnNone();
 }
  //检测EMAIL的格式是否正确
        //-----------------------
 function mail_turnNone()
    {
        var temp=document.getElementById('email').value;
         document.getElementById('emailtip').style.display = "none";
          //* 判断邮箱是否符合格式要求
         if(IsEmail(temp)&&(!IsEmpty(temp)))
         {
            document.getElementById('duihao00').style.display = "block";
            document.getElementById('emailtip').style.display = "none";
            document.getElementById('email_error').style.display = "none";
          }
        else if(IsEmpty(temp))
         {
             document.getElementById('duihao00').style.display = "none";
             document.getElementById('emailtip').style.display = "block";
             document.getElementById('email_error').style.display = "none";
         }
         else
        {
            document.getElementById('emailtip').style.display = "none";
            document.getElementById('email_error').style.display = "block";
           document.getElementById('duihao00').style.display = "none";
        }
      }

function IsEmail(fData)
{
    if (IsEmpty(fData))
        return true
    if (fData.indexOf("@")==-1)
        return false
    var NameList=fData.split("@");
    if (NameList.length!=2)
        return false 
    if (NameList[0].length<1 )
        return false   
    if (NameList[1].indexOf(".")<=0)
        return false 
    if (fData.indexOf("@")>fData.indexOf(".")) 
        return false
    if (fData.indexOf(".")==fData.length-1)
        return false
    return true    
}

function IsEmpty(fData)
{
    return ((fData==null) || (fData.length==0) )
}
     //------------------------------------------------------------
     
function check_password()
     {
        var str_password=document .getElementById ( 'password').value;
         if(str_password.length==0)
                 { 
                    document .getElementById ('emailtip').style.display="none";
		            document .getElementById ('passwordtip').style.display="block";
		            document .getElementById ('nametip').style.display="none";
		            document .getElementById('duihao1').style.display="none";
		         }
                 else 
                 {
                   if(str_password.length<6 &&str_password.length!=0 )
                     { document.getElementById('password_error') .style.display="block";
                       document .getElementById ('duihao1').style.display="none";
                       document .getElementById ('passwordtip').style.display="none";
                 }
                  else
                     document.getElementById('password_error').style.display="none";
                     if(str_password.length>=6)
                        document .getElementById('duihao1').style.display="block";
                        else
                        document .getElementById('duihao1').style.display="none";
                    }
        
     }
     
     function check_name()
       {
            var str_name=document .getElementById('name').value;
            if(str_name.length==0)
               {
                    document .getElementById ('emailtip').style.display="none";
		            document .getElementById ('passwordtip').style.display="none";
		            document .getElementById ('nametip').style.display="block";
		            document .getElementById('duihao2').style.display="none";
		            document .getElementById ('name_error').style.display="none";
               }         else{                          var temp=document.getElementById("name").value;                 var   result=temp.charCodeAt(temp.length-1)>=10000 ;              
                  if(result==true)
                {
                    document .getElementById('duihao2').style.display="block";
		            document .getElementById ('name_error').style.display="none";
                }
                else 
                {
                   document .getElementById('duihao2').style.display="none";
		           document .getElementById ('name_error').style.display="block";
                }
                
                }
       }
       
       function check_birthday()
       {
              var a=document .getElementById('year').value;
              var b=document .getElementById('month').value;
              var c=document .getElementById('day').value;
              if(a=="请选择"||b=="--"||c=="--")
                  document.getElementById('duihao4').style.display="none";
              else 
                  document.getElementById('duihao4').style.display="block";
       }
       
        function bianse()
       {
           this.style.backgroundColor="#E7454F";
       }
       function fanhui()
       {
           this.style.backgroundColor="#DB3741";
       }
       //导航栏里面的背景变换
       function _bgcolor(e)
       {   
             e.style.background="rgb(235,75,85)";
       }
       function _bgcolor_cancel(e)
       {
           e.style.background="#FAFAFA";
       }
       function daohang_chuxian()
       {
              action_top_right.style.display="block";
       }
       