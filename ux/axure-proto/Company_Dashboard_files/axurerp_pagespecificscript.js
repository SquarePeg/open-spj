
var PageName = 'Company Dashboard';
var PageId = 'a09efe46033f46bba12a52ec8914ce8c'
var PageUrl = 'Company_Dashboard.html'
document.title = 'Company Dashboard';
var PageNotes = 
{
"pageName":"Company Dashboard",
"showNotesNames":"False",
"Developer":"<p style=\"text-align:left;\"><span style=\"\">As a Company I want to be able to…<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">&nbsp;<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">1. View my list of Candidates (based on Active Jobs)<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">2. Filter my list of Candidates based on my needs<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">3. View my list of Active Jobs<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">4. Edit an Active Job<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">5. Cancel an Active Job<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">6. Pause an Active Job<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">7. Resume a Paused Job<\/span><\/p><p style=\"text-align:left;\"><span style=\"\">8. Add a new Job<\/span><\/p>"}
var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '3');
  value = value.replace(/\[\[GenMonth\]\]/g, '5');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'May');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Thursday');
  value = value.replace(/\[\[GenYear\]\]/g, '2012');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{
windowEvent = e;


if (true) {

	self.location.href="Add_a_Job.html" + GetQuerystring();

}

}
gv_vAlignTable['u50'] = 'top';
var u51 = document.getElementById('u51');

var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", Clicku52);
else u52.addEventListener("click", Clicku52, true);
function Clicku52(e)
{
windowEvent = e;


if (true) {

	self.location.href="View_Candidate_List.html" + GetQuerystring();

}

}

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u54 = document.getElementById('u54');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u56 = document.getElementById('u56');

u56.style.cursor = 'pointer';
if (bIE) u56.attachEvent("onclick", Clicku56);
else u56.addEventListener("click", Clicku56, true);
function Clicku56(e)
{
windowEvent = e;


if (true) {

	self.location.href="Edit_Job_Posting.html" + GetQuerystring();

}

}

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u58 = document.getElementById('u58');

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u25 = document.getElementById('u25');

var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');

var u28 = document.getElementById('u28');

var u29 = document.getElementById('u29');

var u60 = document.getElementById('u60');

u60.style.cursor = 'pointer';
if (bIE) u60.attachEvent("onclick", Clicku60);
else u60.addEventListener("click", Clicku60, true);
function Clicku60(e)
{
windowEvent = e;


if (true) {

	self.location.href="Payment_Details_1.html" + GetQuerystring();

}

}

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u62 = document.getElementById('u62');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u32 = document.getElementById('u32');

var u33 = document.getElementById('u33');

var u34 = document.getElementById('u34');

var u35 = document.getElementById('u35');

var u36 = document.getElementById('u36');

u36.style.cursor = 'pointer';
if (bIE) u36.attachEvent("onclick", Clicku36);
else u36.addEventListener("click", Clicku36, true);
function Clicku36(e)
{
windowEvent = e;


if (true) {

	self.location.href="Job_Postings.html" + GetQuerystring();

}

}

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u38 = document.getElementById('u38');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{
windowEvent = e;


if (true) {

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{
windowEvent = e;


if (true) {

	self.location.href="Job_Postings.html" + GetQuerystring();

}

}

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{
windowEvent = e;


if (true) {

	self.location.href="Add_a_Job.html" + GetQuerystring();

}

}

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u42 = document.getElementById('u42');

var u40 = document.getElementById('u40');

u40.style.cursor = 'pointer';
if (bIE) u40.attachEvent("onclick", Clicku40);
else u40.addEventListener("click", Clicku40, true);
function Clicku40(e)
{
windowEvent = e;


if (true) {

	self.location.href="Add_a_Job.html" + GetQuerystring();

}

}

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u44 = document.getElementById('u44');

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", Clicku44);
else u44.addEventListener("click", Clicku44, true);
function Clicku44(e)
{
windowEvent = e;


if (true) {

	self.location.href="Job_Postings.html" + GetQuerystring();

}

}

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u46 = document.getElementById('u46');

u46.style.cursor = 'pointer';
if (bIE) u46.attachEvent("onclick", Clicku46);
else u46.addEventListener("click", Clicku46, true);
function Clicku46(e)
{
windowEvent = e;


if (true) {

	self.location.href="Add_a_Job.html" + GetQuerystring();

}

}

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u49 = document.getElementById('u49');

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", Clicku49);
else u49.addEventListener("click", Clicku49, true);
function Clicku49(e)
{
windowEvent = e;


if (true) {

	self.location.href="Job_Postings.html" + GetQuerystring();

}

}
gv_vAlignTable['u49'] = 'top';
var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{
windowEvent = e;


if (true) {

	self.location.href="Home___Login.html" + GetQuerystring();

}

}
gv_vAlignTable['u10'] = 'top';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{
windowEvent = e;


if (true) {

	self.location.href="Profile_1.html" + GetQuerystring();

}

}

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'top';
if (window.OnLoad) OnLoad();
