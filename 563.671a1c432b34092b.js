(self.webpackChunkam_app_shell=self.webpackChunkam_app_shell||[]).push([[563,993],{1993:(j,m,d)=>{d.r(m),d.d(m,{takeUntilDestroyed:()=>S,toObservable:()=>w,toSignal:()=>V});var s=d(7970),C=d(3635),k=d(5893);function S(t){t||((0,s.assertInInjectionContext)(S),t=(0,s.inject)(s.DestroyRef));const e=new C.Observable(r=>t.onDestroy(r.next.bind(r)));return r=>r.pipe((0,k.takeUntil)(e))}function w(t,e){!e?.injector&&(0,s.assertInInjectionContext)(w);const r=e?.injector??(0,s.inject)(s.Injector),n=new C.ReplaySubject(1),o=(0,s.effect)(()=>{let l;try{l=t()}catch(a){return void(0,s.untracked)(()=>n.error(a))}(0,s.untracked)(()=>n.next(l))},{injector:r,manualCleanup:!0});return r.get(s.DestroyRef).onDestroy(()=>{o.destroy(),n.complete()}),n.asObservable()}class P extends Error{constructor(e,r){super(function A(t,e){return`NG0${Math.abs(t)}${e?": "+e:""}`}(e,r)),this.code=e}}function V(t,e){const r=!e?.manualCleanup;r&&!e?.injector&&(0,s.assertInInjectionContext)(V);const n=r?e?.injector?.get(s.DestroyRef)??(0,s.inject)(s.DestroyRef):null;let o;o=(0,s.signal)(e?.requireSync?{kind:0}:{kind:1,value:e?.initialValue});const l=t.subscribe({next:a=>o.set({kind:1,value:a}),error:a=>o.set({kind:2,error:a})});return n?.onDestroy(l.unsubscribe.bind(l)),(0,s.computed)(()=>{const a=o();switch(a.kind){case 1:return a.value;case 2:throw a.error;case 0:throw new P(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}}}]);