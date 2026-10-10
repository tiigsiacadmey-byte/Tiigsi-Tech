
const TIIGSI_KEY = "tiigsiRegistrations";
const SESSION_KEY = "tiigsiStudentSession";

function getStudents(){
  try { return JSON.parse(localStorage.getItem(TIIGSI_KEY) || "[]"); }
  catch(e){ return []; }
}
function saveStudents(list){ localStorage.setItem(TIIGSI_KEY, JSON.stringify(list)); }
function findStudent(id, phone){
  return getStudents().find(s => s.studentId === id && s.phone === phone);
}
function esc(v){
  return String(v ?? "").replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[m]));
}
function makeStudentId(){
  const year = new Date().getFullYear();
  const n = Math.floor(100000 + Math.random()*900000);
  return `TGS-${year}-${n}`;
}
function openPortal(){
  location.href = "../02-Student-Portal/index.html";
}
function openRegistration(){
  location.href = "../01-Registration/index.html";
}
