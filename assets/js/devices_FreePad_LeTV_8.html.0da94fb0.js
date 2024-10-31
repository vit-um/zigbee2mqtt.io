"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[47114],{5608:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>d});var n=o(24691);const c={},i=(0,o(89260).A)(c,[["render",function(e,t){const o=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[7]||(t[7]=(0,n.Lk)("h1",{id:"diyruz-freepad-letv-8",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#diyruz-freepad-letv-8"},[(0,n.Lk)("span",null,"DIYRuZ FreePad_LeTV_8")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"FreePad_LeTV_8")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(o,{to:"/supported-devices/#v=DIYRuZ"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("DIYRuZ")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"LeTV 8key FreePad mod")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"battery, action, switch_type, switch_actions, linkquality")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/FreePad_LeTV_8.png",alt:"DIYRuZ FreePad_LeTV_8"})])],-1))])]),t[8]||(t[8]=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p><a href="https://modkam.ru/?p=1791" target="_blank" rel="noopener noreferrer">LeTV 8key FreePad mod</a></p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>*_single</code>, <code>*_double</code>, <code>*_triple</code>, <code>*_quadruple</code>, <code>*_release</code>.</p><h3 id="switch-type-enum-button-1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-button-1-endpoint"><span>Switch type (enum, button_1 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_type_button_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_button_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_button_1&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>momentary</code>, <code>multifunction</code>.</p><h3 id="switch-actions-enum-button-1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-button-1-endpoint"><span>Switch actions (enum, button_1 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_actions_button_1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_button_1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_button_1&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>.</p><h3 id="switch-type-enum-button-2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-button-2-endpoint"><span>Switch type (enum, button_2 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_type_button_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_button_2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_button_2&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>momentary</code>, <code>multifunction</code>.</p><h3 id="switch-actions-enum-button-2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-button-2-endpoint"><span>Switch actions (enum, button_2 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_actions_button_2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_button_2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_button_2&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>.</p><h3 id="switch-type-enum-button-3-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-button-3-endpoint"><span>Switch type (enum, button_3 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_type_button_3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_button_3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_button_3&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>momentary</code>, <code>multifunction</code>.</p><h3 id="switch-actions-enum-button-3-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-button-3-endpoint"><span>Switch actions (enum, button_3 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_actions_button_3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_button_3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_button_3&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>.</p><h3 id="switch-type-enum-button-4-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-button-4-endpoint"><span>Switch type (enum, button_4 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_type_button_4</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_button_4&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_button_4&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>momentary</code>, <code>multifunction</code>.</p><h3 id="switch-actions-enum-button-4-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-button-4-endpoint"><span>Switch actions (enum, button_4 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_actions_button_4</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_button_4&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_button_4&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>.</p><h3 id="switch-type-enum-button-5-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-button-5-endpoint"><span>Switch type (enum, button_5 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_type_button_5</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_button_5&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_button_5&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>momentary</code>, <code>multifunction</code>.</p><h3 id="switch-actions-enum-button-5-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-button-5-endpoint"><span>Switch actions (enum, button_5 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_actions_button_5</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_button_5&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_button_5&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>.</p><h3 id="switch-type-enum-button-6-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-button-6-endpoint"><span>Switch type (enum, button_6 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_type_button_6</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_button_6&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_button_6&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>momentary</code>, <code>multifunction</code>.</p><h3 id="switch-actions-enum-button-6-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-button-6-endpoint"><span>Switch actions (enum, button_6 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_actions_button_6</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_button_6&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_button_6&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>.</p><h3 id="switch-type-enum-button-7-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-button-7-endpoint"><span>Switch type (enum, button_7 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_type_button_7</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_button_7&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_button_7&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>momentary</code>, <code>multifunction</code>.</p><h3 id="switch-actions-enum-button-7-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-button-7-endpoint"><span>Switch actions (enum, button_7 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_actions_button_7</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_button_7&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_button_7&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>.</p><h3 id="switch-type-enum-button-8-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-type-enum-button-8-endpoint"><span>Switch type (enum, button_8 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_type_button_8</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_type_button_8&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type_button_8&quot;: NEW_VALUE}</code>. The possible values are: <code>toggle</code>, <code>momentary</code>, <code>multifunction</code>.</p><h3 id="switch-actions-enum-button-8-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-button-8-endpoint"><span>Switch actions (enum, button_8 endpoint)</span></a></h3><p>Value can be found in the published state on the <code>switch_actions_button_8</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_button_8&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_button_8&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',41))])}]]),d=JSON.parse('{"path":"/devices/FreePad_LeTV_8.html","title":"DIYRuZ FreePad_LeTV_8 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"DIYRuZ FreePad_LeTV_8 control via MQTT","description":"Integrate your DIYRuZ FreePad_LeTV_8 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-12-01T19:02:25.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Switch type (enum, button_1 endpoint)","slug":"switch-type-enum-button-1-endpoint","link":"#switch-type-enum-button-1-endpoint","children":[]},{"level":3,"title":"Switch actions (enum, button_1 endpoint)","slug":"switch-actions-enum-button-1-endpoint","link":"#switch-actions-enum-button-1-endpoint","children":[]},{"level":3,"title":"Switch type (enum, button_2 endpoint)","slug":"switch-type-enum-button-2-endpoint","link":"#switch-type-enum-button-2-endpoint","children":[]},{"level":3,"title":"Switch actions (enum, button_2 endpoint)","slug":"switch-actions-enum-button-2-endpoint","link":"#switch-actions-enum-button-2-endpoint","children":[]},{"level":3,"title":"Switch type (enum, button_3 endpoint)","slug":"switch-type-enum-button-3-endpoint","link":"#switch-type-enum-button-3-endpoint","children":[]},{"level":3,"title":"Switch actions (enum, button_3 endpoint)","slug":"switch-actions-enum-button-3-endpoint","link":"#switch-actions-enum-button-3-endpoint","children":[]},{"level":3,"title":"Switch type (enum, button_4 endpoint)","slug":"switch-type-enum-button-4-endpoint","link":"#switch-type-enum-button-4-endpoint","children":[]},{"level":3,"title":"Switch actions (enum, button_4 endpoint)","slug":"switch-actions-enum-button-4-endpoint","link":"#switch-actions-enum-button-4-endpoint","children":[]},{"level":3,"title":"Switch type (enum, button_5 endpoint)","slug":"switch-type-enum-button-5-endpoint","link":"#switch-type-enum-button-5-endpoint","children":[]},{"level":3,"title":"Switch actions (enum, button_5 endpoint)","slug":"switch-actions-enum-button-5-endpoint","link":"#switch-actions-enum-button-5-endpoint","children":[]},{"level":3,"title":"Switch type (enum, button_6 endpoint)","slug":"switch-type-enum-button-6-endpoint","link":"#switch-type-enum-button-6-endpoint","children":[]},{"level":3,"title":"Switch actions (enum, button_6 endpoint)","slug":"switch-actions-enum-button-6-endpoint","link":"#switch-actions-enum-button-6-endpoint","children":[]},{"level":3,"title":"Switch type (enum, button_7 endpoint)","slug":"switch-type-enum-button-7-endpoint","link":"#switch-type-enum-button-7-endpoint","children":[]},{"level":3,"title":"Switch actions (enum, button_7 endpoint)","slug":"switch-actions-enum-button-7-endpoint","link":"#switch-actions-enum-button-7-endpoint","children":[]},{"level":3,"title":"Switch type (enum, button_8 endpoint)","slug":"switch-type-enum-button-8-endpoint","link":"#switch-type-enum-button-8-endpoint","children":[]},{"level":3,"title":"Switch actions (enum, button_8 endpoint)","slug":"switch-actions-enum-button-8-endpoint","link":"#switch-actions-enum-button-8-endpoint","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1730404599000},"filePathRelative":"devices/FreePad_LeTV_8.md"}')}}]);