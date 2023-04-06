"use strict";(self.webpackChunkaxen=self.webpackChunkaxen||[]).push([[527],{7957:(et,P,c)=>{c.d(P,{Bb:()=>at,XC:()=>b,ZL:()=>tt});var s=c(4650),a=c(3238),y=c(6895),x=c(7376),I=c(8184),D=c(2687),M=c(1281),V=c(3353),p=c(7340),B=c(727),L=c(7579),U=c(9770),T=c(6451),Q=c(9646),E=c(4968),v=c(9521),F=c(4080),W=c(4006),G=c(9549),$=c(8675),A=c(3900),k=c(5698),R=c(9300),Z=c(4004),X=c(8505),H=c(1005),z=c(445);const S=["panel"];function N(l,h){if(1&l&&(s.TgZ(0,"div",0,1),s.Hsn(2),s.qZA()),2&l){const e=h.id,i=s.oxw();s.Q6J("id",i.id)("ngClass",i._classList)("@panelAnimation",i.isOpen?"visible":"hidden"),s.uIk("aria-label",i.ariaLabel||null)("aria-labelledby",i._getPanelAriaLabelledby(e))}}const Y=["*"],r=(0,p.X$)("panelAnimation",[(0,p.SB)("void, hidden",(0,p.oB)({opacity:0,transform:"scaleY(0.8)"})),(0,p.eR)(":enter, hidden => visible",[(0,p.ru)([(0,p.jt)("0.03s linear",(0,p.oB)({opacity:1})),(0,p.jt)("0.12s cubic-bezier(0, 0, 0.2, 1)",(0,p.oB)({transform:"scaleY(1)"}))])]),(0,p.eR)(":leave, visible => hidden",[(0,p.jt)("0.075s linear",(0,p.oB)({opacity:0}))])]);let u=0;class t{constructor(h,e){this.source=h,this.option=e}}const n=(0,a.Kr)(class{}),o=new s.OlP("mat-autocomplete-default-options",{providedIn:"root",factory:function _(){return{autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1}}});let f=(()=>{class l extends n{get isOpen(){return this._isOpen&&this.showPanel}_setColor(e){this._color=e,this._setThemeClasses(this._classList)}get autoActiveFirstOption(){return this._autoActiveFirstOption}set autoActiveFirstOption(e){this._autoActiveFirstOption=(0,M.Ig)(e)}get autoSelectActiveOption(){return this._autoSelectActiveOption}set autoSelectActiveOption(e){this._autoSelectActiveOption=(0,M.Ig)(e)}set classList(e){this._classList=e&&e.length?(0,M.du)(e).reduce((i,d)=>(i[d]=!0,i),{}):{},this._setVisibilityClasses(this._classList),this._setThemeClasses(this._classList),this._elementRef.nativeElement.className=""}constructor(e,i,d,m){super(),this._changeDetectorRef=e,this._elementRef=i,this._defaults=d,this._activeOptionChanges=B.w0.EMPTY,this.showPanel=!1,this._isOpen=!1,this.displayWith=null,this._autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this._autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.optionSelected=new s.vpe,this.opened=new s.vpe,this.closed=new s.vpe,this.optionActivated=new s.vpe,this._classList={},this.id="mat-autocomplete-"+u++,this.inertGroups=m?.SAFARI||!1}ngAfterContentInit(){this._keyManager=new D.s1(this.options).withWrap(),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options.length,this._setVisibilityClasses(this._classList),this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){const i=new t(this,e);this.optionSelected.emit(i)}_getPanelAriaLabelledby(e){return this.ariaLabel?null:this.ariaLabelledby?(e?e+" ":"")+this.ariaLabelledby:e}_setVisibilityClasses(e){e[this._visibleClass]=this.showPanel,e[this._hiddenClass]=!this.showPanel}_setThemeClasses(e){e["mat-primary"]="primary"===this._color,e["mat-warn"]="warn"===this._color,e["mat-accent"]="accent"===this._color}}return l.\u0275fac=function(e){return new(e||l)(s.Y36(s.sBO),s.Y36(s.SBq),s.Y36(o),s.Y36(V.t4))},l.\u0275dir=s.lG2({type:l,viewQuery:function(e,i){if(1&e&&(s.Gf(s.Rgc,7),s.Gf(S,5)),2&e){let d;s.iGM(d=s.CRH())&&(i.template=d.first),s.iGM(d=s.CRH())&&(i.panel=d.first)}},inputs:{ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:"autoActiveFirstOption",autoSelectActiveOption:"autoSelectActiveOption",panelWidth:"panelWidth",classList:["class","classList"]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},features:[s.qOj]}),l})(),b=(()=>{class l extends f{constructor(){super(...arguments),this._visibleClass="mat-mdc-autocomplete-visible",this._hiddenClass="mat-mdc-autocomplete-hidden",this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=(0,M.Ig)(e),this._syncParentProperties()}_syncParentProperties(){if(this.options)for(const e of this.options)e._changeDetectorRef.markForCheck()}}return l.\u0275fac=function(){let h;return function(i){return(h||(h=s.n5z(l)))(i||l)}}(),l.\u0275cmp=s.Xpm({type:l,selectors:[["mat-autocomplete"]],contentQueries:function(e,i,d){if(1&e&&(s.Suo(d,a.K7,5),s.Suo(d,a.ey,5)),2&e){let m;s.iGM(m=s.CRH())&&(i.optionGroups=m),s.iGM(m=s.CRH())&&(i.options=m)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{disableRipple:"disableRipple",hideSingleSelectionIndicator:"hideSingleSelectionIndicator"},exportAs:["matAutocomplete"],features:[s._Bn([{provide:a.HF,useExisting:l}]),s.qOj],ngContentSelectors:Y,decls:1,vars:0,consts:[["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id","ngClass"],["panel",""]],template:function(e,i){1&e&&(s.F$t(),s.YNc(0,N,3,5,"ng-template"))},dependencies:[y.mk],styles:[".mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}.mdc-menu-surface.mat-mdc-autocomplete-panel{width:100%;max-height:256px;position:static;visibility:hidden;transform-origin:center top;margin:0;padding:8px 0;list-style-type:none}.mdc-menu-surface.mat-mdc-autocomplete-panel:focus{outline:none}.cdk-high-contrast-active .mdc-menu-surface.mat-mdc-autocomplete-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) .mdc-menu-surface.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above .mdc-menu-surface.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}.mdc-menu-surface.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}.mdc-menu-surface.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden}mat-autocomplete{display:none}"],encapsulation:2,data:{animation:[r]},changeDetection:0}),l})();const C={provide:W.JU,useExisting:(0,s.Gpc)(()=>tt),multi:!0},q=new s.OlP("mat-autocomplete-scroll-strategy"),st={provide:q,deps:[I.aV],useFactory:function it(l){return()=>l.scrollStrategies.reposition()}};let nt=(()=>{class l{get autocompleteDisabled(){return this._autocompleteDisabled}set autocompleteDisabled(e){this._autocompleteDisabled=(0,M.Ig)(e)}constructor(e,i,d,m,g,j,rt,ot,lt,dt,ct){this._element=e,this._overlay=i,this._viewContainerRef=d,this._zone=m,this._changeDetectorRef=g,this._dir=rt,this._formField=ot,this._document=lt,this._viewportRuler=dt,this._defaults=ct,this._componentDestroyed=!1,this._autocompleteDisabled=!1,this._manuallyFloatingLabel=!1,this._viewportSubscription=B.w0.EMPTY,this._canOpenOnNextFocus=!0,this._closeKeyEventStream=new L.x,this._windowBlurHandler=()=>{this._canOpenOnNextFocus=this._document.activeElement!==this._element.nativeElement||this.panelOpen},this._onChange=()=>{},this._onTouched=()=>{},this.position="auto",this.autocompleteAttribute="off",this._overlayAttached=!1,this.optionSelections=(0,U.P)(()=>{const w=this.autocomplete?this.autocomplete.options:null;return w?w.changes.pipe((0,$.O)(w),(0,A.w)(()=>(0,T.T)(...w.map(ut=>ut.onSelectionChange)))):this._zone.onStable.pipe((0,k.q)(1),(0,A.w)(()=>this.optionSelections))}),this._scrollStrategy=j}ngAfterViewInit(){const e=this._getWindow();typeof e<"u"&&this._zone.runOutsideAngular(()=>e.addEventListener("blur",this._windowBlurHandler))}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){const e=this._getWindow();typeof e<"u"&&e.removeEventListener("blur",this._windowBlurHandler),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}openPanel(){this._attachOverlay(),this._floatLabel()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._isOpen=this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._componentDestroyed||this._changeDetectorRef.detectChanges())}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return(0,T.T)(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe((0,R.h)(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe((0,R.h)(()=>this._overlayAttached)):(0,Q.of)()).pipe((0,Z.U)(e=>e instanceof a.rN?e:null))}get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return(0,T.T)((0,E.R)(this._document,"click"),(0,E.R)(this._document,"auxclick"),(0,E.R)(this._document,"touchend")).pipe((0,R.h)(e=>{const i=(0,V.sA)(e),d=this._formField?this._formField._elementRef.nativeElement:null,m=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;return this._overlayAttached&&i!==this._element.nativeElement&&this._document.activeElement!==this._element.nativeElement&&(!d||!d.contains(i))&&(!m||!m.contains(i))&&!!this._overlayRef&&!this._overlayRef.overlayElement.contains(i)}))}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){const i=e.keyCode,d=(0,v.Vb)(e);if(i===v.hY&&!d&&e.preventDefault(),this.activeOption&&i===v.K5&&this.panelOpen&&!d)this.activeOption._selectViaInteraction(),this._resetActiveItem(),e.preventDefault();else if(this.autocomplete){const m=this.autocomplete._keyManager.activeItem,g=i===v.LH||i===v.JH;i===v.Mf||g&&!d&&this.panelOpen?this.autocomplete._keyManager.onKeydown(e):g&&this._canOpen()&&this.openPanel(),(g||this.autocomplete._keyManager.activeItem!==m)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._element.nativeElement.value),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let i=e.target,d=i.value;"number"===i.type&&(d=""==d?null:parseFloat(d)),this._previousValue!==d&&(this._previousValue=d,this._pendingAutoselectedOption=null,this._onChange(d),this._canOpen()&&this._document.activeElement===e.target&&this.openPanel())}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this.openPanel()}_floatLabel(e=!1){this._formField&&"auto"===this._formField.floatLabel&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){const e=this._zone.onStable.pipe((0,k.q)(1)),i=this.autocomplete.options.changes.pipe((0,X.b)(()=>this._positionStrategy.reapplyLastPosition()),(0,H.g)(0));return(0,T.T)(e,i).pipe((0,A.w)(()=>(this._zone.run(()=>{const d=this.panelOpen;this._resetActiveItem(),this.autocomplete._setVisibility(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),d!==this.panelOpen&&(this.panelOpen?this.autocomplete.opened.emit():this.autocomplete.closed.emit())}),this.panelClosingActions)),(0,k.q)(1)).subscribe(d=>this._setValueAndClose(d))}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_assignOptionValue(e){const i=this.autocomplete&&this.autocomplete.displayWith?this.autocomplete.displayWith(e):e;this._updateNativeInputValue(i??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){const i=e?e.source:this._pendingAutoselectedOption;i&&(this._clearPreviousSelectedOption(i),this._assignOptionValue(i.value),this._onChange(i.value),this.autocomplete._emitSelectEvent(i),this._element.nativeElement.focus()),this.closePanel()}_clearPreviousSelectedOption(e){this.autocomplete.options.forEach(i=>{i!==e&&i.selected&&i.deselect()})}_attachOverlay(){let e=this._overlayRef;e?(this._positionStrategy.setOrigin(this._getConnectedElement()),e.updateSize({width:this._getPanelWidth()})):(this._portal=new F.UE(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),e=this._overlay.create(this._getOverlayConfig()),this._overlayRef=e,this._handleOverlayEvents(e),this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&e&&e.updateSize({width:this._getPanelWidth()})})),e&&!e.hasAttached()&&(e.attach(this._portal),this._closingActionsSubscription=this._subscribeToClosingActions());const i=this.panelOpen;this.autocomplete._setVisibility(),this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._setColor(this._formField?.color),this.panelOpen&&i!==this.panelOpen&&this.autocomplete.opened.emit()}_getOverlayConfig(){return new I.X_({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,panelClass:this._defaults?.overlayPanelClass})}_getOverlayPosition(){const e=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){const i=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],d=this._aboveClass,m=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:d},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:d}];let g;g="above"===this.position?m:"below"===this.position?i:[...i,...m],e.withPositions(g)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){const e=this.autocomplete;e.autoActiveFirstOption?e._keyManager.setFirstItemActive():e._keyManager.setActiveItem(-1)}_canOpen(){const e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this._autocompleteDisabled}_getWindow(){return this._document?.defaultView||window}_scrollToOption(e){const i=this.autocomplete,d=(0,a.CB)(e,i.options,i.optionGroups);if(0===e&&1===d)i._setScrollTop(0);else if(i.panel){const m=i.options.toArray()[e];if(m){const g=m._getHostElement(),j=(0,a.jH)(g.offsetTop,g.offsetHeight,i._getScrollTop(),i.panel.nativeElement.offsetHeight);i._setScrollTop(j)}}}_handleOverlayEvents(e){e.keydownEvents().subscribe(i=>{(i.keyCode===v.hY&&!(0,v.Vb)(i)||i.keyCode===v.LH&&(0,v.Vb)(i,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),i.stopPropagation(),i.preventDefault())}),e.outsidePointerEvents().subscribe()}}return l.\u0275fac=function(e){return new(e||l)(s.Y36(s.SBq),s.Y36(I.aV),s.Y36(s.s_b),s.Y36(s.R0b),s.Y36(s.sBO),s.Y36(q),s.Y36(z.Is,8),s.Y36(G.G_,9),s.Y36(y.K0,8),s.Y36(x.rL),s.Y36(o,8))},l.\u0275dir=s.lG2({type:l,inputs:{autocomplete:["matAutocomplete","autocomplete"],position:["matAutocompletePosition","position"],connectedTo:["matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:["autocomplete","autocompleteAttribute"],autocompleteDisabled:["matAutocompleteDisabled","autocompleteDisabled"]},features:[s.TTD]}),l})(),tt=(()=>{class l extends nt{constructor(){super(...arguments),this._aboveClass="mat-mdc-autocomplete-panel-above"}}return l.\u0275fac=function(){let h;return function(i){return(h||(h=s.n5z(l)))(i||l)}}(),l.\u0275dir=s.lG2({type:l,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(e,i){1&e&&s.NdJ("focusin",function(){return i._handleFocus()})("blur",function(){return i._onTouched()})("input",function(m){return i._handleInput(m)})("keydown",function(m){return i._handleKeydown(m)})("click",function(){return i._handleClick()}),2&e&&s.uIk("autocomplete",i.autocompleteAttribute)("role",i.autocompleteDisabled?null:"combobox")("aria-autocomplete",i.autocompleteDisabled?null:"list")("aria-activedescendant",i.panelOpen&&i.activeOption?i.activeOption.id:null)("aria-expanded",i.autocompleteDisabled?null:i.panelOpen.toString())("aria-owns",i.autocompleteDisabled||!i.panelOpen||null==i.autocomplete?null:i.autocomplete.id)("aria-haspopup",i.autocompleteDisabled?null:"listbox")},exportAs:["matAutocompleteTrigger"],features:[s._Bn([C]),s.qOj]}),l})(),at=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=s.oAB({type:l}),l.\u0275inj=s.cJS({providers:[st],imports:[I.U8,a.Ng,a.BQ,y.ez,x.ZD,a.Ng,a.BQ]}),l})()},7314:(et,P,c)=>{c.d(P,{KP:()=>Y}),c(1281);var a=c(4650),y=c(3238),x=c(6895);c(4006),c(7579);let Y=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({imports:[y.BQ,x.ez,y.si]}),r})()}}]);