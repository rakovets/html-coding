!function(a,b,c){"function"==typeof define&&define.amd?define([],c):"undefined"!=typeof module&&"object"==typeof exports?module.exports=c():a[b]=c()}(this,"withInViewport",function(){var a=void 0!==window.innerHeight,b=function b(c,d){var h,i,j,k,l,n,o,p,q,e=!1,f={},g={},m=[0,0];if("undefined"!=typeof jQuery&&c instanceof jQuery&&(c=c.get(0)),"object"!=typeof c||1!==c.nodeType)throw new Error("First argument must be an element");for(c.getAttribute("data-withInViewport-settings")&&window.JSON&&(f=JSON.parse(c.getAttribute("data-withInViewport-settings"))),h="string"==typeof d?{sides:d}:d||{},g.container=h.container||f.container||b.defaults.container||window,g.sides=h.sides||f.sides||b.defaults.sides||"all",g.top=h.top||f.top||b.defaults.top||0,g.right=h.right||f.right||b.defaults.right||0,g.bottom=h.bottom||f.bottom||b.defaults.bottom||0,g.left=h.left||f.left||b.defaults.left||0,"undefined"!=typeof jQuery&&g.container instanceof jQuery&&(g.container=g.container.get(0)),g.container!==document.body&&1!==!g.container.nodeType||(g.container=window),j=g.container===window,i={top:function(){return j?k.top>=g.top:k.top>=containerScrollTop-(containerScrollTop-l.top)+g.top},right:function(){return j?k.right<=l.right+containerScrollLeft-g.right:k.right<=l.right-m[0]-g.right},bottom:function(){var c;return c=j?a?g.container.innerHeight:document.documentElement.clientHeight:l.bottom,k.bottom<=c-m[1]-g.bottom},left:function(){return j?k.left>=g.left:k.left>=containerScrollLeft-(containerScrollLeft-l.left)+g.left},all:function(){return i.top()&&i.bottom()&&i.left()&&i.right()}},k=c.getBoundingClientRect(),j?(l=document.documentElement.getBoundingClientRect(),containerScrollTop=document.body.scrollTop,containerScrollLeft=document.body.scrollLeft):(l=g.container.getBoundingClientRect(),containerScrollTop=g.container.scrollTop,containerScrollLeft=g.container.scrollLeft),containerScrollLeft&&(m[0]=18),containerScrollTop&&(m[1]=16),n=/^top$|^right$|^bottom$|^left$|^all$/,o=g.sides.split(" "),q=o.length;q--;)if(p=o[q].toLowerCase(),n.test(p)){if(!i[p]()){e=!1;break}e=!0}return e};return b.prototype.defaults={container:document.body,sides:"all",top:0,right:0,bottom:0,left:0},b.defaults=b.prototype.defaults,b.prototype.top=function(c){return b(c,"top")},b.prototype.right=function(c){return b(c,"right")},b.prototype.bottom=function(c){return b(c,"bottom")},b.prototype.left=function(c){return b(c,"left")},b});Element.prototype.isVisible=function(){"use strict";function _isVisible(el,t,r,b,l,w,h){var p=el.parentNode,VISIBLE_PADDING=2;if(!_elementInDocument(el)){return false}if(9===p.nodeType){return true}if("0"===_getStyle(el,"opacity")||"none"===_getStyle(el,"display")||"hidden"===_getStyle(el,"visibility")){return false}if("undefined"===typeof t||"undefined"===typeof r||"undefined"===typeof b||"undefined"===typeof l||"undefined"===typeof w||"undefined"===typeof h){t=el.offsetTop;l=el.offsetLeft;b=t+el.offsetHeight;r=l+el.offsetWidth;w=el.offsetWidth;h=el.offsetHeight}if(p){if("hidden"===_getStyle(p,"overflow")||"scroll"===_getStyle(p,"overflow")){if(l+VISIBLE_PADDING>p.offsetWidth+p.scrollLeft||l+w-VISIBLE_PADDING<p.scrollLeft||t+VISIBLE_PADDING>p.offsetHeight+p.scrollTop||t+h-VISIBLE_PADDING<p.scrollTop){return false}}if(el.offsetParent===p){l+=p.offsetLeft;t+=p.offsetTop}return _isVisible(p,t,r,b,l,w,h)}return true}function _getStyle(el,property){if(window.getComputedStyle){return document.defaultView.getComputedStyle(el,null)[property]}if(el.currentStyle){return el.currentStyle[property]}}function _elementInDocument(element){while(element=element.parentNode){if(element==document){return true}}return false}return _isVisible(this)};if(!window.AdTamByOffer){var AdTamByOffer=function(){AdTamByOffer.prototype.promotions=[];AdTamByOffer.prototype.question=null;AdTamByOffer.prototype.city=null;AdTamByOffer.prototype.for_change=null;AdTamByOffer.prototype.gta_tut=null;AdTamByOffer.prototype.gta_tut_counter=0;AdTamByOffer.prototype.parallel=function(functions,callback){var ajaxCallsRemaining=functions.length;var returnedData=[];functions.forEach(function(func){func(function(response){returnedData.push(response);--ajaxCallsRemaining;if(ajaxCallsRemaining<=0){return callback(returnedData)}})})};AdTamByOffer.prototype.get_referrer=function(){var isInIframe=parent!==window,location=window.location.href;if(isInIframe){location=document.referrer}return location};AdTamByOffer.prototype.set_gta_tut_by_id=function(city_id,city_name,changed){var self=this;var xhr=new XMLHttpRequest;var q="?gta_tut_id="+city_id;if(changed){q=q+"&change=true"}xhr.open("GET","https://ad.tam.by/api/tutby/set_gta_tut_by_id"+q,true);xhr.withCredentials=true;xhr.send();xhr.onload=function(){var close=document.querySelector('#geoselector button[data-dismiss="modal"]');if(close){close.click()}if(self.question){var question='<span class="b-icon icon-set" style="cursor: pointer; color: #fff;-webkit-filter: invert(100%);filter: invert(100%);" onclick="AdTam_TutByCore.modal_geotarget()"></span><a id="adtamby_geotarget_selector" onclick="AdTam_TutByCore.geotarget=[city_id];AdTam_TutByCore.modal_geotarget()" class="dotted" style="cursor: pointer; height: 32px;line-height: 42px; margin-left: 5px;" data-geocode="city_id">city_title</a>';question=question.replace(new RegExp("city_title","gi"),city_name||self.city.title||"");question=question.replace(new RegExp("city_id","gi"),self.city.code);self.question.innerHTML=question}var response=JSON.parse(this.responseText);if(response.data){self.city=response.data}self.getTutOffers(function(){})}};AdTamByOffer.prototype.change_main_banner=function(){var second_elements=document.querySelector("div.entry_tam:not(.entry-cloned):not(.entry_catalog)");if(second_elements){var xhr=new XMLHttpRequest;var q="?type=200x200&special_banner=show_on_main";xhr.open("GET","https://ad.tam.by/retarget/banner/html"+q,true);xhr.withCredentials=true;xhr.onload=function(){if(this.status==200){second_elements.innerHTML=this.responseText}};xhr.send()}};AdTamByOffer.prototype.change_iframe_slider=function(callback){var self=this;var second_element=document.querySelector('iframe[src*="ad.tam.by/retarget/banner/html"]');if(second_element){self.get_banner_block_for_replace(1,"iframe_slider",function(data){if(data){var parent_element=second_element.parentNode;parent_element.innerHTML=data;var location_links=Array.prototype.slice.call(parent_element.querySelectorAll('a[href*="tam.by/skidki"]'));location_links.forEach(function(el){self.setElementAction(el,"news")})}return callback()})}else{return callback()}};AdTamByOffer.prototype.get_banner_block_for_replace=function(limit,loc_type,callback){if(limit>0){var xhr=new XMLHttpRequest;var q="?limit="+limit+"&loc_type="+loc_type+"&location="+this.referrer;xhr.open("GET","https://ad.tam.by/api/tutby/banner/block"+q,true);xhr.withCredentials=true;xhr.onload=function(){if(this.status==200){return callback(JSON.parse(this.response))}else{return callback(null)}};xhr.send()}};AdTamByOffer.prototype.change_news_banner=function(){var second_element=document.querySelector("div#rightLinksBlock div.company_prm");if(second_element){var xhr=new XMLHttpRequest;var q="?type=200x200&special_banner=show_on_news";xhr.open("GET","https://ad.tam.by/retarget/banner/html"+q,true);xhr.withCredentials=true;xhr.onload=function(){if(this.status==200){second_element.innerHTML=this.responseText}};xhr.send()}};AdTamByOffer.prototype.show_question=function(city){var question='<span class="b-icon icon-set" style="cursor: pointer; color: #fff;-webkit-filter: invert(100%);filter: invert(100%);" onclick="AdTam_TutByCore.modal_geotarget()"></span>';if(city){this.city=city;if(city.ip_detected){question='<span class="rubric-setup" style="font-weight: 400; color: #fff;">Ваш город <a id="adtamby_geotarget_selector" onclick="AdTam_TutByCore.geotarget=[city_id];AdTam_TutByCore.modal_geotarget()" class="dotted" style="cursor: pointer; height: 32px;line-height: 42px;" data-geocode="city_id">city_title</a>? <button class="button thin" onclick="event.preventDefault(); adTamByOffer.set_gta_tut_by_id(city_id)">Да, сохранить</button></span>'}else{question='<span class="b-icon icon-set" style="cursor: pointer; color: #fff;-webkit-filter: invert(100%);filter: invert(100%);" onclick="AdTam_TutByCore.modal_geotarget()"></span><a id="adtamby_geotarget_selector" onclick="AdTam_TutByCore.geotarget=[city_id];AdTam_TutByCore.modal_geotarget()" class="dotted" style="cursor: pointer; height: 32px;line-height: 42px; margin-left: 5px;" data-geocode="city_id">city_title</a>'}question=question.replace(new RegExp("city_title","gi"),city.title);question=question.replace(new RegExp("city_id","gi"),city.code)}var div_for_insert_after=document.querySelector("#s_tamby_offers > div.project-head.m-topic-tam > div.head-title.logo-holder > span:nth-child(2)");if(div_for_insert_after){var span=document.createElement("span");span.innerHTML=question;this.insertAfter(span,div_for_insert_after);this.question=span}};AdTamByOffer.prototype.get_banners_for_replace=function(limit,loc_type,callback){var self=this;if(limit>0){var xhr=new XMLHttpRequest;var q="?limit="+limit+"&loc_type="+loc_type+"&location="+this.referrer;xhr.open("GET","https://ad.tam.by/api/tutby/banner"+q,true);xhr.withCredentials=true;xhr.onload=function(){var ip_city=xhr.getResponseHeader("IPCity");if(!self.question){if(ip_city){ip_city=JSON.parse(atob(ip_city));ip_city.title=decodeURI(ip_city.title);if(typeof runCore==="object"){if(typeof runCore.get_param==="function"&&typeof runCore.get_option==="function"){var lang=runCore.get_option("lang");if(lang==="bel"){var cities=runCore.get_param("geotargets");if(cities){for(var i=0;i<cities.length;i++){if(cities[i].items.length){for(var j=0;j<cities[i].items.length;j++){if(cities[i].items[j].id==ip_city.code){ip_city.title=cities[i].items[j].name[lang]}}}}}cities=null}}}self.show_question(ip_city)}else{self.show_question(null)}}if(this.status==200){return callback(JSON.parse(this.response))}else{return callback(null)}};xhr.send()}else{return callback(null)}};AdTamByOffer.prototype.parseUrl=function(url){var parser=document.createElement("a");parser.href=url;return parser};AdTamByOffer.prototype.referrer=this.get_referrer();AdTamByOffer.prototype.promotion_log_form=function(el,log_type){log_type=log_type||"show";var href=el.preved?el.getAttribute("data-tamby-href"):el.href;var xhr=new XMLHttpRequest;var body="offer_url="+encodeURIComponent(href)+"&location="+encodeURIComponent(this.referrer)+"&loc_type="+encodeURIComponent(el.loc_type);if(el.replaced){body=body+"&replaced=1"}xhr.open("POST","https://ad.tam.by/api/retarget/offers/"+log_type,true);xhr.withCredentials=true;xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");xhr.send(body)};AdTamByOffer.prototype.getCookie=function(name){var matches=document.cookie.match(new RegExp("(?:^|; )"+name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return matches?decodeURIComponent(matches[1]):undefined};AdTamByOffer.prototype.getLocationType=function(){var self=this;var parsed_url=self.parseUrl(self.referrer);if(parsed_url.hostname=="www.tut.by"&&parsed_url.pathname=="/"){return"tut_by"}switch(parsed_url.hostname){case"smart.tut.by":return"smart";break;case"search.tut.by":return"search";break;default:return"news";break}};AdTamByOffer.prototype.replaceOffers=function(selector,loc_type,callback){if(selector){var offer_blocks=document.querySelectorAll(selector);var self=this;self.get_banners_for_replace(offer_blocks.length,loc_type,function(data){if(data){for(var i=0;i<data.length;i++){offer_blocks[i].innerHTML=data[i];var a_replaced=offer_blocks[i].querySelectorAll('a[href*="tam.by/skidki"]');a_replaced.forEach(function(a){a.replaced=true})}}return callback(offer_blocks)})}else{return callback([])}};AdTamByOffer.prototype.getOffersToReplace=function(loc_type,callback){var banners=[];var checker_selector="#content > div.content > div.l-columns.gapless.transparent > div > div:nth-child(1) > div > div.widget_content > div";if(document.querySelector(checker_selector)){banners.push({selector:"#content > div.content > div.l-columns.gapless.transparent > div > div:nth-child(1) > div > div.widget_content > div > div",loc_type:"lady_adaptive"})}checker_selector="body div.b-companies > table > tbody > tr > td:nth-child(-n+3) > ul > li > a > img";if(document.querySelector(checker_selector)){banners.push({selector:"body div.b-companies > table > tbody > tr > td:nth-child(-n+2) > ul > li[class='lists__li']",loc_type:"afisha_single_footer"})}banners.push({selector:"#s_tamby_offers div.entry_tam:not(.entry-cloned):not(.entry_catalog)",loc_type:"tut_by"});banners.push({selector:"#tab-catalog_links > div:nth-child(1)",loc_type:"news"});banners.push({selector:'#tamby > div.b-slider.slider_catalog.forward.back > form > div > div[class="entry-product entry_catalog"]',loc_type:"smart"});var functions=[];var self=this;banners.forEach(function(banner){functions.push(function(clb){self.replaceOffers(banner.selector,banner.loc_type,function(data){return clb(data)})})});self.parallel(functions,function(data){return callback(data)})};AdTamByOffer.prototype.insertAfter=function(elem,refElem){var parent=refElem.parentNode;var next=refElem.nextSibling;if(next){return parent.insertBefore(elem,next)}else{return parent.appendChild(elem)}};AdTamByOffer.prototype.getBannerToInsert=function(loc_type,callback){var self=this;var selector=null;var element=null;var limit=0;var change_innerHTML=false;switch(loc_type){case"search":selector="#rightLinksBlock";element="div.b-widget:last-child";limit=3;break;case"news":selector="#rightLinksBlockTamBy";element="div#tab-companies";loc_type="tut_by_adaptive";change_innerHTML=true;limit=3}if(selector&&element&&limit){var offer_block=document.querySelector(selector);element=document.querySelector(element);if(!offer_block&&element){self.get_banner_block_for_replace(limit,loc_type,function(data){if(element){if(change_innerHTML){element.innerHTML=data}else{var div=document.createElement("div");div.innerHTML=data;self.insertAfter(div.firstChild,element)}}return callback()})}else{return callback()}}else{return callback()}};AdTamByOffer.prototype.setElementAction=function(el,loc_type,preved){var self=this;if(preved){el.preved=true}if(!el.hasOwnProperty("loc_type")){el.loc_type=loc_type;el.addEventListener("click",function(e){e.preventDefault();self.logClickTamBy(el);if(el.getAttribute("target")=="_blank"){window.open(el.href,"_blank")}else{window.open(el.href)}return false});if(el.parentNode.querySelector('img[src*=".tam.by"]')||el.querySelector('img[src*=".tam.by"]')){self.promotions.push(el)}}};AdTamByOffer.prototype.logShowTamBy=function(){var self=this;self.promotions.forEach(function(el){if((el.isVisible(el)||el.offsetParent!=null)&&withInViewport(el,{top:-50,right:-50,bottom:-50,left:-50})&&!el.viewed){self.promotion_log_form(el,"show");el.viewed=true}})};AdTamByOffer.prototype.logClickTamBy=function(el){this.promotion_log_form(el,"click");el.viewed=true};AdTamByOffer.prototype.getTutOffers=function(callback){var self=this;var banner_sys_links=Array.prototype.slice.call(document.querySelectorAll("a[data-tamby-href]"));banner_sys_links.forEach(function(el){self.setElementAction(el,"fixed_offers",true)});var special_links=Array.prototype.slice.call(document.querySelectorAll('.catalog_special-news a[href*="tam.by/skidki"]'));special_links.forEach(function(el){self.setElementAction(el,"stock_page")});var location_type=self.getLocationType();self.getOffersToReplace(location_type,function(){self.getBannerToInsert(location_type,function(){var location_links=Array.prototype.slice.call(document.querySelectorAll('a[href*="tam.by/skidki"]'));location_links.forEach(function(el){self.setElementAction(el,location_type)});return callback(self.promotions)})})};AdTamByOffer.prototype.setCookie=function(cname,cvalue,exdays,domain){var d=new Date;d.setTime(d.getTime()+exdays*24*60*60*1e3);var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";domain="+domain+";path=/"};AdTamByOffer.prototype.postTutGta=function(city){var xhr=new XMLHttpRequest;var q="?gta_tut_term="+city;xhr.open("GET","https://ad.tam.by/api/tutby/gta_tut"+q,true);xhr.withCredentials=true;xhr.send()};AdTamByOffer.prototype.setTutGta=function(id){var self=this;if(window["_term"]!=undefined&&window["_term"]!=false&&!self.gta_tut){self.gta_tut=_term;self.postTutGta(_term);clearInterval(id);return}self.gta_tut_counter++;if(self.gta_tut_counter>20){clearInterval(id)}}};var adTamByOffer=new AdTamByOffer;var promotions=[];var offer_tab=document.querySelector('a[href="#tab-catalog_links"]');if(offer_tab){function hasClass(element,cls){return(" "+element.className+" ").indexOf(" "+cls+" ")>-1}var li_offer_tab=offer_tab.parentNode;if(!hasClass(li_offer_tab,"active")){var offer_div=document.getElementById("tab-catalog_links");offer_div.style.display="none";li_offer_tab.addEventListener("click",function(e){offer_div.style.display="block"})}}var popular_link=document.querySelector("#catalog_news_block > div.b-spec_title.m-catalog");if(popular_link){var popular_link_text="Популярные советы";if(typeof runCore==="object"){if(typeof runCore.get_option==="function"){if(runCore.get_option("lang")==="bel"){popular_link_text="Папулярныя парады"}}}popular_link.innerHTML='<a href="https://blog.tam.by/" target="_blank">'+popular_link_text+"</a>"}adTamByOffer.getTutOffers(function(pms){adTamByOffer.change_news_banner();adTamByOffer.change_main_banner();adTamByOffer.change_iframe_slider(function(){setInterval(function(){adTamByOffer.logShowTamBy(adTamByOffer.promotions)},650)})});var TutGtaInterval=setInterval(function(){adTamByOffer.setTutGta(TutGtaInterval)},500);var AdTam_TutByCore=function(){var t={},e=function(){this.bIsInited=!1,this.vkIsInited=!1,this.options={host:"/",lang:"rus",time:Math.round((new Date).getTime()/1e3),geotarget:[15800,15800,!1],weathertarget:26850,user:{email:""},rev:{js:"r0",css:"r0"},search:"",social_collector:"",reformal:!0,wurfl:{id:"generic_web_browser",type:"desktop",os:"",os_version:"",browser:"",browser_version:"",is_bot:!1,width:800,height:600}};if(typeof runCore==="object"){if(typeof runCore.get_option==="function"){var tmpLang=runCore.get_option("lang");if(tmpLang==="rus"||tmpLang==="bel"){this.options.lang=tmpLang}}}};return e.prototype=function(){return{get_option:function(t){return this.options.hasOwnProperty(t)?this.options[t]:void 0},get_param:function(e){return t.hasOwnProperty(e)?t[e]:("function"==typeof this["param_autoload_"+e]&&this["param_autoload_"+e].call(this),t.hasOwnProperty(e)?t[e]:void 0)},i18n:function(t,e){if(!e)return t;var o=this.get_option("lang");return e.hasOwnProperty(o)&&e[o].hasOwnProperty(t)?e[o][t]:("rus"!=o&&(o="rus"),e.hasOwnProperty(o)&&e[o].hasOwnProperty(t)?e[o][t]:t)},apply_settings:function(t,e,o){if(t&&"object"==typeof t&&e&&"object"==typeof e)for(var i in t)t.hasOwnProperty(i)&&(e.hasOwnProperty(i)?"object"==typeof t[i]?this.apply_settings(t[i],e[i],o):e[i]=t[i]:o&&(e[i]=t[i]))},class_method:function(t){if(t)for(var o in t)t.hasOwnProperty(o)&&"function"==typeof t[o]&&(e.prototype[o]=t[o])},init:function(t){return this},cookie:function(t,e,o){if("undefined"==typeof e){var i=null;if(document.cookie)for(var n=document.cookie.split(";"),r=0;r<n.length;r++){var a=n[r].replace(/^\s+/g,"").replace(/\s+$/g,"");if(a.substring(0,t.length+1)==t+"="){i=decodeURIComponent(a.substring(t.length+1));break}}return i}o=o||{},null===e&&(e="",o.expires=-1);var s="";if(o.expires&&("number"==typeof o.expires||o.expires.toUTCString)){var c;"number"==typeof o.expires?(c=new Date,c.setTime(c.getTime()+24*o.expires*60*60*1e3)):c=o.expires,s="; expires="+c.toUTCString()}var d=o.path?"; path="+o.path:"",p=o.domain?"; domain="+o.domain:"",l=o.secure?"; secure":"";document.cookie=[t,"=",encodeURIComponent(e),s,d,p,l].join("")}}}(),new e}();!function(){function t(t,e){return"string"==typeof t[e]?t[e]:t.rus}function e(t,e,i){if(!window.ga)return!1;for(var n=window.ga.getAll(),o=0;o<n.length;o++)window.ga(n[o].get("name")+".send","event",t,e,i);return!0}AdTam_TutByCore.class_method({modal_geotarget:function(){var i={desktop:function(){var i={rus:{close:"Закрыть",title:"Выберите свой населенный пункт",brief:""},bel:{close:"Зачынiць",title:"Выбярыце свой населены пункт",brief:""}},n="",o=function(e,i,n,o){return'<div class="gs_title">'+t(e.name,n)+"</div><ul>"+$.map(e.items,function(e){return'<li id="gtgt'+e.id+'"'+(e.id==adTamByOffer.city.code?' class="current"':"")+'><a href="javascript:void(0)" onclick="adTamByOffer.set_gta_tut_by_id('+e.id+",'"+t(e.name,n)+"', 1)\">"+t(e.name,n)+"</a></li>"}).join("")+"</ul>"},a=function(t){if(n.length>0)return n;var e=t.get_option("host"),a=t.get_option("lang"),r=adTamByOffer.city.code;return n+='<div id="geoselector" class="modal"><div class="modal-content"><div class="modal-content-inner"><div class="modal-header"><div class="content"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+t.i18n("close",i)+"</button><h3>"+t.i18n("title",i)+"</h3>"+t.i18n("brief",i)+'</div></div><div class="modal-spacer"></div><div class="modal-body"><div class="content"><table cellspacing="0" cellpadding="0" border="0"><tbody><tr>'+$.map(runCore.get_param("geotargets"),function(t){return"<td>"+o(t,e,a,r)+"</td>"}).join("")+'</tr></tbody></table></div></div><div class="modal-spacer"></div></div></div></div>'};return function(){var t=this,i=$(a(this)).prependTo("body").on({show:function(){var n=$(this);!function(t,e,i){var n=$(window).height(),o=$(window).width(),a=Math.max(20,Math.floor((n-e)/2)),r=Math.max(20,Math.round((o-i)/2));t.css("fixed"==t.css("position")?{top:a,bottom:a}:{top:a+$(document).scrollTop(),bottom:a}),function(t,e,i){t.width()>i&&(t.css({width:i}),$("div.modal-body",t).css({"overflow-x":"auto"})),$("div.modal-header, div.modal-body",t).each(function(){$(this).css("width","100%")});var n=$("div.modal-body",t),o=n.outerHeight()-n.height();$("div.modal-spacer",t).each(function(){o+=$(this).height()}),n.css({height:e-$("div.modal-header",t).outerHeight()-o})}($("div.modal-content",t),t.height(),o-2*r)}(n,n.outerHeight(),n.width()),n.on("click",function(t){$("div.modal-content").find(t.target).length<1&&void 0!==i&&i.modal("hide")})},hidden:function(){var t=$(this);t.off("click"),$("a[data-gtgt]",t).off("click"),t.remove()}}).modal()}}(),adaptive:function(){var e,i={rus:{title:"Выберите свой населённый пункт, и читайте новости своего региона в отдельной рубрике",towns:"Города",centre:"Областные центры",submit:"Выбрать",cancel:"Отменить"},bel:{title:"Выберыце свой населены пункт, і чытайце навіны свайго рэгіёна ў асобнай рубрыцы",towns:"Гарады",centre:"Абласныя цэнтры",submit:"Выбраць",cancel:"Адмяніць"}},n="",o=function(e,i,n,o){return'<optgroup label="'+e+'">'+$.map(i,function(e){return'<option value="'+e.id+'"'+(e.id==o?' selected="selected"':"")+">"+t(e.name,n)+"</option>"}).join("")+"</optgroup>"},a=function(e){if(n.length>0)return n;var a=e.get_option("host"),r=e.get_option("lang"),s=e.get_option("geotarget")[0],c=[],d=[];return $.each(runCore.get_param("geotargets"),function(t,e){$.each(e.items,function(t,i){i.id==e.id&&c.push(i)}),d.push(e)}),n+='<div class="b-region-f"><form method="get" action="'+a+'"><p class="gray">'+e.i18n("title",i)+'</p><select name="gtgt" class="b-s">'+o(e.i18n("centre",i),c,r,s)+$.map(d,function(e){return o(t(e.name,r),e.items,r,s)}).join("")+'</select><div class="b-hold"><button type="submit" class="button"><span class="button__inner">'+e.i18n("submit",i)+'</span></button><span class="b-reset"><input type="reset" value="'+e.i18n("cancel",i)+'" class="b-reset-l" /></span></div></form></div>'};return function(){e||(e=$(a(this)).insertAfter("#geotarget_top_selector"),$('input[type="reset"]').click(function(){$("#geotarget_top_selector").trigger("click")}))}}(),responsive:function(){var i,n={rus:{head:"Ваш город",towns:"Города",centre:"Областные центры"},bel:{head:"Ваш горад",towns:"Гарады",centre:"Абласныя цэнтры"}},o="",a=function(e,i,n,o,a){return'<li class="b-aside-nav_item has_sub"><span class="b-aside-nav_link m-title"><span class="b-aside-nav_item_title">'+e+'</span></span><ul class="b-aside-nav">'+$.map(i,function(e){var i=e.id==a;return'<li id="gtgt'+e.id+'" class="b-aside-nav_item'+(i?" active":"")+'"><a href="'+n+"?gtgt="+e.id+'" data-gtgt="'+e.id+'" class="b-aside-nav_link"><span class="b-aside-nav_item_title">'+t(e.name,o)+"</span>"+(i?'<i class="b-icon icon-select"></i>':"")+"</a></li>"}).join("")+"</ul></li>"},r=function(e){if(o.length>0)return o;var i=e.get_option("host"),r=e.get_option("lang"),s=e.get_option("geotarget")[0],c=[],d=[];return $.each(runCore.get_param("geotargets"),function(t,e){$.each(e.items,function(t,i){i.id==e.id&&c.push(i)}),d.push(e)}),o+='<ul class="b-aside-nav" id="geo_list"><li class="b-aside-nav_item"><a href="#" class="b-aside-nav_link top_selector geotarget_selector"><i class="b-icon icon-back b-aside-nav_item_icon"></i><span class="b-aside-nav_item_title">'+e.i18n("head",n)+"</span></a></li>"+a(e.i18n("centre",n),c,i,r,s)+$.map(d,function(e){return a(t(e.name,r),e.items.splice(1),i,r,s)}).join("")+"</ul>"};return function(){if(i)return!0;i=$(r(this)).prependTo("body");var t=this;$("a[data-gtgt]",i).on("click",function(){var i=$(this);return t.cookie("geohint",-1,{expires:180}),e("Region","Change",i.text()),setTimeout(function(){window.location=window.location.protocol+"//www.tut.by/route/geotarget/"+i.attr("data-gtgt")+"/?l="+encodeURIComponent(window.location.toString())},100),!1}),this.events().once("init_geo_menu",function(e){t.events().on("show_geo_menu",function(){t.events().once("shown_menu",this.show,this),t.events().emit("show_main_menu",this)},e.opts),t.events().on("hide_geo_menu",e.opts.hide,e.opts)}),this.init_slide_menu("#geo_list",{sClass:"active_geo_list",activator:".geotarget_selector",init:function(e,i){t.events().emit("init_geo_menu",this,i)}})}}(),weather:function(){var e={rus:{close:"Закрыть",weather_belarus:"Беларусь",weather_cis:"СНГ и Балтия",weather_spa:"Курорты",weather_abroad:"Зарубежье"},bel:{close:"Зачынiць",weather_belarus:"Беларусь",weather_cis:"СНД і Балтыя",weather_spa:"Курорты",weather_abroad:"Замежжа"}},i="",n=function(t,i,n){return'<ul class="b-widget-tabs stand-tab" style="margin-bottom: 0px">'+$.map(i,function(i){var o=a(n,t.get_param("geotargets_"+i));return'<li class="widget-tabs__li'+(o?" active":"")+'"><a data-target="#tab_'+i+'" style="cursor: pointer">'+t.i18n(i,e)+"</a></li>"}).join("")+"</ul>"},o=function(){var e=function(t,e){var i,n,o,a,r,s;if(i=t.length,1>=e||e>=i)return $.map(t,function(t){return[t]});for(n=Math.ceil(i/e),o=(o=n*e-i)?e-o:e+1,a=[],r=0,s=0;s==o?n-=1:0,i>r;r+=n,s++)a.push(t.slice(r,r+n));return a},i=function(i){return function(n,o,a,r,s){var c=function(e){return"<ul>"+$.map(e,function(e){return'<li id="wtgt'+e.id+'"'+(e.id==r?' class="current"':"")+'><a href="'+o+"?wtgt="+e.id+'">'+t(e.name,a)+"</a></li>"}).join("")+"</ul>"};return'<table id="tab_'+i+'" cellspacing="0" cellpadding="0" border="0"><tr>'+$.map(e(n[0].items.sort(function(t,e){return t.name[a]>e.name[a]?1:t.name[a]<e.name[a]?-1:0}),s),function(t){return"<td>"+c(t)+"</td>"}).join("")+"</tr></table>"}};return{weather_belarus:function(e,i,n,o){var a=function(e){return'<div class="gs_title">'+t(e.name,n)+"</div><ul>"+$.map(e.items,function(e){return'<li id="wtgt'+e.id+'"'+(e.id==o?' class="current"':"")+'><a href="?wtgt='+e.id+'">'+t(e.name,n)+"</a></li>"}).join("")+"</ul>"};return'<table id="tab_weather_belarus" cellspacing="0" cellpadding="0" border="0"><tr>'+$.map(e,function(t){return"<td>"+a(t)+"</td>"}).join("")+"</tr></table>"},weather_cis:i("weather_cis"),weather_spa:i("weather_spa"),weather_abroad:i("weather_abroad")}}(),a=function s(t,e){var i=!1;return $.each(e,function(e,n){return n.id==t?i=!0:n.items&&(i=s(t,n.items)),!i}),i},r=function(t){if(i.length>0)return i;var a=t.get_option("host"),r=t.get_option("lang"),s=t.get_option("weathertarget"),c=["weather_belarus","weather_cis","weather_spa","weather_abroad"],d=0;return c=$.grep(c,function(e){var i=t.get_param("geotargets_"+e);return i&&i.length>0?(d=Math.max(d,i.length),!0):!1}),i+='<div id="geoselector" class="modal"><div class="modal-content"><div class="modal-content-inner"><div class="modal-header"><div class="content"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">'+t.i18n("close",e)+"</button>"+n(t,c,s)+'</div></div><div class="modal-spacer"></div><div class="modal-body"><div class="content">'+$.map(c,function(e){return o[e](t.get_param("geotargets_"+e),a,r,s,d)}).join("")+'</div></div><div class="modal-spacer"></div></div></div></div>'};return function(){var t=$(r(this)).prependTo("body").on({show:function(){var e=$(this),i=0;!function(t,e,n){var o=$(window).height(),a=$(window).width(),r=Math.max(20,Math.floor((o-e)/2)),s=Math.max(20,Math.round((a-n)/2));t.css("fixed"==t.css("position")?{top:r,bottom:r}:{top:r+$(document).scrollTop(),bottom:r}),function(t,e,n){t.width()>n&&(t.css({width:n}),$("div.modal-body",t).css({"overflow-x":"auto"})),$("div.modal-header, div.modal-body",t).each(function(){$(this).css("width","100%")});var o=$("div.modal-body",t),a=o.outerHeight()-o.height();$("div.modal-spacer",t).each(function(){a+=$(this).height()}),i=e-$("div.modal-header",t).outerHeight()-a,o.css({height:i})}($("div.modal-content",t),t.height(),a-2*s)}(e,e.outerHeight(),e.width()),function(t){var i=t.filter(".active")||t.filter(":first");i.removeClass("active").addClass("active");var n=$("a[data-target]",i).attr("data-target");$("table[id^=tab_]",e).not(n).hide()}($("a[data-target]",e).parent("li").reverse()),$("a[data-target]",e).removeAttr("href").on({click:function(t){var n=$(this),o=n.parent("li");if(t.preventDefault(),!o.hasClass("active")){$("table"+n.attr("data-target"),e).show(),$("a[data-target]",e).parent("li.active").each(function(){var t=$(this);t.removeClass("active"),$("table"+$("a[data-target]",t).attr("data-target"),e).hide()}),o.addClass("active");var a=Math.min($("table"+n.attr("data-target"),e).height(),i);$("div.modal-body",e).css({height:a})}}}),e.on("click",function(e){$("div.modal-content").find(e.target).length<1&&void 0!==t&&t.modal("hide")})},hidden:function(){var t=$(this);t.off("click"),t.remove()}}).modal()}}()};return function(t){return"function"!=typeof i[t]&&(t="desktop"),i[t].apply(this)}}()})}()}