var wc=Object.defineProperty,Lc=(e,t,i)=>t in e?wc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Cc=(e,t,i)=>Lc(e,t+"",i),E={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},L={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},Cd={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},Rd=Object.entries(Cd),s=Rd.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),Rc={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},ft=Rd.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{...Rc});Object.entries(ft).reduce((e,[t,i])=>{const a=s[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});var Dc=Object.entries(s).reduce((e,[t,i])=>{const a=ft[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),Be={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},ki={DISABLED:"disabled",SHOWING:"showing"},xn={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},ae={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},Pe={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},xc={FULLSCREEN:"fullscreen"};function Oc(e){return e?.map(Uc).join(" ")}function Pc(e){return e?.split(/\s+/).map(Nc)}function Uc(e){if(e){const{id:t,width:i,height:a}=e;return[t,i,a].filter(r=>r!=null).join(":")}}function Nc(e){if(e){const[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function Hc(e){return e?.map(Wc).join(" ")}function Bc(e){return e?.split(/\s+/).map($c)}function Wc(e){if(e){const{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(n=>n!=null).join(":")}}function $c(e){if(e){const[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function Fc(e){return e.replace(/[-_]([a-z])/g,(t,i)=>i.toUpperCase())}function Zs(e){return typeof e=="number"&&!Number.isNaN(e)&&Number.isFinite(e)}function Dd(e){return typeof e!="string"?!1:!isNaN(e)&&!isNaN(parseFloat(e))}var xd=e=>new Promise(t=>setTimeout(t,e)),Vc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function On(e){return String(e).replace(/[&<>"']/g,t=>Vc[t])}var Kc={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."},xl,va={en:Kc},Si=((xl=globalThis.navigator)==null?void 0:xl.language)||"en",Gc=e=>{Si=e},qc=e=>{var t,i,a;const[r]=Si.split("-");return((t=va[Si])==null?void 0:t[e])||((i=va[r])==null?void 0:i[e])||((a=va.en)==null?void 0:a[e])||e},Yc=()=>{const[e]=Si.split("-");return va[Si]?Si:va[e]?e:"en"},v=(e,t={})=>qc(e).replace(/\{(\w+)\}/g,(i,a)=>a in t?String(t[a]):`{${a}}`),Ol=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],Pl=(e,t)=>{const i=v(e===1?Ol[t].singular:Ol[t].plural);return`${e} ${i}`},pa=e=>{if(!Zs(e))return"";const t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),n=[a.getHours(),a.getMinutes(),a.getSeconds()].map((o,l)=>o&&Pl(o,l)).filter(o=>o).join(", ");return i?v("{time} remaining",{time:n}):t===0?Pl(0,2):n};function Et(e,t){let i=!1;e<0&&(i=!0,e=0-e),e=e<0?0:e;let a=Math.floor(e%60),r=Math.floor(e/60%60),n=Math.floor(e/3600);const o=Math.floor(t/60%60),l=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),n=n>0||l>0?n+":":"",r=((n||o>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+n+r+a}var Od=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}},Pd=class extends Od{},Ul=class extends Pd{constructor(){super(...arguments),this.role=null}},Zc=class{observe(){}unobserve(){}disconnect(){}},Ud={createElement:function(){return new ka.HTMLElement},createElementNS:function(){return new ka.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(e){return!1}},ka={ResizeObserver:Zc,document:Ud,Node:Pd,Element:Ul,HTMLElement:class extends Ul{constructor(){super(...arguments),this.innerHTML=""}get content(){return new ka.DocumentFragment}},DocumentFragment:class extends Od{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(e){return null},setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(e){return{matches:!1,media:e}},DOMParser:class{parseFromString(t,i){return{body:{textContent:t}}}}},Nd="global"in globalThis&&globalThis?.global===globalThis||typeof window>"u"||typeof window.customElements>"u",Hd=Object.keys(ka).every(e=>e in globalThis),d=Nd&&!Hd?ka:globalThis,K=Nd&&!Hd?Ud:globalThis.document,Nl=new WeakMap,Qs=e=>{let t=Nl.get(e);return t||Nl.set(e,t=new Set),t},Bd=new d.ResizeObserver(e=>{for(const t of e)for(const i of Qs(t.target))i(t)});function Ci(e,t){Qs(e).add(t),Bd.observe(e)}function Ri(e,t){const i=Qs(e);i.delete(t),i.size||Bd.unobserve(e)}function oe(e){const t={};for(const i of e)t[i.name]=i.value;return t}function te(e){var t;return(t=Gn(e))!=null?t:Ui(e,"media-controller")}function Gn(e){var t;const{MEDIA_CONTROLLER:i}=L,a=e.getAttribute(i);if(a)return(t=gn(e))==null?void 0:t.getElementById(a)}var Wd=(e,t,i=".value")=>{const a=e.querySelector(i);a&&(a.textContent=t)},Qc=(e,t)=>{const i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},$d=(e,t)=>Qc(e,t)[0],Je=(e,t)=>!e||!t?!1:e?.contains(t)?!0:Je(e,t.getRootNode().host),Ui=(e,t)=>{if(!e)return null;const i=e.closest(t);return i||Ui(e.getRootNode().host,t)};function zs(e=document){var t;const i=e?.activeElement;return i?(t=zs(i.shadowRoot))!=null?t:i:null}function gn(e){var t;const i=(t=e?.getRootNode)==null?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function Fd(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){const n=getComputedStyle(r);if(i&&n.opacity==="0"||a&&n.visibility==="hidden"||n.display==="none")return!1;r=r.parentElement,t--}return!0}function zc(e,t,i,a){const r=a.x-i.x,n=a.y-i.y,o=r*r+n*n;if(o===0)return 0;const l=((e-i.x)*r+(t-i.y)*n)/o;return Math.max(0,Math.min(1,l))}function q(e,t){const i=Xc(e,a=>a===t);return i||Xs(e,t)}function Xc(e,t){var i,a;let r;for(r of(i=e.querySelectorAll("style:not([media])"))!=null?i:[]){let n;try{n=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(const o of n??[])if(t(o.selectorText))return o}}function Xs(e,t){var i,a;const r=(i=e.querySelectorAll("style:not([media])"))!=null?i:[],n=r?.[r.length-1];if(!n?.sheet)return console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};const o=n?.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length);return(a=n.sheet.cssRules)==null?void 0:a[o]}function O(e,t,i=Number.NaN){const a=e.getAttribute(t);return a!=null?+a:i}function W(e,t,i){const a=+i;if(i==null||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}O(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function I(e,t){return e.hasAttribute(t)}function M(e,t,i){if(i==null){e.hasAttribute(t)&&e.removeAttribute(t);return}I(e,t)!=i&&e.toggleAttribute(t,i)}function U(e,t,i=null){var a;return(a=e.getAttribute(t))!=null?a:i}function P(e,t,i){if(i==null){e.hasAttribute(t)&&e.removeAttribute(t);return}const a=`${i}`;U(e,t,void 0)!==a&&e.setAttribute(t,a)}var Vd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},pe=(e,t,i)=>(Vd(e,t,"read from private field"),i?i.call(e):t.get(e)),Jc=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Ua=(e,t,i,a)=>(Vd(e,t,"write to private field"),t.set(e,i),i),J;function jc(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}var bn=class extends d.HTMLElement{constructor(){if(super(),Jc(this,J,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=oe(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[L.MEDIA_CONTROLLER,s.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===L.MEDIA_CONTROLLER&&(t&&((r=(a=pe(this,J))==null?void 0:a.unassociateElement)==null||r.call(a,this),Ua(this,J,null)),i&&this.isConnected&&(Ua(this,J,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(l=(o=pe(this,J))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,t;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),Ua(this,J,eh(this)),this.getAttribute(L.MEDIA_CONTROLLER)&&((t=(e=pe(this,J))==null?void 0:e.associateElement)==null||t.call(e,this)),pe(this,J)&&(pe(this,J).addEventListener("pointerdown",this),pe(this,J).addEventListener("click",this),pe(this,J).hasAttribute("tabindex")||(pe(this,J).tabIndex=0))}disconnectedCallback(){var e,t,i,a;this.getAttribute(L.MEDIA_CONTROLLER)&&((t=(e=pe(this,J))==null?void 0:e.unassociateElement)==null||t.call(e,this)),(i=pe(this,J))==null||i.removeEventListener("pointerdown",this),(a=pe(this,J))==null||a.removeEventListener("click",this),Ua(this,J,null)}handleEvent(e){var t;const i=(t=e.composedPath())==null?void 0:t[0];if(["video","media-controller"].includes(i?.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:r,clientY:n}=e,{left:o,top:l,width:u,height:h}=this.getBoundingClientRect(),g=r-o,_=n-l;if(g<0||_<0||g>u||_>h||u===0&&h===0)return;const p=this._pointerType||"mouse";if(this._pointerType=void 0,p===xn.TOUCH){this.handleTap(e);return}else if(p===xn.MOUSE||p===xn.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return I(this,s.MEDIA_PAUSED)}set mediaPaused(e){M(this,s.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){const t=this.mediaPaused?E.MEDIA_PLAY_REQUEST:E.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new d.CustomEvent(t,{composed:!0,bubbles:!0}))}};J=new WeakMap;bn.shadowRootOptions={mode:"open"};bn.getTemplateHTML=jc;function eh(e){var t;const i=e.getAttribute(L.MEDIA_CONTROLLER);return i?(t=e.getRootNode())==null?void 0:t.getElementById(i):Ui(e,"media-controller")}d.customElements.get("media-gesture-receiver")||d.customElements.define("media-gesture-receiver",bn);var Hl=bn,Js=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},$=(e,t,i)=>(Js(e,t,"read from private field"),i?i.call(e):t.get(e)),j=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Ee=(e,t,i,a)=>(Js(e,t,"write to private field"),t.set(e,i),i),Te=(e,t,i)=>(Js(e,t,"access private method"),i),Qi,qr,Xt,Di,gi,qn,Jt,ja,Yn,Kd,Zn,Gd,Sa,_n,An,js,xi,ya,tt,er,b={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function th(e){return`
    <style>
      
      :host([${s.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${b.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${b.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${b.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${b.AUDIO}])[${b.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${b.AUDIO}])[${b.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${b.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${b.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${b.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${b.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${b.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${b.USER_INACTIVE}]:not([${s.MEDIA_PAUSED}]):not([${s.MEDIA_IS_AIRPLAYING}]):not([${s.MEDIA_IS_CASTING}]):not([${b.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${b.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${b.USER_INACTIVE}]:not([${b.NO_AUTOHIDE}]):not([${s.MEDIA_PAUSED}]):not([${s.MEDIA_IS_CASTING}]):not([${b.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${b.USER_INACTIVE}][${b.AUTOHIDE_OVER_CONTROLS}]:not([${b.NO_AUTOHIDE}]):not([${s.MEDIA_PAUSED}]):not([${s.MEDIA_IS_CASTING}]):not([${b.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      
      :host(:not([${b.AUDIO}])[${s.MEDIA_HAS_PLAYED}]) slot[name=poster],
      :host(:not([${b.AUDIO}])[${s.MEDIA_STREAM_TYPE}="${Pe.ON_DEMAND}"][${s.MEDIA_CURRENT_TIME}]:not([${s.MEDIA_CURRENT_TIME}="0"])) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${Hl.shadowRootOptions.mode}">
          ${Hl.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}var ih=Object.values(s),ah="sm:384 md:576 lg:768 xl:960";function rh(e){qd(e.target,e.contentRect.width)}function qd(e,t){var i;if(!e.isConnected)return;const a=(i=e.getAttribute(b.BREAKPOINTS))!=null?i:ah,r=nh(a),n=sh(r,t);let o=!1;if(Object.keys(r).forEach(l=>{if(n.includes(l)){e.hasAttribute(`breakpoint${l}`)||(e.setAttribute(`breakpoint${l}`,""),o=!0);return}e.hasAttribute(`breakpoint${l}`)&&(e.removeAttribute(`breakpoint${l}`),o=!0)}),o){const l=new CustomEvent(ft.BREAKPOINTS_CHANGE,{detail:n});e.dispatchEvent(l)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(ft.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function nh(e){const t=e.split(/\s+/);return Object.fromEntries(t.map(i=>i.split(":")))}function sh(e,t){return Object.keys(e).filter(i=>t>=parseInt(e[i]))}var Tn=class extends d.HTMLElement{constructor(){if(super(),j(this,Yn),j(this,Zn),j(this,Sa),j(this,An),j(this,xi),j(this,Qi,void 0),j(this,qr,0),j(this,Xt,null),j(this,Di,null),j(this,gi,void 0),this.breakpointsComputed=!1,j(this,qn,e=>{const t=this.media;for(const i of e){if(i.type!=="childList")continue;const a=i.removedNodes;for(const r of a){if(r.slot!="media"||i.target!=this)continue;let n=i.previousSibling&&i.previousSibling.previousElementSibling;if(!n||!t)this.mediaUnsetCallback(r);else{let o=n.slot!=="media";for(;(n=n.previousSibling)!==null;)n.slot=="media"&&(o=!1);o&&this.mediaUnsetCallback(r)}}if(t)for(const r of i.addedNodes)r===t&&this.handleMediaUpdated(t)}}),j(this,Jt,!1),j(this,ja,e=>{$(this,Jt)||(setTimeout(()=>{rh(e),Ee(this,Jt,!1)},0),Ee(this,Jt,!0))}),j(this,tt,void 0),j(this,er,()=>{if(!$(this,tt).assignedElements({flatten:!0}).length){$(this,Xt)&&this.mediaUnsetCallback($(this,Xt));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=oe(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}Ee(this,Qi,new MutationObserver($(this,qn)))}static get observedAttributes(){return[b.AUTOHIDE,b.GESTURES_DISABLED].concat(ih).filter(e=>![s.MEDIA_RENDITION_LIST,s.MEDIA_AUDIO_TRACK_LIST,s.MEDIA_CHAPTERS_CUES,s.MEDIA_WIDTH,s.MEDIA_HEIGHT,s.MEDIA_ERROR,s.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==b.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return e?.nodeName=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(Ee(this,Xt,e),e.localName.includes("-")&&await d.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;$(this,Qi).observe(this,{childList:!0,subtree:!0}),Ci(this,$(this,ja));const t=this.getAttribute(b.AUDIO)!=null,i=v(t?"audio player":"video player");this.setAttribute("role","region"),this.setAttribute("aria-label",i),this.handleMediaUpdated(this.media),this.setAttribute(b.USER_INACTIVE,""),qd(this,this.getBoundingClientRect().width);const a=this.querySelector(":scope > slot[slot=media]");a&&(Ee(this,tt,a),$(this,tt).addEventListener("slotchange",$(this,er))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=d.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;Ri(this,$(this,ja)),clearTimeout($(this,Di)),$(this,Qi).disconnect(),this.media&&this.mediaUnsetCallback(this.media),(e=d.window)==null||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),$(this,tt)&&($(this,tt).removeEventListener("slotchange",$(this,er)),Ee(this,tt,null)),Ee(this,Jt,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){Ee(this,Xt,null)}handleEvent(e){switch(e.type){case"pointerdown":Ee(this,qr,e.timeStamp);break;case"pointermove":Te(this,Yn,Kd).call(this,e);break;case"pointerup":Te(this,Zn,Gd).call(this,e);break;case"mouseleave":Te(this,Sa,_n).call(this);break;case"mouseup":this.removeAttribute(b.KEYBOARD_CONTROL);break;case"keyup":Te(this,xi,ya).call(this),this.setAttribute(b.KEYBOARD_CONTROL,"");break}}set autohide(e){const t=Number(e);Ee(this,gi,isNaN(t)?0:t)}get autohide(){return($(this,gi)===void 0?2:$(this,gi)).toString()}get breakpoints(){return U(this,b.BREAKPOINTS)}set breakpoints(e){P(this,b.BREAKPOINTS,e)}get audio(){return I(this,b.AUDIO)}set audio(e){M(this,b.AUDIO,e)}get gesturesDisabled(){return I(this,b.GESTURES_DISABLED)}set gesturesDisabled(e){M(this,b.GESTURES_DISABLED,e)}get keyboardControl(){return I(this,b.KEYBOARD_CONTROL)}set keyboardControl(e){M(this,b.KEYBOARD_CONTROL,e)}get noAutohide(){return I(this,b.NO_AUTOHIDE)}set noAutohide(e){M(this,b.NO_AUTOHIDE,e)}get autohideOverControls(){return I(this,b.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){M(this,b.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return I(this,b.USER_INACTIVE)}set userInteractive(e){M(this,b.USER_INACTIVE,e)}};Qi=new WeakMap;qr=new WeakMap;Xt=new WeakMap;Di=new WeakMap;gi=new WeakMap;qn=new WeakMap;Jt=new WeakMap;ja=new WeakMap;Yn=new WeakSet;Kd=function(e){if(e.pointerType!=="mouse"&&e.timeStamp-$(this,qr)<250)return;Te(this,An,js).call(this),clearTimeout($(this,Di));const t=this.hasAttribute(b.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&Te(this,xi,ya).call(this)};Zn=new WeakSet;Gd=function(e){if(e.pointerType==="touch"){const t=!this.hasAttribute(b.USER_INACTIVE);[this,this.media].includes(e.target)&&t?Te(this,Sa,_n).call(this):Te(this,xi,ya).call(this)}else e.composedPath().some(t=>["media-play-button","media-fullscreen-button"].includes(t?.localName))&&Te(this,xi,ya).call(this)};Sa=new WeakSet;_n=function(){if($(this,gi)<0||this.hasAttribute(b.USER_INACTIVE))return;this.setAttribute(b.USER_INACTIVE,"");const e=new d.CustomEvent(ft.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)};An=new WeakSet;js=function(){if(!this.hasAttribute(b.USER_INACTIVE))return;this.removeAttribute(b.USER_INACTIVE);const e=new d.CustomEvent(ft.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)};xi=new WeakSet;ya=function(){Te(this,An,js).call(this),clearTimeout($(this,Di));const e=parseInt(this.autohide);e<0||Ee(this,Di,setTimeout(()=>{Te(this,Sa,_n).call(this)},e*1e3))};tt=new WeakMap;er=new WeakMap;Tn.shadowRootOptions={mode:"open"};Tn.getTemplateHTML=th;d.customElements.get("media-container")||d.customElements.define("media-container",Tn);var eo=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ut=(e,t,i)=>(eo(e,t,"read from private field"),t.get(e)),Ke=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},to=(e,t,i,a)=>(eo(e,t,"write to private field"),t.set(e,i),i),kt=(e,t,i)=>(eo(e,t,"access private method"),i),Yr,Ia,$t,tr,Qn,zn,Yd,Xn,Zd,Jn,Qd,jn,zd,es,Xd;function oh(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `}function lh(e){return`
    <slot id="content"></slot>
  `}var Fi={OPEN:"open",ANCHOR:"anchor"},Ni=class extends d.HTMLElement{constructor(){super(),Ke(this,tr),Ke(this,zn),Ke(this,Xn),Ke(this,Jn),Ke(this,jn),Ke(this,es),Ke(this,Yr,!1),Ke(this,Ia,null),Ke(this,$t,null)}static get observedAttributes(){return[Fi.OPEN,Fi.ANCHOR]}get open(){return I(this,Fi.OPEN)}set open(e){M(this,Fi.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":kt(this,Jn,Qd).call(this,e);break;case"focusout":kt(this,jn,zd).call(this,e);break;case"keydown":kt(this,es,Xd).call(this,e);break}}connectedCallback(){kt(this,tr,Qn).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,t,i){kt(this,tr,Qn).call(this),e===Fi.OPEN&&i!==t&&(this.open?kt(this,zn,Yd).call(this):kt(this,Xn,Zd).call(this))}focus(){to(this,Ia,zs());const e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;const i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');i?.focus()}get keysUsed(){return["Escape","Tab"]}};Yr=new WeakMap;Ia=new WeakMap;$t=new WeakMap;tr=new WeakSet;Qn=function(){if(!Ut(this,Yr)&&(to(this,Yr,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);const e=oe(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{const{style:t}=q(this.shadowRoot,":host");t.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};zn=new WeakSet;Yd=function(){var e;(e=Ut(this,$t))==null||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};Xn=new WeakSet;Zd=function(){var e;(e=Ut(this,$t))==null||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};Jn=new WeakSet;Qd=function(e){to(this,$t,e.relatedTarget),Je(this,e.relatedTarget)||(this.open=!this.open)};jn=new WeakSet;zd=function(e){var t;Je(this,e.relatedTarget)||((t=Ut(this,Ia))==null||t.focus(),Ut(this,$t)&&Ut(this,$t)!==e.relatedTarget&&this.open&&(this.open=!1))};es=new WeakSet;Xd=function(e){var t,i,a,r,n;const{key:o,ctrlKey:l,altKey:u,metaKey:h}=e;l||u||h||this.keysUsed.includes(o)&&(e.preventDefault(),e.stopPropagation(),o==="Tab"?(e.shiftKey?(i=(t=this.previousElementSibling)==null?void 0:t.focus)==null||i.call(t):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):o==="Escape"&&((n=Ut(this,Ia))==null||n.focus(),this.open=!1))};Ni.shadowRootOptions={mode:"open"};Ni.getTemplateHTML=oh;Ni.getSlotTemplateHTML=lh;d.customElements.get("media-chrome-dialog")||d.customElements.define("media-chrome-dialog",Ni);var dh=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},je=(e,t,i)=>(dh(e,t,"read from private field"),i?i.call(e):t.get(e)),Bl=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},jt,ei,zi={HOTKEYS:"hotkeys"},uh=[{keys:[{key:" ",label:"Space"},{key:"k"}],description:"Toggle Playback"},{keys:[{key:"m"}],description:"Toggle mute"},{keys:[{key:"f"}],description:"Toggle fullscreen"},{keys:[{key:"c"}],description:"Toggle captions or subtitles, if available"},{keys:[{key:"p"}],description:"Toggle Picture in Picture"},{keys:[{key:"ArrowLeft",label:"←"},{key:"j"}],description:"Seek back 10s"},{keys:[{key:"ArrowRight",label:"→"},{key:"l"}],description:"Seek forward 10s"},{keys:[{key:"ArrowUp",label:"↑"}],description:"Turn volume up"},{keys:[{key:"ArrowDown",label:"↓"}],description:"Turn volume down"},{keys:[{key:"<",label:"< (SHIFT+,)"}],description:"Decrease playback rate"},{keys:[{key:">",label:"> (SHIFT+.)"}],description:"Increase playback rate"},{keys:[{key:"shift+/",label:"SHIFT+/"}],description:"Show keyboard shortcuts"}];function io(e){return e===" "?"nospace":`no${e.toLowerCase()}`}function ch(e){const t=new Set(e?.split(/\s+/));return uh.map(({keys:i,description:a})=>({keys:i.filter(({key:r})=>!t.has(io(r))),description:a})).filter(({keys:i})=>i.length)}function hh(e){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${Jd(e[zi.HOTKEYS])}
    </slot>
  `}function Jd(e){return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${ch(e).map(({keys:i,description:a})=>`
        <tr>
          <td>
            <div class="key-combo">${i.map(({key:n,label:o=n},l)=>l>0?`<span class="key-separator">or</span><span class="key">${o}</span>`:`<span class="key">${o}</span>`).join("")}</div>
          </td>
          <td class="description">${a}</td>
        </tr>
      `).join("")}</table>
  `}var jd=class extends Ni{constructor(){super(...arguments),Bl(this,jt,e=>{var t;if(!this.open)return;const i=(t=this.shadowRoot)==null?void 0:t.querySelector("#content");if(!i)return;const a=e.composedPath(),r=a[0]===this||a.includes(this),n=a.includes(i);r&&!n&&(this.open=!1)}),Bl(this,ei,e=>{if(!this.open)return;const t=e.shiftKey&&(e.key==="/"||e.key==="?");(e.key==="Escape"||t)&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(this.open=!1,e.preventDefault(),e.stopPropagation())})}static get observedAttributes(){return[...super.observedAttributes,zi.HOTKEYS]}get hotkeys(){var e;return(e=U(this,zi.HOTKEYS))!=null?e:void 0}set hotkeys(e){P(this,zi.HOTKEYS,e)}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",je(this,jt)),document.addEventListener("keydown",je(this,ei)))}disconnectedCallback(){this.removeEventListener("click",je(this,jt)),document.removeEventListener("keydown",je(this,ei))}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),e==="open")this.open?(this.addEventListener("click",je(this,jt)),document.addEventListener("keydown",je(this,ei))):(this.removeEventListener("click",je(this,jt)),document.removeEventListener("keydown",je(this,ei)));else if(e===zi.HOTKEYS&&i!==t){const r=(a=this.shadowRoot)==null?void 0:a.querySelector("#content");r&&(r.innerHTML=Jd(i))}}};jt=new WeakMap;ei=new WeakMap;jd.getSlotTemplateHTML=hh;d.customElements.get("media-keyboard-shortcuts-dialog")||d.customElements.define("media-keyboard-shortcuts-dialog",jd);var eu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Q=(e,t,i)=>(eu(e,t,"read from private field"),i?i.call(e):t.get(e)),Vi=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Na=(e,t,i,a)=>(eu(e,t,"write to private field"),t.set(e,i),i),ti,ii,Zr,xt,qe,it,ao=class{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){Vi(this,qe),Vi(this,ti,void 0),Vi(this,ii,void 0),Vi(this,Zr,void 0),Vi(this,xt,new Set),Na(this,ti,e),Na(this,ii,t),Na(this,Zr,new Set(i))}[Symbol.iterator](){return Q(this,qe,it).values()}get length(){return Q(this,qe,it).size}get value(){var e;return(e=[...Q(this,qe,it)].join(" "))!=null?e:""}set value(e){var t;e!==this.value&&(Na(this,xt,new Set),this.add(...(t=e?.split(" "))!=null?t:[]))}toString(){return this.value}item(e){return[...Q(this,qe,it)][e]}values(){return Q(this,qe,it).values()}forEach(e,t){Q(this,qe,it).forEach(e,t)}add(...e){var t,i;e.forEach(a=>Q(this,xt).add(a)),!(this.value===""&&!((t=Q(this,ti))!=null&&t.hasAttribute(`${Q(this,ii)}`)))&&((i=Q(this,ti))==null||i.setAttribute(`${Q(this,ii)}`,`${this.value}`))}remove(...e){var t;e.forEach(i=>Q(this,xt).delete(i)),(t=Q(this,ti))==null||t.setAttribute(`${Q(this,ii)}`,`${this.value}`)}contains(e){return Q(this,qe,it).has(e)}toggle(e,t){return typeof t<"u"?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}};ti=new WeakMap;ii=new WeakMap;Zr=new WeakMap;xt=new WeakMap;qe=new WeakSet;it=function(){return Q(this,xt).size?Q(this,xt):Q(this,Zr)};var mh=(e="")=>e.split(/\s+/),tu=(e="")=>{const[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:t==="cc"?Be.CAPTIONS:Be.SUBTITLES,language:i,label:r}},kn=(e="",t={})=>mh(e).map(i=>{const a=tu(i);return{...t,...a}}),iu=e=>e?Array.isArray(e)?e.map(t=>typeof t=="string"?tu(t):t):typeof e=="string"?kn(e):[e]:[],ts=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${e==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,Ma=(e=[])=>Array.prototype.map.call(e,ts).join(" "),vh=(e,t)=>i=>i[e]===t,au=e=>{const t=Object.entries(e).map(([i,a])=>vh(i,a));return i=>t.every(a=>a(i))},Ea=(e,t=[],i=[])=>{const a=iu(i).map(au),r=n=>a.some(o=>o(n));Array.from(t).filter(r).forEach(n=>{n.mode=e})},Sn=(e,t=()=>!0)=>{if(!e?.textTracks)return[];const i=typeof t=="function"?t:au(t);return Array.from(e.textTracks).filter(i)},ru=e=>{var t;return!!((t=e.mediaSubtitlesShowing)!=null&&t.length)||e.hasAttribute(s.MEDIA_SUBTITLES_SHOWING)},ph=e=>{var t;const{media:i,fullscreenElement:a}=e;try{const r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){const n=(t=a[r])==null?void 0:t.call(a);if(n instanceof Promise)return n.catch(()=>{})}else i?.webkitEnterFullscreen?i.webkitEnterFullscreen():i?.requestFullscreen&&i.requestFullscreen()}catch(r){console.error(r)}},Wl="exitFullscreen"in K?"exitFullscreen":"webkitExitFullscreen"in K?"webkitExitFullscreen":"webkitCancelFullScreen"in K?"webkitCancelFullScreen":void 0,Eh=e=>{var t;const{documentElement:i}=e;if(Wl){const a=(t=i?.[Wl])==null?void 0:t.call(i);if(a instanceof Promise)return a.catch(()=>{})}},Xi="fullscreenElement"in K?"fullscreenElement":"webkitFullscreenElement"in K?"webkitFullscreenElement":void 0,fh=e=>{const{documentElement:t,media:i}=e,a=t?.[Xi];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===xc.FULLSCREEN?i:a},gh=e=>{var t;const{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;const n=fh(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let o=n.shadowRoot;if(!(Xi in o))return Je(n,r);for(;o?.[Xi];){if(o[Xi]===r)return!0;o=(t=o[Xi])==null?void 0:t.shadowRoot}}return!1},bh="fullscreenEnabled"in K?"fullscreenEnabled":"webkitFullscreenEnabled"in K?"webkitFullscreenEnabled":void 0,_h=e=>{const{documentElement:t,media:i}=e;return!!t?.[bh]||i&&"webkitSupportsFullscreen"in i},Ha,ro=()=>{var e,t;return Ha||(Ha=(t=(e=K)==null?void 0:e.createElement)==null?void 0:t.call(e,"video"),Ha)},Ah=async(e=ro())=>{if(!e)return!1;const t=e.volume;e.volume=t/2+.1;const i=new AbortController,a=await Promise.race([Th(e,i.signal),kh(e,t)]);return i.abort(),a},Th=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),kh=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await xd(10)}return e.volume!==t},Sh=/.*Version\/.*Safari\/.*/.test(d.navigator.userAgent),nu=(e=ro())=>d.matchMedia("(display-mode: standalone)").matches&&Sh?!1:typeof e?.requestPictureInPicture=="function",su=(e=ro())=>_h({documentElement:K,media:e}),yh=su(),Ih=nu(),Mh=!!d.WebKitPlaybackTargetAvailabilityEvent,wh=!!d.chrome,Qr=e=>Sn(e.media,t=>[Be.SUBTITLES,Be.CAPTIONS].includes(t.kind)).sort((t,i)=>t.kind>=i.kind?1:-1),ou=e=>Sn(e.media,t=>t.mode===ki.SHOWING&&[Be.SUBTITLES,Be.CAPTIONS].includes(t.kind)),lu=(e,t)=>{const i=Qr(e),a=ou(e),r=!!a.length;if(i.length){if(t===!1||r&&t!==!0)Ea(ki.DISABLED,i,a);else if(t===!0||!r&&t!==!1){let n=i[0];const{options:o}=e;if(!o?.noSubtitlesLangPref){const g=d.localStorage.getItem("media-chrome-pref-subtitles-lang"),_=g?[g,...d.navigator.languages]:d.navigator.languages,p=i.filter(m=>_.some(A=>m.language.toLowerCase().startsWith(A.split("-")[0]))).sort((m,A)=>{const k=_.findIndex(C=>m.language.toLowerCase().startsWith(C.split("-")[0])),T=_.findIndex(C=>A.language.toLowerCase().startsWith(C.split("-")[0]));return k-T});p[0]&&(n=p[0])}const{language:l,label:u,kind:h}=n;Ea(ki.DISABLED,i,a),Ea(ki.SHOWING,i,[{language:l,label:u,kind:h}])}}},no=(e,t)=>e===t?!0:e==null||t==null||typeof e!=typeof t?!1:typeof e=="number"&&Number.isNaN(e)&&Number.isNaN(t)?!0:typeof e!="object"?!1:Array.isArray(e)?Lh(e,t):Object.entries(e).every(([i,a])=>i in t&&no(a,t[i])),Lh=(e,t)=>{const i=Array.isArray(e),a=Array.isArray(t);return i!==a?!1:i||a?e.length!==t.length?!1:e.every((r,n)=>no(r,t[n])):!0},Ch=Object.values(Pe),zr,Rh=Ah().then(e=>(zr=e,zr)),Dh=async(...e)=>{await Promise.all(e.filter(t=>t).map(async t=>{if(!("localName"in t&&t instanceof d.HTMLElement))return;const i=t.localName;if(!i.includes("-"))return;const a=d.customElements.get(i);a&&t instanceof a||(await d.customElements.whenDefined(i),d.customElements.upgrade(t))}))},xh=new d.DOMParser,Oh=e=>e&&(xh.parseFromString(e,"text/html").body.textContent||e),Ji={mediaError:{get(e,t){const{media:i}=e;if(t?.type!=="playing")return i?.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;const{media:a}=e;if(t?.type!=="playing")return(i=a?.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;const{media:r}=e;if(t?.type!=="playing")return(a=(i=r?.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;const{media:i}=e;return(t=i?.videoWidth)!=null?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;const{media:i}=e;return(t=i?.videoHeight)!=null?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;const{media:i}=e;return(t=i?.paused)!=null?t:!0},set(e,t){var i;const{media:a}=t;a&&(e?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){const{media:i}=e;return i?t?t.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;const{media:i}=e;return(t=i?.ended)!=null?t:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;const{media:i}=e;return(t=i?.playbackRate)!=null?t:1},set(e,t){const{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;const{media:i}=e;return(t=i?.muted)!=null?t:!1},set(e,t){const{media:i,options:{noMutedPref:a}={}}=t;if(i){i.muted=e;try{const r=d.localStorage.getItem("media-chrome-pref-muted")!==null,n=i.hasAttribute("muted");if(a){r&&d.localStorage.removeItem("media-chrome-pref-muted");return}if(n&&!r)return;d.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(r){console.debug("Error setting muted pref",r)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{const{options:{noMutedPref:i}}=t,{media:a}=t;if(!(!a||a.muted||i))try{const r=d.localStorage.getItem("media-chrome-pref-muted")==="true";Ji.mediaMuted.set(r,t),e(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaLoop:{get(e){const{media:t}=e;return t?.loop},set(e,t){const{media:i}=t;i&&(i.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;const{media:i}=e;return(t=i?.volume)!=null?t:1},set(e,t){const{media:i,options:{noVolumePref:a}={}}=t;if(i){try{e==null?d.localStorage.removeItem("media-chrome-pref-volume"):!i.hasAttribute("muted")&&!a&&d.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(r){console.debug("Error setting volume pref",r)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{const{options:{noVolumePref:i}}=t;if(!i)try{const{media:a}=t;if(!a)return;const r=d.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;Ji.mediaVolume.set(+r,t),e(+r)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(e){const{media:t}=e;return typeof t?.volume>"u"?"high":t.muted||t.volume===0?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;const{media:i}=e;return(t=i?.currentTime)!=null?t:0},set(e,t){const{media:i}=t;!i||!Zs(e)||(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata","seeking"]},mediaDuration:{get(e){const{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(t?.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){const{media:t}=e;return t?.readyState<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;const{media:i}=e;if(!((t=i?.seekable)!=null&&t.length))return;const a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;const{media:i}=e,a=(t=i?.buffered)!=null?t:[];return Array.from(a).map((r,n)=>[Number(a.start(n).toFixed(3)),Number(a.end(n).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){const{media:t,options:{defaultStreamType:i}={}}=e,a=[Pe.LIVE,Pe.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;const{streamType:r}=t;if(Ch.includes(r))return r===Pe.UNKNOWN?a:r;const n=t.duration;return n===1/0?Pe.LIVE:Number.isFinite(n)?Pe.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){const{media:t}=e;if(!t)return Number.NaN;const{targetLiveWindow:i}=t,a=Ji.mediaStreamType.get(e);return(i==null||Number.isNaN(i))&&a===Pe.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){const{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if(typeof t.liveEdgeStart=="number")return Number.isNaN(t.liveEdgeStart)?!1:t.currentTime>=t.liveEdgeStart;if(!(Ji.mediaStreamType.get(e)===Pe.LIVE))return!1;const r=t.seekable;if(!r)return!0;if(!r.length)return!1;const n=r.end(r.length-1)-i;return t.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(e){return Qr(e).map(({kind:t,label:i,language:a})=>({kind:t,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(e){return ou(e).map(({kind:t,label:i,language:a})=>({kind:t,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;const{media:r,options:n}=t;if(!r)return;const o=l=>{var u;!n.defaultSubtitles||l&&![Be.CAPTIONS,Be.SUBTITLES].includes((u=l?.track)==null?void 0:u.kind)||lu(t,!0)};return r.addEventListener("loadstart",o),(i=r.textTracks)==null||i.addEventListener("addtrack",o),(a=r.textTracks)==null||a.addEventListener("removetrack",o),()=>{var l,u;r.removeEventListener("loadstart",o),(l=r.textTracks)==null||l.removeEventListener("addtrack",o),(u=r.textTracks)==null||u.removeEventListener("removetrack",o)}}]},mediaChaptersCues:{get(e){var t;const{media:i}=e;if(!i)return[];const[a]=Sn(i,{kind:Be.CHAPTERS});return Array.from((t=a?.cues)!=null?t:[]).map(({text:r,startTime:n,endTime:o})=>({text:Oh(r),startTime:n,endTime:o}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;const{media:a}=t;if(!a)return;const r=a.querySelector('track[kind="chapters"][default][src]'),n=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r?.addEventListener("load",e),n?.addEventListener("load",e),()=>{r?.removeEventListener("load",e),n?.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;const{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(t=a.localName)!=null&&t.includes("-")?Je(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let n=r.pictureInPictureElement.shadowRoot;for(;n?.pictureInPictureElement;){if(n.pictureInPictureElement===a)return!0;n=(i=n.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(e,t){const{media:i}=t;if(i)if(e){if(!K.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const n=()=>{i.removeEventListener("loadedmetadata",o),i.preload="none"},o=()=>{i.requestPictureInPicture().catch(a),n()};i.addEventListener("loadedmetadata",o),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),n()},1e3)}else throw r}else throw r})}else K.pictureInPictureElement&&K.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;const{media:i}=e;return[...(t=i?.videoRenditions)!=null?t:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;const{media:r}=e;return(a=(i=r?.videoRenditions)==null?void 0:i[(t=r.videoRenditions)==null?void 0:t.selectedIndex])==null?void 0:a.id},set(e,t){const{media:i}=t;if(!i?.videoRenditions){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=e,r=Array.prototype.findIndex.call(i.videoRenditions,n=>n.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;const{media:i}=e;return[...(t=i?.audioTracks)!=null?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;const{media:a}=e;return(i=[...(t=a?.audioTracks)!=null?t:[]].find(r=>r.enabled))==null?void 0:i.id},set(e,t){const{media:i}=t;if(!i?.audioTracks){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=e;for(const r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(e){return gh(e)},set(e,t,i){var a,r;e?(ph(t),i.detail&&!((a=t.media)!=null&&a.inert)&&((r=t.media)==null||r.focus())):Eh(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;const{media:i}=e;return!i?.remote||((t=i.remote)==null?void 0:t.state)==="disconnected"?!1:i.remote.state==="connected"},set(e,t){var i,a;const{media:r}=t;if(r&&!(e&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!e&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(e,t){const{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&d.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){const{media:t}=e;if(!yh||!su(t))return ae.UNSUPPORTED}},mediaPipUnavailable:{get(e){const{media:t}=e;if(!Ih||!nu(t))return ae.UNSUPPORTED;if(t?.disablePictureInPicture)return ae.UNAVAILABLE}},mediaVolumeUnavailable:{get(e){const{media:t}=e;if(zr===!1||t?.volume==null)return ae.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{zr==null&&Rh.then(t=>e(t?void 0:ae.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;const{media:a}=e;if(!wh||!((i=a?.remote)!=null&&i.state))return ae.UNSUPPORTED;if(!(t==null||t==="available"))return ae.UNAVAILABLE},stateOwnersUpdateHandlers:[(e,t)=>{var i;const{media:a}=t;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(n=>{e({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?e({availability:null}):e({availability:"not-available"})}),()=>{var n;(n=a?.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(e,t){if(!Mh)return ae.UNSUPPORTED;if(t?.availability==="not-available")return ae.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;const{media:a}=t;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(n=>{e({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?e({availability:null}):e({availability:"not-available"})}),()=>{var n;(n=a?.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(e){var t;const{media:i}=e;if(!i?.videoRenditions)return ae.UNSUPPORTED;if(!((t=i.videoRenditions)!=null&&t.length))return ae.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;const{media:a}=e;if(!a?.audioTracks)return ae.UNSUPPORTED;if(((i=(t=a.audioTracks)==null?void 0:t.length)!=null?i:0)<=1)return ae.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){const{options:{mediaLang:t}={}}=e;return t??"en"}}},Ph={[E.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;const{media:o}=t,l=i??void 0;let u,h;if(o&&l!=null){const[m]=Sn(o,{kind:Be.METADATA,label:"thumbnails"}),A=Array.prototype.find.call((a=m?.cues)!=null?a:[],(k,T,C)=>T===0?k.endTime>l:T===C.length-1?k.startTime<=l:k.startTime<=l&&k.endTime>l);if(A){const k=/'^(?:[a-z]+:)?\/\//i.test(A.text)||(r=o?.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,T=new URL(A.text,k);h=new URLSearchParams(T.hash).get("#xywh").split(",").map($e=>+$e),u=T.href}}const g=e.mediaDuration.get(t);let p=(n=e.mediaChaptersCues.get(t).find((m,A,k)=>A===k.length-1&&g===m.endTime?m.startTime<=l&&m.endTime>=l:m.startTime<=l&&m.endTime>l))==null?void 0:n.text;return i!=null&&p==null&&(p=""),{mediaPreviewTime:l,mediaPreviewImage:u,mediaPreviewCoords:h,mediaPreviewChapter:p}},[E.MEDIA_PAUSE_REQUEST](e,t){e["mediaPaused"].set(!0,t)},[E.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;const o="mediaPaused",u=e.mediaStreamType.get(t)===Pe.LIVE,h=!((i=t.options)!=null&&i.noAutoSeekToLive),g=e.mediaTargetLiveWindow.get(t)>0;if(u&&h&&!g){const _=(a=e.mediaSeekable.get(t))==null?void 0:a[1];if(_){const p=(n=(r=t.options)==null?void 0:r.seekToLiveOffset)!=null?n:0,m=_-p;e.mediaCurrentTime.set(m,t)}}e[o].set(!1,t)},[E.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){const a="mediaPlaybackRate",r=i;e[a].set(r,t)},[E.MEDIA_MUTE_REQUEST](e,t){e["mediaMuted"].set(!0,t)},[E.MEDIA_UNMUTE_REQUEST](e,t){const i="mediaMuted";e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e[i].set(!1,t)},[E.MEDIA_LOOP_REQUEST](e,t,{detail:i}){const a="mediaLoop",r=!!i;return e[a].set(r,t),{mediaLoop:r}},[E.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){const a="mediaVolume",r=i;r&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e[a].set(r,t)},[E.MEDIA_SEEK_REQUEST](e,t,{detail:i}){const a="mediaCurrentTime",r=i;e[a].set(r,t)},[E.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;const n="mediaCurrentTime",o=(i=e.mediaSeekable.get(t))==null?void 0:i[1];if(Number.isNaN(Number(o)))return;const l=(r=(a=t.options)==null?void 0:a.seekToLiveOffset)!=null?r:0,u=o-l;e[n].set(u,t)},[E.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;const{options:r}=t,n=Qr(t),o=iu(i),l=(a=o[0])==null?void 0:a.language;l&&!r.noSubtitlesLangPref&&d.localStorage.setItem("media-chrome-pref-subtitles-lang",l),Ea(ki.SHOWING,n,o)},[E.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){const a=Qr(t),r=i??[];Ea(ki.DISABLED,a,r)},[E.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){lu(t,i)},[E.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){const a="mediaRenditionSelected",r=i;e[a].set(r,t)},[E.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){const a="mediaAudioTrackEnabled",r=i;e[a].set(r,t)},[E.MEDIA_ENTER_PIP_REQUEST](e,t){const i="mediaIsPip";e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e[i].set(!0,t)},[E.MEDIA_EXIT_PIP_REQUEST](e,t){e["mediaIsPip"].set(!1,t)},[E.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,i){const a="mediaIsFullscreen";e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e[a].set(!0,t,i)},[E.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e["mediaIsFullscreen"].set(!1,t)},[E.MEDIA_ENTER_CAST_REQUEST](e,t){const i="mediaIsCasting";e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e[i].set(!0,t)},[E.MEDIA_EXIT_CAST_REQUEST](e,t){e["mediaIsCasting"].set(!1,t)},[E.MEDIA_AIRPLAY_REQUEST](e,t){e["mediaIsAirplaying"].set(!0,t)}},Uh=({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=Ji,requestMap:r=Ph,options:n={},monitorStateOwnersOnlyWithSubscriptions:o=!0})=>{const l=[],u={options:{...n}};let h=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const g=k=>{k!=null&&(no(k,h)||(h=Object.freeze({...h,...k}),l.forEach(T=>T(h))))},_=()=>{const k=Object.entries(a).reduce((T,[C,{get:$e}])=>(T[C]=$e(u),T),{});g(k)},p={};let m;const A=async(k,T)=>{var C,$e,At,Ft,Fe,Ve,Wi,Tt,sl,ol,ll,dl,ul,cl,hl,ml;const _c=!!m;if(m={...u,...m??{},...k},_c)return;await Dh(...Object.values(k));const Vt=l.length>0&&T===0&&o,vl=u.media!==m.media,pl=((C=u.media)==null?void 0:C.textTracks)!==(($e=m.media)==null?void 0:$e.textTracks),El=((At=u.media)==null?void 0:At.videoRenditions)!==((Ft=m.media)==null?void 0:Ft.videoRenditions),fl=((Fe=u.media)==null?void 0:Fe.audioTracks)!==((Ve=m.media)==null?void 0:Ve.audioTracks),gl=((Wi=u.media)==null?void 0:Wi.remote)!==((Tt=m.media)==null?void 0:Tt.remote),bl=u.documentElement!==m.documentElement,_l=!!u.media&&(vl||Vt),Al=!!((sl=u.media)!=null&&sl.textTracks)&&(pl||Vt),Tl=!!((ol=u.media)!=null&&ol.videoRenditions)&&(El||Vt),kl=!!((ll=u.media)!=null&&ll.audioTracks)&&(fl||Vt),Sl=!!((dl=u.media)!=null&&dl.remote)&&(gl||Vt),yl=!!u.documentElement&&(bl||Vt),Dn=_l||Al||Tl||kl||Sl||yl,Kt=l.length===0&&T===1&&o,Il=!!m.media&&(vl||Kt),Ml=!!((ul=m.media)!=null&&ul.textTracks)&&(pl||Kt),wl=!!((cl=m.media)!=null&&cl.videoRenditions)&&(El||Kt),Ll=!!((hl=m.media)!=null&&hl.audioTracks)&&(fl||Kt),Cl=!!((ml=m.media)!=null&&ml.remote)&&(gl||Kt),Rl=!!m.documentElement&&(bl||Kt),Dl=Il||Ml||wl||Ll||Cl||Rl;if(!(Dn||Dl)){Object.entries(m).forEach(([R,$i])=>{u[R]=$i}),_(),m=void 0;return}Object.entries(a).forEach(([R,{get:$i,mediaEvents:Ac=[],textTracksEvents:Tc=[],videoRenditionsEvents:kc=[],audioTracksEvents:Sc=[],remoteEvents:yc=[],rootEvents:Ic=[],stateOwnersUpdateHandlers:Mc=[]}])=>{p[R]||(p[R]={});const ie=H=>{const F=$i(u,H);g({[R]:F})};let Y;Y=p[R].mediaEvents,Ac.forEach(H=>{Y&&_l&&(u.media.removeEventListener(H,Y),p[R].mediaEvents=void 0),Il&&(m.media.addEventListener(H,ie),p[R].mediaEvents=ie)}),Y=p[R].textTracksEvents,Tc.forEach(H=>{var F,ve;Y&&Al&&((F=u.media.textTracks)==null||F.removeEventListener(H,Y),p[R].textTracksEvents=void 0),Ml&&((ve=m.media.textTracks)==null||ve.addEventListener(H,ie),p[R].textTracksEvents=ie)}),Y=p[R].videoRenditionsEvents,kc.forEach(H=>{var F,ve;Y&&Tl&&((F=u.media.videoRenditions)==null||F.removeEventListener(H,Y),p[R].videoRenditionsEvents=void 0),wl&&((ve=m.media.videoRenditions)==null||ve.addEventListener(H,ie),p[R].videoRenditionsEvents=ie)}),Y=p[R].audioTracksEvents,Sc.forEach(H=>{var F,ve;Y&&kl&&((F=u.media.audioTracks)==null||F.removeEventListener(H,Y),p[R].audioTracksEvents=void 0),Ll&&((ve=m.media.audioTracks)==null||ve.addEventListener(H,ie),p[R].audioTracksEvents=ie)}),Y=p[R].remoteEvents,yc.forEach(H=>{var F,ve;Y&&Sl&&((F=u.media.remote)==null||F.removeEventListener(H,Y),p[R].remoteEvents=void 0),Cl&&((ve=m.media.remote)==null||ve.addEventListener(H,ie),p[R].remoteEvents=ie)}),Y=p[R].rootEvents,Ic.forEach(H=>{Y&&yl&&(u.documentElement.removeEventListener(H,Y),p[R].rootEvents=void 0),Rl&&(m.documentElement.addEventListener(H,ie),p[R].rootEvents=ie)});const Pa=p[R].stateOwnersUpdateHandlers;if(Pa&&Dn&&(Array.isArray(Pa)?Pa:[Pa]).forEach(F=>{typeof F=="function"&&F()}),Dl){const H=Mc.map(F=>F(ie,m)).filter(F=>typeof F=="function");p[R].stateOwnersUpdateHandlers=H.length===1?H[0]:H}else Dn&&(p[R].stateOwnersUpdateHandlers=void 0)}),Object.entries(m).forEach(([R,$i])=>{u[R]=$i}),_(),m=void 0};return A({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(k){const{type:T,detail:C}=k;if(r[T]&&h.mediaErrorCode==null){g(r[T](a,u,k));return}T==="mediaelementchangerequest"?A({media:C}):T==="fullscreenelementchangerequest"?A({fullscreenElement:C}):T==="documentelementchangerequest"?A({documentElement:C}):T==="optionschangerequest"&&(Object.entries(C??{}).forEach(([$e,At])=>{u.options[$e]=At}),_())},getState(){return h},subscribe(k){return A({},l.length+1),l.push(k),k(h),()=>{const T=l.indexOf(k);T>=0&&(A({},l.length-1),l.splice(T,1))}}}},so=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},f=(e,t,i)=>(so(e,t,"read from private field"),i?i.call(e):t.get(e)),re=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},fe=(e,t,i,a)=>(so(e,t,"write to private field"),t.set(e,i),i),at=(e,t,i)=>(so(e,t,"access private method"),i),Ze,ji,y,se,ea,Ie,ir,ta,ar,is,Nt,rr,as,fa,Xr,rs,du,uu=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],$l=10,Fl=.025,Vl=.25,Nh=.25,Hh=2,c={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"},Bh=class extends Tn{constructor(){super(),re(this,ar),re(this,rr),re(this,fa),re(this,rs),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,re(this,Ze,new ao(this,c.HOTKEYS)),re(this,ji,void 0),re(this,y,void 0),re(this,se,null),re(this,ea,void 0),re(this,Ie,void 0),re(this,ir,t=>{var i;(i=f(this,y))==null||i.dispatch(t)}),re(this,ta,void 0),re(this,Nt,t=>{const{key:i,shiftKey:a}=t;if(!(a&&(i==="/"||i==="?")||uu.includes(i))){this.removeEventListener("keyup",f(this,Nt));return}this.keyboardShortcutHandler(t)}),this.associateElement(this);let e={};fe(this,ea,t=>{Object.entries(t).forEach(([i,a])=>{if(i in e&&e[i]===a)return;this.propagateMediaState(i,a);const r=i.toLowerCase(),n=new d.CustomEvent(Dc[r],{composed:!0,detail:a});this.dispatchEvent(n)}),e=t})}static get observedAttributes(){return super.observedAttributes.concat(c.NO_HOTKEYS,c.HOTKEYS,c.DEFAULT_STREAM_TYPE,c.DEFAULT_SUBTITLES,c.DEFAULT_DURATION,c.NO_MUTED_PREF,c.NO_VOLUME_PREF,c.LANG,c.LOOP,c.LIVE_EDGE_OFFSET,c.SEEK_TO_LIVE_OFFSET,c.NO_AUTO_SEEK_TO_LIVE)}get mediaStore(){return f(this,y)}set mediaStore(e){var t,i;if(f(this,y)&&((t=f(this,Ie))==null||t.call(this),fe(this,Ie,void 0)),fe(this,y,e),!f(this,y)&&!this.hasAttribute(c.NO_DEFAULT_STORE)){at(this,ar,is).call(this);return}fe(this,Ie,(i=f(this,y))==null?void 0:i.subscribe(f(this,ea)))}get fullscreenElement(){var e;return(e=f(this,ji))!=null?e:this}set fullscreenElement(e){var t;this.hasAttribute(c.FULLSCREEN_ELEMENT)&&this.removeAttribute(c.FULLSCREEN_ELEMENT),fe(this,ji,e),(t=f(this,y))==null||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return I(this,c.DEFAULT_SUBTITLES)}set defaultSubtitles(e){M(this,c.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return U(this,c.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){P(this,c.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return O(this,c.DEFAULT_DURATION)}set defaultDuration(e){W(this,c.DEFAULT_DURATION,e)}get noHotkeys(){return I(this,c.NO_HOTKEYS)}set noHotkeys(e){M(this,c.NO_HOTKEYS,e)}get keysUsed(){return U(this,c.KEYS_USED)}set keysUsed(e){P(this,c.KEYS_USED,e)}get liveEdgeOffset(){return O(this,c.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){W(this,c.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return I(this,c.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){M(this,c.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return I(this,c.NO_VOLUME_PREF)}set noVolumePref(e){M(this,c.NO_VOLUME_PREF,e)}get noMutedPref(){return I(this,c.NO_MUTED_PREF)}set noMutedPref(e){M(this,c.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return I(this,c.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){M(this,c.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return I(this,c.NO_DEFAULT_STORE)}set noDefaultStore(e){M(this,c.NO_DEFAULT_STORE,e)}get resolvedLang(){return Yc()}attributeChangedCallback(e,t,i){var a,r,n,o,l,u,h,g,_,p,m,A;if(super.attributeChangedCallback(e,t,i),e===c.NO_HOTKEYS)i!==t&&i===""?(this.hasAttribute(c.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&i===null&&this.enableHotkeys(),at(this,fa,Xr).call(this);else if(e===c.HOTKEYS)f(this,Ze).value=i,at(this,fa,Xr).call(this);else if(e===c.DEFAULT_SUBTITLES&&i!==t)(a=f(this,y))==null||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(c.DEFAULT_SUBTITLES)}});else if(e===c.DEFAULT_STREAM_TYPE)(n=f(this,y))==null||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(r=this.getAttribute(c.DEFAULT_STREAM_TYPE))!=null?r:void 0}});else if(e===c.LIVE_EDGE_OFFSET&&i!==t)(o=f(this,y))==null||o.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(c.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(c.SEEK_TO_LIVE_OFFSET):this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0}});else if(e===c.SEEK_TO_LIVE_OFFSET&&i!==t)(l=f(this,y))==null||l.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(c.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(c.SEEK_TO_LIVE_OFFSET):this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0}});else if(e===c.NO_AUTO_SEEK_TO_LIVE)(u=f(this,y))==null||u.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(c.NO_AUTO_SEEK_TO_LIVE)}});else if(e===c.FULLSCREEN_ELEMENT){const k=i?(h=this.getRootNode())==null?void 0:h.getElementById(i):void 0;fe(this,ji,k),(g=f(this,y))==null||g.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===c.LANG&&i!==t?(Gc(i),(_=f(this,y))==null||_.dispatch({type:"optionschangerequest",detail:{mediaLang:i}})):e===c.LOOP&&i!==t?(p=f(this,y))==null||p.dispatch({type:E.MEDIA_LOOP_REQUEST,detail:i!=null}):e===c.NO_VOLUME_PREF&&i!==t?(m=f(this,y))==null||m.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(c.NO_VOLUME_PREF)}}):e===c.NO_MUTED_PREF&&i!==t&&((A=f(this,y))==null||A.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(c.NO_MUTED_PREF)}}))}connectedCallback(){var e,t,i;this.associateElement(this),!f(this,y)&&!this.hasAttribute(c.NO_DEFAULT_STORE)&&at(this,ar,is).call(this),(e=f(this,y))==null||e.dispatch({type:"documentelementchangerequest",detail:K}),(t=f(this,y))==null||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),f(this,y)&&!f(this,Ie)&&fe(this,Ie,(i=f(this,y))==null?void 0:i.subscribe(f(this,ea))),f(this,ta)!==void 0&&f(this,y)&&this.media&&setTimeout(()=>{var a,r,n;(r=(a=this.media)==null?void 0:a.textTracks)!=null&&r.length&&((n=f(this,y))==null||n.dispatch({type:E.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:f(this,ta)}))},0),this.hasAttribute(c.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a,r,n;if((e=super.disconnectedCallback)==null||e.call(this),this.disableHotkeys(),f(this,y)){const o=f(this,y).getState();fe(this,ta,!!((t=o.mediaSubtitlesShowing)!=null&&t.length)),(i=f(this,y))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),(a=f(this,y))==null||a.dispatch({type:"documentelementchangerequest",detail:void 0}),(r=f(this,y))==null||r.dispatch({type:E.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}f(this,Ie)&&((n=f(this,Ie))==null||n.call(this),fe(this,Ie,void 0)),this.unassociateElement(this),f(this,se)&&(f(this,se).remove(),fe(this,se,null))}mediaSetCallback(e){var t;super.mediaSetCallback(e),(t=f(this,y))==null||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),(t=f(this,y))==null||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){ql(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:t}=this;if(t.has(e))return;const i=this.registerMediaStateReceiver.bind(this),a=this.unregisterMediaStateReceiver.bind(this),r=Gh(e,i,a);Object.values(E).forEach(n=>{e.addEventListener(n,f(this,ir))}),t.set(e,r)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:t}=this;if(!t.has(e))return;t.get(e)(),t.delete(e),Object.values(E).forEach(a=>{e.removeEventListener(a,f(this,ir))})}registerMediaStateReceiver(e){if(!e)return;const t=this.mediaStateReceivers;t.indexOf(e)>-1||(t.push(e),f(this,y)&&Object.entries(f(this,y).getState()).forEach(([a,r])=>{ql([e],a,r)}))}unregisterMediaStateReceiver(e){const t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",at(this,rr,as))}disableHotkeys(){this.removeEventListener("keydown",at(this,rr,as)),this.removeEventListener("keyup",f(this,Nt))}get hotkeys(){return f(this,Ze)}set hotkeys(e){P(this,c.HOTKEYS,e)}keyboardShortcutHandler(e){var t,i,a,r,n,o,l,u,h;const g=e.target;if(((a=(i=(t=g.getAttribute(c.KEYS_USED))==null?void 0:t.split(" "))!=null?i:g?.keysUsed)!=null?a:[]).map(T=>T==="Space"?" ":T).filter(Boolean).includes(e.key))return;let p,m,A;if(!(f(this,Ze).contains(io(e.key))||e.shiftKey&&(e.key==="/"||e.key==="?")&&f(this,Ze).contains("noshift+/")))switch(e.key){case" ":case"k":p=f(this,y).getState().mediaPaused?E.MEDIA_PLAY_REQUEST:E.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new d.CustomEvent(p,{composed:!0,bubbles:!0}));break;case"m":p=this.mediaStore.getState().mediaVolumeLevel==="off"?E.MEDIA_UNMUTE_REQUEST:E.MEDIA_MUTE_REQUEST,this.dispatchEvent(new d.CustomEvent(p,{composed:!0,bubbles:!0}));break;case"f":p=this.mediaStore.getState().mediaIsFullscreen?E.MEDIA_EXIT_FULLSCREEN_REQUEST:E.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new d.CustomEvent(p,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new d.CustomEvent(E.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{const T=this.hasAttribute(c.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(c.KEYBOARD_BACKWARD_SEEK_OFFSET):$l;m=Math.max(((r=this.mediaStore.getState().mediaCurrentTime)!=null?r:0)-T,0),A=new d.CustomEvent(E.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:m}),this.dispatchEvent(A);break}case"ArrowRight":case"l":{const T=this.hasAttribute(c.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(c.KEYBOARD_FORWARD_SEEK_OFFSET):$l;m=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)+T,0),A=new d.CustomEvent(E.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:m}),this.dispatchEvent(A);break}case"ArrowUp":{const T=this.hasAttribute(c.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(c.KEYBOARD_UP_VOLUME_STEP):Fl;m=Math.min(((o=this.mediaStore.getState().mediaVolume)!=null?o:1)+T,1),A=new d.CustomEvent(E.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:m}),this.dispatchEvent(A);break}case"ArrowDown":{const T=this.hasAttribute(c.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(c.KEYBOARD_DOWN_VOLUME_STEP):Fl;m=Math.max(((l=this.mediaStore.getState().mediaVolume)!=null?l:1)-T,0),A=new d.CustomEvent(E.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:m}),this.dispatchEvent(A);break}case"<":{const T=(u=this.mediaStore.getState().mediaPlaybackRate)!=null?u:1;m=Math.max(T-Vl,Nh).toFixed(2),A=new d.CustomEvent(E.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:m}),this.dispatchEvent(A);break}case">":{const T=(h=this.mediaStore.getState().mediaPlaybackRate)!=null?h:1;m=Math.min(T+Vl,Hh).toFixed(2),A=new d.CustomEvent(E.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:m}),this.dispatchEvent(A);break}case"/":case"?":{e.shiftKey&&at(this,rs,du).call(this);break}case"p":{p=this.mediaStore.getState().mediaIsPip?E.MEDIA_EXIT_PIP_REQUEST:E.MEDIA_ENTER_PIP_REQUEST,A=new d.CustomEvent(p,{composed:!0,bubbles:!0}),this.dispatchEvent(A);break}}}};Ze=new WeakMap;ji=new WeakMap;y=new WeakMap;se=new WeakMap;ea=new WeakMap;Ie=new WeakMap;ir=new WeakMap;ta=new WeakMap;ar=new WeakSet;is=function(){var e;this.mediaStore=Uh({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(c.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(c.DEFAULT_DURATION)?+this.getAttribute(c.DEFAULT_DURATION):void 0,defaultStreamType:(e=this.getAttribute(c.DEFAULT_STREAM_TYPE))!=null?e:void 0,liveEdgeOffset:this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(c.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(c.SEEK_TO_LIVE_OFFSET):this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(c.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(c.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(c.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(c.NO_SUBTITLES_LANG_PREF)}})};Nt=new WeakMap;rr=new WeakSet;as=function(e){var t;const{metaKey:i,altKey:a,key:r,shiftKey:n}=e,o=n&&(r==="/"||r==="?");if(o&&((t=f(this,se))!=null&&t.open)){this.removeEventListener("keyup",f(this,Nt));return}if(i||a||!o&&!uu.includes(r)){this.removeEventListener("keyup",f(this,Nt));return}const l=e.target,u=l instanceof HTMLElement&&(l.tagName.toLowerCase()==="media-volume-range"||l.tagName.toLowerCase()==="media-time-range");[" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)&&!f(this,Ze).contains(io(r))&&!u&&e.preventDefault(),this.addEventListener("keyup",f(this,Nt),{once:!0})};fa=new WeakSet;Xr=function(){f(this,se)&&(f(this,se).hotkeys=f(this,Ze).value||void 0,(this.noHotkeys||f(this,Ze).contains("noshift+/"))&&(f(this,se).open=!1))};rs=new WeakSet;du=function(){f(this,se)||(fe(this,se,K.createElement("media-keyboard-shortcuts-dialog")),at(this,fa,Xr).call(this),this.appendChild(f(this,se))),f(this,se).open=!0};var Wh=Object.values(s),$h=Object.values(Cd),cu=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&((t=e.nodeName)!=null&&t.includes("-"))&&(d.customElements.upgrade(e),{observedAttributes:n}=e.constructor);const o=(r=(a=(i=e?.getAttribute)==null?void 0:i.call(e,L.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(n||o)?(n||o).filter(l=>Wh.includes(l)):[]},Fh=e=>{var t,i;return(t=e.nodeName)!=null&&t.includes("-")&&d.customElements.get((i=e.nodeName)==null?void 0:i.toLowerCase())&&!(e instanceof d.customElements.get(e.nodeName.toLowerCase()))&&d.customElements.upgrade(e),$h.some(a=>a in e)},ns=e=>Fh(e)||!!cu(e).length,Kl=e=>{var t;return(t=e?.join)==null?void 0:t.call(e,":")},Gl={[s.MEDIA_SUBTITLES_LIST]:Ma,[s.MEDIA_SUBTITLES_SHOWING]:Ma,[s.MEDIA_SEEKABLE]:Kl,[s.MEDIA_BUFFERED]:e=>e?.map(Kl).join(" "),[s.MEDIA_PREVIEW_COORDS]:e=>e?.join(" "),[s.MEDIA_RENDITION_LIST]:Oc,[s.MEDIA_AUDIO_TRACK_LIST]:Hc},Vh=async(e,t,i)=>{var a,r;if(e.isConnected||await xd(0),typeof i=="boolean"||i==null)return M(e,t,i);if(typeof i=="number")return W(e,t,i);if(typeof i=="string")return P(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);const n=(r=(a=Gl[t])==null?void 0:a.call(Gl,i))!=null?r:i;return e.setAttribute(t,n)},Kh=e=>{var t;return!!((t=e.closest)!=null&&t.call(e,'*[slot="media"]'))},wt=(e,t)=>{if(Kh(e))return;const i=(r,n)=>{var o,l;ns(r)&&n(r);const{children:u=[]}=r??{},h=(l=(o=r?.shadowRoot)==null?void 0:o.children)!=null?l:[];[...u,...h].forEach(_=>wt(_,n))},a=e?.nodeName.toLowerCase();if(a.includes("-")&&!ns(e)){d.customElements.whenDefined(a).then(()=>{i(e,t)});return}i(e,t)},ql=(e,t,i)=>{e.forEach(a=>{if(t in a){a[t]=i;return}const r=cu(a),n=t.toLowerCase();r.includes(n)&&Vh(a,n,i)})},Gh=(e,t,i)=>{wt(e,t);const a=g=>{var _;const p=(_=g?.composedPath()[0])!=null?_:g.target;t(p)},r=g=>{var _;const p=(_=g?.composedPath()[0])!=null?_:g.target;i(p)};e.addEventListener(E.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(E.UNREGISTER_MEDIA_STATE_RECEIVER,r);const n=g=>{g.forEach(_=>{const{addedNodes:p=[],removedNodes:m=[],type:A,target:k,attributeName:T}=_;A==="childList"?(Array.prototype.forEach.call(p,C=>wt(C,t)),Array.prototype.forEach.call(m,C=>wt(C,i))):A==="attributes"&&T===L.MEDIA_CHROME_ATTRIBUTES&&(ns(k)?t(k):i(k))})};let o=[];const l=g=>{const _=g.target;_.name!=="media"&&(o.forEach(p=>wt(p,i)),o=[..._.assignedElements({flatten:!0})],o.forEach(p=>wt(p,t)))};e.addEventListener("slotchange",l);const u=new MutationObserver(n);return u.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{wt(e,i),e.removeEventListener("slotchange",l),u.disconnect(),e.removeEventListener(E.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(E.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};d.customElements.get("media-controller")||d.customElements.define("media-controller",Bh);var Gt={PLACEMENT:"placement",BOUNDS:"bounds"};function qh(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}var yn=class extends d.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!Fd(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const t=this.placement;if(t==="left"||t==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const i=getComputedStyle(this),a=(e=Ui(this,"#"+this.bounds))!=null?e:te(this);if(!a)return;const{x:r,width:n}=a.getBoundingClientRect(),{x:o,width:l}=this.getBoundingClientRect(),u=o+l,h=r+n,g=i.getPropertyValue("--media-tooltip-offset-x"),_=g?parseFloat(g.replace("px","")):0,p=i.getPropertyValue("--media-tooltip-container-margin"),m=p?parseFloat(p.replace("px","")):0,A=o-r+_-m,k=u-h+_+m;if(A<0){this.style.setProperty("--media-tooltip-offset-x",`${A}px`);return}if(k>0){this.style.setProperty("--media-tooltip-offset-x",`${k}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=oe(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[Gt.PLACEMENT,Gt.BOUNDS]}get placement(){return U(this,Gt.PLACEMENT)}set placement(e){P(this,Gt.PLACEMENT,e)}get bounds(){return U(this,Gt.BOUNDS)}set bounds(e){P(this,Gt.BOUNDS,e)}};yn.shadowRootOptions={mode:"open"};yn.getTemplateHTML=qh;d.customElements.get("media-tooltip")||d.customElements.define("media-tooltip",yn);var Yl=yn,oo=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},V=(e,t,i)=>(oo(e,t,"read from private field"),i?i.call(e):t.get(e)),St=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Ba=(e,t,i,a)=>(oo(e,t,"write to private field"),t.set(e,i),i),Zl=(e,t,i)=>(oo(e,t,"access private method"),i),Me,bi,ss,hu,vt,ai,nr,os,mu,et={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function Yh(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      slot[name="icon"] {
        display: inline-flex;
        align-items: center;
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${Yl.shadowRootOptions.mode}">
          ${Yl.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `}function Zh(e,t){return`
    <slot></slot>
  `}function Qh(){return""}var z=class extends d.HTMLElement{constructor(){if(super(),St(this,ss),St(this,os),St(this,Me,void 0),this.preventClick=!1,this.tooltipEl=null,St(this,bi,e=>{this.preventClick||this.handleClick(e),setTimeout(V(this,vt),0)}),St(this,vt,()=>{var e,t;(t=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||t.call(e)}),St(this,ai,e=>{const{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",V(this,ai));return}this.preventClick||this.handleClick(e)}),St(this,nr,e=>{const{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",V(this,ai));return}this.addEventListener("keyup",V(this,ai),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=oe(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",et.TOOLTIP_PLACEMENT,L.MEDIA_CONTROLLER,s.MEDIA_LANG]}enable(){this.addEventListener("click",V(this,bi)),this.addEventListener("keydown",V(this,nr)),this.tabIndex=0}disable(){this.removeEventListener("click",V(this,bi)),this.removeEventListener("keydown",V(this,nr)),this.removeEventListener("keyup",V(this,ai)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===L.MEDIA_CONTROLLER?(t&&((r=(a=V(this,Me))==null?void 0:a.unassociateElement)==null||r.call(a,this),Ba(this,Me,null)),i&&this.isConnected&&(Ba(this,Me,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(l=(o=V(this,Me))==null?void 0:o.associateElement)==null||l.call(o,this))):e==="disabled"&&i!==t?i==null?this.enable():this.disable():e===et.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===s.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),Zl(this,ss,hu).call(this)&&V(this,vt).call(this)}connectedCallback(){var e,t,i;const{style:a}=q(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const r=this.getAttribute(L.MEDIA_CONTROLLER);r&&(Ba(this,Me,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(i=(t=V(this,Me))==null?void 0:t.associateElement)==null||i.call(t,this)),d.customElements.whenDefined("media-tooltip").then(()=>Zl(this,os,mu).call(this))}disconnectedCallback(){var e,t;this.disable(),(t=(e=V(this,Me))==null?void 0:e.unassociateElement)==null||t.call(e,this),Ba(this,Me,null),this.removeEventListener("mouseenter",V(this,vt)),this.removeEventListener("focus",V(this,vt)),this.removeEventListener("click",V(this,bi))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return U(this,et.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){P(this,et.TOOLTIP_PLACEMENT,e)}get mediaController(){return U(this,L.MEDIA_CONTROLLER)}set mediaController(e){P(this,L.MEDIA_CONTROLLER,e)}get disabled(){return I(this,et.DISABLED)}set disabled(e){M(this,et.DISABLED,e)}get noTooltip(){return I(this,et.NO_TOOLTIP)}set noTooltip(e){M(this,et.NO_TOOLTIP,e)}handleClick(e){}};Me=new WeakMap;bi=new WeakMap;ss=new WeakSet;hu=function(){try{return this.matches(":hover, :focus-visible")}catch{return this.matches(":hover, :focus")}};vt=new WeakMap;ai=new WeakMap;nr=new WeakMap;os=new WeakSet;mu=function(){this.addEventListener("mouseenter",V(this,vt)),this.addEventListener("focus",V(this,vt)),this.addEventListener("click",V(this,bi));const e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)};z.shadowRootOptions={mode:"open"};z.getTemplateHTML=Yh;z.getSlotTemplateHTML=Zh;z.getTooltipContentHTML=Qh;d.customElements.get("media-chrome-button")||d.customElements.define("media-chrome-button",z);var Ql=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function zh(e){return`
    <style>
      :host([${s.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${s.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${s.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${s.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Ql}</slot>
      <slot name="exit">${Ql}</slot>
    </slot>
  `}function Xh(){return`
    <slot name="tooltip-enter">${v("start airplay")}</slot>
    <slot name="tooltip-exit">${v("stop airplay")}</slot>
  `}var zl=e=>{const t=e.mediaIsAirplaying?v("stop airplay"):v("start airplay");e.setAttribute("aria-label",t)},lo=class extends z{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_AIRPLAYING,s.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),zl(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_IS_AIRPLAYING&&zl(this)}get mediaIsAirplaying(){return I(this,s.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){M(this,s.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return U(this,s.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){P(this,s.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){const e=new d.CustomEvent(E.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}};lo.getSlotTemplateHTML=zh;lo.getTooltipContentHTML=Xh;d.customElements.get("media-airplay-button")||d.customElements.define("media-airplay-button",lo);var Jh=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,jh=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function em(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${Jh}</slot>
      <slot name="off">${jh}</slot>
    </slot>
  `}function tm(){return`
    <slot name="tooltip-enable">${v("Enable captions")}</slot>
    <slot name="tooltip-disable">${v("Disable captions")}</slot>
  `}var Xl=e=>{e.setAttribute("aria-checked",ru(e).toString())},uo=class extends z{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_SUBTITLES_LIST,s.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",v("closed captions")),Xl(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_SUBTITLES_SHOWING&&Xl(this)}get mediaSubtitlesList(){return Jl(this,s.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){jl(this,s.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Jl(this,s.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){jl(this,s.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new d.CustomEvent(E.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}};uo.getSlotTemplateHTML=em;uo.getTooltipContentHTML=tm;var Jl=(e,t)=>{const i=e.getAttribute(t);return i?kn(i):[]},jl=(e,t,i)=>{if(!i?.length){e.removeAttribute(t);return}const a=Ma(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};d.customElements.get("media-captions-button")||d.customElements.define("media-captions-button",uo);var im='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',am='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function rm(e){return`
    <style>
      :host([${s.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${s.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${s.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${s.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${im}</slot>
      <slot name="exit">${am}</slot>
    </slot>
  `}function nm(){return`
    <slot name="tooltip-enter">${v("Start casting")}</slot>
    <slot name="tooltip-exit">${v("Stop casting")}</slot>
  `}var ed=e=>{const t=e.mediaIsCasting?v("stop casting"):v("start casting");e.setAttribute("aria-label",t)},co=class extends z{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_CASTING,s.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),ed(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_IS_CASTING&&ed(this)}get mediaIsCasting(){return I(this,s.MEDIA_IS_CASTING)}set mediaIsCasting(e){M(this,s.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return U(this,s.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){P(this,s.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){const e=this.mediaIsCasting?E.MEDIA_EXIT_CAST_REQUEST:E.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}};co.getSlotTemplateHTML=rm;co.getTooltipContentHTML=nm;d.customElements.get("media-cast-button")||d.customElements.define("media-cast-button",co);var ho=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},B=(e,t,i)=>(ho(e,t,"read from private field"),i?i.call(e):t.get(e)),X=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rt=(e,t,i,a)=>(ho(e,t,"write to private field"),t.set(e,i),i),be=(e,t,i)=>(ho(e,t,"access private method"),i),we,In,sr,or,_e,Jr,lr,dr,ur,mo,vu,cr,ls,hr,ds,jr,vo,us,pu,cs,Eu,hs,fu,ms,gu;function sm(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, 0);
        height: var(--media-time-range-hover-height, max(100% , 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, 0);
          height: var(--media-time-range-hover-height, max(100%, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `}function om(e){return""}var Hi=class extends d.HTMLElement{constructor(){if(super(),X(this,mo),X(this,cr),X(this,hr),X(this,jr),X(this,us),X(this,cs),X(this,hs),X(this,ms),X(this,we,void 0),X(this,In,void 0),X(this,sr,void 0),X(this,or,void 0),X(this,_e,{}),X(this,Jr,[]),X(this,lr,()=>{if(this.range.matches(":focus-visible")){const{style:e}=q(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),X(this,dr,()=>{const{style:e}=q(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),X(this,ur,()=>{const e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=oe(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),rt(this,sr,this.shadowRoot.querySelector("#startpoint")),rt(this,or,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",L.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===L.MEDIA_CONTROLLER?(t&&((r=(a=B(this,we))==null?void 0:a.unassociateElement)==null||r.call(a,this),rt(this,we,null)),i&&this.isConnected&&(rt(this,we,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(l=(o=B(this,we))==null?void 0:o.associateElement)==null||l.call(o,this))):(e==="disabled"||e==="aria-disabled"&&t!==i)&&(i==null?(this.range.removeAttribute(e),be(this,cr,ls).call(this)):(this.range.setAttribute(e,i),be(this,hr,ds).call(this)))}connectedCallback(){var e,t,i;const{style:a}=q(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),B(this,_e).pointer=q(this.shadowRoot,"#pointer"),B(this,_e).progress=q(this.shadowRoot,"#progress"),B(this,_e).thumb=q(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),B(this,_e).activeSegment=q(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const r=this.getAttribute(L.MEDIA_CONTROLLER);r&&(rt(this,we,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(i=(t=B(this,we))==null?void 0:t.associateElement)==null||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",B(this,lr)),this.shadowRoot.addEventListener("focusout",B(this,dr)),be(this,cr,ls).call(this),Ci(this.container,B(this,ur))}disconnectedCallback(){var e,t;be(this,hr,ds).call(this),(t=(e=B(this,we))==null?void 0:e.unassociateElement)==null||t.call(e,this),rt(this,we,null),this.shadowRoot.removeEventListener("focusin",B(this,lr)),this.shadowRoot.removeEventListener("focusout",B(this,dr)),Ri(this.container,B(this,ur))}updatePointerBar(e){var t;(t=B(this,_e).pointer)==null||t.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,t;const i=this.range.valueAsNumber*100;(e=B(this,_e).progress)==null||e.style.setProperty("width",`${i}%`),(t=B(this,_e).thumb)==null||t.style.setProperty("left",`${i}%`)}updateSegments(e){const t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!e?.length),!e?.length)return;const i=[...new Set([+this.range.min,...e.flatMap(r=>[r.start,r.end]),+this.range.max])];rt(this,Jr,[...i]);const a=i.pop();for(const[r,n]of i.entries()){const[o,l]=[r===0,r===i.length-1],u=o?"calc(var(--segments-gap) / -1)":`${n*100}%`,g=`calc(${((l?a:i[r+1])-n)*100}%${o||l?"":" - var(--segments-gap)"})`,_=K.createElementNS("http://www.w3.org/2000/svg","rect"),p=Xs(this.shadowRoot,`#segments-clipping rect:nth-child(${r+1})`);p.style.setProperty("x",u),p.style.setProperty("width",g),t.append(_)}}getPointerRatio(e){return zc(e.clientX,e.clientY,B(this,sr).getBoundingClientRect(),B(this,or).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":be(this,ms,gu).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":be(this,us,pu).call(this,e);break;case"pointerdown":be(this,jr,vo).call(this,e);break;case"pointerup":be(this,cs,Eu).call(this);break;case"pointerleave":be(this,hs,fu).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}};we=new WeakMap;In=new WeakMap;sr=new WeakMap;or=new WeakMap;_e=new WeakMap;Jr=new WeakMap;lr=new WeakMap;dr=new WeakMap;ur=new WeakMap;mo=new WeakSet;vu=function(e){const t=B(this,_e).activeSegment;if(!t)return;const i=this.getPointerRatio(e),r=`#segments-clipping rect:nth-child(${B(this,Jr).findIndex((n,o,l)=>{const u=l[o+1];return u!=null&&i>=n&&i<=u})+1})`;(t.selectorText!=r||!t.style.transform)&&(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};cr=new WeakSet;ls=function(){this.hasAttribute("disabled")||!this.isConnected||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};hr=new WeakSet;ds=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),(e=d.window)==null||e.removeEventListener("pointerup",this),(t=d.window)==null||t.removeEventListener("pointermove",this)};jr=new WeakSet;vo=function(e){var t;rt(this,In,e.composedPath().includes(this.range)),(t=d.window)==null||t.addEventListener("pointerup",this,{once:!0})};us=new WeakSet;pu=function(e){var t;e.pointerType!=="mouse"&&be(this,jr,vo).call(this,e),this.addEventListener("pointerleave",this,{once:!0}),(t=d.window)==null||t.addEventListener("pointermove",this)};cs=new WeakSet;Eu=function(){var e;(e=d.window)==null||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};hs=new WeakSet;fu=function(){var e,t;this.removeEventListener("pointerleave",this),(e=d.window)==null||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(t=B(this,_e).activeSegment)==null||t.style.removeProperty("transform")};ms=new WeakSet;gu=function(e){e.pointerType==="pen"&&e.buttons===0||(this.toggleAttribute("dragging",e.buttons===1||e.pointerType!=="mouse"),this.updatePointerBar(e),be(this,mo,vu).call(this,e),this.dragging&&(e.pointerType!=="mouse"||!B(this,In))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))};Hi.shadowRootOptions={mode:"open"};Hi.getTemplateHTML=sm;Hi.getContainerTemplateHTML=om;d.customElements.get("media-chrome-range")||d.customElements.define("media-chrome-range",Hi);var bu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Wa=(e,t,i)=>(bu(e,t,"read from private field"),i?i.call(e):t.get(e)),lm=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},$a=(e,t,i,a)=>(bu(e,t,"write to private field"),t.set(e,i),i),Le;function dm(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}var po=class extends d.HTMLElement{constructor(){if(super(),lm(this,Le,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=oe(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[L.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===L.MEDIA_CONTROLLER&&(t&&((r=(a=Wa(this,Le))==null?void 0:a.unassociateElement)==null||r.call(a,this),$a(this,Le,null)),i&&this.isConnected&&($a(this,Le,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(l=(o=Wa(this,Le))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,t,i;const a=this.getAttribute(L.MEDIA_CONTROLLER);a&&($a(this,Le,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(i=(t=Wa(this,Le))==null?void 0:t.associateElement)==null||i.call(t,this))}disconnectedCallback(){var e,t;(t=(e=Wa(this,Le))==null?void 0:e.unassociateElement)==null||t.call(e,this),$a(this,Le,null)}};Le=new WeakMap;po.shadowRootOptions={mode:"open"};po.getTemplateHTML=dm;d.customElements.get("media-control-bar")||d.customElements.define("media-control-bar",po);var _u=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Fa=(e,t,i)=>(_u(e,t,"read from private field"),i?i.call(e):t.get(e)),um=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Va=(e,t,i,a)=>(_u(e,t,"write to private field"),t.set(e,i),i),Ce;function cm(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `}function hm(e,t){return`
    <slot></slot>
  `}var bt=class extends d.HTMLElement{constructor(){if(super(),um(this,Ce,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=oe(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[L.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===L.MEDIA_CONTROLLER&&(t&&((r=(a=Fa(this,Ce))==null?void 0:a.unassociateElement)==null||r.call(a,this),Va(this,Ce,null)),i&&this.isConnected&&(Va(this,Ce,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(l=(o=Fa(this,Ce))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,t,i;const{style:a}=q(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const r=this.getAttribute(L.MEDIA_CONTROLLER);r&&(Va(this,Ce,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(i=(t=Fa(this,Ce))==null?void 0:t.associateElement)==null||i.call(t,this))}disconnectedCallback(){var e,t;(t=(e=Fa(this,Ce))==null?void 0:e.unassociateElement)==null||t.call(e,this),Va(this,Ce,null)}};Ce=new WeakMap;bt.shadowRootOptions={mode:"open"};bt.getTemplateHTML=cm;bt.getSlotTemplateHTML=hm;d.customElements.get("media-text-display")||d.customElements.define("media-text-display",bt);var Au=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},td=(e,t,i)=>(Au(e,t,"read from private field"),i?i.call(e):t.get(e)),mm=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},vm=(e,t,i,a)=>(Au(e,t,"write to private field"),t.set(e,i),i),ia;function pm(e,t){return`
    <slot>${Et(t.mediaDuration)}</slot>
  `}var Tu=class extends bt{constructor(){var e;super(),mm(this,ia,void 0),vm(this,ia,this.shadowRoot.querySelector("slot")),td(this,ia).textContent=Et((e=this.mediaDuration)!=null?e:0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===s.MEDIA_DURATION&&(td(this,ia).textContent=Et(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return O(this,s.MEDIA_DURATION)}set mediaDuration(e){W(this,s.MEDIA_DURATION,e)}};ia=new WeakMap;Tu.getSlotTemplateHTML=pm;d.customElements.get("media-duration-display")||d.customElements.define("media-duration-display",Tu);var Em={2:v("Network Error"),3:v("Decode Error"),4:v("Source Not Supported"),5:v("Encryption Error")},fm={2:v("A network error caused the media download to fail."),3:v("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:v("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:v("The media is encrypted and there are no keys to decrypt it.")},Eo=e=>{var t,i;return e.code===1?null:{title:(t=Em[e.code])!=null?t:`Error ${e.code}`,message:(i=fm[e.code])!=null?i:e.message}},ku=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},gm=(e,t,i)=>(ku(e,t,"read from private field"),i?i.call(e):t.get(e)),bm=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},_m=(e,t,i,a)=>(ku(e,t,"write to private field"),t.set(e,i),i),mr;function Am(e){const t=+e.mediaerrorcode;return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${t}" id="content">
      ${Su({code:t,message:e.mediaerrormessage})}
    </slot>
  `}function Tm(e){return e.code&&Eo(e)!==null}function Su(e){var t;const{title:i,message:a}=(t=Eo(e))!=null?t:{},r=On(e.code);let n="";return i&&(n+=`<slot name="error-${r}-title"><h3>${On(i)}</h3></slot>`),a&&(n+=`<slot name="error-${r}-message"><p>${On(a)}</p></slot>`),n}var id=[s.MEDIA_ERROR_CODE,s.MEDIA_ERROR_MESSAGE],fo=class extends Ni{constructor(){super(...arguments),bm(this,mr,null)}static get observedAttributes(){return[...super.observedAttributes,...id]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!id.includes(e))return;const r=(a=this.mediaError)!=null?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=Tm(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r),!this.hasAttribute("aria-label"))){const{title:n}=Eo(r);n&&this.setAttribute("aria-label",n)}}get mediaError(){return gm(this,mr)}set mediaError(e){_m(this,mr,e)}get mediaErrorCode(){return O(this,"mediaerrorcode")}set mediaErrorCode(e){W(this,"mediaerrorcode",e)}get mediaErrorMessage(){return U(this,"mediaerrormessage")}set mediaErrorMessage(e){P(this,"mediaerrormessage",e)}};mr=new WeakMap;fo.getSlotTemplateHTML=Am;fo.formatErrorMessage=Su;d.customElements.get("media-error-dialog")||d.customElements.define("media-error-dialog",fo);var yu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},km=(e,t,i)=>(yu(e,t,"read from private field"),t.get(e)),Sm=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ym=(e,t,i,a)=>(yu(e,t,"write to private field"),t.set(e,i),i),vr,Im=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,Mm=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function wm(e){return`
    <style>
      :host([${s.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${s.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${s.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${s.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Im}</slot>
      <slot name="exit">${Mm}</slot>
    </slot>
  `}function Lm(){return`
    <slot name="tooltip-enter">${v("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${v("Exit fullscreen mode")}</slot>
  `}var ad=e=>{const t=e.mediaIsFullscreen?v("exit fullscreen mode"):v("enter fullscreen mode");e.setAttribute("aria-label",t)},go=class extends z{constructor(){super(...arguments),Sm(this,vr,null)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_FULLSCREEN,s.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),ad(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_IS_FULLSCREEN&&ad(this)}get mediaFullscreenUnavailable(){return U(this,s.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){P(this,s.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return I(this,s.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){M(this,s.MEDIA_IS_FULLSCREEN,e)}handleClick(e){ym(this,vr,e);const t=km(this,vr)instanceof PointerEvent,i=this.mediaIsFullscreen?new d.CustomEvent(E.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new d.CustomEvent(E.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:t});this.dispatchEvent(i)}};vr=new WeakMap;go.getSlotTemplateHTML=wm;go.getTooltipContentHTML=Lm;d.customElements.get("media-fullscreen-button")||d.customElements.define("media-fullscreen-button",go);var{MEDIA_TIME_IS_LIVE:pr,MEDIA_PAUSED:ga}=s,{MEDIA_SEEK_TO_LIVE_REQUEST:Cm,MEDIA_PLAY_REQUEST:Rm}=E,Dm='<svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg>';function xm(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${pr}]:not([${ga}])) slot[name=indicator] > *,
      :host([${pr}]:not([${ga}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${pr}]:not([${ga}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${Dm}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${v("live")}</slot>
  `}var rd=e=>{var t;const i=e.mediaPaused||!e.mediaTimeIsLive,a=v(i?"seek to live":"playing live");e.setAttribute("aria-label",a);const r=(t=e.shadowRoot)==null?void 0:t.querySelector('slot[name="text"]');r&&(r.textContent=v("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")},Iu=class extends z{static get observedAttributes(){return[...super.observedAttributes,pr,ga]}connectedCallback(){super.connectedCallback(),rd(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),rd(this)}get mediaPaused(){return I(this,s.MEDIA_PAUSED)}set mediaPaused(e){M(this,s.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return I(this,s.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){M(this,s.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new d.CustomEvent(Cm,{composed:!0,bubbles:!0})),this.hasAttribute(ga)&&this.dispatchEvent(new d.CustomEvent(Rm,{composed:!0,bubbles:!0})))}};Iu.getSlotTemplateHTML=xm;d.customElements.get("media-live-button")||d.customElements.define("media-live-button",Iu);var Mu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ki=(e,t,i)=>(Mu(e,t,"read from private field"),i?i.call(e):t.get(e)),nd=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Gi=(e,t,i,a)=>(Mu(e,t,"write to private field"),t.set(e,i),i),Re,Er,Ka={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},wu=500,Om=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function Pm(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${wu}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${s.MEDIA_LOADING}]:not([${s.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${s.MEDIA_LOADING}]:not([${s.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${s.MEDIA_LOADING}]:not([${s.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${Om}</slot>
    <div id="status" role="status" aria-live="polite">${v("media loading")}</div>
  `}var bo=class extends d.HTMLElement{constructor(){if(super(),nd(this,Re,void 0),nd(this,Er,wu),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=oe(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[L.MEDIA_CONTROLLER,s.MEDIA_PAUSED,s.MEDIA_LOADING,Ka.LOADING_DELAY]}attributeChangedCallback(e,t,i){var a,r,n,o,l;e===Ka.LOADING_DELAY&&t!==i?this.loadingDelay=Number(i):e===L.MEDIA_CONTROLLER&&(t&&((r=(a=Ki(this,Re))==null?void 0:a.unassociateElement)==null||r.call(a,this),Gi(this,Re,null)),i&&this.isConnected&&(Gi(this,Re,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(l=(o=Ki(this,Re))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,t,i;const a=this.getAttribute(L.MEDIA_CONTROLLER);a&&(Gi(this,Re,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(i=(t=Ki(this,Re))==null?void 0:t.associateElement)==null||i.call(t,this))}disconnectedCallback(){var e,t;(t=(e=Ki(this,Re))==null?void 0:e.unassociateElement)==null||t.call(e,this),Gi(this,Re,null)}get loadingDelay(){return Ki(this,Er)}set loadingDelay(e){Gi(this,Er,e);const{style:t}=q(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return I(this,s.MEDIA_PAUSED)}set mediaPaused(e){M(this,s.MEDIA_PAUSED,e)}get mediaLoading(){return I(this,s.MEDIA_LOADING)}set mediaLoading(e){M(this,s.MEDIA_LOADING,e)}get mediaController(){return U(this,L.MEDIA_CONTROLLER)}set mediaController(e){P(this,L.MEDIA_CONTROLLER,e)}get noAutohide(){return I(this,Ka.NO_AUTOHIDE)}set noAutohide(e){M(this,Ka.NO_AUTOHIDE,e)}};Re=new WeakMap;Er=new WeakMap;bo.shadowRootOptions={mode:"open"};bo.getTemplateHTML=Pm;d.customElements.get("media-loading-indicator")||d.customElements.define("media-loading-indicator",bo);var Um=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,sd=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,Nm=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function Hm(e){return`
    <style>
      :host(:not([${s.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${s.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${s.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${s.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${s.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${s.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${s.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${Um}</slot>
      <slot name="low">${sd}</slot>
      <slot name="medium">${sd}</slot>
      <slot name="high">${Nm}</slot>
    </slot>
  `}function Bm(){return`
    <slot name="tooltip-mute">${v("Mute")}</slot>
    <slot name="tooltip-unmute">${v("Unmute")}</slot>
  `}var od=e=>{const t=e.mediaVolumeLevel==="off",i=v(t?"unmute":"mute");e.setAttribute("aria-label",i)},_o=class extends z{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),od(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_VOLUME_LEVEL&&od(this)}get mediaVolumeLevel(){return U(this,s.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){P(this,s.MEDIA_VOLUME_LEVEL,e)}handleClick(){const e=this.mediaVolumeLevel==="off"?E.MEDIA_UNMUTE_REQUEST:E.MEDIA_MUTE_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}};_o.getSlotTemplateHTML=Hm;_o.getTooltipContentHTML=Bm;d.customElements.get("media-mute-button")||d.customElements.define("media-mute-button",_o);var ld=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function Wm(e){return`
    <style>
      :host([${s.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${s.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${s.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${s.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ld}</slot>
      <slot name="exit">${ld}</slot>
    </slot>
  `}function $m(){return`
    <slot name="tooltip-enter">${v("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${v("Exit picture in picture mode")}</slot>
  `}var dd=e=>{const t=e.mediaIsPip?v("exit picture in picture mode"):v("enter picture in picture mode");e.setAttribute("aria-label",t)},Ao=class extends z{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_PIP,s.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),dd(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_IS_PIP&&dd(this)}get mediaPipUnavailable(){return U(this,s.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){P(this,s.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return I(this,s.MEDIA_IS_PIP)}set mediaIsPip(e){M(this,s.MEDIA_IS_PIP,e)}handleClick(){const e=this.mediaIsPip?E.MEDIA_EXIT_PIP_REQUEST:E.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}};Ao.getSlotTemplateHTML=Wm;Ao.getTooltipContentHTML=$m;d.customElements.get("media-pip-button")||d.customElements.define("media-pip-button",Ao);var Fm=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},qt=(e,t,i)=>(Fm(e,t,"read from private field"),i?i.call(e):t.get(e)),Vm=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nt,Pn={RATES:"rates"},Lu=[1,1.2,1.5,1.7,2],_i=1;function gt(e){return Math.round(e*100)/100}function Km(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate?gt(+e.mediaplaybackrate):_i}x</slot>
  `}function Gm(){return v("Playback rate")}var To=class extends z{constructor(){var e;super(),Vm(this,nt,new ao(this,Pn.RATES,{defaultValue:Lu})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${gt((e=this.mediaPlaybackRate)!=null?e:_i)}x`}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PLAYBACK_RATE,Pn.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===Pn.RATES&&(qt(this,nt).value=i),e===s.MEDIA_PLAYBACK_RATE){const a=i?+i:Number.NaN,r=gt(Number.isNaN(a)?_i:a);this.container.innerHTML=`${r}x`,this.setAttribute("aria-label",v("Playback rate {playbackRate}",{playbackRate:r}))}}get rates(){return qt(this,nt)}set rates(e){e?Array.isArray(e)?qt(this,nt).value=e.join(" "):typeof e=="string"&&(qt(this,nt).value=e):qt(this,nt).value=""}get mediaPlaybackRate(){return O(this,s.MEDIA_PLAYBACK_RATE,_i)}set mediaPlaybackRate(e){W(this,s.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;const i=Array.from(qt(this,nt).values(),n=>+n).sort((n,o)=>n-o),a=(t=(e=i.find(n=>n>this.mediaPlaybackRate))!=null?e:i[0])!=null?t:_i,r=new d.CustomEvent(E.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}};nt=new WeakMap;To.getSlotTemplateHTML=Km;To.getTooltipContentHTML=Gm;d.customElements.get("media-playback-rate-button")||d.customElements.define("media-playback-rate-button",To);var qm=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,Ym=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function Zm(e){return`
    <style>
      :host([${s.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${s.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${s.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${s.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${qm}</slot>
      <slot name="pause">${Ym}</slot>
    </slot>
  `}function Qm(){return`
    <slot name="tooltip-play">${v("Play")}</slot>
    <slot name="tooltip-pause">${v("Pause")}</slot>
  `}var ud=e=>{const t=e.mediaPaused?v("play"):v("pause");e.setAttribute("aria-label",t)},ko=class extends z{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PAUSED,s.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),ud(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===s.MEDIA_PAUSED||e===s.MEDIA_LANG)&&ud(this)}get mediaPaused(){return I(this,s.MEDIA_PAUSED)}set mediaPaused(e){M(this,s.MEDIA_PAUSED,e)}handleClick(){const e=this.mediaPaused?E.MEDIA_PLAY_REQUEST:E.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new d.CustomEvent(e,{composed:!0,bubbles:!0}))}};ko.getSlotTemplateHTML=Zm;ko.getTooltipContentHTML=Qm;d.customElements.get("media-play-button")||d.customElements.define("media-play-button",ko);var ke={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function zm(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}var Xm=e=>{e.style.removeProperty("background-image")},Jm=(e,t)=>{e.style["background-image"]=`url('${t}')`},So=class extends d.HTMLElement{static get observedAttributes(){return[ke.PLACEHOLDER_SRC,ke.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=oe(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){e===ke.SRC&&(i==null?this.image.removeAttribute(ke.SRC):this.image.setAttribute(ke.SRC,i)),e===ke.PLACEHOLDER_SRC&&(i==null?Xm(this.image):Jm(this.image,i))}get placeholderSrc(){return U(this,ke.PLACEHOLDER_SRC)}set placeholderSrc(e){P(this,ke.SRC,e)}get src(){return U(this,ke.SRC)}set src(e){P(this,ke.SRC,e)}};So.shadowRootOptions={mode:"open"};So.getTemplateHTML=zm;d.customElements.get("media-poster-image")||d.customElements.define("media-poster-image",So);var Cu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},jm=(e,t,i)=>(Cu(e,t,"read from private field"),i?i.call(e):t.get(e)),ev=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tv=(e,t,i,a)=>(Cu(e,t,"write to private field"),t.set(e,i),i),fr,iv=class extends bt{constructor(){super(),ev(this,fr,void 0),tv(this,fr,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PREVIEW_CHAPTER,s.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===s.MEDIA_PREVIEW_CHAPTER||e===s.MEDIA_LANG)&&i!==t&&i!=null)if(jm(this,fr).textContent=i,i!==""){const a=v("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",a)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return U(this,s.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){P(this,s.MEDIA_PREVIEW_CHAPTER,e)}};fr=new WeakMap;d.customElements.get("media-preview-chapter-display")||d.customElements.define("media-preview-chapter-display",iv);var Ru=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ga=(e,t,i)=>(Ru(e,t,"read from private field"),i?i.call(e):t.get(e)),av=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},qa=(e,t,i,a)=>(Ru(e,t,"write to private field"),t.set(e,i),i),De;function rv(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}var Mn=class extends d.HTMLElement{constructor(){if(super(),av(this,De,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=oe(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[L.MEDIA_CONTROLLER,s.MEDIA_PREVIEW_IMAGE,s.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;const a=this.getAttribute(L.MEDIA_CONTROLLER);a&&(qa(this,De,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(i=(t=Ga(this,De))==null?void 0:t.associateElement)==null||i.call(t,this))}disconnectedCallback(){var e,t;(t=(e=Ga(this,De))==null?void 0:e.unassociateElement)==null||t.call(e,this),qa(this,De,null)}attributeChangedCallback(e,t,i){var a,r,n,o,l;[s.MEDIA_PREVIEW_IMAGE,s.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===L.MEDIA_CONTROLLER&&(t&&((r=(a=Ga(this,De))==null?void 0:a.unassociateElement)==null||r.call(a,this),qa(this,De,null)),i&&this.isConnected&&(qa(this,De,(n=this.getRootNode())==null?void 0:n.getElementById(i)),(l=(o=Ga(this,De))==null?void 0:o.associateElement)==null||l.call(o,this)))}get mediaPreviewImage(){return U(this,s.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){P(this,s.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){const e=this.getAttribute(s.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(t=>+t)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(s.MEDIA_PREVIEW_COORDS);return}this.setAttribute(s.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){const e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;const[i,a,r,n]=e,o=t.split("#")[0],l=getComputedStyle(this),{maxWidth:u,maxHeight:h,minWidth:g,minHeight:_}=l,p=l.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain";let m,A;if(p==="fill"){const Fe=parseInt(u)/r,Ve=parseInt(h)/n,Wi=parseInt(g)/r,Tt=parseInt(_)/n;m=Fe<1?Fe:Math.max(Fe,Wi),A=Ve<1?Ve:Math.max(Ve,Tt)}else{const Fe=Math.min(parseInt(u)/r,parseInt(h)/n),Ve=Math.max(parseInt(g)/r,parseInt(_)/n),Tt=Fe<1?Fe:Ve>1?Ve:1;m=Tt,A=Tt}const{style:k}=q(this.shadowRoot,":host"),T=q(this.shadowRoot,"img").style,C=this.shadowRoot.querySelector("img"),At=Math.min(m,A)<1?"min":"max";k.setProperty(`${At}-width`,"initial","important"),k.setProperty(`${At}-height`,"initial","important"),k.width=`${r*m}px`,k.height=`${n*A}px`;const Ft=()=>{T.width=`${this.imgWidth*m}px`,T.height=`${this.imgHeight*A}px`,T.display="block"};C.src!==o&&(C.onload=()=>{this.imgWidth=C.naturalWidth,this.imgHeight=C.naturalHeight,Ft(),C.onload=null},C.src=o,Ft()),Ft(),T.transform=`translate(-${i*m}px, -${a*A}px)`}};De=new WeakMap;Mn.shadowRootOptions={mode:"open"};Mn.getTemplateHTML=rv;d.customElements.get("media-preview-thumbnail")||d.customElements.define("media-preview-thumbnail",Mn);var cd=Mn,Du=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},hd=(e,t,i)=>(Du(e,t,"read from private field"),i?i.call(e):t.get(e)),nv=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sv=(e,t,i,a)=>(Du(e,t,"write to private field"),t.set(e,i),i),aa,ov=class extends bt{constructor(){super(),nv(this,aa,void 0),sv(this,aa,this.shadowRoot.querySelector("slot")),hd(this,aa).textContent=Et(0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_PREVIEW_TIME&&i!=null&&(hd(this,aa).textContent=Et(parseFloat(i)))}get mediaPreviewTime(){return O(this,s.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){W(this,s.MEDIA_PREVIEW_TIME,e)}};aa=new WeakMap;d.customElements.get("media-preview-time-display")||d.customElements.define("media-preview-time-display",ov);var Yt={SEEK_OFFSET:"seekoffset"},Un=30,lv=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${e}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function dv(e,t){return`
    <slot name="icon">${lv(t.seekOffset)}</slot>
  `}var uv=(e,t)=>{e.setAttribute("aria-label",v("seek back {seekOffset} seconds",{seekOffset:t}))};function cv(){return v("Seek backward")}var hv=0,yo=class extends z{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_CURRENT_TIME,Yt.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=O(this,Yt.SEEK_OFFSET,Un)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),uv(this,this.seekOffset),e===Yt.SEEK_OFFSET&&(this.seekOffset=O(this,Yt.SEEK_OFFSET,Un))}get seekOffset(){return O(this,Yt.SEEK_OFFSET,Un)}set seekOffset(e){W(this,Yt.SEEK_OFFSET,e),this.setAttribute("aria-label",v("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),Wd($d(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return O(this,s.MEDIA_CURRENT_TIME,hv)}set mediaCurrentTime(e){W(this,s.MEDIA_CURRENT_TIME,e)}handleClick(){const e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new d.CustomEvent(E.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}};yo.getSlotTemplateHTML=dv;yo.getTooltipContentHTML=cv;d.customElements.get("media-seek-backward-button")||d.customElements.define("media-seek-backward-button",yo);var Zt={SEEK_OFFSET:"seekoffset"},Nn=30,mv=e=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${e}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function vv(e,t){return`
    <slot name="icon">${mv(t.seekOffset)}</slot>
  `}var pv=(e,t)=>{e.setAttribute("aria-label",v("seek forward {seekOffset} seconds",{seekOffset:t}))};function Ev(){return v("Seek forward")}var fv=0,Io=class extends z{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_CURRENT_TIME,Zt.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=O(this,Zt.SEEK_OFFSET,Nn)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),pv(this,this.seekOffset),e===Zt.SEEK_OFFSET&&(this.seekOffset=O(this,Zt.SEEK_OFFSET,Nn))}get seekOffset(){return O(this,Zt.SEEK_OFFSET,Nn)}set seekOffset(e){W(this,Zt.SEEK_OFFSET,e),this.setAttribute("aria-label",v("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),Wd($d(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return O(this,s.MEDIA_CURRENT_TIME,fv)}set mediaCurrentTime(e){W(this,s.MEDIA_CURRENT_TIME,e)}handleClick(){const e=this.mediaCurrentTime+this.seekOffset,t=new d.CustomEvent(E.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}};Io.getSlotTemplateHTML=vv;Io.getTooltipContentHTML=Ev;d.customElements.get("media-seek-forward-button")||d.customElements.define("media-seek-forward-button",Io);var Mo=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ae=(e,t,i)=>(Mo(e,t,"read from private field"),i?i.call(e):t.get(e)),yt=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},wo=(e,t,i,a)=>(Mo(e,t,"write to private field"),t.set(e,i),i),ct=(e,t,i)=>(Mo(e,t,"access private method"),i),ri,We,wn,Lo,xu,en,Co,ra,gr,br,vs,st={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},md=[...Object.values(st),s.MEDIA_CURRENT_TIME,s.MEDIA_DURATION,s.MEDIA_SEEKABLE],Ou=["Enter"," "],gv="&nbsp;/&nbsp;",ps=(e,{timesSep:t=gv}={})=>{var i,a;const r=(i=e.mediaCurrentTime)!=null?i:0,[,n]=(a=e.mediaSeekable)!=null?a:[];let o=0;Number.isFinite(e.mediaDuration)?o=e.mediaDuration:Number.isFinite(n)&&(o=n);const l=e.remaining?Et(0-(o-r)):Et(r);return e.showDuration?`${l}${t}${Et(o)}`:l},bv=e=>{var t;const i=e.mediaCurrentTime,[,a]=(t=e.mediaSeekable)!=null?t:[];let r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){e.setAttribute("aria-description",v("video not loaded, unknown time."));return}const n=e.remaining?pa(0-(r-i)):pa(i);if(!e.showDuration){e.setAttribute("aria-description",n);return}const o=pa(r),l=v("{currentTime} of {totalTime}",{currentTime:n,totalTime:o});e.setAttribute("aria-description",l)};function _v(e,t){return`
    <slot>${ps(t)}</slot>
  `}var Av=e=>{e.setAttribute("aria-label",v("playback time"))},Pu=class extends bt{constructor(){super(),yt(this,Lo),yt(this,en),yt(this,ra),yt(this,br),yt(this,ri,void 0),yt(this,We,null),yt(this,wn,e=>{const{metaKey:t,altKey:i,key:a}=e;if(t||i||!Ou.includes(a)){this.removeEventListener("keyup",Ae(this,We));return}this.addEventListener("keyup",Ae(this,We))}),wo(this,ri,this.shadowRoot.querySelector("slot")),Ae(this,ri).innerHTML=`${ps(this)}`}static get observedAttributes(){return[...super.observedAttributes,...md,"disabled"]}connectedCallback(){const{style:e}=q(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",v("playback time")),ct(this,ra,gr).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),ct(this,en,Co).call(this),super.disconnectedCallback()}attributeChangedCallback(e,t,i){Av(this),md.includes(e)?this.update():e==="disabled"&&i!==t?i==null?ct(this,ra,gr).call(this):ct(this,br,vs).call(this):e===st.NO_TOGGLE&&i!==t&&(this.noToggle?ct(this,br,vs).call(this):ct(this,ra,gr).call(this)),super.attributeChangedCallback(e,t,i)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return I(this,st.REMAINING)}set remaining(e){M(this,st.REMAINING,e)}get showDuration(){return I(this,st.SHOW_DURATION)}set showDuration(e){M(this,st.SHOW_DURATION,e)}get noToggle(){return I(this,st.NO_TOGGLE)}set noToggle(e){M(this,st.NO_TOGGLE,e)}get mediaDuration(){return O(this,s.MEDIA_DURATION)}set mediaDuration(e){W(this,s.MEDIA_DURATION,e)}get mediaCurrentTime(){return O(this,s.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){W(this,s.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){const e=this.getAttribute(s.MEDIA_SEEKABLE);if(e)return e.split(":").map(t=>+t)}set mediaSeekable(e){if(e==null){this.removeAttribute(s.MEDIA_SEEKABLE);return}this.setAttribute(s.MEDIA_SEEKABLE,e.join(":"))}update(){const e=ps(this);bv(this),e!==Ae(this,ri).innerHTML&&(Ae(this,ri).innerHTML=e)}};ri=new WeakMap;We=new WeakMap;wn=new WeakMap;Lo=new WeakSet;xu=function(){Ae(this,We)||(wo(this,We,e=>{const{key:t}=e;if(!Ou.includes(t)){this.removeEventListener("keyup",Ae(this,We));return}this.toggleTimeDisplay()}),this.addEventListener("keydown",Ae(this,wn)),this.addEventListener("click",this.toggleTimeDisplay))};en=new WeakSet;Co=function(){Ae(this,We)&&(this.removeEventListener("keyup",Ae(this,We)),this.removeEventListener("keydown",Ae(this,wn)),this.removeEventListener("click",this.toggleTimeDisplay),wo(this,We,null))};ra=new WeakSet;gr=function(){!this.noToggle&&!this.hasAttribute("disabled")&&(this.setAttribute("role","button"),this.enable(),ct(this,Lo,xu).call(this))};br=new WeakSet;vs=function(){this.removeAttribute("role"),this.disable(),ct(this,en,Co).call(this)};Pu.getSlotTemplateHTML=_v;d.customElements.get("media-time-display")||d.customElements.define("media-time-display",Pu);var Uu=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Z=(e,t,i)=>(Uu(e,t,"read from private field"),t.get(e)),Se=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ne=(e,t,i,a)=>(Uu(e,t,"write to private field"),t.set(e,i),i),Tv=(e,t,i,a)=>({set _(r){ne(e,t,r)},get _(){return Z(e,t)}}),ni,_r,si,na,Ar,Tr,kr,oi,Lt,Sr,kv=class{constructor(e,t,i){Se(this,ni,void 0),Se(this,_r,void 0),Se(this,si,void 0),Se(this,na,void 0),Se(this,Ar,void 0),Se(this,Tr,void 0),Se(this,kr,void 0),Se(this,oi,void 0),Se(this,Lt,0),Se(this,Sr,(a=performance.now())=>{ne(this,Lt,requestAnimationFrame(Z(this,Sr))),ne(this,na,performance.now()-Z(this,si));const r=1e3/this.fps;if(Z(this,na)>r){ne(this,si,a-Z(this,na)%r);const n=1e3/((a-Z(this,_r))/++Tv(this,Ar)._),o=(a-Z(this,Tr))/1e3/this.duration;let l=Z(this,kr)+o*this.playbackRate;l-Z(this,ni).valueAsNumber>0?ne(this,oi,this.playbackRate/this.duration/n):(ne(this,oi,.995*Z(this,oi)),l=Z(this,ni).valueAsNumber+Z(this,oi)),this.callback(l)}}),ne(this,ni,e),this.callback=t,this.fps=i}start(){Z(this,Lt)===0&&(ne(this,si,performance.now()),ne(this,_r,Z(this,si)),ne(this,Ar,0),Z(this,Sr).call(this))}stop(){Z(this,Lt)!==0&&(cancelAnimationFrame(Z(this,Lt)),ne(this,Lt,0))}update({start:e,duration:t,playbackRate:i}){const a=e-Z(this,ni).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.5/t||r>=.5)&&this.callback(e),ne(this,kr,e),ne(this,Tr,performance.now()),this.duration=t,this.playbackRate=i}};ni=new WeakMap;_r=new WeakMap;si=new WeakMap;na=new WeakMap;Ar=new WeakMap;Tr=new WeakMap;kr=new WeakMap;oi=new WeakMap;Lt=new WeakMap;Sr=new WeakMap;var Ro=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},N=(e,t,i)=>(Ro(e,t,"read from private field"),i?i.call(e):t.get(e)),G=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},de=(e,t,i,a)=>(Ro(e,t,"write to private field"),t.set(e,i),i),he=(e,t,i)=>(Ro(e,t,"access private method"),i),li,ht,tn,ba,an,yr,wa,La,di,ui,sa,Es,Nu,fs,rn,Do,nn,xo,sn,Oo,gs,Hu,Ca,on,bs,Bu,Sv=e=>{const t=e.range,i=pa(+Wu(e)),a=pa(+e.mediaSeekableEnd),r=i&&a?v("{currentTime} of {totalTime}",{currentTime:i,totalTime:a}):v("video not loaded, unknown time.");t.setAttribute("aria-valuetext",r)};function yv(e){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${s.MEDIA_PREVIEW_IMAGE}], [${s.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${s.MEDIA_PREVIEW_IMAGE}], [${s.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${s.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${s.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${s.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${s.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${s.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${s.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${s.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${s.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${s.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${s.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${s.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${s.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${cd.shadowRootOptions.mode}">
            ${cd.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}var Ya=(e,t=e.mediaCurrentTime)=>{const i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;if(Number.isNaN(a))return 0;const r=(t-i)/(a-i);return Math.max(0,Math.min(r,1))},Wu=(e,t=e.range.valueAsNumber)=>{const i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i},Po=class extends Hi{constructor(){super(),G(this,Es),G(this,rn),G(this,nn),G(this,sn),G(this,gs),G(this,Ca),G(this,bs),G(this,li,null),G(this,ht,void 0),G(this,tn,void 0),G(this,ba,void 0),G(this,an,void 0),G(this,yr,void 0),G(this,wa,void 0),G(this,La,void 0),G(this,di,void 0),G(this,ui,void 0),G(this,sa,()=>{he(this,Es,Nu).call(this)?N(this,ht).start():N(this,ht).stop()}),G(this,fs,i=>{this.dragging||(Zs(i)&&(this.range.valueAsNumber=i),N(this,ui)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),de(this,tn,this.shadowRoot.querySelectorAll('[part~="box"]')),de(this,an,this.shadowRoot.querySelector('[part~="preview-box"]')),de(this,yr,this.shadowRoot.querySelector('[part~="current-box"]'));const t=getComputedStyle(this);de(this,wa,parseInt(t.getPropertyValue("--media-box-padding-left"))),de(this,La,parseInt(t.getPropertyValue("--media-box-padding-right"))),de(this,ht,new kv(this.range,N(this,fs),60))}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PAUSED,s.MEDIA_DURATION,s.MEDIA_SEEKABLE,s.MEDIA_CURRENT_TIME,s.MEDIA_PREVIEW_IMAGE,s.MEDIA_PREVIEW_TIME,s.MEDIA_PREVIEW_CHAPTER,s.MEDIA_BUFFERED,s.MEDIA_PLAYBACK_RATE,s.MEDIA_LOADING,s.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",v("seek")),N(this,sa).call(this),de(this,li,this.getRootNode()),(e=N(this,li))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),N(this,ht).stop(),(e=N(this,li))==null||e.removeEventListener("transitionstart",this),de(this,li,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===s.MEDIA_CURRENT_TIME||e===s.MEDIA_PAUSED||e===s.MEDIA_ENDED||e===s.MEDIA_LOADING||e===s.MEDIA_DURATION||e===s.MEDIA_SEEKABLE?(N(this,ht).update({start:Ya(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),N(this,sa).call(this),Sv(this)):e===s.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===s.MEDIA_DURATION||e===s.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=N(this,di),this.updateBar()))}get mediaChaptersCues(){return N(this,di)}set mediaChaptersCues(e){var t;de(this,di,e),this.updateSegments((t=N(this,di))==null?void 0:t.map(i=>({start:Ya(this,i.startTime),end:Ya(this,i.endTime)})))}get mediaPaused(){return I(this,s.MEDIA_PAUSED)}set mediaPaused(e){M(this,s.MEDIA_PAUSED,e)}get mediaLoading(){return I(this,s.MEDIA_LOADING)}set mediaLoading(e){M(this,s.MEDIA_LOADING,e)}get mediaDuration(){return O(this,s.MEDIA_DURATION)}set mediaDuration(e){W(this,s.MEDIA_DURATION,e)}get mediaCurrentTime(){return O(this,s.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){W(this,s.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return O(this,s.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){W(this,s.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){const e=this.getAttribute(s.MEDIA_BUFFERED);return e?e.split(" ").map(t=>t.split(":").map(i=>+i)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(s.MEDIA_BUFFERED);return}const t=e.map(i=>i.join(":")).join(" ");this.setAttribute(s.MEDIA_BUFFERED,t)}get mediaSeekable(){const e=this.getAttribute(s.MEDIA_SEEKABLE);if(e)return e.split(":").map(t=>+t)}set mediaSeekable(e){if(e==null){this.removeAttribute(s.MEDIA_SEEKABLE);return}this.setAttribute(s.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;const[,t=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return t}get mediaSeekableStart(){var e;const[t=0]=(e=this.mediaSeekable)!=null?e:[];return t}get mediaPreviewImage(){return U(this,s.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){P(this,s.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return O(this,s.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){W(this,s.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return I(this,s.MEDIA_ENDED)}set mediaEnded(e){M(this,s.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;const t=this.mediaBuffered;if(!t.length)return;let i;if(this.mediaEnded)i=1;else{const r=this.mediaCurrentTime,[,n=this.mediaSeekableStart]=(e=t.find(([o,l])=>o<=r&&r<=l))!=null?e:[];i=Ya(this,n)}const{style:a}=q(this.shadowRoot,"#buffered");a.setProperty("width",`${i*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const t=q(this.shadowRoot,"#current-rail"),i=q(this.shadowRoot,'[part~="current-box"]'),a=he(this,rn,Do).call(this,N(this,yr)),r=he(this,nn,xo).call(this,a,this.range.valueAsNumber),n=he(this,sn,Oo).call(this,a,this.range.valueAsNumber);t.style.transform=`translateX(${r})`,t.style.setProperty("--_range-width",`${a.range.width}`),i.style.setProperty("--_box-shift",`${n}`),i.style.setProperty("--_box-width",`${a.box.width}px`),i.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":he(this,bs,Bu).call(this);break;case"pointermove":he(this,gs,Hu).call(this,e);break;case"pointerup":N(this,ui)&&de(this,ui,!1);break;case"pointerdown":de(this,ui,!0);break;case"pointerleave":he(this,Ca,on).call(this,null);break;case"transitionstart":Je(e.target,this)&&setTimeout(()=>N(this,sa).call(this),0);break}}};li=new WeakMap;ht=new WeakMap;tn=new WeakMap;ba=new WeakMap;an=new WeakMap;yr=new WeakMap;wa=new WeakMap;La=new WeakMap;di=new WeakMap;ui=new WeakMap;sa=new WeakMap;Es=new WeakSet;Nu=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&Fd(this)};fs=new WeakMap;rn=new WeakSet;Do=function(e){var t;const a=((t=this.getAttribute("bounds")?Ui(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?t:this).getBoundingClientRect(),r=this.range.getBoundingClientRect(),n=e.offsetWidth,o=-(r.left-a.left-n/2),l=a.right-r.left-n/2;return{box:{width:n,min:o,max:l},bounds:a,range:r}};nn=new WeakSet;xo=function(e,t){let i=`${t*100}%`;const{width:a,min:r,max:n}=e.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(n)){const l=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${l})`}return i};sn=new WeakSet;Oo=function(e,t){const{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+N(this,wa)){const o=e.range.left-e.bounds.left-N(this,wa);return`${n-i/2+o}px`}if(n>r-N(this,La)){const o=e.bounds.right-e.range.right-N(this,La);return`${n+i/2-o-e.range.width}px`}return 0};gs=new WeakSet;Hu=function(e){const t=[...N(this,tn)].some(g=>e.composedPath().includes(g));if(!this.dragging&&(t||!e.composedPath().includes(this))){he(this,Ca,on).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=q(this.shadowRoot,"#preview-rail"),r=q(this.shadowRoot,'[part~="preview-box"]'),n=he(this,rn,Do).call(this,N(this,an));let o=(e.clientX-n.range.left)/n.range.width;o=Math.max(0,Math.min(1,o));const l=he(this,nn,xo).call(this,n,o),u=he(this,sn,Oo).call(this,n,o);a.style.transform=`translateX(${l})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${u}`),r.style.setProperty("--_box-width",`${n.box.width}px`);const h=Math.round(N(this,ba))-Math.round(o*i);Math.abs(h)<1&&o>.01&&o<.99||(de(this,ba,o*i),he(this,Ca,on).call(this,N(this,ba)))};Ca=new WeakSet;on=function(e){this.dispatchEvent(new d.CustomEvent(E.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))};bs=new WeakSet;Bu=function(){N(this,ht).stop();const e=Wu(this);this.dispatchEvent(new d.CustomEvent(E.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))};Po.shadowRootOptions={mode:"open"};Po.getContainerTemplateHTML=yv;d.customElements.get("media-time-range")||d.customElements.define("media-time-range",Po);var Iv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},vd=(e,t,i)=>(Iv(e,t,"read from private field"),i?i.call(e):t.get(e)),Mv=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Ir,wv=1,Lv=e=>e.mediaMuted?0:e.mediaVolume,Cv=e=>`${Math.round(e*100)}%`,Rv=class extends Hi{constructor(){super(...arguments),Mv(this,Ir,()=>{const e=this.range.value,t=new d.CustomEvent(E.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_VOLUME,s.MEDIA_MUTED,s.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",v("volume")),this.range.addEventListener("input",vd(this,Ir))}disconnectedCallback(){this.range.removeEventListener("input",vd(this,Ir)),super.disconnectedCallback()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===s.MEDIA_VOLUME||e===s.MEDIA_MUTED)&&(this.range.valueAsNumber=Lv(this),this.range.setAttribute("aria-valuetext",Cv(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return O(this,s.MEDIA_VOLUME,wv)}set mediaVolume(e){W(this,s.MEDIA_VOLUME,e)}get mediaMuted(){return I(this,s.MEDIA_MUTED)}set mediaMuted(e){M(this,s.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return U(this,s.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){P(this,s.MEDIA_VOLUME_UNAVAILABLE,e)}};Ir=new WeakMap;d.customElements.get("media-volume-range")||d.customElements.define("media-volume-range",Rv);function Dv(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${s.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `}function xv(){return v("Loop")}var Uo=class extends z{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=((e=this.shadowRoot)==null?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=v("Loop"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return I(this,s.MEDIA_LOOP)}set mediaLoop(e){M(this,s.MEDIA_LOOP,e)}handleClick(){const e=!this.mediaLoop,t=new d.CustomEvent(E.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}};Uo.getSlotTemplateHTML=Dv;Uo.getTooltipContentHTML=xv;d.customElements.get("media-loop-button")||d.customElements.define("media-loop-button",Uo);var $u=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},S=(e,t,i)=>($u(e,t,"read from private field"),i?i.call(e):t.get(e)),Ne=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ze=(e,t,i,a)=>($u(e,t,"write to private field"),t.set(e,i),i),ci,Mr,Ct,oa,ot,lt,dt,Rt,hi,wr,ge,pd=1,Ed=0,Ov=1,Pv={processCallback(e,t,i){if(i){for(const[a,r]of t)if(a in i){const n=i[a];typeof n=="boolean"&&r instanceof Ht&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof Ht?r.element[r.attributeName]=n:r.value=n}}}},No=class extends d.DocumentFragment{constructor(e,t,i=Pv){var a;super(),Ne(this,ci,void 0),Ne(this,Mr,void 0),this.append(e.content.cloneNode(!0)),ze(this,ci,Fu(this)),ze(this,Mr,i),(a=i.createCallback)==null||a.call(i,this,S(this,ci),t),i.processCallback(this,S(this,ci),t)}update(e){S(this,Mr).processCallback(this,S(this,ci),e)}};ci=new WeakMap;Mr=new WeakMap;var Fu=(e,t=[])=>{let i,a;for(const r of e.attributes||[])if(r.value.includes("{{")){const n=new Nv;for([i,a]of gd(r.value))if(!i)n.append(a);else{const o=new Ht(e,r.name,r.namespaceURI);n.append(o),t.push([a,o])}r.value=n.toString()}for(const r of e.childNodes)if(r.nodeType===pd&&!(r instanceof HTMLTemplateElement))Fu(r,t);else{const n=r.data;if(r.nodeType===pd||n.includes("{{")){const o=[];if(n)for([i,a]of gd(n))if(!i)o.push(new Text(a));else{const l=new Gu(e);o.push(l),t.push([a,l])}else if(r instanceof HTMLTemplateElement){const l=new qu(e,r);o.push(l),t.push([l.expression,l])}r.replaceWith(...o.flatMap(l=>l.replacementNodes||[l]))}}return t},fd={},gd=e=>{let t="",i=0,a=fd[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)n==="{"&&e[r+1]==="{"&&e[r-1]!=="\\"&&e[r+2]&&++i==1?(t&&a.push([Ed,t]),t="",r++):n==="}"&&e[r+1]==="}"&&e[r-1]!=="\\"&&!--i?(a.push([Ov,t.trim()]),t="",r++):t+=n||"";return t&&a.push([Ed,(i>0?"{{":"")+t]),fd[e]=a},Uv=11,Vu=class{get value(){return""}set value(e){}toString(){return this.value}},Ku=new WeakMap,Nv=class{constructor(){Ne(this,Ct,[])}[Symbol.iterator](){return S(this,Ct).values()}get length(){return S(this,Ct).length}item(e){return S(this,Ct)[e]}append(...e){for(const t of e)t instanceof Ht&&Ku.set(t,this),S(this,Ct).push(t)}toString(){return S(this,Ct).join("")}};Ct=new WeakMap;var Ht=class extends Vu{constructor(e,t,i){super(),Ne(this,Rt),Ne(this,oa,""),Ne(this,ot,void 0),Ne(this,lt,void 0),Ne(this,dt,void 0),ze(this,ot,e),ze(this,lt,t),ze(this,dt,i)}get attributeName(){return S(this,lt)}get attributeNamespace(){return S(this,dt)}get element(){return S(this,ot)}get value(){return S(this,oa)}set value(e){S(this,oa)!==e&&(ze(this,oa,e),!S(this,Rt,hi)||S(this,Rt,hi).length===1?e==null?S(this,ot).removeAttributeNS(S(this,dt),S(this,lt)):S(this,ot).setAttributeNS(S(this,dt),S(this,lt),e):S(this,ot).setAttributeNS(S(this,dt),S(this,lt),S(this,Rt,hi).toString()))}get booleanValue(){return S(this,ot).hasAttributeNS(S(this,dt),S(this,lt))}set booleanValue(e){if(!S(this,Rt,hi)||S(this,Rt,hi).length===1)this.value=e?"":null;else throw new DOMException("Value is not fully templatized")}};oa=new WeakMap;ot=new WeakMap;lt=new WeakMap;dt=new WeakMap;Rt=new WeakSet;hi=function(){return Ku.get(this)};var Gu=class extends Vu{constructor(e,t){super(),Ne(this,wr,void 0),Ne(this,ge,void 0),ze(this,wr,e),ze(this,ge,t?[...t]:[new Text])}get replacementNodes(){return S(this,ge)}get parentNode(){return S(this,wr)}get nextSibling(){return S(this,ge)[S(this,ge).length-1].nextSibling}get previousSibling(){return S(this,ge)[0].previousSibling}get value(){return S(this,ge).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){const t=e.flat().flatMap(i=>i==null?[new Text]:i.forEach?[...i]:i.nodeType===Uv?[...i.childNodes]:i.nodeType?[i]:[new Text(i)]);t.length||t.push(new Text),ze(this,ge,Hv(S(this,ge)[0].parentNode,S(this,ge),t,this.nextSibling))}};wr=new WeakMap;ge=new WeakMap;var qu=class extends Gu{constructor(e,t){const i=t.getAttribute("directive")||t.getAttribute("type");let a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}};function Hv(e,t,i,a=null){let r=0,n,o,l,u=i.length,h=t.length;for(;r<u&&r<h&&t[r]==i[r];)r++;for(;r<u&&r<h&&i[u-1]==t[h-1];)a=i[--h,--u];if(r==h)for(;r<u;)e.insertBefore(i[r++],a);if(r==u)for(;r<h;)e.removeChild(t[r++]);else{for(n=t[r];r<u;)l=i[r++],o=n?n.nextSibling:a,n==l?n=o:r<u&&i[r]==o?(e.replaceChild(l,n),n=o):e.insertBefore(l,n);for(;n!=a;)o=n.nextSibling,e.removeChild(n),n=o}return i}var bd={string:e=>String(e)},Yu=class{constructor(e){this.template=e,this.state=void 0}},Ot=new WeakMap,Pt=new WeakMap,_s={partial:(e,t)=>{t[e.expression]=new Yu(e.template)},if:(e,t)=>{var i;if(Zu(e.expression,t))if(Ot.get(e)!==e.template){Ot.set(e,e.template);const a=new No(e.template,t,Ho);e.replace(a),Pt.set(e,a)}else(i=Pt.get(e))==null||i.update(t);else e.replace(""),Ot.delete(e),Pt.delete(e)}},Bv=Object.keys(_s),Ho={processCallback(e,t,i){var a,r;if(i)for(const[n,o]of t){if(o instanceof qu){if(!o.directive){const u=Bv.find(h=>o.template.hasAttribute(h));u&&(o.directive=u,o.expression=o.template.getAttribute(u))}(a=_s[o.directive])==null||a.call(_s,o,i);continue}let l=Zu(n,i);if(l instanceof Yu){Ot.get(o)!==l.template?(Ot.set(o,l.template),l=new No(l.template,l.state,Ho),o.value=l,Pt.set(o,l)):(r=Pt.get(o))==null||r.update(l.state);continue}l?(o instanceof Ht&&o.attributeName.startsWith("aria-")&&(l=String(l)),o instanceof Ht?typeof l=="boolean"?o.booleanValue=l:typeof l=="function"?o.element[o.attributeName]=l:o.value=l:(o.value=l,Ot.delete(o),Pt.delete(o))):o instanceof Ht?o.value=void 0:(o.value=void 0,Ot.delete(o),Pt.delete(o))}}},_d={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>e??t,"|":(e,t)=>{var i;return(i=bd[t])==null?void 0:i.call(bd,e)}};function Wv(e){return $v(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:t})=>t!=="ws")}function Zu(e,t={}){var i,a,r,n,o,l,u;const h=Wv(e);if(h.length===0||h.some(({type:g})=>!g))return qi(e);if(((i=h[0])==null?void 0:i.token)===">"){const g=t[(a=h[1])==null?void 0:a.token];if(!g)return qi(e);const _={...t};g.state=_;const p=h.slice(2);for(let m=0;m<p.length;m+=3){const A=(r=p[m])==null?void 0:r.token,k=(n=p[m+1])==null?void 0:n.token,T=(o=p[m+2])==null?void 0:o.token;A&&k==="="&&(_[A]=Yi(T,t))}return g}if(h.length===1)return Za(h[0])?Yi(h[0].token,t):qi(e);if(h.length===2){const g=(l=h[0])==null?void 0:l.token,_=_d[g];if(!_||!Za(h[1]))return qi(e);const p=Yi(h[1].token,t);return _(p)}if(h.length===3){const g=(u=h[1])==null?void 0:u.token,_=_d[g];if(!_||!Za(h[0])||!Za(h[2]))return qi(e);const p=Yi(h[0].token,t);if(g==="|")return _(p,h[2].token);const m=Yi(h[2].token,t);return _(p,m)}}function qi(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function Za({type:e}){return["number","boolean","string","param"].includes(e)}function Yi(e,t){const i=e[0],a=e.slice(-1);return e==="true"||e==="false"?e==="true":i===a&&["'",'"'].includes(i)?e.slice(1,-1):Dd(e)?parseFloat(e):t[e]}function $v(e,t){let i,a,r;const n=[];for(;e;){r=null,i=e.length;for(const o in t)a=t[o].exec(e),a&&a.index<i&&(r={token:a[0],type:o,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n}var Bo=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ut=(e,t,i)=>(Bo(e,t,"read from private field"),i?i.call(e):t.get(e)),It=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Qe=(e,t,i,a)=>(Bo(e,t,"write to private field"),t.set(e,i),i),Hn=(e,t,i)=>(Bo(e,t,"access private method"),i),yi,Lr,Ii,mi,As,Qu,Cr,Ts,la,Bn={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},zu=K.createElement("template");zu.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;var Ln=class extends d.HTMLElement{constructor(){super(),It(this,As),It(this,Cr),It(this,yi,void 0),It(this,Lr,void 0),It(this,Ii,void 0),It(this,mi,void 0),It(this,la,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer()),Qe(this,mi,new MutationObserver(e=>{var t;this.mediaController&&!((t=this.mediaController)!=null&&t.breakpointsComputed)||e.some(i=>{const a=i.target;return a===this?!0:a.localName!=="media-controller"?!1:!!(Bn[i.attributeName]||i.attributeName.startsWith("breakpoint"))})&&this.render()})),Qe(this,la,this.render.bind(this)),Hn(this,As,Qu).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return(e=ut(this,yi))!=null?e:this.constructor.template}set template(e){if(e===null){this.removeAttribute("template");return}typeof e=="string"?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(Qe(this,yi,e),Qe(this,Ii,null),this.createRenderer())}get props(){var e,t,i;const a=[...Array.from((t=(e=this.mediaController)==null?void 0:e.attributes)!=null?t:[]).filter(({name:n})=>Bn[n]||n.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(const n of a){const o=(i=Bn[n.name])!=null?i:Fc(n.name);let{value:l}=n;l!=null?(Dd(l)&&(l=parseFloat(l)),r[o]=l===""?!0:l):r[o]=!1}return r}attributeChangedCallback(e,t,i){e==="template"&&t!=i&&Hn(this,Cr,Ts).call(this)}connectedCallback(){this.addEventListener(ft.BREAKPOINTS_COMPUTED,ut(this,la)),ut(this,mi).observe(this,{attributes:!0}),ut(this,mi).observe(this.renderRoot,{attributes:!0,subtree:!0}),Hn(this,Cr,Ts).call(this)}disconnectedCallback(){this.removeEventListener(ft.BREAKPOINTS_COMPUTED,ut(this,la)),ut(this,mi).disconnect()}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==ut(this,Lr)&&(Qe(this,Lr,this.template),this.renderer=new No(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(zu.content.cloneNode(!0),this.renderer))}render(){var e;(e=this.renderer)==null||e.update(this.props)}};yi=new WeakMap;Lr=new WeakMap;Ii=new WeakMap;mi=new WeakMap;As=new WeakSet;Qu=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){const t=this[e];delete this[e],this[e]=t}};Cr=new WeakSet;Ts=function(){var e;const t=this.getAttribute("template");if(!t||t===ut(this,Ii))return;const i=this.getRootNode(),a=(e=i?.getElementById)==null?void 0:e.call(i,t);if(a){Qe(this,Ii,t),Qe(this,yi,a),this.createRenderer();return}Fv(t)&&(Qe(this,Ii,t),Vv(t).then(r=>{const n=K.createElement("template");n.innerHTML=r,Qe(this,yi,n),this.createRenderer()}).catch(console.error))};la=new WeakMap;Ln.observedAttributes=["template"];Ln.processor=Ho;function Fv(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;const t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch{return!1}return!0}async function Vv(e){const t=await fetch(e);if(t.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}d.customElements.get("media-theme")||d.customElements.define("media-theme",Ln);function Kv({anchor:e,floating:t,placement:i}){const a=Gv({anchor:e,floating:t}),{x:r,y:n}=Yv(a,i);return{x:r,y:n}}function Gv({anchor:e,floating:t}){return{anchor:qv(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}function qv(e,t){var i;const a=e.getBoundingClientRect(),r=(i=t?.getBoundingClientRect())!=null?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}function Yv({anchor:e,floating:t},i){const a=Zv(i)==="x"?"y":"x",r=a==="y"?"height":"width",n=Xu(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,u=e[r]/2-t[r]/2;let h;switch(n){case"top":h={x:o,y:e.y-t.height};break;case"bottom":h={x:o,y:e.y+e.height};break;case"right":h={x:e.x+e.width,y:l};break;case"left":h={x:e.x-t.width,y:l};break;default:h={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":h[a]-=u;break;case"end":h[a]+=u;break}return h}function Xu(e){return e.split("-")[0]}function Zv(e){return["top","bottom"].includes(Xu(e))?"y":"x"}var Wo=class extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}},Qv=class extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}},$o=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},w=(e,t,i)=>($o(e,t,"read from private field"),i?i.call(e):t.get(e)),D=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ue=(e,t,i,a)=>($o(e,t,"write to private field"),t.set(e,i),i),x=(e,t,i)=>($o(e,t,"access private method"),i),xe,pt,Xe,Rr,da,Bt,Ra,ks,Ju,ln,Fo,dn,Dr,Ss,ys,ju,Is,ec,Ms,tc,Mi,wi,Li,Da,un,Vo,ws,ic,Ko,ac,Ls,rc,Go,nc,Cs,sc,Rs,oc,_a,cn,Ds,lc,Aa,hn,xr,xs;function Oi({type:e,text:t,value:i,checked:a}){const r=K.createElement("media-chrome-menu-item");r.type=e,r.part.add("menu-item"),r.part.add(e),r.value=i,r.checked=a;const n=K.createElement("span");return n.textContent=t,r.append(n),r}function Wt(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if(i?.nodeName=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;const a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}function zv(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `}var Mt={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"},me=class extends d.HTMLElement{constructor(){if(super(),D(this,ks),D(this,ln),D(this,Dr),D(this,ys),D(this,Is),D(this,Ms),D(this,Li),D(this,un),D(this,ws),D(this,Ko),D(this,Ls),D(this,Go),D(this,Cs),D(this,Rs),D(this,_a),D(this,Ds),D(this,Aa),D(this,xr),D(this,xe,null),D(this,pt,null),D(this,Xe,null),D(this,Rr,new Set),D(this,da,void 0),D(this,Bt,!1),D(this,Ra,null),D(this,dn,()=>{const e=w(this,Rr),t=new Set(this.items);for(const i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(const i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));ue(this,Rr,t)}),D(this,Mi,()=>{x(this,Li,Da).call(this),x(this,un,Vo).call(this,!1)}),D(this,wi,()=>{x(this,Li,Da).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=oe(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),ue(this,da,new MutationObserver(w(this,dn)))}static get observedAttributes(){return[Mt.DISABLED,Mt.HIDDEN,Mt.STYLE,Mt.ANCHOR,L.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":x(this,ks,Ju).call(this,e);break;case"invoke":x(this,ys,ju).call(this,e);break;case"click":x(this,ws,ic).call(this,e);break;case"toggle":x(this,Ls,rc).call(this,e);break;case"focusout":x(this,Cs,sc).call(this,e);break;case"keydown":x(this,Rs,oc).call(this,e);break}}connectedCallback(){var e,t;w(this,da).observe(this.defaultSlot,{childList:!0}),ue(this,Ra,Xs(this.shadowRoot,":host")),x(this,Dr,Ss).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),ue(this,xe,Gn(this)),(t=(e=w(this,xe))==null?void 0:e.associateElement)==null||t.call(e,this),this.hidden||(Ci(xa(this),w(this,Mi)),Ci(this,w(this,wi))),x(this,ln,Fo).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,t;w(this,da).disconnect(),Ri(xa(this),w(this,Mi)),Ri(this,w(this,wi)),this.disable(),(t=(e=w(this,xe))==null?void 0:e.unassociateElement)==null||t.call(e,this),ue(this,xe,null),ue(this,pt,null),ue(this,Xe,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,t,i){var a,r,n,o;e===Mt.HIDDEN&&i!==t?(w(this,Bt)||ue(this,Bt,!0),this.hidden?x(this,Ms,tc).call(this):x(this,Is,ec).call(this),this.dispatchEvent(new Qv({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===L.MEDIA_CONTROLLER?(t&&((r=(a=w(this,xe))==null?void 0:a.unassociateElement)==null||r.call(a,this),ue(this,xe,null)),i&&this.isConnected&&(ue(this,xe,Gn(this)),(o=(n=w(this,xe))==null?void 0:n.associateElement)==null||o.call(n,this))):e===Mt.DISABLED&&i!==t?i==null?this.enable():this.disable():e===Mt.STYLE&&i!==t&&x(this,Dr,Ss).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?(e=gn(this))==null?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(Xv)}get radioGroupItems(){return this.items.filter(e=>e.role==="menuitemradio")}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return(t=(e=this.checkedItems[0])==null?void 0:e.value)!=null?t:""}set value(e){const t=this.items.find(i=>i.value===e);t&&x(this,xr,xs).call(this,t)}focus(){if(ue(this,pt,zs()),this.items.length){x(this,Aa,hn).call(this,this.items[0]),this.items[0].focus();return}const e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');e?.focus()}handleSelect(e){var t;const i=x(this,_a,cn).call(this,e);i&&(x(this,xr,xs).call(this,i,i.type==="checkbox"),w(this,Xe)&&!this.hidden&&((t=w(this,pt))==null||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;const{key:a}=e,r=this.items,n=(i=(t=x(this,_a,cn).call(this,e))!=null?t:x(this,Ds,lc).call(this))!=null?i:r[0],o=r.indexOf(n);let l=Math.max(0,o);a==="ArrowDown"?l++:a==="ArrowUp"?l--:e.key==="Home"?l=0:e.key==="End"&&(l=r.length-1),l<0&&(l=r.length-1),l>r.length-1&&(l=0),x(this,Aa,hn).call(this,r[l]),r[l].focus()}};xe=new WeakMap;pt=new WeakMap;Xe=new WeakMap;Rr=new WeakMap;da=new WeakMap;Bt=new WeakMap;Ra=new WeakMap;ks=new WeakSet;Ju=function(e){const t=e.target;for(const i of t.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();["header","title"].includes(t.name)&&x(this,ln,Fo).call(this),t.name||w(this,dn).call(this)};ln=new WeakSet;Fo=function(){const e=this.shadowRoot.querySelector('slot[name="header"]'),t=this.shadowRoot.querySelector('slot[name="title"]');e.hidden=t.assignedNodes().length===0&&e.assignedNodes().length===0};dn=new WeakMap;Dr=new WeakSet;Ss=function(){var e;const t=this.shadowRoot.querySelector("#layout-row"),i=(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:e.trim();t.setAttribute("media",i==="row"?"":"width:0")};ys=new WeakSet;ju=function(e){ue(this,Xe,e.relatedTarget),Je(this,e.relatedTarget)||(this.hidden=!this.hidden)};Is=new WeakSet;ec=function(){var e;(e=w(this,Xe))==null||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),Ci(xa(this),w(this,Mi)),Ci(this,w(this,wi))};Ms=new WeakSet;tc=function(){var e;(e=w(this,Xe))==null||e.setAttribute("aria-expanded","false"),Ri(xa(this),w(this,Mi)),Ri(this,w(this,wi))};Mi=new WeakMap;wi=new WeakMap;Li=new WeakSet;Da=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:t,y:i}=Kv({anchor:this.anchorElement,floating:this,placement:"top-start"});e??(e=this.offsetWidth);const r=xa(this).getBoundingClientRect(),n=r.width-t-e,o=r.height-i-this.offsetHeight,{style:l}=w(this,Ra);l.setProperty("position","absolute"),l.setProperty("right",`${Math.max(0,n)}px`),l.setProperty("--_menu-bottom",`${o}px`);const u=getComputedStyle(this),g=l.getPropertyValue("--_menu-bottom")===u.bottom?o:parseFloat(u.bottom),_=r.height-g-parseFloat(u.marginBottom);this.style.setProperty("--_menu-max-height",`${_}px`)};un=new WeakSet;Vo=function(e){const t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=t?.querySelector('[role="menu"]'),{style:a}=w(this,Ra);if(e||a.setProperty("--media-menu-transition-in","none"),i){const r=i.offsetHeight,n=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),x(this,Li,Da).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),x(this,Li,Da).call(this);a.removeProperty("--media-menu-transition-in")};ws=new WeakSet;ic=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(w(this,Ko,ac))){(t=w(this,pt))==null||t.focus(),this.hidden=!0;return}const i=x(this,_a,cn).call(this,e);!i||i.hasAttribute("disabled")||(x(this,Aa,hn).call(this,i),this.handleSelect(e))};Ko=new WeakSet;ac=function(){var e;return(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:e.find(i=>i.matches('button[part~="back"]'))};Ls=new WeakSet;rc=function(e){if(e.target===this)return;x(this,Go,nc).call(this);const t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of t)i.invokeTargetElement!=e.target&&e.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new Wo({relatedTarget:i}));for(const i of t)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);x(this,un,Vo).call(this,!0)};Go=new WeakSet;nc=function(){const t=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!t)};Cs=new WeakSet;sc=function(e){var t;Je(this,e.relatedTarget)||(w(this,Bt)&&((t=w(this,pt))==null||t.focus()),w(this,Xe)&&w(this,Xe)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))};Rs=new WeakSet;oc=function(e){var t,i,a,r,n;const{key:o,ctrlKey:l,altKey:u,metaKey:h}=e;if(!(l||u||h)&&this.keysUsed.includes(o))if(e.preventDefault(),e.stopPropagation(),o==="Tab"){if(w(this,Bt)){this.hidden=!0;return}e.shiftKey?(i=(t=this.previousElementSibling)==null?void 0:t.focus)==null||i.call(t):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()}else o==="Escape"?((n=w(this,pt))==null||n.focus(),w(this,Bt)&&(this.hidden=!0)):o==="Enter"||o===" "?this.handleSelect(e):this.handleMove(e)};_a=new WeakSet;cn=function(e){return e.composedPath().find(t=>["menuitemradio","menuitemcheckbox"].includes(t.role))};Ds=new WeakSet;lc=function(){return this.items.find(e=>e.tabIndex===0)};Aa=new WeakSet;hn=function(e){for(const t of this.items)t.tabIndex=t===e?0:-1};xr=new WeakSet;xs=function(e,t){const i=[...this.checkedItems];e.type==="radio"&&this.radioGroupItems.forEach(a=>a.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((a,r)=>a!=i[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};me.shadowRootOptions={mode:"open"};me.getTemplateHTML=zv;function Xv(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(e?.role)}function xa(e){var t;return(t=e.getAttribute("bounds")?Ui(e,`#${e.getAttribute("bounds")}`):te(e)||e.parentElement)!=null?t:e}d.customElements.get("media-chrome-menu")||d.customElements.define("media-chrome-menu",me);var qo=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ee=(e,t,i)=>(qo(e,t,"read from private field"),i?i.call(e):t.get(e)),Ge=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Wn=(e,t,i,a)=>(qo(e,t,"write to private field"),t.set(e,i),i),Ai=(e,t,i)=>(qo(e,t,"access private method"),i),Or,Ta,Os,dc,mn,Yo,Zo,uc,He,vi,Ps,Pr,Us;function Jv(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `}function jv(e){return""}var le={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"},_t=class extends d.HTMLElement{constructor(){if(super(),Ge(this,Os),Ge(this,mn),Ge(this,Zo),Ge(this,Pr),Ge(this,Or,!1),Ge(this,Ta,void 0),Ge(this,He,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const i=this.shadowRoot.querySelector('slot[name="description"]'),a=(e=this.submenuElement.checkedItems)==null?void 0:e[0],r=(t=a?.dataset.description)!=null?t:a?.text,n=K.createElement("span");n.textContent=r??"",i.replaceChildren(n)}),Ge(this,vi,e=>{const{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",ee(this,vi));return}this.handleClick(e)}),Ge(this,Ps,e=>{const{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",ee(this,vi));return}this.addEventListener("keyup",ee(this,vi),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=oe(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[le.TYPE,le.DISABLED,le.CHECKED,le.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),Zi(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":Ai(this,Os,dc).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":ee(this,Ps).call(this,e);break;case"keyup":ee(this,vi).call(this,e);break}}attributeChangedCallback(e,t,i){e===le.CHECKED&&Zi(this)&&!ee(this,Or)?this.setAttribute("aria-checked",i!=null?"true":"false"):e===le.TYPE&&i!==t?this.role="menuitem"+i:e===le.DISABLED&&i!==t&&(i==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(le.DISABLED)||this.enable(),this.role="menuitem"+this.type,Wn(this,Ta,Ns(this,this.parentNode)),Ai(this,Pr,Us).call(this),this.submenuElement&&Ai(this,mn,Yo).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),Ai(this,Pr,Us).call(this),Wn(this,Ta,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=gn(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return(e=this.getAttribute(le.TYPE))!=null?e:""}set type(e){this.setAttribute(le.TYPE,`${e}`)}get value(){var e;return(e=this.getAttribute(le.VALUE))!=null?e:this.text}set value(e){this.setAttribute(le.VALUE,e)}get text(){var e;return((e=this.textContent)!=null?e:"").trim()}get checked(){if(Zi(this))return this.getAttribute("aria-checked")==="true"}set checked(e){Zi(this)&&(Wn(this,Or,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){Zi(this)||this.invokeTargetElement&&Je(this,e.target)&&this.invokeTargetElement.dispatchEvent(new Wo({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}};Or=new WeakMap;Ta=new WeakMap;Os=new WeakSet;dc=function(e){const t=e.target;if(!t?.name)for(const a of t.assignedNodes({flatten:!0}))a instanceof Text&&a.textContent.trim()===""&&a.remove();t.name==="submenu"&&(this.submenuElement?Ai(this,mn,Yo).call(this):Ai(this,Zo,uc).call(this))};mn=new WeakSet;Yo=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",ee(this,He)),this.submenuElement.addEventListener("addmenuitem",ee(this,He)),this.submenuElement.addEventListener("removemenuitem",ee(this,He)),ee(this,He).call(this)};Zo=new WeakSet;uc=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",ee(this,He)),this.submenuElement.removeEventListener("addmenuitem",ee(this,He)),this.submenuElement.removeEventListener("removemenuitem",ee(this,He)),ee(this,He).call(this)};He=new WeakMap;vi=new WeakMap;Ps=new WeakMap;Pr=new WeakSet;Us=function(){var e;const t=(e=ee(this,Ta))==null?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(a=>a.getAttribute("aria-checked")==="true").pop();i||(i=t[0]);for(const a of t)a.setAttribute("aria-checked","false");i?.setAttribute("aria-checked","true")};_t.shadowRootOptions={mode:"open"};_t.getTemplateHTML=Jv;_t.getSuffixSlotInnerHTML=jv;function Zi(e){return e.type==="radio"||e.type==="checkbox"}function Ns(e,t){if(!e)return null;const{host:i}=e.getRootNode();return!t&&i?Ns(e,i):t?.items?t:Ns(t,t?.parentNode)}d.customElements.get("media-chrome-menu-item")||d.customElements.define("media-chrome-menu-item",_t);function ep(e){return`
    ${me.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `}var cc=class extends me{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:te(this).querySelector("media-settings-menu-button")}};cc.getTemplateHTML=ep;d.customElements.get("media-settings-menu")||d.customElements.define("media-settings-menu",cc);function tp(e){return`
    ${_t.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function ip(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}var Cn=class extends _t{};Cn.shadowRootOptions={mode:"open"};Cn.getTemplateHTML=tp;Cn.getSuffixSlotInnerHTML=ip;d.customElements.get("media-settings-menu-item")||d.customElements.define("media-settings-menu-item",Cn);var Bi=class extends z{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=gn(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;(e=this.invokeTargetElement)==null||e.dispatchEvent(new Wo({relatedTarget:this}))}};d.customElements.get("media-chrome-menu-button")||d.customElements.define("media-chrome-menu-button",Bi);function ap(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `}function rp(){return v("Settings")}var Qo=class extends Bi{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",v("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:te(this).querySelector("media-settings-menu")}};Qo.getSlotTemplateHTML=ap;Qo.getTooltipContentHTML=rp;d.customElements.get("media-settings-menu-button")||d.customElements.define("media-settings-menu-button",Qo);var zo=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},hc=(e,t,i)=>(zo(e,t,"read from private field"),i?i.call(e):t.get(e)),Qa=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Hs=(e,t,i,a)=>(zo(e,t,"write to private field"),t.set(e,i),i),za=(e,t,i)=>(zo(e,t,"access private method"),i),ua,vn,Ur,Bs,Nr,Ws,np=class extends me{constructor(){super(...arguments),Qa(this,Ur),Qa(this,Nr),Qa(this,ua,[]),Qa(this,vn,void 0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_AUDIO_TRACK_LIST,s.MEDIA_AUDIO_TRACK_ENABLED,s.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_AUDIO_TRACK_ENABLED&&t!==i?this.value=i:e===s.MEDIA_AUDIO_TRACK_LIST&&t!==i&&(Hs(this,ua,Bc(i??"")),za(this,Ur,Bs).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",za(this,Nr,Ws))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",za(this,Nr,Ws))}get anchorElement(){var e;return this.anchor!=="auto"?super.anchorElement:(e=te(this))==null?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return hc(this,ua)}set mediaAudioTrackList(e){Hs(this,ua,e),za(this,Ur,Bs).call(this)}get mediaAudioTrackEnabled(){var e;return(e=U(this,s.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){P(this,s.MEDIA_AUDIO_TRACK_ENABLED,e)}};ua=new WeakMap;vn=new WeakMap;Ur=new WeakSet;Bs=function(){if(hc(this,vn)===JSON.stringify(this.mediaAudioTrackList))return;Hs(this,vn,JSON.stringify(this.mediaAudioTrackList));const e=this.mediaAudioTrackList;this.defaultSlot.textContent="",e.sort((t,i)=>t.id.localeCompare(i.id,void 0,{numeric:!0}));for(const t of e){const i=this.formatMenuItemText(t.label,t),a=Oi({type:"radio",text:i,value:`${t.id}`,checked:t.enabled});a.prepend(Wt(this,"checked-indicator")),this.defaultSlot.append(a)}};Nr=new WeakSet;Ws=function(){if(this.value==null)return;const e=new d.CustomEvent(E.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};d.customElements.get("media-audio-track-menu")||d.customElements.define("media-audio-track-menu",np);var sp=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function op(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${sp}</slot>
  `}function lp(){return v("Audio")}var Ad=e=>{const t=v("Audio");e.setAttribute("aria-label",t)},Xo=class extends Bi{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_AUDIO_TRACK_ENABLED,s.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Ad(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_LANG&&Ad(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=te(this))==null?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return(e=U(this,s.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){P(this,s.MEDIA_AUDIO_TRACK_ENABLED,e)}};Xo.getSlotTemplateHTML=op;Xo.getTooltipContentHTML=lp;d.customElements.get("media-audio-track-menu-button")||d.customElements.define("media-audio-track-menu-button",Xo);var Jo=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dp=(e,t,i)=>(Jo(e,t,"read from private field"),t.get(e)),$n=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},up=(e,t,i,a)=>(Jo(e,t,"write to private field"),t.set(e,i),i),Xa=(e,t,i)=>(Jo(e,t,"access private method"),i),pn,Hr,$s,Br,Fs,cp=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function hp(e){return`
    ${me.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${cp}</slot>
  `}var mc=class extends me{constructor(){super(...arguments),$n(this,Hr),$n(this,Br),$n(this,pn,void 0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_SUBTITLES_LIST,s.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_SUBTITLES_LIST&&t!==i?Xa(this,Hr,$s).call(this):e===s.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i||"",Xa(this,Hr,$s).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Xa(this,Br,Fs))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Xa(this,Br,Fs))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:te(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return Td(this,s.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){kd(this,s.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Td(this,s.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){kd(this,s.MEDIA_SUBTITLES_SHOWING,e)}};pn=new WeakMap;Hr=new WeakSet;$s=function(){var e;const t=dp(this,pn)!==JSON.stringify(this.mediaSubtitlesList),i=this.value!==this.getAttribute(s.MEDIA_SUBTITLES_SHOWING);if(!t&&!i)return;up(this,pn,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const a=!this.value,r=Oi({type:"radio",text:this.formatMenuItemText(v("Off")),value:"off",checked:a});r.prepend(Wt(this,"checked-indicator")),this.defaultSlot.append(r);const n=this.mediaSubtitlesList;for(const o of n){const l=Oi({type:"radio",text:this.formatMenuItemText(o.label,o),value:ts(o),checked:this.value==ts(o)});l.prepend(Wt(this,"checked-indicator")),((e=o.kind)!=null?e:"subs")==="captions"&&l.append(Wt(this,"captions-indicator")),this.defaultSlot.append(l)}};Br=new WeakSet;Fs=function(){const e=this.mediaSubtitlesShowing,t=this.getAttribute(s.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if(e?.length&&i&&this.dispatchEvent(new d.CustomEvent(E.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;const a=new d.CustomEvent(E.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};mc.getTemplateHTML=hp;var Td=(e,t)=>{const i=e.getAttribute(t);return i?kn(i):[]},kd=(e,t,i)=>{if(!i?.length){e.removeAttribute(t);return}const a=Ma(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};d.customElements.get("media-captions-menu")||d.customElements.define("media-captions-menu",mc);var mp=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,vp=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function pp(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${mp}</slot>
      <slot name="off">${vp}</slot>
    </slot>
  `}function Ep(){return v("Captions")}var Sd=e=>{e.setAttribute("data-captions-enabled",ru(e).toString())},yd=e=>{e.setAttribute("aria-label",v("closed captions"))},jo=class extends Bi{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_SUBTITLES_LIST,s.MEDIA_SUBTITLES_SHOWING,s.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),yd(this),Sd(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_SUBTITLES_SHOWING?Sd(this):e===s.MEDIA_LANG&&yd(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=te(this))==null?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return Id(this,s.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Md(this,s.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Id(this,s.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Md(this,s.MEDIA_SUBTITLES_SHOWING,e)}};jo.getSlotTemplateHTML=pp;jo.getTooltipContentHTML=Ep;var Id=(e,t)=>{const i=e.getAttribute(t);return i?kn(i):[]},Md=(e,t,i)=>{if(!i?.length){e.removeAttribute(t);return}const a=Ma(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};d.customElements.get("media-captions-menu-button")||d.customElements.define("media-captions-menu-button",jo);var vc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},pi=(e,t,i)=>(vc(e,t,"read from private field"),i?i.call(e):t.get(e)),Fn=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},Qt=(e,t,i)=>(vc(e,t,"access private method"),i),mt,Ei,ca,Wr,Vs,Vn={RATES:"rates"},fp=class extends me{constructor(){super(),Fn(this,Ei),Fn(this,Wr),Fn(this,mt,new ao(this,Vn.RATES,{defaultValue:Lu})),Qt(this,Ei,ca).call(this)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PLAYBACK_RATE,Vn.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===s.MEDIA_PLAYBACK_RATE&&t!=i?(this.value=i,Qt(this,Ei,ca).call(this)):e===Vn.RATES&&t!=i&&(pi(this,mt).value=i,Qt(this,Ei,ca).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Qt(this,Wr,Vs))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Qt(this,Wr,Vs))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:te(this).querySelector("media-playback-rate-menu-button")}get rates(){return pi(this,mt)}set rates(e){e?Array.isArray(e)?pi(this,mt).value=e.join(" "):typeof e=="string"&&(pi(this,mt).value=e):pi(this,mt).value="",Qt(this,Ei,ca).call(this)}get mediaPlaybackRate(){return O(this,s.MEDIA_PLAYBACK_RATE,_i)}set mediaPlaybackRate(e){W(this,s.MEDIA_PLAYBACK_RATE,e)}};mt=new WeakMap;Ei=new WeakSet;ca=function(){this.defaultSlot.textContent="";const e=gt(this.mediaPlaybackRate),t=new Set(Array.from(pi(this,mt)).map(a=>gt(Number(a))));e>0&&!t.has(e)&&t.add(e);const i=Array.from(t).sort((a,r)=>a-r);for(const a of i){const r=Oi({type:"radio",text:this.formatMenuItemText(`${a}x`,a),value:a.toString(),checked:e===a});r.prepend(Wt(this,"checked-indicator")),this.defaultSlot.append(r)}};Wr=new WeakSet;Vs=function(){if(!this.value)return;const e=new d.CustomEvent(E.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};d.customElements.get("media-playback-rate-menu")||d.customElements.define("media-playback-rate-menu",fp);var $r=1;function gp(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }

      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate?gt(+e.mediaplaybackrate):$r}x</slot>
  `}function bp(){return v("Playback rate")}var el=class extends Bi{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${gt((e=this.mediaPlaybackRate)!=null?e:$r)}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===s.MEDIA_PLAYBACK_RATE){const a=i?+i:Number.NaN,r=gt(Number.isNaN(a)?$r:a);this.container.innerHTML=`${r}x`,this.setAttribute("aria-label",v("Playback rate {playbackRate}",{playbackRate:r}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:te(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return O(this,s.MEDIA_PLAYBACK_RATE,$r)}set mediaPlaybackRate(e){W(this,s.MEDIA_PLAYBACK_RATE,e)}};el.getSlotTemplateHTML=gp;el.getTooltipContentHTML=bp;d.customElements.get("media-playback-rate-menu-button")||d.customElements.define("media-playback-rate-menu-button",el);var tl=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ye=(e,t,i)=>(tl(e,t,"read from private field"),i?i.call(e):t.get(e)),Ja=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},wd=(e,t,i,a)=>(tl(e,t,"write to private field"),t.set(e,i),i),zt=(e,t,i)=>(tl(e,t,"access private method"),i),ha,Oe,fi,ma,Fr,Ks,_p=class extends me{constructor(){super(...arguments),Ja(this,fi),Ja(this,Fr),Ja(this,ha,[]),Ja(this,Oe,{})}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_RENDITION_LIST,s.MEDIA_RENDITION_SELECTED,s.MEDIA_RENDITION_UNAVAILABLE,s.MEDIA_HEIGHT,s.MEDIA_WIDTH]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){const i=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){const a=e.bitrate/1e6,r=`${a.toFixed(a<1?1:0)} Mbps`;return`${i} (${r})`}return this.formatMenuItemText(i,e)}static compareRendition(e,t){var i,a;return t.height===e.height?((i=t.bitrate)!=null?i:0)-((a=e.bitrate)!=null?a:0):t.height-e.height}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!==i)switch(e){case s.MEDIA_RENDITION_SELECTED:this.value=i??"auto",zt(this,fi,ma).call(this);break;case s.MEDIA_RENDITION_LIST:wd(this,ha,Pc(i)),zt(this,fi,ma).call(this);break;case s.MEDIA_HEIGHT:case s.MEDIA_WIDTH:zt(this,fi,ma).call(this);break}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",zt(this,Fr,Ks))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",zt(this,Fr,Ks))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:te(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return Ye(this,ha)}set mediaRenditionList(e){wd(this,ha,e),zt(this,fi,ma).call(this)}get mediaRenditionSelected(){return U(this,s.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){P(this,s.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return O(this,s.MEDIA_HEIGHT)}set mediaHeight(e){W(this,s.MEDIA_HEIGHT,e)}get mediaWidth(){return O(this,s.MEDIA_WIDTH)}set mediaWidth(e){W(this,s.MEDIA_WIDTH,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}};ha=new WeakMap;Oe=new WeakMap;fi=new WeakSet;ma=function(){const e=!this.mediaRenditionSelected;if(Ye(this,Oe).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&Ye(this,Oe).mediaHeight===this.mediaHeight&&Ye(this,Oe).mediaWidth===this.mediaWidth&&Ye(this,Oe).isAuto===e)return;Ye(this,Oe).mediaRenditionList=JSON.stringify(this.mediaRenditionList),Ye(this,Oe).mediaHeight=this.mediaHeight,Ye(this,Oe).mediaWidth=this.mediaWidth,Ye(this,Oe).isAuto=e;const t=this.mediaRenditionList.sort(this.compareRendition.bind(this)),i=t.find(o=>o.id===this.mediaRenditionSelected);for(const o of t)o.selected=o===i;this.defaultSlot.textContent="";for(const o of t){const l=this.formatRendition(o,{showBitrate:this.showRenditionBitrate(o)}),u=Oi({type:"radio",text:l,value:`${o.id}`,checked:o.selected&&!e});u.prepend(Wt(this,"checked-indicator")),this.defaultSlot.append(u)}const a=i&&this.showRenditionBitrate(i);let r;e&&(i?r=this.formatMenuItemText(`${v("Auto")} • ${this.formatRendition(i,{showBitrate:a})}`,i):this.mediaHeight>0&&this.mediaWidth>0&&(r=this.formatMenuItemText(`${v("Auto")} (${Math.min(this.mediaWidth,this.mediaHeight)}p)`))),r||(r=this.formatMenuItemText(v("Auto")));const n=Oi({type:"radio",text:r,value:"auto",checked:e});n.dataset.description=r,n.prepend(Wt(this,"checked-indicator")),this.defaultSlot.append(n)};Fr=new WeakSet;Ks=function(){if(this.value==null)return;const e=new d.CustomEvent(E.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)};d.customElements.get("media-rendition-menu")||d.customElements.define("media-rendition-menu",_p);var Ap=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function Tp(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${Ap}</slot>
  `}function kp(){return v("Quality")}var il=class extends Bi{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_RENDITION_SELECTED,s.MEDIA_RENDITION_UNAVAILABLE,s.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",v("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:te(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return U(this,s.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){P(this,s.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return O(this,s.MEDIA_HEIGHT)}set mediaHeight(e){W(this,s.MEDIA_HEIGHT,e)}};il.getSlotTemplateHTML=Tp;il.getTooltipContentHTML=kp;d.customElements.get("media-rendition-menu-button")||d.customElements.define("media-rendition-menu-button",il);var al=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},Ue=(e,t,i)=>(al(e,t,"read from private field"),i?i.call(e):t.get(e)),ye=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},pc=(e,t,i,a)=>(al(e,t,"write to private field"),t.set(e,i),i),ce=(e,t,i)=>(al(e,t,"access private method"),i),Pi,Oa,Rn,Dt,Ti,rl,Ec,Vr,Gs,Kr,qs,fc,En,fn,Gr;function Sp(e){return`
      ${me.getTemplateHTML(e)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `}var gc=class extends me{constructor(){super(),ye(this,Oa),ye(this,Dt),ye(this,rl),ye(this,Vr),ye(this,qs),ye(this,Pi,!1),ye(this,Kr,e=>{const t=e.target,i=t?.nodeName==="VIDEO",a=ce(this,Vr,Gs).call(this,t);(i||a)&&(Ue(this,Pi)?ce(this,Dt,Ti).call(this):ce(this,qs,fc).call(this,e))}),ye(this,En,e=>{const t=e.target,i=this.contains(t),a=e.button===2,r=t?.nodeName==="VIDEO",n=ce(this,Vr,Gs).call(this,t);i||a&&(r||n)||ce(this,Dt,Ti).call(this)}),ye(this,fn,e=>{e.key==="Escape"&&ce(this,Dt,Ti).call(this)}),ye(this,Gr,e=>{var t,i;const a=e.target;if((t=a.matches)!=null&&t.call(a,'button[invoke="copy"]')){const r=(i=a.closest("media-context-menu-item"))==null?void 0:i.querySelector('input[slot="copy"]');r&&navigator.clipboard.writeText(r.value)}ce(this,Dt,Ti).call(this)}),this.setAttribute("noautohide",""),ce(this,Oa,Rn).call(this)}connectedCallback(){super.connectedCallback(),te(this).addEventListener("contextmenu",Ue(this,Kr)),this.addEventListener("click",Ue(this,Gr))}disconnectedCallback(){super.disconnectedCallback(),te(this).removeEventListener("contextmenu",Ue(this,Kr)),this.removeEventListener("click",Ue(this,Gr)),document.removeEventListener("mousedown",Ue(this,En)),document.removeEventListener("keydown",Ue(this,fn))}};Pi=new WeakMap;Oa=new WeakSet;Rn=function(){this.hidden=!Ue(this,Pi)};Dt=new WeakSet;Ti=function(){pc(this,Pi,!1),ce(this,Oa,Rn).call(this)};rl=new WeakSet;Ec=function(){document.querySelectorAll("media-context-menu").forEach(t=>{var i;t!==this&&ce(i=t,Dt,Ti).call(i)})};Vr=new WeakSet;Gs=function(e){return e?e.hasAttribute("slot")&&e.getAttribute("slot")==="media"?!0:e.nodeName.includes("-")&&e.tagName.includes("-")?e.hasAttribute("src")||e.hasAttribute("poster")||e.hasAttribute("preload")||e.hasAttribute("playsinline"):!1:!1};Kr=new WeakMap;qs=new WeakSet;fc=function(e){e.preventDefault(),ce(this,rl,Ec).call(this),pc(this,Pi,!0),this.style.position="fixed",this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,ce(this,Oa,Rn).call(this),document.addEventListener("mousedown",Ue(this,En),{once:!0}),document.addEventListener("keydown",Ue(this,fn),{once:!0})};En=new WeakMap;fn=new WeakMap;Gr=new WeakMap;gc.getTemplateHTML=Sp;d.customElements.get("media-context-menu")||d.customElements.define("media-context-menu",gc);function yp(e){return`
    ${_t.getTemplateHTML.call(this,e)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `}var nl=class extends _t{};nl.shadowRootOptions={mode:"open"};nl.getTemplateHTML=yp;d.customElements.get("media-context-menu-item")||d.customElements.define("media-context-menu-item",nl);var Kn,Ld,Ys=(Ld=(Kn=d.document)==null?void 0:Kn.createElement)==null?void 0:Ld.call(Kn,"template");Ys&&(Ys.innerHTML=String.raw`
    <style>
      :host {
        --_primary-color: var(--media-primary-color, rgb(255 255 255 / 0.9));
        --_secondary-color: var(--media-secondary-color, rgb(0 0 0 / .75));
        --_volume-range-expand-width: 70px;
        --_volume-range-expand-height: 42px;

        --media-icon-color: var(--_primary-color);
        --media-range-thumb-background: var(--_primary-color);
        --media-range-bar-color: var(--_primary-color);
        --media-range-thumb-opacity: 0;
        --media-control-background: transparent;
        --media-control-hover-background: transparent;
        --media-control-padding: 5px 5px;
        --media-preview-time-text-shadow: none;
        --media-tooltip-display: none;

        color: var(--_primary-color);
      }

      @supports (color: color-mix(in srgb, red, blue)) {
        :host {
          --_secondary-color: color-mix(in srgb, var(--media-secondary-color, #000) 75%, transparent);
        }
      }

      [disabled]:not(media-live-button) {
        opacity: 60%;
        cursor: not-allowed;
      }

      [breakpointsm] {
        --media-control-padding: 9px 5px;
      }

      [breakpointmd] {
        --media-control-padding: 9px 7px;
      }

      media-time-range,
      media-live-button,
      media-time-display,
      media-text-display,
      media-playback-rate-button[role='button'] {
        color: inherit;
      }

      media-controller::part(centered-layer) {
        display: grid;
        justify-content: unset;
        padding-bottom: 6px;
      }

      :host([streamtype=live]:not([targetlivewindow])) media-controller::part(centered-layer),
      :host([mediastreamtype=live]:not([mediatargetlivewindow])) media-controller::part(centered-layer) {
        padding-bottom: 0;
      }

      media-loading-indicator {
        place-self: center;
        /* Stack the grid items on top of each other */
        grid-area: 1 / 1;
      }

      media-control-bar {
        place-self: var(--_control-bar-place-self, end center);
        grid-area: 1 / 1;
        position: relative;
        margin: 10px;
        gap: 4px;
        align-items: start;
      }

      :host([controlbarplace$="end"]) media-control-bar {
        align-items: end;
      }

      .control-group {
        background: var(--_secondary-color);
        position: relative;
        display: inline-flex;
        border-radius: 5px;
      }

      :host([controlbarvertical]) :is(media-control-bar, .control-group) {
        flex-direction: column;
        width: 40px;
      }

      .volume-group {
        position: relative;
        display: inline-flex;
        flex-direction: row;
      }

      :host([controlbarplace$="end"]) .volume-group {
        flex-direction: row;
      }

      :host([controlbarplace$="end"]) .volume-group:first-child .volume-range-span {
        --_volume-range-padding-left: 10px;
      }

      :host([controlbarvertical]) .volume-group {
        flex-direction: column;
      }

      :host([controlbarvertical][controlbarplace^="end"]) .volume-group {
        flex-direction: column-reverse;
      }

      :host([controlbarvertical][controlbarplace^="end"]) .volume-group:first-child .volume-range-span {
        --_volume-range-padding-top: 10px;
      }

      .volume-range-span {
        display: inline-flex;
        position: relative;
        overflow: hidden;
        width: 0;
        transition: width .2s ease-in-out , height .2s ease-in-out;
      }

      .volume-group:hover .volume-range-span,
      [keyboardcontrol] .volume-group:focus-within .volume-range-span {
        width: var(--_volume-range-expand-width);
        padding-left: var(--_volume-range-padding-left);
        padding-top: var(--_volume-range-padding-top);
      }

      :host([controlbarvertical]) .volume-range-span {
        --_volume-range-padding-left: 0 !important;
        display: inline-flex;
        height: 0;
      }

      :host([controlbarvertical]) .volume-group:hover .volume-range-span,
      :host([controlbarvertical]) [keyboardcontrol] .volume-group:focus-within .volume-range-span {
        height: var(--_volume-range-expand-height);
        width: auto;
        max-width: 40px;
      }

      media-volume-range {
        --media-range-track-border-radius: 2px;
        --media-range-track-background: rgba(255, 255, 255, .2);

        width: var(--_volume-range-expand-width);
        display: var(--controls, var(--volume-range, inline-block));
        border-radius: 5px;
      }

      :host([controlbarvertical]) media-volume-range {
        width: var(--_volume-range-expand-height);
        transform: rotate(-90deg);
      }

      media-control-bar:has(.volume-group:hover),
      [keyboardcontrol] media-control-bar:has(.volume-group:focus-within) {
        top: var(--_control-bar-offset-top, 0);
        left: var(--_control-bar-offset-left, - var(--_volume-range-expand-width));
      }

      :host([controlbarplace$="start"]),
      :host([controlbarplace$="end"]) {
        --_control-bar-offset-left: 0;
      }

      :host([controlbarvertical]) {
        --_control-bar-offset-left: 0;
      }

      :host([controlbarvertical][controlbarplace^="center"]) {
        --_control-bar-offset-top: - var(--_volume-range-expand-height);
      }

      media-time-range {
        --media-range-track-height: 6px;
        --media-range-track-transition: height .1s linear;
        --media-range-track-background: rgba(20, 20, 30, .25);
        --media-time-range-buffered-color: rgba(20, 20, 30, .3);
        --media-range-track-box-shadow: 0 -1px 0 rgba(20, 20, 30, .07);
        --media-range-padding-left: 0;
        --media-range-padding-right: 0;
        --media-preview-time-background: var(--_secondary-color);
        --media-preview-box-margin: 0 0 3px;

        display: var(--controls, var(--time-range, inline-block));
        width: 100%;
        height: 10px;
        bottom: -2px;
      }

      media-live-button {
        --media-control-background: var(--_secondary-color);
        --media-control-hover-background: var(--_secondary-color);
        border-radius: 5px;
      }

      media-live-button::before {
        content: '';
        width: 5px;
      }

      media-live-button::after {
        content: '';
        width: 7px;
      }

      /* Turn some buttons off by default */
      media-seek-backward-button {
        display: var(--media-control-display, var(--media-seek-backward-button-display, none));
      }

      media-seek-forward-button {
        display: var(--media-control-display, var(--media-seek-forward-button-display, none));
      }

      media-pip-button {
        display: var(--media-control-display, var(--media-pip-button-display, none));
      }
    </style>

    <template partial="PlayButton">
      <media-play-button
        part="play button"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="play">
          <path d="m6.73 20.93 14.05-8.54a.46.46 0 0 0 0-.78L6.73 3.07a.48.48 0 0 0-.73.39v17.07a.48.48 0 0 0 .73.4Z" />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="pause">
          <path
            d="M6 19.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v15ZM14.5 4a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3Z"
          />
        </svg>
      </media-play-button>
    </template>

    <template partial="SeekBackwardButton">
      <media-seek-backward-button
        seekoffset="{{backwardseekoffset ?? 10}}"
        part="seek-backward button"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      >
        <svg aria-hidden="true" viewBox="0 0 22 24" slot="icon">
          <path d="M11 6V3L5.37 7 11 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 11 6Z" />
          <text class="value" transform="translate(2.5 21)" style="font-size: 8px; font-family: 'ArialMT', 'Arial'">
            {{backwardseekoffset ?? 10}}
          </text>
        </svg>
      </media-seek-backward-button>
    </template>

    <template partial="SeekForwardButton">
      <media-seek-forward-button
        seekoffset="{{forwardseekoffset ?? 10}}"
        part="seek-forward button"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      >
        <svg aria-hidden="true" viewBox="0 0 22 24" slot="icon">
          <path d="M11 6V3l5.61 4L11 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 11 6Z" />
          <text class="value" transform="translate(10 21)" style="font-size: 8px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset ?? 10}}
          </text>
        </svg>
      </media-seek-forward-button>
    </template>

    <template partial="MuteButton">
      <media-mute-button part="mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="high">
          <path
            d="m11.14 4.86-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.21a.5.5 0 0 0-.86-.35Zm2.74-1.56v1.52A7.52 7.52 0 0 1 19.47 12a7.52 7.52 0 0 1-5.59 7.18v1.52A9 9 0 0 0 21 12a9 9 0 0 0-7.12-8.7Zm3.56 8.7a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="medium">
          <path
            d="m11.14 4.853-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.203a.5.5 0 0 0-.86-.35Zm6.3 7.14a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="low">
          <path
            d="m11.14 4.853-4 4a.49.49 0 0 1-.35.14H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V5.203a.5.5 0 0 0-.86-.35Zm6.3 7.14a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66a5.49 5.49 0 0 0 3.56-5.1Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="off">
          <path
            d="m3 4.05 4.48 4.47-.33.33a.49.49 0 0 1-.36.15H3.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.48.48 0 0 0 .36.15.5.5 0 0 0 .5-.5v-5.75l4.67 4.66a7.71 7.71 0 0 1-2.79 1.47v1.52a9.32 9.32 0 0 0 3.87-1.91L20 21l1-1L4.06 3 3 4.05Zm5.36 5.36 2.39 2.39V17L8 14.26a1.74 1.74 0 0 0-1.24-.51H4.25v-3.5h2.54A1.74 1.74 0 0 0 8 9.74l.36-.33ZM19.47 12a7.19 7.19 0 0 1-.89 3.47l1.11 1.1A8.64 8.64 0 0 0 21 12a9 9 0 0 0-7.12-8.7v1.52A7.52 7.52 0 0 1 19.47 12ZM12 8.88V5.21a.5.5 0 0 0-.5-.5.48.48 0 0 0-.36.15L9.56 6.44 12 8.88ZM15.91 12a4.284 4.284 0 0 1-.07.72l1.22 1.22a5.2 5.2 0 0 0 .38-1.94 5.49 5.49 0 0 0-3.56-5.1v1.66A4 4 0 0 1 15.91 12Z"
          />
        </svg>
      </media-mute-button>
    </template>

    <template partial="CaptionsButton">
      <media-captions-button
        part="captions button"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      >
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="on">
          <path
            d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.41 10.1a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 4 4 0 0 1-1.28-.83 3.67 3.67 0 0 1-.84-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.53 3.53 0 0 1 .84-1.21 3.89 3.89 0 0 1 1.29-.8 4.76 4.76 0 0 1 1.63-.27 4.06 4.06 0 0 1 1.35.24c.225.091.44.205.64.34a2.7 2.7 0 0 1 .55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.35 2.35 0 0 0-.46.77 2.78 2.78 0 0 0-.16 1c-.009.34.046.68.16 1 .104.283.26.545.46.77.188.21.415.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.88 2.88 0 0 1-1.22 1.01Zm7.52 0a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 3.89 3.89 0 0 1-1.28-.83 3.55 3.55 0 0 1-.85-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.43 3.43 0 0 1 .85-1.25 3.75 3.75 0 0 1 1.28-.8 4.76 4.76 0 0 1 1.63-.27 4 4 0 0 1 1.35.24c.225.091.44.205.64.34.21.144.395.32.55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.352 2.352 0 0 0-.46.77 3.01 3.01 0 0 0-.16 1c-.003.34.05.678.16 1 .108.282.263.542.46.77.188.21.416.38.67.5a2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.82 2.82 0 0 1-1.21 1.05Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="off">
          <path
            d="M22.832 5.68a2.58 2.58 0 0 0-2.3-2.5c-1.81-.12-4.67-.18-7.53-.18-2.86 0-5.72.06-7.53.18a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c1.81.12 4.67.18 7.53.18 2.86 0 5.72-.06 7.53-.18a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.137-.21-8.283 0-12.42a1.11 1.11 0 0 1 .91-1.11c1.67-.11 4.43-.18 7.43-.18s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.137.21 8.283 0 12.42ZM10.843 14a1.55 1.55 0 0 1-.76.18 1.57 1.57 0 0 1-.71-.18 1.69 1.69 0 0 1-.57-.42 2.099 2.099 0 0 1-.38-.58 2.47 2.47 0 0 1 0-1.64 2 2 0 0 1 .39-.66 1.73 1.73 0 0 1 .58-.42c.23-.103.479-.158.73-.16.241-.004.48.044.7.14.199.088.373.222.51.39l1.08-.89a2.179 2.179 0 0 0-.47-.44 2.81 2.81 0 0 0-.54-.32 2.91 2.91 0 0 0-.58-.15 2.71 2.71 0 0 0-.56 0 4.08 4.08 0 0 0-1.38.15 3.27 3.27 0 0 0-1.09.67 3.14 3.14 0 0 0-.71 1.06 3.62 3.62 0 0 0-.26 1.39 3.57 3.57 0 0 0 .26 1.38 3 3 0 0 0 .71 1.06c.316.293.687.52 1.09.67.443.16.91.238 1.38.23a3.2 3.2 0 0 0 1.28-.27c.401-.183.747-.47 1-.83l-1.17-.88a1.42 1.42 0 0 1-.53.52Zm6.62 0a1.58 1.58 0 0 1-.76.18 1.54 1.54 0 0 1-.7-.18 1.69 1.69 0 0 1-.57-.42 2.12 2.12 0 0 1-.43-.58 2.29 2.29 0 0 1 .39-2.3 1.84 1.84 0 0 1 1.32-.58c.241-.003.48.045.7.14.199.088.373.222.51.39l1.08-.92a2.43 2.43 0 0 0-.47-.44 3.22 3.22 0 0 0-.53-.29 2.999 2.999 0 0 0-.57-.15 2.87 2.87 0 0 0-.57 0 4.06 4.06 0 0 0-1.36.15 3.17 3.17 0 0 0-1.09.67 3 3 0 0 0-.72 1.06 3.62 3.62 0 0 0-.25 1.39 3.57 3.57 0 0 0 .25 1.38c.16.402.405.764.72 1.06a3.17 3.17 0 0 0 1.09.67c.44.16.904.237 1.37.23.441 0 .877-.092 1.28-.27a2.45 2.45 0 0 0 1-.83l-1.15-.85a1.49 1.49 0 0 1-.54.49Z"
          />
        </svg>
      </media-captions-button>
    </template>

    <template partial="PipButton">
      <media-pip-button part="pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="enter">
          <path
            d="M22 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6.75v-1.25h-6.5V4.25h17.5v6.5H23V4a1 1 0 0 0-1-1Zm0 10h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 6.5h-7v-5h7v5Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="exit">
          <path
            d="M22 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6.75v-1.25h-6.5V4.25h17.5v6.5H23V4a1 1 0 0 0-1-1Zm0 10h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 6.5h-7v-5h7v5Z"
          />
        </svg>
      </media-pip-button>
    </template>

    <template partial="AirplayButton">
      <media-airplay-button part="airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="icon">
          <path
            d="M13.19 14.22a.25.25 0 0 0-.38 0l-5.46 6.37a.25.25 0 0 0 .19.41h10.92a.25.25 0 0 0 .19-.41l-5.46-6.37Z"
          />
          <path
            d="M22 3H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h2.94L8 16.75H4.25V4.25h17.5v12.5H18L19.06 18H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
          />
        </svg>
      </media-airplay-button>
    </template>

    <template partial="CastButton">
      <media-cast-button part="cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="enter">
          <path d="M3 15.5V17c2.206 0 4 1.794 4 4h1.5A5.5 5.5 0 0 0 3 15.5Zm0 3V21h2.5A2.5 2.5 0 0 0 3 18.5Z" />
          <path d="M3 12.5V14c3.86 0 7 3.14 7 7h1.5A8.5 8.5 0 0 0 3 12.5Z" />
          <path
            d="M22 3H4a1 1 0 0 0-1 1v6.984c.424 0 .84.035 1.25.086V4.25h17.5v15.5h-8.82c.051.41.086.826.086 1.25H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 26 24" slot="exit">
          <path d="M3 15.5V17c2.206 0 4 1.794 4 4h1.5A5.5 5.5 0 0 0 3 15.5Zm0 3V21h2.5A2.5 2.5 0 0 0 3 18.5Z" />
          <path d="M3 12.5V14c3.86 0 7 3.14 7 7h1.5A8.5 8.5 0 0 0 3 12.5Z" />
          <path
            d="M22 3H4a1 1 0 0 0-1 1v6.984c.424 0 .84.035 1.25.086V4.25h17.5v15.5h-8.82c.051.41.086.826.086 1.25H22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
          />
          <path d="M20.5 5.5h-15v5.811c3.52.906 6.283 3.67 7.189 7.19H20.5V5.5Z" />
        </svg>
      </media-cast-button>
    </template>

    <template partial="FullscreenButton">
      <media-fullscreen-button
        part="fullscreen button"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="enter">
          <path
            d="M20.25 14.5a.76.76 0 0 0-.75.75v4.25h-4.25a.75.75 0 1 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5a.76.76 0 0 0-.75-.75Zm0-11.5h-5a.76.76 0 0 0-.75.75.76.76 0 0 0 .75.75h4.25v4.25a.75.75 0 1 0 1.5 0v-5a.76.76 0 0 0-.75-.75ZM8.75 19.5H4.5v-4.25a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v5a.76.76 0 0 0 .75.75h5a.75.75 0 1 0 0-1.5Zm0-16.5h-5a.76.76 0 0 0-.75.75v5a.76.76 0 0 0 .75.75.76.76 0 0 0 .75-.75V4.5h4.25a.76.76 0 0 0 .75-.75.76.76 0 0 0-.75-.75Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" slot="exit">
          <path
            d="M20.25 14.5h-5a.76.76 0 0 0-.75.75v5a.75.75 0 1 0 1.5 0V16h4.25a.75.75 0 1 0 0-1.5Zm-5-5h5a.75.75 0 1 0 0-1.5H16V3.75a.75.75 0 1 0-1.5 0v5a.76.76 0 0 0 .75.75Zm-6.5 5h-5a.75.75 0 1 0 0 1.5H8v4.25a.75.75 0 1 0 1.5 0v-5a.76.76 0 0 0-.75-.75Zm0-11.5a.76.76 0 0 0-.75.75V8H3.75a.75.75 0 0 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5A.76.76 0 0 0 8.75 3Z"
          />
        </svg>
      </media-fullscreen-button>
    </template>

    <template partial="LiveButton">
      <media-live-button
        part="live seek-live button"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      >
        <span slot="text">Live</span>
      </media-live-button>
    </template>

    <template partial="TimeRange">
      <media-time-range
        part="time range"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      ></media-time-range>
    </template>

    <template partial="VolumeRange">
      <span class="volume-range-span">
        <media-volume-range
          part="volume range"
          disabled="{{disabled}}"
          aria-disabled="{{disabled}}"
        ></media-volume-range>
      </span>
    </template>

    <!--
      controlbarplace targets the place-self CSS property of the controlbar.
      e.g. controlbarplace="center center" will center the controlbar.
    -->

    <media-controller
      style="--_control-bar-place-self:{{controlbarplace ?? 'unset'}}"
      defaultsubtitles="{{defaultsubtitles}}"
      defaultduration="{{defaultduration}}"
      gesturesdisabled="{{disabled}}"
      hotkeys="{{hotkeys}}"
      nohotkeys="{{nohotkeys}}"
      defaultstreamtype="on-demand"
    >
      <slot name="media" slot="media"></slot>
      <slot name="poster" slot="poster"></slot>
      <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
      <media-error-dialog slot="dialog"></media-error-dialog>

      <template if="streamtype == 'on-demand'">

        <media-control-bar slot="centered-chrome">
          <div class="control-group">
            {{>PlayButton}}
            {{>SeekBackwardButton}}
            {{>SeekForwardButton}}
            <span class="volume-group">
              {{>MuteButton}}
              {{>VolumeRange}}
            </span>
            {{>CaptionsButton}}
            {{>AirplayButton}}
            {{>CastButton}}
            {{>PipButton}}
            {{>FullscreenButton}}
          </div>
        </media-control-bar>
        {{>TimeRange}}

      </template>

      <template if="streamtype == 'live'">

        <template if="!targetlivewindow">

          <media-control-bar slot="centered-chrome">
            {{>LiveButton}}
            <div class="control-group">
              <span class="volume-group">
                {{>MuteButton}}
                {{>VolumeRange}}
              </span>
              {{>CaptionsButton}}
              {{>AirplayButton}}
              {{>CastButton}}
              {{>PipButton}}
              {{>FullscreenButton}}
            </div>
          </media-control-bar>

        </template>

        <template if="targetlivewindow > 0">

          <media-control-bar slot="centered-chrome">
            {{>LiveButton}}
            <div class="control-group">
              {{>PlayButton}}
              {{>SeekBackwardButton}}
              {{>SeekForwardButton}}
              <span class="volume-group">
                {{>MuteButton}}
                {{>VolumeRange}}
              </span>
              {{>CaptionsButton}}
              {{>AirplayButton}}
              {{>CastButton}}
              {{>PipButton}}
              {{>FullscreenButton}}
            </div>
          </media-control-bar>
          {{>TimeRange}}

        </template>

      </template>

      <slot></slot>

    </media-controller>

  `);var bc=class extends Ln{};Cc(bc,"template",Ys);d.customElements&&!d.customElements.get("media-theme-microvideo")&&d.customElements.define("media-theme-microvideo",bc);
