(self.webpackChunkam_app_shell=self.webpackChunkam_app_shell||[]).push([[94],{8094:(m,r,o)=>{o.r(r),o.d(r,{ToolbarMobileComponent:()=>g});var a=o(3595),n=o(7970),c=o(6449);const s=function(t){return{active:t}};function p(t,l){if(1&t){const e=n.\u0275\u0275getCurrentView();n.\u0275\u0275elementStart(0,"li")(1,"button",6),n.\u0275\u0275listener("click",function(){const v=n.\u0275\u0275restoreView(e).$implicit,C=n.\u0275\u0275nextContext();return n.\u0275\u0275resetView(C.goToApp(v.alias))}),n.\u0275\u0275text(2),n.\u0275\u0275elementEnd()()}if(2&t){const e=l.$implicit;n.\u0275\u0275advance(1),n.\u0275\u0275property("ngClass",n.\u0275\u0275pureFunction1(2,s,e.active)),n.\u0275\u0275advance(1),n.\u0275\u0275textInterpolate1(" ",e.title," ")}}const _=function(t){return{opened:t}};let g=(()=>{class t{get navItems(){return this.appShellService.navItems}constructor(e){this.appShellService=e,this.opened=!1}goToApp(e){this.opened=!1,this.appShellService.goToApp(e)}toggleMenu(){this.opened=!this.opened}}return t.\u0275fac=function(e){return new(e||t)(n.\u0275\u0275directiveInject(c.c))},t.\u0275cmp=n.\u0275\u0275defineComponent({type:t,selectors:[["app-toolbar-mobile"]],standalone:!0,features:[n.\u0275\u0275StandaloneFeature],decls:11,vars:4,consts:[[1,"nav"],[1,"nav-header"],[1,"nav-title"],[1,"nav-burger","reset-button",3,"click"],[1,"nav-list",3,"ngClass"],[4,"ngFor","ngForOf"],[1,"nav-button","reset-button",3,"ngClass","click"]],template:function(e,i){1&e&&(n.\u0275\u0275elementStart(0,"nav",0)(1,"div",1)(2,"div",2),n.\u0275\u0275text(3,"Mobile Logo"),n.\u0275\u0275elementEnd()(),n.\u0275\u0275elementStart(4,"button",3),n.\u0275\u0275listener("click",function(){return i.toggleMenu()}),n.\u0275\u0275elementStart(5,"label"),n.\u0275\u0275element(6,"span")(7,"span")(8,"span"),n.\u0275\u0275elementEnd()(),n.\u0275\u0275elementStart(9,"ul",4),n.\u0275\u0275template(10,p,3,4,"li",5),n.\u0275\u0275elementEnd()()),2&e&&(n.\u0275\u0275advance(9),n.\u0275\u0275property("ngClass",n.\u0275\u0275pureFunction1(2,_,i.opened)),n.\u0275\u0275advance(1),n.\u0275\u0275property("ngForOf",i.navItems()))},dependencies:[a.CommonModule,a.NgClass,a.NgForOf],styles:[".nav[_ngcontent-%COMP%]{font-family:Segoe UI;width:100%;background-color:#ad19d2;display:flex;align-items:center}.nav[_ngcontent-%COMP%] > .nav-header[_ngcontent-%COMP%]{flex:.95;padding-left:1rem}.nav[_ngcontent-%COMP%] > .nav-header[_ngcontent-%COMP%] > .nav-title[_ngcontent-%COMP%]{font-size:22px;color:#fff}.nav[_ngcontent-%COMP%] > .nav-list[_ngcontent-%COMP%]{display:flex;gap:2rem}.nav[_ngcontent-%COMP%] > .nav-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{list-style-type:none}.nav-button[_ngcontent-%COMP%]{color:#efefef}.nav-button.active[_ngcontent-%COMP%], .nav-button[_ngcontent-%COMP%]:hover{text-decoration:underline}@media (max-width: 1080px){.nav[_ngcontent-%COMP%]{padding:1rem}.nav[_ngcontent-%COMP%] > .nav-burger[_ngcontent-%COMP%]{display:inline-block;position:absolute;right:0;top:0;padding-top:.2rem}.nav[_ngcontent-%COMP%] > .nav-burger[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{display:inline-block;width:50px;height:50px;padding:13px}.nav[_ngcontent-%COMP%] > .nav-burger[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{cursor:pointer;display:block;width:25px;height:10px;border-top:2px solid #eee}.nav[_ngcontent-%COMP%] > .nav-list[_ngcontent-%COMP%]{z-index:1;position:absolute;display:flex;flex-direction:column;gap:1rem;width:100%;background-color:#ad19d2;height:0;transition:all .3s ease-in;top:40px;left:0;overflow:hidden}.nav[_ngcontent-%COMP%] > .nav-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{width:100%;margin-top:1.5rem}.nav[_ngcontent-%COMP%] > .nav-list.opened[_ngcontent-%COMP%]{height:calc(100vh - 50px)}}"],changeDetection:0}),t})()}}]);