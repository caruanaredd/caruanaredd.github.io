"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5293],{1006:(d,c,e)=>{e.d(c,{G:()=>u});var n=e(2096),g=e(5966),p=e(546),l=e(6888),h=e(9808);function a(o,i){1&o&&n._UZ(0,"map-marker",3),2&o&&n.Q6J("position",i.$implicit)}function m(o,i){if(1&o&&(n.TgZ(0,"div"),n.YNc(1,a,1,1,"map-marker",2),n.qZA()),2&o){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",t.markerPosition)}}let u=(()=>{class o{constructor(t,s){this.route=t,this.ensembleService=s,this.chosenLocation=new n.vpe,this.gestureHandling="",this.options={}}ngOnInit(){this.gestureHandling=this.writeMap?void 0:"none",console.log("wripte map: ",this.writeMap),this.selectedEvent=void 0,this.setMap()}mapClick(t){t=t.latLng.toJSON(),this.writeMap&&(this.chosenLat=t.lat,this.chosenLng=t.lng,this.markerPosition=[{lat:this.chosenLat,lng:this.chosenLng}],this.chosenLocation.emit({lat:this.chosenLat,lng:this.chosenLng}))}setMap(){if(this.chosenLng=14.507898,this.chosenLat=35.89545,this.writeMap)this.markerPosition=[{lat:this.chosenLat,lng:this.chosenLng}],this.options=Object.assign(Object.assign({},this.options),{gestureHandling:this.gestureHandling,center:{lat:this.chosenLat,lng:this.chosenLng}}),console.log("options: ",this.options);else{if(console.log("route is: "+this.route),this.eventID=parseInt(this.route.snapshot.params.eventId),this.selectedEvent=this.ensembleService.getEventByID(this.eventID),console.log("Event ID: "+this.eventID),console.log("selected event: ",this.selectedEvent),void 0===this.selectedEvent)return void console.log("Event not found!");this.markerPosition=[{lat:this.selectedEvent.location.lat,lng:this.selectedEvent.location.lng}],this.options=Object.assign(Object.assign({},this.options),{gestureHandling:this.gestureHandling,center:{lat:this.selectedEvent.location.lat,lng:this.selectedEvent.location.lng}}),console.log("marker pos, ",this.markerPosition)}this.chosenLocation.emit({lat:this.chosenLat,lng:this.chosenLng})}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(g.gz),n.Y36(p.Z))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-map"]],inputs:{writeMap:"writeMap"},outputs:{chosenLocation:"chosenLocation"},decls:2,vars:2,consts:[["width"," 100%",3,"options","mapClick"],[4,"ngIf"],[3,"position",4,"ngFor","ngForOf"],[3,"position"]],template:function(t,s){1&t&&(n.TgZ(0,"google-map",0),n.NdJ("mapClick",function(v){return s.mapClick(v)}),n.YNc(1,m,2,1,"div",1),n.qZA()),2&t&&(n.Q6J("options",s.options),n.xp6(1),n.Q6J("ngIf",s.markerPosition))},directives:[l.b6,h.O5,h.sg,l.O_],styles:[""]}),o})()},4491:(d,c,e)=>{e.r(c),e.d(c,{EventPageModule:()=>i});var n=e(9808),g=e(4182),p=e(2974),l=e(5966),h=e(5061),a=e(2096);const m=[{path:"",component:h.y}];let u=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[l.Bz.forChild(m)],l.Bz]}),t})();var o=e(5642);let i=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[n.ez,g.u5,p.Pc,u,o.K]]}),t})()}}]);