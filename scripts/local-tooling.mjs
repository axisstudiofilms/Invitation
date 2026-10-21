import os from 'node:os';
// Restricted Windows tokens can omit passwd data; CLI tooling only uses this for scratch names.
try { os.userInfo(); } catch { const original=os.userInfo;os.userInfo=()=>({username:'axis-local',uid:-1,gid:-1,shell:null,homedir:process.cwd()}); }
