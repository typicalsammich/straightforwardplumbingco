const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>document.querySelector('.links')?.classList.toggle('open'));
const mobileCall=document.querySelector('.mobile-call');
if(mobileCall){
  const syncCall=()=>mobileCall.classList.toggle('is-visible',window.scrollY>220);
  syncCall();
  window.addEventListener('scroll',syncCall,{passive:true});
}
