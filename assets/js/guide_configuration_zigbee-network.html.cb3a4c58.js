"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[88999],{75504:(n,e,a)=>{a.r(e),a.d(e,{comp:()=>p,data:()=>l});var s=a(24691);const t={class:"hint-container tip"},i={},p=(0,a(89260).A)(i,[["render",function(n,e){const a=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[e[2]||(e[2]=(0,s.Fv)('<h1 id="zigbee-network" tabindex="-1"><a class="header-anchor" href="#zigbee-network"><span>Zigbee network</span></a></h1><h2 id="permit-join" tabindex="-1"><a class="header-anchor" href="#permit-join"><span>Permit join</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># Optional: allow new devices to join.</span></span>\n<span class="line"><span class="token key atrule">permit_join</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">ATTENTION</p><p>It&#39;s important to disable <code>permit_join</code> after you&#39;ve peered your devices. This keeps the Zigbee network safe and prevents accidental joining of other Zigbee devices. When a device joins, the coordinator exposes the network key.</p></div><h2 id="network-config" tabindex="-1"><a class="header-anchor" href="#network-config"><span>Network config</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">advanced</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token comment"># Optional: ZigBee pan ID (default: shown below)</span></span>\n<span class="line">    <span class="token comment"># Setting pan_id: GENERATE will make Zigbee2MQTT generate a new panID on next startup</span></span>\n<span class="line">    <span class="token key atrule">pan_id</span><span class="token punctuation">:</span> <span class="token number">0x1a62</span></span>\n<span class="line">    <span class="token comment"># Optional: Zigbee extended pan ID, GENERATE will make Zigbee2MQTT generate a new extended panID on next startup (default: shown below)</span></span>\n<span class="line">    <span class="token key atrule">ext_pan_id</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">0xDD</span><span class="token punctuation">,</span> <span class="token number">0xDD</span><span class="token punctuation">,</span> <span class="token number">0xDD</span><span class="token punctuation">,</span> <span class="token number">0xDD</span><span class="token punctuation">,</span> <span class="token number">0xDD</span><span class="token punctuation">,</span> <span class="token number">0xDD</span><span class="token punctuation">,</span> <span class="token number">0xDD</span><span class="token punctuation">,</span> <span class="token number">0xDD</span><span class="token punctuation">]</span></span>\n<span class="line">    <span class="token comment"># Optional: Zigbee channel, changing might require re-pairing of some devices (see docs below). (Note: use a ZLL channel: 11, 15, 20, or 25 to avoid problems)</span></span>\n<span class="line">    <span class="token comment"># (default: 11)</span></span>\n<span class="line">    <span class="token key atrule">channel</span><span class="token punctuation">:</span> <span class="token number">11</span></span>\n<span class="line">    <span class="token comment"># Optional: network encryption key</span></span>\n<span class="line">    <span class="token comment"># GENERATE will make Zigbee2MQTT generate a new network key on next startup</span></span>\n<span class="line">    <span class="token comment"># Note: changing requires repairing of all devices (default: shown below)</span></span>\n<span class="line">    <span class="token key atrule">network_key</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Set <code>network_key: GENERATE</code> to let Zigbee2MQTT generate a new random key on the first start. The <code>configuration.yml</code> gets updated with the new key. Changing the network_key requires repairing of all devices.</p></div>',7)),(0,s.Lk)("div",t,[e[1]||(e[1]=(0,s.Lk)("p",{class:"hint-container-title"},"Tips",-1)),(0,s.Lk)("p",null,[(0,s.bF)(a,{to:"/advanced/zigbee/02_improve_network_range_and_stability.html#reduce-wi-fi-interference-by-changing-the-zigbee-channel"},{default:(0,s.k6)((()=>e[0]||(e[0]=[(0,s.eW)("Reduce Wi-Fi interference by changing the Zigbee channel")]))),_:1})])]),e[3]||(e[3]=(0,s.Fv)('<h3 id="changing-the-zigbee-channel" tabindex="-1"><a class="header-anchor" href="#changing-the-zigbee-channel"><span>Changing the Zigbee channel</span></a></h3><p>Changing the channel of an existing Zigbee network is supported. In Zigbee, this is done by broadcasting a network update indicating the channel change. Devices that are asleep during the broadcast (usually battery powered end devices) will not switch immediately, but the next time they wake-up. It is therefore advised to trigger them after the channel change.</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Some Zigbee devices do not support changing channels. In case a device remains unresponsive several minutes after the change, and after having been triggered/woken up, you may have to re-pair it manually.</p></div><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Changing channels is only supported for the <code>zstack</code> and <code>ember</code> adapter.</p></div><p>Zigbee2MQTT will send this broadcast during startup if the channel in the configuration has been changed. The following logging will be produced:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">[2024-07-12 16:28:27] info: \tz2m: Starting Zigbee2MQTT version 1.39.0 (commit #e3fa0bfb)</span>\n<span class="line">...</span>\n<span class="line">[2024-07-12 16:28:27] warning: \tzh:controller: Configured channel &#39;18&#39; does not match adapter channel &#39;19&#39;, changing channel</span>\n<span class="line">[2024-07-12 16:28:27] warning: \tzh:controller: Changing channel from &#39;18&#39; to &#39;19&#39;</span>\n<span class="line">[2024-07-12 16:28:37] warning: \tzh:controller: Channel changed to &#39;19&#39;</span>\n<span class="line">...</span>\n<span class="line">[2024-07-12 16:28:37] info: \tz2m: Zigbee2MQTT started!</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="specifying-network-key-in-a-different-file" tabindex="-1"><a class="header-anchor" href="#specifying-network-key-in-a-different-file"><span>Specifying network_key in a different file</span></a></h3><p>To specify the network_key in a different file, e.g <code>secret.yaml</code>, use the following configuration.</p><p><strong>configuration.yaml</strong></p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># IMPORTANT: Don&#39;t forget the quotes!</span></span>\n<span class="line"><span class="token key atrule">advanced</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">network_key</span><span class="token punctuation">:</span> <span class="token string">&#39;!secret.yaml network_key&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>secret.yaml</strong></p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">network_key</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',12))])}]]),l=JSON.parse('{"path":"/guide/configuration/zigbee-network.html","title":"Zigbee network","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"headers":[{"level":2,"title":"Permit join","slug":"permit-join","link":"#permit-join","children":[]},{"level":2,"title":"Network config","slug":"network-config","link":"#network-config","children":[{"level":3,"title":"Changing the Zigbee channel","slug":"changing-the-zigbee-channel","link":"#changing-the-zigbee-channel","children":[]},{"level":3,"title":"Specifying network_key in a different file","slug":"specifying-network-key-in-a-different-file","link":"#specifying-network-key-in-a-different-file","children":[]}]}],"git":{"updatedTime":1730404599000},"filePathRelative":"guide/configuration/zigbee-network.md"}')}}]);