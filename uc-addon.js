/* UC Math For Elites — إضافات: صورة الطالب، كارت ID، ملف الطالب، شهادة تقدير، واتساب، تحليل أشيك */
(function(){
const $=id=>document.getElementById(id), LG=()=>document.querySelector('.logo').getAttribute('src')||'logo.png';
const PH={}; let curPh;
document.head.insertAdjacentHTML('beforeend','<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,600;1,500&family=Poppins:wght@500;700&display=swap" rel="stylesheet"><style>'+`
.idc{width:428px;height:270px;border-radius:16px;position:relative;overflow:hidden;direction:ltr;font-family:Poppins,Cairo,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.25);flex-shrink:0}
.idc.f{background:linear-gradient(135deg,#0f3d22,#1b5e35 65%,#2a7a49);color:#fff}
.idc.f::before{content:"";position:absolute;inset:0 0 auto 0;height:8px;background:linear-gradient(90deg,#a8841a,#f6e7a8,#d4af37)}
.idc.f::after{content:"";position:absolute;right:-60px;bottom:-60px;width:200px;height:200px;border-radius:50%;background:rgba(212,175,55,.12)}
.idc .lg{position:absolute;left:18px;top:22px;display:flex;align-items:center;gap:10px}
.idc .lg img{width:50px;height:50px;border-radius:50%;background:#fff;padding:3px;object-fit:contain;border:2px solid #d4af37}
.idc .lg b{font-size:15px;color:#f6e7a8;line-height:1.1}.idc .lg small{display:block;font-size:8px;color:#cfe6d6;font-weight:500}
.idc .ph{position:absolute;right:18px;top:24px;width:104px;height:130px;border-radius:10px;border:3px solid #d4af37;background:#e4f3ea center/cover;display:flex;align-items:center;justify-content:center;font-size:44px;color:#1b5e35;font-weight:700;z-index:2}
.idc .nm{position:absolute;left:18px;top:98px;width:270px;font-size:21px;font-weight:700;line-height:1.15;color:#fff}
.idc .mt{position:absolute;left:18px;top:168px;font-size:12px;line-height:1.9;color:#f6e7a8}.idc .mt span{color:#fff}
.idc .ft{position:absolute;left:0;right:0;bottom:0;padding:9px 18px;background:rgba(0,0,0,.28);font-size:10px;display:flex;justify-content:space-between;z-index:2}
.idc .ft b{color:#f6e7a8}
.idc.b{background:linear-gradient(135deg,#0a2c18,#1b5e35 60%,#2a7a49);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:5px;color:#fff}
.idc.b::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(45deg,rgba(255,255,255,.035) 0 10px,transparent 10px 20px)}
.idc.b::after{content:"";position:absolute;inset:10px;border:1.5px solid #d4af37;border-radius:10px}
.idc.b .ring{width:132px;height:132px;border-radius:50%;background:#fff;padding:8px;border:4px solid #d4af37;box-shadow:0 0 0 6px rgba(212,175,55,.25),0 8px 20px rgba(0,0,0,.4);object-fit:contain;z-index:2}
.idc.b span{font:700 15px Poppins;color:#f6e7a8;letter-spacing:3px;z-index:2;margin-top:6px}
.idc.b small{font:500 9px Poppins;color:#cfe6d6;letter-spacing:4px;z-index:2}
.idc.b .gl{position:absolute;bottom:0;left:0;right:0;height:8px;background:linear-gradient(90deg,#a8841a,#f6e7a8,#d4af37,#f6e7a8,#a8841a)}
.idsheet{display:grid;grid-template-columns:repeat(2,85.6mm);gap:5mm 6mm;justify-content:center;align-content:start;direction:ltr;break-after:page;page-break-after:always}
.idsheet:last-child{break-after:auto;page-break-after:auto}.idsheet img{width:85.6mm;height:54mm;display:block}
#bkList{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:8px}
.bk{display:flex;gap:8px;align-items:center;padding:9px 12px;background:#fdf7dc;border:1px solid #f6e7a8;border-radius:12px;cursor:pointer;margin:0}.bk input{width:auto}
.idwrap{display:flex;gap:22px;flex-wrap:wrap;justify-content:center}
.cwrap{overflow-x:auto;padding:6px}
.cert{width:842px;height:595px;background:radial-gradient(circle at 50% 50%,#fffefb,#f8f0d6);position:relative;direction:ltr;text-align:center;box-sizing:border-box;flex-shrink:0;margin:auto;box-shadow:0 10px 32px rgba(0,0,0,.25);overflow:hidden}
.cert .fr{position:absolute;inset:14px;border:2px solid #d4af37}.cert .fr2{position:absolute;inset:22px;border:1px solid #1b5e35}
.cert .wm{position:absolute;left:50%;top:55%;width:340px;height:340px;transform:translate(-50%,-50%);object-fit:contain;opacity:.06}
.cert .tg,.cert .tv,.cert .bg2,.cert .bv{position:absolute}
.cert .tg{top:0;left:0;width:300px;height:300px;background:linear-gradient(135deg,#d4af37,#f6e7a8 50%,#a8841a);clip-path:polygon(0 0,100% 0,0 100%)}
.cert .tv{top:0;left:0;width:276px;height:276px;background:linear-gradient(135deg,#0a2c18,#1b5e35 70%,#2a7a49);clip-path:polygon(0 0,100% 0,0 100%)}
.cert .bg2{bottom:0;right:0;width:130px;height:130px;background:linear-gradient(135deg,#a8841a,#f6e7a8 50%,#d4af37);clip-path:polygon(100% 100%,0 100%,100% 0)}
.cert .bv{bottom:0;right:0;width:112px;height:112px;background:linear-gradient(135deg,#2a7a49,#0a2c18);clip-path:polygon(100% 100%,0 100%,100% 0)}
.cert .lg1{position:absolute;top:30px;left:30px;width:102px;height:102px;border-radius:50%;background:#fff;padding:6px;object-fit:contain;border:3px solid #d4af37;box-shadow:0 6px 16px rgba(0,0,0,.4)}
.cert .c{position:absolute;top:46px;left:120px;right:130px;bottom:30px;display:flex;flex-direction:column;align-items:center;justify-content:space-between}
.cert .br{font:600 12px Poppins;color:#1b5e35;letter-spacing:6px}
.cert h1{font:700 40px/1.1 'Cormorant Garamond',serif;color:#a8841a;letter-spacing:5px;text-transform:uppercase;margin:6px 0 0;max-width:470px}
.cert .dv{display:flex;align-items:center;gap:10px;color:#d4af37;font-size:15px}.cert .dv:before,.cert .dv:after{content:"";width:80px;height:1.5px;background:#d4af37}
.cert .pp{font:500 11px Poppins;color:#7b8274;letter-spacing:4px}
.cert .n{font:400 62px 'Great Vibes',cursive;color:#0f3d22;line-height:1.1;border-bottom:2px solid #d4af37;padding:0 46px 2px}
.cert .t{font:italic 500 19px/1.5 'Cormorant Garamond',serif;color:#25301f;max-width:540px;white-space:pre-wrap}
.cert .sg{width:100%;display:flex;justify-content:space-between;align-items:flex-end;font:500 11px Poppins;color:#7b8274}
.cert .sg .b1{min-width:160px;border-top:1.5px solid #25301f;padding-top:5px}.cert .sg b{display:block;font-size:14px;color:#1b5e35;margin-top:2px}
.cert .sg .l2{height:78px;object-fit:contain}
body{background:radial-gradient(circle at 12% 8%,#fff 0,transparent 38%),radial-gradient(circle at 92% 92%,#f6e7a8 0,transparent 42%),linear-gradient(160deg,#f7f3e6,#efe8cf);background-attachment:fixed}
header{padding:20px 32px;background:linear-gradient(120deg,#0a2c18,#1b5e35 55%,#2a7a49);box-shadow:0 10px 36px rgba(10,44,24,.35)}
header::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(45deg,rgba(255,255,255,.03) 0 12px,transparent 12px 24px);pointer-events:none}
header h1{font-size:32px;letter-spacing:.5px}
.logo{height:92px;width:92px;animation:glw 3s ease-in-out infinite}
@keyframes glw{50%{box-shadow:0 0 0 8px rgba(212,175,55,.25),0 6px 22px rgba(0,0,0,.35)}}
nav{padding:20px 26px}
nav button{border-radius:20px;border:1px solid #eee6c4;padding:14px 10px;font-size:15px}
nav button span{font-size:26px;transition:.25s}nav button:hover span{transform:scale(1.2) rotate(-6deg)}
nav button.active{box-shadow:0 12px 26px rgba(168,132,26,.4);border-color:transparent}
.card{border-radius:24px;border:1px solid rgba(212,175,55,.18);transition:.3s}.card:hover{box-shadow:0 14px 40px rgba(15,61,34,.16)}
.card h2{padding-bottom:10px;border-bottom:2px dashed #eee6c4}
input,select,textarea{border-radius:14px!important}
.btn-gold{background:linear-gradient(135deg,#e6c34f,#a8841a)}
th{background:linear-gradient(135deg,#0f3d22,#1b5e35)!important;letter-spacing:.3px}
.kpi{border-radius:20px;transition:.25s}.kpi:hover{transform:translateY(-4px)}
.av{box-shadow:0 3px 8px rgba(168,132,26,.4)}
::-webkit-scrollbar{height:10px;width:10px}::-webkit-scrollbar-thumb{background:#d4af37;border-radius:10px}
.verdict{display:flex;flex-wrap:wrap;gap:6px 18px;align-items:center;border-radius:24px;padding:24px 28px;background:linear-gradient(120deg,#0f3d22,#1b5e35 60%,#2a7a49);position:relative;overflow:hidden}
.verdict::after{content:"";position:absolute;left:-40px;top:-40px;width:160px;height:160px;border-radius:50%;background:rgba(212,175,55,.15)}
.verdict .ap{width:84px;height:104px;border-radius:14px;border:3px solid #d4af37;object-fit:cover;background:#e4f3ea}
.verdict .vt{flex:1;min-width:260px}
.kpi{border-bottom:none;border-top:5px solid #d4af37;background:linear-gradient(180deg,#fff,#fdf7dc)}
.kpi .v{font-size:28px}.chart-box{border:1px solid #f1ecd6;transition:.25s}.chart-box:hover{transform:translateY(-4px)}
.kpi.main{border-top-color:#f6e7a8}
`+'</style>');

/* ===== حقن التبويبات والأقسام ===== */
document.querySelector('nav').insertAdjacentHTML('beforeend',
 '<button data-tab="id" onclick="showTab(\'id\')"><span>🪪</span>كارت ID</button><button data-tab="file" onclick="showTab(\'file\')"><span>📁</span>ملف الطالب</button><button data-tab="cert" onclick="showTab(\'cert\')"><span>🏆</span>شهادة تقدير</button>');
const sel=i=>`<div><label>الأكاديمية</label><select id="${i}Ac"></select></div><div><label>الطالب</label><select id="${i}"></select></div>`;
document.querySelector('main').insertAdjacentHTML('beforeend',`
<section id="sec-id" class="sec"><div class="card"><h2>🪪 كارت الـ ID</h2><div class="grid">${sel('idStu')}
<div><label>الاسم بالإنجليزي (بيتترجم تلقائي وتقدر تعدله)</label><input id="idEn" dir="ltr"></div></div>
<div class="actions"><button class="btn btn-gold" onclick="idPDF()">📄 تحميل PDF (وش وضهر)</button><button class="btn btn-green" onclick="idPNG()">🖼 تحميل صور PNG</button></div></div>
<div class="card"><div class="idwrap"><div id="idFront" class="idc f"></div><div id="idBack" class="idc b"></div></div></div><div class="card"><h2>🗂 إصدار أكثر من كارت <span class="badge" id="bkN">0</span></h2><div class="grid"><div><label>الأكاديمية</label><select id="bkAc"></select></div></div>
<div class="actions"><button class="btn btn-green" onclick="bkAll(true)">تحديد الكل</button><button class="btn btn-light" onclick="bkAll(false)">إلغاء الكل</button></div><div id="bkList" style="margin-top:14px"></div>
<div class="hint">كل 8 كروت في صفحة A4: الوش في صفحة والضهر في الصفحة اللي وراها (مترتبين للطباعة على الوش والضهر).</div>
<div class="actions"><button class="btn btn-gold" onclick="bkPDF()">📄 تصدير PDF</button><button class="btn btn-green" onclick="bkPrint()">🖨 طباعة</button></div></div></section>
<section id="sec-file" class="sec"><div class="card"><h2>📁 ملف الطالب</h2><div class="grid">${sel('flStu')}</div>
<div class="actions"><button class="btn btn-gold" onclick="flPrint()">🖨 طباعة / PDF</button><button class="btn btn-green" onclick="flWA()">💬 إرسال ملخص واتساب</button></div></div><div id="flOut"></div></section>
<section id="sec-cert" class="sec"><div class="card"><h2>🏆 شهادة تقدير</h2><div class="grid">${sel('ctStu')}
<div><label>الاسم على الشهادة</label><input id="ctName" dir="ltr"></div>
<div><label>عنوان الشهادة</label><input id="ctTitle" dir="ltr" value="Certificate of Appreciation"></div></div>
<div style="margin-top:12px"><label>النص (بالإنجليزي)</label><textarea id="ctText" rows="4" dir="ltr" style="width:100%;padding:12px;border:2px solid #e8e3cf;border-radius:12px;font-family:inherit">This certificate is proudly presented in recognition of outstanding performance, dedication, and continuous improvement in the Mental Arithmetic Course.</textarea></div>
<div class="actions"><button class="btn btn-gold" onclick="ctPDF()">📄 تحميل PDF</button></div></div>
<div class="card cwrap"><div id="cert" class="cert"></div></div><div class="card"><h2>🗂 شهادات لأكثر من طالب <span class="badge" id="cbN">0</span></h2><div class="hint" style="margin:-6px 0 12px">بتستخدم العنوان والنص اللي فوق لكل الطلاب، والاسم بيتحط لكل طالب تلقائي بالإنجليزي. ملف PDF واحد، شهادة في كل صفحة.</div>
<div class="grid"><div><label>الأكاديمية</label><select id="cbAc"></select></div></div>
<div class="actions"><button class="btn btn-green" onclick="cbAll(true)">تحديد الكل</button><button class="btn btn-light" onclick="cbAll(false)">إلغاء الكل</button></div>
<div id="cbList" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:8px;margin-top:14px"></div>
<div class="actions"><button class="btn btn-gold" onclick="cbPDF()">📄 تصدير الشهادات PDF</button></div></div></section>`);
$('rPhone').closest('div').insertAdjacentHTML('afterend','<div><label>صورة الطالب (اختياري — بتتضغط تلقائي)</label><input id="rPhoto" type="file" accept="image/*"><img id="rPhPrev" style="display:none;width:64px;height:80px;object-fit:cover;border-radius:8px;margin-top:6px;border:2px solid var(--gold)"></div>');

/* ===== أدوات ===== */
const AR={ا:'a',أ:'a',إ:'e',آ:'a',ب:'b',ت:'t',ث:'th',ج:'g',ح:'h',خ:'kh',د:'d',ذ:'z',ر:'r',ز:'z',س:'s',ش:'sh',ص:'s',ض:'d',ط:'t',ظ:'z',ع:'a',غ:'gh',ف:'f',ق:'k',ك:'k',ل:'l',م:'m',ن:'n',ه:'h',و:'o',ي:'y',ى:'a',ة:'a',ئ:'e',ؤ:'o',ء:''};
const NM={'محمد':'Mohamed','احمد':'Ahmed','أحمد':'Ahmed','علي':'Ali','حسين':'Hussein','حسن':'Hassan','محمود':'Mahmoud','مصطفى':'Mostafa','ابراهيم':'Ibrahim','إبراهيم':'Ibrahim','يوسف':'Youssef','عمر':'Omar','خالد':'Khaled','مريم':'Mariam','فاطمة':'Fatma','نور':'Nour','سلمى':'Salma','ياسين':'Yassin','آدم':'Adam','ادم':'Adam','زياد':'Ziad','كريم':'Karim','طارق':'Tarek','جنى':'Jana','ليلى':'Laila','سارة':'Sara','ملك':'Malak','عبدالله':'Abdullah','عبدالرحمن':'Abdelrahman','الوكيل':'El-Wakeel'};
const cap=w=>w.charAt(0).toUpperCase()+w.slice(1);
const tw=w=>NM[w]||(w.length>3&&w.startsWith('ال')?'El-'+cap(tw(w.slice(2))):cap([...w].map(c=>AR[c]??c).join('')));
const tr=n=>/[\u0600-\u06FF]/.test(n)?n.trim().split(/\s+/).map(tw).join(' '):n;
const S=i=>stuById($(i).value);
const fb=(s)=>s.en||tr(s.name);
const ph=s=>PH[s.id];
function compress(f){return new Promise(r=>{const im=new Image();im.onload=()=>{const W=240,H=300,c=document.createElement('canvas');c.width=W;c.height=H;const g=c.getContext('2d'),k=Math.max(W/im.width,H/im.height),w=im.width*k,h=im.height*k;g.fillStyle='#fff';g.fillRect(0,0,W,H);g.drawImage(im,(W-w)/2,(H-h)*.25,w,h);r(c.toDataURL('image/jpeg',.7))};im.src=URL.createObjectURL(f)})}
function savePh(id,d){PH[id]=d;fs.doc(`users/${CUID}/photos/${id}`).set({d}).catch(()=>toast('فشل حفظ الصورة','err'))}
$('rPhoto').onchange=async e=>{const f=e.target.files[0];if(!f)return;curPh=await compress(f);$('rPhPrev').src=curPh;$('rPhPrev').style.display='block'};
auth.onAuthStateChanged(async u=>{if(!u)return;try{(await fs.collection(`users/${CUID}/photos`).get()).forEach(d=>PH[d.id]=d.data().d);refreshAll()}catch(e){console.error(e)}});

/* ===== ربط الصورة بالتسجيل ===== */
const _save=saveStudent,_reset=resetForm,_edit=editStudent,_del=delStudent;
saveStudent=function(e){const p=curPh,id0=editingId,n=$('rName').value.trim(),a=$('rAcademy').value;_save(e);
  const s=id0?stuById(id0):DB.students.find(x=>x.name===n&&x.academy===a);if(s&&p)savePh(s.id,p);if(s)refreshAll()};
resetForm=function(){_reset();curPh=undefined;$('rPhoto').value='';$('rPhPrev').style.display='none'};
editStudent=function(id){_edit(id);curPh=undefined;const p=PH[id];$('rPhPrev').style.display=p?'block':'none';if(p)$('rPhPrev').src=p};
delStudent=function(id){_del(id);if(!stuById(id)&&PH[id]){delete PH[id];fs.doc(`users/${CUID}/photos/${id}`).delete().catch(()=>{})}};

/* ===== واتساب ===== */
const waNum=p=>{let d=String(p||'').replace(/\D/g,'');if(d.startsWith('00'))d=d.slice(2);else if(d.startsWith('0'))d='20'+d.slice(1);return d};
window.wa=(id,msg)=>{const s=stuById(id);if(!s||!waNum(s.phone)){toast('مفيش رقم تليفون للطالب ده','err');return}
  const m=msg!==undefined?msg:prompt('الرسالة:','أهلاً، بخصوص الطالب '+s.name+' في UC Math For Elites: ');if(m===null)return;
  window.open('https://wa.me/'+waNum(s.phone)+'?text='+encodeURIComponent(m),'_blank')};
const _rs=renderStudents;
renderStudents=function(){_rs();const q=$('searchBox').value.trim(),ac=$('filterAcademy').value,lv=$('filterLevel').value;
  const list=DB.students.filter(s=>(!ac||s.academy===ac)&&(lv===''||String(s.level)===lv)&&(!q||s.name.includes(q)||(s.phone||'').includes(q))).sort(byName);
  [...$('stuBody').rows].forEach((r,i)=>{const s=list[i];if(s&&r.cells.length>5&&s.phone)r.cells[r.cells.length-1].insertAdjacentHTML('beforeend',` <button class="btn btn-sm" style="background:#25d366;color:#fff" onclick="wa('${s.id}')">💬 واتساب</button>`)})};

/* ===== كارت ID ===== */
function fillSel(){const acs='<option value="">كل الأكاديميات</option>'+DB.academies.slice().sort(byName).map(x=>`<option value="${x.id}">${esc(x.name)}</option>`).join('');
  ['idStu','flStu','ctStu'].forEach(i=>{const a=$(i+'Ac'),av=a.value;a.innerHTML=acs;if(DB.academies.some(x=>x.id===av))a.value=av;
    const e=$(i),v=e.value,l=DB.students.filter(s=>!a.value||s.academy===a.value).sort(byName);
    e.innerHTML='<option value="">-- اختر الطالب ('+l.length+') --</option>'+l.map(s=>`<option value="${s.id}">${esc(s.name)}</option>`).join('');if(l.some(s=>s.id===v))e.value=v});const ba=$('bkAc'),bv=ba.value;ba.innerHTML=acs;if(DB.academies.some(x=>x.id===bv))ba.value=bv;renderBk();const ca=$('cbAc'),cv=ca.value;ca.innerHTML=acs;if(DB.academies.some(x=>x.id===cv))ca.value=cv;renderCb()}
const frontHTML=(s,en)=>{const p=ph(s);return `<div class="lg"><img src="${LG()}" onerror="this.style.display='none'"><b>UC Math<br>For Elites<small>Mental Arithmetic Course</small></b></div>
  <div class="ph" style="${p?`background-image:url(${p})`:''}">${p?'':esc(en.charAt(0))}</div>
  <div class="nm">${esc(en)}</div><div class="mt">Level: <span>${s.level}</span><br>Joined: <span>${esc(s.join||'—')}</span></div>
  <div class="ft"><span>Instructor: <b>Hussen El-Wakeel</b></span><span>ID ${esc(s.id.slice(-5).toUpperCase())}</span></div>`};
const backHTML=()=>`<img class="ring" src="${LG()}" onerror="this.style.display='none'"><span>UC MATH FOR ELITES</span><small>MENTAL ARITHMETIC COURSE</small><div class="gl"></div>`;
const bkSel=new Set();
function renderBk(){const a=$('bkAc').value,l=DB.students.filter(s=>!a||s.academy===a).sort(byName);
  $('bkList').innerHTML=l.map(s=>`<label class="bk"><input type="checkbox" ${bkSel.has(s.id)?'checked':''} onchange="bkT('${s.id}',this.checked)"> ${esc(s.name)}</label>`).join('')||'<div class="empty">مفيش طلاب</div>';updBk()}
const updBk=()=>$('bkN').textContent=[...bkSel].filter(id=>stuById(id)).length;
window.bkT=(id,c)=>{c?bkSel.add(id):bkSel.delete(id);updBk()};
window.bkAll=on=>{const a=$('bkAc').value;DB.students.filter(s=>!a||s.academy===a).forEach(s=>on?bkSel.add(s.id):bkSel.delete(s.id));renderBk()};
async function bkImgs(){const list=[...bkSel].map(stuById).filter(Boolean).sort(byName),st=document.createElement('div');
  st.style.cssText='position:fixed;left:-9999px;top:0';document.body.appendChild(st);
  const mk=async(cls,html)=>{const d=document.createElement('div');d.className=cls;d.innerHTML=html;st.appendChild(d);const c=(await snap(d,3)).toDataURL('image/png');d.remove();return c};
  const f=[];try{for(let i=0;i<list.length;i++){toast('جاري تجهيز '+(i+1)+' / '+list.length);f.push(await mk('idc f',frontHTML(list[i],fb(list[i]))))}
  return {f,b:await mk('idc b',backHTML())}}finally{st.remove()}}
window.bkPDF=async()=>{if(!bkSel.size)return toast('اختار طلاب الأول','err');const {f,b}=await bkImgs(),{jsPDF}=window.jspdf,p=new jsPDF({unit:'mm',format:'a4'});
  const W=85.6,H=54,gx=6,gy=5,x0=(210-2*W-gx)/2,y0=(297-4*H-3*gy)/2;
  for(let i=0;i<f.length;i+=8){const ch=f.slice(i,i+8);if(i)p.addPage();
    ch.forEach((u,k)=>p.addImage(u,'PNG',x0+(k%2)*(W+gx),y0+Math.floor(k/2)*(H+gy),W,H));
    p.addPage();ch.forEach((u,k)=>p.addImage(b,'PNG',x0+(1-k%2)*(W+gx),y0+Math.floor(k/2)*(H+gy),W,H))}
  p.save('ID-cards.pdf');toast('تم تصدير الكروت ✔')};
window.bkPrint=async()=>{if(!bkSel.size)return toast('اختار طلاب الأول','err');const {f,b}=await bkImgs();let h='';
  for(let i=0;i<f.length;i+=8){const ch=f.slice(i,i+8);h+=`<div class="idsheet">${ch.map(u=>`<img src="${u}">`).join('')}</div><div class="idsheet" style="direction:rtl">${ch.map(()=>`<img src="${b}">`).join('')}</div>`}
  $('printArea').innerHTML=h;setTimeout(()=>window.print(),400)};
function renderId(){const s=S('idStu');if(!s){$('idFront').innerHTML='';$('idBack').innerHTML=backHTML();return}
  if(document.activeElement!==$('idEn'))$('idEn').value=fb(s);const en=$('idEn').value||fb(s),p=ph(s);
  $('idFront').innerHTML=frontHTML(s,en);
  $('idBack').innerHTML=backHTML()}
$('idStu').onchange=()=>{$('idEn').value='';renderId()};
$('idEn').oninput=()=>{const s=S('idStu');if(s){s.en=$('idEn').value;save();renderId()}};
const snap=async(el,sc)=>{await document.fonts.ready;return html2canvas(el,{scale:sc,backgroundColor:null,useCORS:true})};
const dl=(u,n)=>{const a=document.createElement('a');a.href=u;a.download=n;a.click()};
window.idPNG=async()=>{const s=S('idStu');if(!s)return toast('اختار الطالب','err');dl((await snap($('idFront'),4)).toDataURL(),'ID-front-'+fb(s)+'.png');dl((await snap($('idBack'),4)).toDataURL(),'ID-back.png')};
window.idPDF=async()=>{const s=S('idStu');if(!s)return toast('اختار الطالب','err');const {jsPDF}=window.jspdf,p=new jsPDF({unit:'mm',format:[85.6,54],orientation:'l'});
  p.addImage((await snap($('idFront'),4)).toDataURL('image/png'),'PNG',0,0,85.6,54);p.addPage([85.6,54],'l');p.addImage((await snap($('idBack'),4)).toDataURL('image/png'),'PNG',0,0,85.6,54);p.save('ID-'+fb(s)+'.pdf')};

/* ===== ملف الطالب ===== */
function renderFile(){const s=S('flStu'),o=$('flOut');if(!s){o.innerHTML='';return}
  const st=calcStats(s,'all',''),ev=[['0'+(s.join||''),'🎉','انضم إلى '+acName(s.academy)+' — '+lvName(s.level)]];
  let paid=0,books=0;
  DB.payments.filter(p=>p.studentId===s.id).forEach(p=>{paid+=p.amount;ev.push([p.date,'💰',(p.kind==='session'?'دفع حصة: ':'اشتراك شهري: ')+money(p.amount)])});
  DB.sales.filter(x=>x.studentId===s.id).forEach(x=>{books+=x.sell*x.qty;ev.push([x.date,'📚',`اشترى ${x.itemName} × ${x.qty} بـ ${money(x.sell*x.qty)}`])});
  for(const k in DB.att){const i=k.indexOf('|'),d=k.slice(0,i),a=k.slice(i+1),pr=DB.att[k].present||[];
    if(pr.includes(s.id))ev.push([d,'✅','حضر الحصة']);else if(a===s.academy&&(!s.join||d.slice(0,7)>=s.join.slice(0,7)))ev.push([d,'❌','غاب عن الحصة'])}
  for(const k in DB.evals){const e=DB.evals[k][s.id];if(e)ev.push([k.split('|')[0],'⭐',`واجب ${e.hw??'—'}/${HW_MAX} • حصة ${e.cls??'—'}/${CLS_MAX} • كلي ${evTotal(e)}%`])}
  ev.sort((a,b)=>a[0].localeCompare(b[0]));const p=ph(s);
  o.innerHTML=`<div class="rpt card"><div class="verdict">${p?`<img class="ap" src="${p}">`:''}<div class="vt"><b style="font-size:22px">${esc(s.name)}</b> <span dir="ltr">(${esc(fb(s))})</span><br>${esc(acName(s.academy))} / ${lvName(s.level)} • ${billOf(s)==='session'?'بالحصة':'بالشهر'} • ${s.acct==='private'?'برايفت':'تبع الأكاديمية'}<br>📞 <span dir="ltr">${esc(s.phone||'—')}</span> • 🎂 ${esc(s.birth||'—')} (${ageOf(s.birth)||'—'} سنة) • انضم: ${esc(s.join||'—')}</div></div>
  <div class="kpis" style="margin-top:16px"><div class="kpi"><div class="v">${st.rate}%</div><div class="l">نسبة الحضور</div></div><div class="kpi"><div class="v">${st.present}</div><div class="l">حصص حضرها</div></div><div class="kpi"><div class="v">${st.aTot??'—'}${st.aTot!=null?'%':''}</div><div class="l">متوسط التقييم</div></div><div class="kpi"><div class="v">${money(paid)}</div><div class="l">إجمالي المدفوع</div></div><div class="kpi"><div class="v">${money(books)}</div><div class="l">مشتريات كتب</div></div></div>
  <h2 style="font-size:17px">🕒 السجل الكامل من أول يوم</h2><div class="tbl-wrap"><table><thead><tr><th>التاريخ</th><th></th><th>الحدث</th></tr></thead><tbody>${ev.map(e=>`<tr><td>${esc(e[0].replace(/^0(?=\d{4}-)/,''))}</td><td>${e[1]}</td><td style="text-align:right">${esc(e[2])}</td></tr>`).join('')}</tbody></table></div></div>`}
window.flPrint=()=>{if(!S('flStu'))return toast('اختار الطالب','err');$('printArea').innerHTML=$('flOut').innerHTML;window.print()};
window.flWA=()=>{const s=S('flStu');if(!s)return toast('اختار الطالب','err');const st=calcStats(s,'all','');
  wa(s.id,`أهلاً، ملخص أداء ${s.name} في UC Math For Elites:\nالحضور: ${st.rate}%\nمتوسط التقييم: ${st.aTot??'—'}${st.aTot!=null?'%':''}\n${verdictOf(st.rate,st.aTot,st.aAtt).note}`)};

/* ===== الشهادة ===== */
const certHTML=nm=>{const g=i=>esc($(i).value);return `<img class="wm" src="${LG()}" onerror="this.style.display='none'"><div class="fr"></div><div class="fr2"></div>
  <div class="tg"></div><div class="tv"></div><div class="bg2"></div><div class="bv"></div>
  <img class="lg1" src="${LG()}" onerror="this.style.display='none'">
  <div class="c"><div style="display:flex;flex-direction:column;align-items:center"><div class="br">UC MATH FOR ELITES</div><h1>${g('ctTitle')}</h1></div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:6px"><div class="dv">✦</div><div class="pp">THIS CERTIFICATE IS PROUDLY PRESENTED TO</div><div class="n">${esc(nm)||'Student Name'}</div></div>
  <div class="t">${g('ctText')}</div>
  <div class="sg"><div class="b1">Date<b>${new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}</b></div><img class="l2" src="logo2.png" onerror="this.style.visibility='hidden'"><div class="b1">Instructor<b>Hussen El-Wakeel</b></div></div></div>`};
function renderCert(){$('cert').innerHTML=certHTML($('ctName').value)}
const cbSel=new Set();
const updCb=()=>$('cbN').textContent=[...cbSel].filter(id=>stuById(id)).length;
function renderCb(){const a=$('cbAc').value,l=DB.students.filter(s=>!a||s.academy===a).sort(byName);
  $('cbList').innerHTML=l.map(s=>`<label class="bk"><input type="checkbox" ${cbSel.has(s.id)?'checked':''} onchange="cbT('${s.id}',this.checked)"> ${esc(s.name)}</label>`).join('')||'<div class="empty">مفيش طلاب</div>';updCb()}
window.cbT=(id,c)=>{c?cbSel.add(id):cbSel.delete(id);updCb()};
window.cbAll=on=>{const a=$('cbAc').value;DB.students.filter(s=>!a||s.academy===a).forEach(s=>on?cbSel.add(s.id):cbSel.delete(s.id));renderCb()};
window.cbPDF=async()=>{const list=[...cbSel].map(stuById).filter(Boolean).sort(byName);if(!list.length)return toast('اختار طلاب الأول','err');
  const {jsPDF}=window.jspdf,p=new jsPDF({unit:'mm',format:'a4',orientation:'l'}),st=document.createElement('div');
  st.style.cssText='position:fixed;left:-9999px;top:0';document.body.appendChild(st);
  try{for(let i=0;i<list.length;i++){toast('جاري تجهيز '+(i+1)+' / '+list.length);const d=document.createElement('div');d.className='cert';d.innerHTML=certHTML(fb(list[i]));st.appendChild(d);
    const c=await snap(d,3);d.remove();if(i)p.addPage();p.addImage(c.toDataURL('image/jpeg',.9),'JPEG',0,0,297,210)}
    p.save('Certificates.pdf');toast('تم تصدير '+list.length+' شهادة ✔')}finally{st.remove()}};
$('ctStu').onchange=()=>{const s=S('ctStu');if(s)$('ctName').value=fb(s);renderCert()};
['ctName','ctTitle','ctText'].forEach(i=>$(i).oninput=renderCert);
window.ctPDF=async()=>{const {jsPDF}=window.jspdf,p=new jsPDF({unit:'mm',format:'a4',orientation:'l'});
  p.addImage((await snap($('cert'),3)).toDataURL('image/jpeg',.95),'JPEG',0,0,297,210);p.save('Certificate-'+($('ctName').value||'student')+'.pdf')};

/* ===== التحليل: صورة + واتساب فوق الملخص ===== */
const _ra=renderAnalysis;
renderAnalysis=function(){_ra();const v=document.querySelector('#anOut .verdict'),id=$('anStudent').value;if(!v||!id)return;const s=stuById(id),p=ph(s);
  v.innerHTML=(p?`<img class="ap" src="${p}">`:'')+`<div class="vt">${v.innerHTML}<div style="margin-top:8px"><button class="btn btn-sm" style="background:#25d366;color:#fff" onclick="wa('${id}',document.querySelector('#anOut .verdict .vt').innerText.slice(0,600))">💬 إرسال التحليل واتساب</button></div></div>`};

/* ===== ربط التحديث ===== */
const _ra2=refreshAll;refreshAll=function(){_ra2();fillSel();renderId();renderFile();renderCert()};
const _st=showTab;showTab=function(t){_st(t);if(t==='id')renderId();if(t==='file')renderFile();if(t==='cert')renderCert()};
$('flStu').onchange=renderFile;
['idStu','flStu','ctStu'].forEach(i=>$(i+'Ac').onchange=()=>{fillSel();$(i).dispatchEvent(new Event('change'))});
$('bkAc').onchange=renderBk;$('cbAc').onchange=renderCb;
fillSel();renderCert();
})();
