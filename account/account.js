// Dropdown account menu
const accountBtn = document.getElementById("accountBtn");
const accountMenu = document.getElementById("accountMenu");
accountBtn && accountBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  accountMenu.style.display = accountMenu.style.display === "block" ? "none" : "block";
});

// Close dropdown clicking outside
document.addEventListener("click", () => {
  if(accountMenu) accountMenu.style.display = "none";
});

// Tab switching (sidebar + dropdown items + quick actions)
const sideLinks = document.querySelectorAll("#sideMenu a");
const dropdownLinks = document.querySelectorAll("#accountMenu a[data-tab]");
const quickActions = document.querySelectorAll(".action");

function showTab(id){
  // hide all
  document.querySelectorAll(".tab-content").forEach(t => t.style.display = "none");
  // remove active states
  sideLinks.forEach(a => a.classList.remove("active"));
  // show requested
  const tab = document.getElementById(id);
  if(tab) tab.style.display = "block";
  // set active on sidebar if matches
  document.querySelectorAll(`#sideMenu a[data-tab="${id}"]`).forEach(a => a.classList.add("active"));
}

// bind sidebar links
sideLinks.forEach(a => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const tab = a.dataset.tab;
    showTab(tab);
    // scroll into view
    document.querySelector('.content').scrollIntoView({behavior:'smooth'});
  });
});

// bind dropdown items
dropdownLinks.forEach(a => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const tab = a.dataset.tab;
    showTab(tab);
  });
});

// quick action buttons
quickActions.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;
    if(target) showTab(target);
  });
});

// account form submit (dummy)
const accountForm = document.getElementById("accountForm");
if(accountForm){
  accountForm.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thông tin đã được lưu (demo).");
  });
}

// logout links
const logoutBtn = document.getElementById("logoutBtn");
const logoutLink = document.getElementById("logoutLink");

function doLogout(){
  // demo: show logout tab
  showTab('logout');
  alert('Bạn đã đăng xuất (demo).');
  window.location.href = "../index.html";
}

logoutBtn && logoutBtn.addEventListener("click", (e)=>{
  e.preventDefault(); doLogout();
});

logoutLink && logoutLink.addEventListener("click", (e)=>{
  e.preventDefault(); doLogout();
});

// default show dashboard
showTab('dashboard');
