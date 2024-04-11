import{_ as a,c as e,o as t,a4 as s}from"./chunks/framework._vP4GGUF.js";const _=JSON.parse('{"title":"地圖漢化準則（草案）","description":"","frontmatter":{},"headers":[],"relativePath":"tw/rule.md","filePath":"tw/rule.md","lastUpdated":1712842530000}'),n={name:"tw/rule.md"},o=s(`<h1 id="地圖漢化準則-草案" tabindex="-1">地圖漢化準則（草案） <a class="header-anchor" href="#地圖漢化準則-草案" aria-label="Permalink to &quot;地圖漢化準則（草案）&quot;">​</a></h1><div class="important custom-block github-alert"><p class="custom-block-title">前言</p><p>地圖漢化技術要點較多、漢化困難，且鑒於現時WTEM仍可能出現無法預測的錯誤，若無標準化漢化準則將導致漢化工作量加大、質量低、工期長和稽核困難等一系列問題，囙此現擬一份地圖漢化準則，用於幫助大家漢化地圖。</p></div><h2 id="一、關於wtem提取" tabindex="-1">一、關於WTEM提取 <a class="header-anchor" href="#一、關於wtem提取" aria-label="Permalink to &quot;一、關於WTEM提取&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">提示</p><p>（本部分主要針對管理者）</p></div><h3 id="_1-檢查選取是否出錯、出漏" tabindex="-1">1. 檢查選取是否出錯、出漏 <a class="header-anchor" href="#_1-檢查選取是否出錯、出漏" aria-label="Permalink to &quot;1. 檢查選取是否出錯、出漏&quot;">​</a></h3><p>WTEM選取後，應在翻譯工作開展前檢查選取是否出錯、出漏。 其檢查內容應至少包括：</p><ul><li>新版本新增內容，WTEM可能還沒有支持；</li><li>是否有不支持翻譯鍵的JSON文字，導致WTEM不選取； 含轉義符的內容；</li><li>含宏的內容；</li><li>所有數据包是否正常運行，沒有語法錯誤。</li></ul><p>選取完成後，應進地圖實地考察，查漏補缺並確保所有機制運行正常。</p><h3 id="_2-重複鍵是否需要保留" tabindex="-1">2. 重複鍵是否需要保留 <a class="header-anchor" href="#_2-重複鍵是否需要保留" aria-label="Permalink to &quot;2. 重複鍵是否需要保留&quot;">​</a></h3><p>一般情况下，只保留告示牌的鍵。若遇到特殊情况，如語序問題，則可能還需要保留實體的鍵。</p><p><strong>示例</strong>：DE告示牌中的作者名和盔甲架名稱。</p><h3 id="_3-剔除無需翻譯的鍵" tabindex="-1">3. 剔除無需翻譯的鍵 <a class="header-anchor" href="#_3-剔除無需翻譯的鍵" aria-label="Permalink to &quot;3. 剔除無需翻譯的鍵&quot;">​</a></h3><p>在翻譯初期，先把無需翻譯的鍵隱藏以大幅减少無意義的工作。</p><p>無需翻譯的鍵包括：被丟棄的重複鍵、開發房中的絕大部分內容、數据包中用於協助開發的文字、等號或箭頭等分隔符和圖標，以及作者的遊戲內ID等。</p><p><strong>這一部分工作較難，切忌不要把該翻譯的東西省略了。</strong></p><h2 id="二、關於文字翻譯" tabindex="-1">二、關於文字翻譯 <a class="header-anchor" href="#二、關於文字翻譯" aria-label="Permalink to &quot;二、關於文字翻譯&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">提示</p><p>（這一部分主要面向翻譯者）</p></div><h3 id="_1-翻譯實地求證" tabindex="-1">1. 翻譯實地求證 <a class="header-anchor" href="#_1-翻譯實地求證" aria-label="Permalink to &quot;1. 翻譯實地求證&quot;">​</a></h3><p>缺乏上下文、無法確定的翻譯通過在<code>data.json</code>蒐索鍵值，複製座標後在世界中查證。 務必結合脉络！ 示例：<code>play</code>可能是遊玩，也可能是播放！</p><h3 id="_2-告示牌的翻譯" tabindex="-1">2. 告示牌的翻譯 <a class="header-anchor" href="#_2-告示牌的翻譯" aria-label="Permalink to &quot;2. 告示牌的翻譯&quot;">​</a></h3><p>告示牌的翻譯較為特殊，因為有獨特的字數限制、行數限制與排版要求。 翻譯時要確保字數不超限，排版儘量美觀，沒有把握的話可以自己寫在告示牌上測試。</p><h3 id="_3-物品描述的翻譯" tabindex="-1">3. 物品描述的翻譯 <a class="header-anchor" href="#_3-物品描述的翻譯" aria-label="Permalink to &quot;3. 物品描述的翻譯&quot;">​</a></h3><p>物品描述通常有多行，將整句翻譯完成後按字數斷句，確保每行字數儘量相等，儘量不要出現空行。 斷句儘量在完整單詞的末尾，標點不要放在行首。 對於有特殊格式的文字，要確保文字與行數對應。</p><p><strong>示例：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>描述1</span></span>
<span class="line"><span>描述2</span></span>
<span class="line"><span>描述3.1 描述3.2（特殊格式） 描述3.3</span></span>
<span class="line"><span>描述4</span></span></code></pre></div><h3 id="_4-聊天框對話的翻譯" tabindex="-1">4. 聊天框對話的翻譯 <a class="header-anchor" href="#_4-聊天框對話的翻譯" aria-label="Permalink to &quot;4. 聊天框對話的翻譯&quot;">​</a></h3><p>聊天框對話的翻譯較為特殊，由於Mojang羸弱的換行機制，對話太長的換行會出現問題，此時需要手動在合適的字數後添加分行符號<code>\\n</code>。</p><p><strong>錯誤示例：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;某人&gt;</span></span>
<span class="line"><span>   很長很長的一段話</span></span></code></pre></div><p><strong>正確示例：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;某人&gt; 很長很長的\\n</span></span>
<span class="line"><span>      一段話</span></span></code></pre></div><h3 id="_5-關於專有名詞的翻譯" tabindex="-1">5. 關於專有名詞的翻譯 <a class="header-anchor" href="#_5-關於專有名詞的翻譯" aria-label="Permalink to &quot;5. 關於專有名詞的翻譯&quot;">​</a></h3><p>對於一些可能出現的原版名詞或常見的地圖術語，務必統一。 某些譯名尤其容易搞錯，多加小心，不確定的可以查閱wiki。</p><p><strong>示例</strong>:<code>Leather Tunic皮革外套</code>、<code>Pink Wool粉紅色羊毛</code>、<code>Monument紀念碑</code>等等。</p><h3 id="_6-關於自造詞、俚語的翻譯-較難" tabindex="-1">6. 關於自造詞、俚語的翻譯（較難） <a class="header-anchor" href="#_6-關於自造詞、俚語的翻譯-較難" aria-label="Permalink to &quot;6. 關於自造詞、俚語的翻譯（較難）&quot;">​</a></h3><p>翻譯中可能會出現一些自造詞、俚語、國外或社區一些梗，這些詞的翻譯工作比較困難，若無法解决可以求助。</p><p>比較好用的一些網站：</p><p><a href="https://zh.wiktionary.org/wiki/Wiktionary:%E9%A6%96%E9%A1%B5" target="_blank" rel="noreferrer">Wiktionary</a> （查詞的來源、詞根和詞綴，非常方便）</p><p><a href="https://www.urbandictionary.com/" target="_blank" rel="noreferrer">Urban Dictionary</a> （查俚語，用的不多）</p>`,39),i=[o];function l(r,p,c,h,d,u){return t(),e("div",null,i)}const g=a(n,[["render",l]]);export{_ as __pageData,g as default};
