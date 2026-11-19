import { api } from './booking-api.js';
export async function showLocalTestMode() {
  try {
    const {testMode}=await api('status');
    if(!testMode)return false;
    const banner=document.createElement('aside');
    banner.className='booking-notice';
    banner.setAttribute('role','note');
    banner.textContent='LOKAL TESTMODUS · Bruk TEST-001, TEST-002, TEST-003 osv. som ulike billetter. TEST-INVALID avvises. Det er 2 testrom av hver type. Alt lagres separat på denne maskinen.';
    document.querySelector('.booking-shell').prepend(banner);
    return true;
  } catch {return false;}
}
