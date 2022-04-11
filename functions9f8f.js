function clickBody(){if(event.target.classList.contains("tooltip-list")||event.target.hasAttribute("data-drop")||event.target.classList.contains("keepTooltip")){}else{var elm=document.getElementsByClassName("tooltip-list");for(var i=0;i<elm.length;i++){elm[i].style.display="none";}}}
document.body.addEventListener("click",clickBody);function checkkey(){if(event.keyCode!=13){if(document.getElementById("contentSec").style.display=='block'){return false;}}else{document.getElementById("contentSec").style.display='none';setTimeout(()=>{document.getElementById("text").focus();},200);}}
function activupload()
{document.getElementById('uplFile').click();}
function addTextt()
{document.getElementById('contentSec').style.display="none";document.getElementById("text").focus();document.getElementById("text").scrollIntoView(true);document.getElementById("bottom-div").style.display="block";}
function readText()
{var input=document.getElementById('uplFile').files[0];if(input==undefined){return;}
var formData=new FormData();formData.append('myFile',input);formData.append('getFileContent',true);var xhttp=new XMLHttpRequest();xhttp.onreadystatechange=function(){if(this.readyState==4&&this.status==200){var resp=this.responseText.trim();if(resp=='error5@@##01'){alert('.txt, .docx, .pdf files are supported only. Try Again!');document.getElementById('uplFile').value='';document.getElementById('uplFile').innerHTML='';}else{document.getElementById('text').value=resp;document.getElementById('text').innerHTML=resp;document.getElementById('contentSec').style.display="none";document.getElementById("text").focus();input_changed(document.getElementById('text'));}}};xhttp.open("POST","/createrSecureFile.php");xhttp.send(formData);}
function toggleM(){var x=document.getElementById("topnavbar")
if(window.getComputedStyle(x).display=="none"){x.style.display="block";}else{x.style.display="none";}}
function insertTab(event,obj){var tabKeyCode=9;if(event.which)
var keycode=event.which;else
var keycode=event.keyCode;if(keycode==tabKeyCode){if(event.type=="keydown"){if(obj.setSelectionRange){var s=obj.selectionStart;var e=obj.selectionEnd;obj.value=obj.value.substring(0,s)+
"\t"+obj.value.substr(e);obj.setSelectionRange(s+1,s+1);obj.focus();}else if(obj.createTextRange){document.selection.createRange().text="\t"
obj.onblur=function(){this.focus();this.onblur=null;};}}
if(event.returnValue)
event.returnValue=false;if(event.preventDefault)
event.preventDefault();return false;}
return true;}
function runLoader(){var counter=1;document.getElementById("text").style.opacity=0.3;document.getElementById("paraphrase-loader").style.display="block";}
function countWords(){var formcontent=document.textform.text.value;formcontent=formcontent.split(" ");alert("Word Count:\n\nYour document contains about\n\n"+formcontent.length+" Words");doWarn=0;}
function countChars(){var formcontent=document.textform.text.value;alert("Character Count:\n\nYour document contains about\n\n"+formcontent.length+" Characters (including whitespace)");doWarn=0;}
function openAsPopUp(){document.textform.action="/";document.textform.target="popupwin";doWarn=0;window.open('','popupwin','toolbar=0,location=0,status=0,menubar=0,scrollbars=1,resizable=1,width=500,height=400,top=0,left=0');document.textform.submit();document.textform.action="download.html";document.textform.target="download_frame";}
function checkForPopUp(){if(window.name!=="popupwin"){openAsPopUp();}}
function qs(el){if(window.RegExp&&window.encodeURIComponent){var ue=el.href,qe=encodeURIComponent(document.f.q.value);if(ue.indexOf("q=")!=-1){el.href=ue.replace(new RegExp("q=[^&$]*"),"q="+qe);}else{el.href=ue+"&q="+qe;}}return 1;}
function toolDisp(that){var dropId=that.getAttribute("data-drop");var elm=document.getElementsByClassName("tooltip-list");for(var i=0;i<elm.length;i++){if(elm[i].getAttribute("id")!=dropId){console.log(elm[i].getAttribute("id"));elm[i].style.display="none";}}
if(document.getElementById(dropId).style.display=="none"){document.getElementById(dropId).style.display="block";}else{document.getElementById(dropId).style.display="none";}}
window.onload=function(){var width=screen.width;let header=document.querySelector('.header');if(width<500){header_height=header.offsetHeight;document.getElementById('content-sec').style.height=screen.height-header_height;document.getElementById('search_query').setAttribute('placeholder','Enter Search Here');document.getElementById('bottom-div').style.padding='3px';}};function download(){var element=document.createElement('a');var text=document.textform.text.value;element.setAttribute('href','data:text/plain;charset=utf-8,'+encodeURIComponent(text));element.setAttribute('download',"text.txt");element.style.display='none';document.body.appendChild(element);element.click();document.body.removeChild(element);}
function trimAll(sString)
{while(sString.substring(0,1)==' ')
{sString=sString.substring(1,sString.length);}
while(sString.substring(sString.length-1,sString.length)==' ')
{sString=sString.substring(0,sString.length-1);}
return sString;}
function addEvent(obj,evType,fn){if(obj.addEventListener){obj.addEventListener(evType,fn,false);return true;}else if(obj.attachEvent){var r=obj.attachEvent('on'+evType,fn);return r;}else{return false;}}
function KeepOnPage(e)
{if(!e)
e=window.event;if(!e)
return;if(doWarn==1&&document.textform.text.value!==default_text&&trimAll(document.textform.text.value)!=="")
{e.cancelBubble=true;e.returnValue='Warning from EditPad.org:\n\nNavigating away from this page will delete your text if you haven\'t already saved it.';}
if(e.stopPropagation)
e.stopPropagation();doWarn=1;}
addEvent(window,'beforeunload',KeepOnPage);function addcontent(obj,id)
{console.log(obj);if(event.target.classList.contains("del")||event.target.classList.contains("delconfirm")||event.target.parentNode.classList.contains("delconfirm")){return false;}
var getdata=localStorage.getItem("savedData");var json=JSON.parse(getdata);console.log(json[id]);var filname=json[id].fname;var elements=document.getElementsByClassName("singleFile");console.log(elements)
for(let i=0;i<elements.length;i++){elements[i].classList.remove("current");}
obj.classList.add("current");var cont=json[id].content;document.getElementById('text').setAttribute("onkeyup","updateDoc()");document.getElementById('text').setAttribute("data-filename",filname);console.log(decodeURI(cont));document.getElementById('text').value=decodeURI(cont);addTextt();console.log(cont+"~~"+filname);}
function getRandomFileName(){var timestamp=new Date().toISOString().replace(/[-:.]/g,"");var random=(""+Math.random()).substring(2,8);var random_number=timestamp+random;return random_number;}
function setCookie(cname,cvalue){var d=new Date();d.setTime(d.getTime()+(1000*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}
function getCookie(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return "";}
function saveDoc(obj,value)
{var textt=document.getElementById('text').value;if(textt.length<10){return false;}
var datta={};var filename=getRandomFileName();datta['fname']=filename;datta['title']=textt.substring(0,10);var utc=new Date().toJSON().slice(0,10).replace(/-/g,'/');datta['date_add']=utc;datta['content']=textt;var jdatta=datta;var getdata=localStorage.getItem("savedData");if(getdata=="notfound"||getdata==""||getdata==null){var json={};json[filename]=jdatta;}else{var json=JSON.parse(getdata);json[filename]=jdatta;}
localStorage.setItem('savedData',JSON.stringify(json));var elm=document.getElementsByClassName("cookdiv")[0];if(elm){var html=elm.innerHTML;html+='<li class="singleFile current" onclick="addcontent(this,\''+filename+'\')" data-fname="'+datta['fname']+'" style="list-style-type: none;padding-top: 5px;cursor: pointer;height: 33px"><span class="delNot"><span class="cnamee">'+datta['title']+'</span> - <small style="display: none;" class="cvaluee">'+datta['content']+'</small><small class="cdatee">'+utc+'</small><small onclick="showDel(this)" class="del keepTooltip" data-pfname="'+datta['fname']+'">&times</small></span> <span id="'+datta['fname']+'" class="delconfirm">Are you sure? <span class="no keepTooltip" onclick="cancelDel(\''+datta['fname']+'\')">No</span><span class="yes keepTooltip" onclick="delit(\''+datta['fname']+'\')">Yes</span></span></li>';}else{var html='<li class="singleFile current" onclick="addcontent(this,\''+filename+'\')" data-fname="'+datta['fname']+'" style="list-style-type: none;padding-top: 5px;cursor: pointer;height: 33px"><span class="delNot"><span class="cnamee">'+datta['title']+'</span> - <small style="display: none;" class="cvaluee">'+datta['content']+'</small><small class="cdatee">'+utc+'</small><small onclick="showDel(this)" class="del keepTooltip" data-pfname="'+datta['fname']+'">&times</small></span></span> <span id="'+datta['fname']+'" class="delconfirm keepTooltip">Are you sure? <span class="no keepTooltip" onclick="cancelDel(\''+datta['fname']+'\')">No</span><span class="yes keepTooltip" onclick="delit(\''+datta['fname']+'\')">Yes</span></span></li>';}
elm.innerHTML=html;document.getElementById('text').setAttribute("onkeyup","updateDoc()");document.getElementById('text').setAttribute("data-filename",datta['fname']);}
function onfocusTab(){}
function updateDoc()
{var filnam=document.getElementById('text').getAttribute("data-filename");var textt=document.getElementById('text').value;var cookdata=localStorage.getItem('savedData')
cookdata=JSON.parse(cookdata);cookdata[filnam].title=textt.substring(0,10);cookdata[filnam].content=textt;document.querySelector('li[data-fname="'+filnam+'"] > .delNot > .cnamee').innerHTML=textt.substring(0,10);document.querySelector('li[data-fname="'+filnam+'"] > .delNot > .cvaluee').innerHTML=textt;var cookstr=JSON.stringify(cookdata);localStorage.setItem("savedData",cookstr);}
function showDel(that){var elements=document.getElementsByClassName("delconfirm");for(let i=0;i<elements.length;i++){elements[i].style.display="none";}
var elements=document.getElementsByClassName("delNot");for(let i=0;i<elements.length;i++){elements[i].style.display="block";}
var id=that.getAttribute("data-pfname");that.parentElement.style.display="none";document.getElementById(id).style.display="block";}
function delit(name){var cookdata=localStorage.getItem("savedData");var json=JSON.parse(cookdata);delete json[name]
localStorage.setItem("savedData",JSON.stringify(json));current=false;if(document.querySelector("li[data-fname='"+name+"']").classList.contains('current')){current=true;}
document.querySelector("li[data-fname='"+name+"']").remove();document.getElementById('text').setAttribute("onkeyup","saveDoc()");if(document.getElementsByClassName(".singleFile").length>0){if(current){document.getElementsByClassName(".singleFile")[0].click();}}}
function cancelDel(name){document.querySelector("li[data-fname='"+name+"'] > .delconfirm").style.display="none";document.querySelector("li[data-fname='"+name+"'] > .delNot").style.display="block";}
function submitForm(){loadRecaptchaScript();document.getElementById("uplFile").click();window.setTimeout(function(){document.getElementById("captcha").click();document.getElementById("captcha").click();},1000);};function submitFormWithoutRecaptcha(){document.getElementById("uplFile").click();}
function escapeHtml(text){var map={"&":"&amp;","<":"&lt;",">":"&gt;"};return text.replace(/[&<>]/g,function(m){return map[m];});}
function checkPlag(){document.plagForm.content.value=escapeHtml(document.textform.text.value);document.plagForm.submit();}
function checkParaphrase(){document.paraphraseForm.content.value=escapeHtml(document.textform.text.value);document.paraphraseForm.submit();}
document.addEventListener('click',function(e)
{});