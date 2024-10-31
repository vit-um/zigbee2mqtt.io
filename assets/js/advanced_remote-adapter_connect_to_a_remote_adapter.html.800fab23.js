"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[27747],{23460:(e,n,a)=>{a.r(n),a.d(n,{comp:()=>i,data:()=>r});var s=a(24691);const t={},i=(0,a(89260).A)(t,[["render",function(e,n){return(0,s.uX)(),(0,s.CE)("div",null,n[0]||(n[0]=[(0,s.Fv)('<h1 id="connect-to-a-remote-adapter" tabindex="-1"><a class="header-anchor" href="#connect-to-a-remote-adapter"><span>Connect to a remote adapter</span></a></h1><p>This how-to explains how to run Zigbee2MQTT with an adapter on a remote location. We will use ser2net for this which allows to connect to a serial port over TCP. In this way you can e.g. setup a Raspberry Pi Zero with the adapter connected while running Zigbee2MQTT on a different system. The instructions below have to be executed on the system where the adapter is connected to.</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Be aware that it is not recommended to use a Zigbee Coordinator via a Serial-Proxy-Server (also known as Serial-to-IP bridge or Ser2Net remote adapter) over a WiFi, WAN, or VPN connection.</p><p>Serial protocols used by Zigbee Coordinator do not have enough robustness, resilience, or fault-tolerance to handle packet loss and latency delays that can occur over unstable connections.</p><p>Zigbee Coordinator requires a stable local connection to its serial port interface with no drops in communication between it and the Zigbee gateway application running on the host computer.</p><p>Thus be warned that connecting to a network-attached remote Zigbee Coordinator over WiFi/WAN/VPN using Ser2Net or other Serial Proxy/Forwarding Tunnel is not supported for normal operation.</p></div><h2 id="_1-install-ser2net" tabindex="-1"><a class="header-anchor" href="#_1-install-ser2net"><span>1. Install ser2net</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> ser2net</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2-a-configure-ser2net-4-0" tabindex="-1"><a class="header-anchor" href="#_2-a-configure-ser2net-4-0"><span>2(a). Configure ser2net (&lt;4.0)</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">nano</span> /etc/ser2net.conf</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Add the following entry, replace <code>/dev/ttyACM0</code> with the correct path to your adapter.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">20108:raw:0:/dev/ttyACM0:115200 8DATABITS NONE 1STOPBIT</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>After this reboot the system.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">reboot</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2-b-configure-ser2net-4-0" tabindex="-1"><a class="header-anchor" href="#_2-b-configure-ser2net-4-0"><span>2(b). Configure ser2net (&gt;=4.0)</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">nano</span> /etc/ser2net.yaml</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Add the following entry, replace <code>/dev/ttyACM0</code> with the correct path to your adapter.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">connection: &amp;con01</span>\n<span class="line">  accepter: tcp,20108</span>\n<span class="line">  connector: serialdev,/dev/ttyACM0,115200n81,local</span>\n<span class="line">  options:</span>\n<span class="line">    kickolduser: true</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>With a Slaesh coordinator, you need to set the DTR and RTS pins of the RS232 interfece in a specific way. The current (2023-02-04) version of Raspberry Pi OS does not have recent enough of ser2net to do that correctly, see https://github.com/cminyard/ser2net/issues/46. You might need to build the &quot;gensi&quot; and the &quot;ser2net&quot; packages on your rpi yourself. Other distributions might already have a more recent version. Once you have a version of ser2net that supports the &quot;dtr=off&quot; setting, use the following configuration:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">connection: &amp;con01</span>\n<span class="line">  accepter: tcp,20108</span>\n<span class="line">  connector: serialdev,/dev/ttyACM0,115200n81,local,dtr=off,rts=off</span>\n<span class="line">  options:</span>\n<span class="line">    kickolduser: true</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For ConBee II / RaspBee II, use the following configuration:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">connection: &amp;con01</span>\n<span class="line">  accepter: tcp,20108</span>\n<span class="line">  connector: serialdev,/dev/ttyACM0,115200n81,nobreak,local</span>\n<span class="line">  options:</span>\n<span class="line">    kickolduser: true</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After this reboot the system.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">reboot</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3-configure" tabindex="-1"><a class="header-anchor" href="#_3-configure"><span>3. Configure</span></a></h2><p>Now edit the Zigbee2MQTT <code>configuration.yaml</code> accordingly, replace <code>192.168.2.13</code> with the IP or hostname of your system where the adapter is connected to.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">serial</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token string">&#39;tcp://192.168.2.13:20108&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Done! Now you can start Zigbee2MQTT.</p>',25)]))}]]),r=JSON.parse('{"path":"/advanced/remote-adapter/connect_to_a_remote_adapter.html","title":"Connect to a remote adapter","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"1. Install ser2net","slug":"_1-install-ser2net","link":"#_1-install-ser2net","children":[]},{"level":2,"title":"2(a). Configure ser2net (<4.0)","slug":"_2-a-configure-ser2net-4-0","link":"#_2-a-configure-ser2net-4-0","children":[]},{"level":2,"title":"2(b). Configure ser2net (>=4.0)","slug":"_2-b-configure-ser2net-4-0","link":"#_2-b-configure-ser2net-4-0","children":[]},{"level":2,"title":"3. Configure","slug":"_3-configure","link":"#_3-configure","children":[]}],"git":{"updatedTime":1730404599000},"filePathRelative":"advanced/remote-adapter/connect_to_a_remote_adapter.md"}')}}]);