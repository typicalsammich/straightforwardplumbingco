const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>document.querySelector('.links')?.classList.toggle('open'));

const mobileDock=document.querySelector('.mobile-dock');
if(mobileDock){
  const syncDock=()=>mobileDock.classList.toggle('is-visible',window.scrollY>260);
  syncDock();
  window.addEventListener('scroll',syncDock,{passive:true});
}

const modal=document.querySelector('#bookingModal');
const openBooking=()=>{if(!modal)return;modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';setTimeout(()=>modal.querySelector('input')?.focus(),50)};
const closeBooking=()=>{if(!modal)return;modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''};
document.querySelectorAll('.book-trigger').forEach(el=>el.addEventListener('click',openBooking));
document.querySelectorAll('[data-close-booking]').forEach(el=>el.addEventListener('click',closeBooking));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBooking()});

document.querySelector('#bookingForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(e.currentTarget);
  const lines=[
    'Hi Straight Forward Plumbing, I would like to request an appointment.',
    '',
    `Name: ${d.get('name')}`,
    `Phone: ${d.get('phone')}`,
    `Service: ${d.get('service')}`,
    `Preferred day: ${d.get('date')||'First available'}`,
    `Location: ${d.get('location')}`,
    `Issue: ${d.get('details')}`
  ];
  window.location.href='sms:+19162012080?&body='+encodeURIComponent(lines.join('\n'));
});
