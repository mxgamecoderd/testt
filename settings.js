/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUpIc3MvaTUxRGxqWTducjBYZHUxMVdBdnRoU0lRT2ZBL0pZcm1oc0FWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmF6b1RnZDRCSEhhS04rRGd6NWRKSTBpMi9KcCtGU2pxd2N5YWhLZG0zST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQlY3dUQ0RFlQdjNGeTMvRlZiS0dsZXdIcVNoemd1OVNKTVo2Vm0vT1dZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTkdaNXRUbzh6OGVsZjFJais3Y3VmM0o5eGFydlc2UVdXeXlKNUNoOUdFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1MMUNsTmV4OEtpb2xObXZCMk8rRGc3ZlM0VUZSd0VmOGliVlp1bXZOSEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFWSTJRTVZEWWY5Sk5NNUpOektOc01nSXIxUlpYOEtlSFQzM1ZDQjV4V289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU45RDBLdHA3UkY0QWdNTjRlV3M3TUNRRDBqbkJOMWdtelVTcFhjQ0JIOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUEtKQTQwVXFYWU5jd1NXbDNxTi82MnNrVXl3TkNWNGZnYW82d2h6d2pIND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1oUm5iSjdmWjdGTGRROXY5aUllaExBZUdhOUl6SlZmaEUzakU5cE9zUVE3bEJhQ1MzRStYREEwWWdMbDNXUjliL0JvcTZlcFhqNVZpdzdxbDdwbkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6Ik1sbnFUY1ptSmk1Z3I4RXZvbDVsWXhrcHVqR29IeTNVNmYrOTJEVzNKQ2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTAyMTUwNjAzNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5QTM0QUZBMkJFQjM1OTgwRDIwQUFCQTYyMkI2ODVDNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQxMzk3ODcyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpQ3l2di1rUVRiLTJ6VzNaaUxhRUJRIiwicGhvbmVJZCI6IjVmNzRhNWMzLWI3ZjgtNDE3MS04ZmNlLWU3YWFhMTZjNjhiZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQ2R6bmQ5MWR2dDgrclBLbWE3Zk5tc1kybkE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXQ2b0dDTENYTGp5S1gvTGxjbStmTU1yeE44PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRMUU0yQ1hOIiwibWUiOnsiaWQiOiIyMzQ5MDIxNTA2MDM2Ojc1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik1YIEfOlE3OnkPDmETOnlIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01QQy80WUNFTisrcnI0R0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im5pNEFWMkJDaFlJbXV4NXY3TXdyR1ROT3dsczkvMXl5ZTFZSXZQVmdZMEk9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJiMC9tWEhpajNwTkVKVy9rY0UvYndSUzNuN3p2YVptd1l0akhaL3dEUkFBSzJYSkUwUHJ0Zmg1ZTNyN2hmNkFOVG15WlRjNTRXOTFsSEZRMFIwR0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ6YmhWdHd1dkxmN3BUVllYNjBRSkVEM2oydHRhWS9tMiswaVJFa0dRK3c5dVRJQ2d4dSt2RllWVjUySlNDNUkyUVRNbDA1ODNsUjA5Q3pDdDRKUXhCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMjE1MDYwMzY6NzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWjR1QUZkZ1FvV0NKcnNlYit6TUt4a3pUc0piUGY5Y3NudFdDTHoxWUdOQyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MTM5Nzg2OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCaEMifQ==';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "234";
const author = process.env.STICKER_AUTHOR || 'AthenaTech';
const packname = process.env.PACKNAME || 'NOVA MD 🤖';
const dev = process.env.DEV || '2349137619864';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'NOVA MD';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const cookies = JSON.parse(process.env.COOKIE || '[{"domain":".youtube.com","expirationDate":1764463277.409877,"hostOnly":false,"httpOnly":false,"name":"__Secure-1PAPISID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"UoBcKfo0_FSAxQ5D/A5ZClpB2xVLQJQGUx","id":1},{"domain":".youtube.com","expirationDate":1764463277.412158,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"g.a000pghxevPjwTr5Un_D-PS1UxiaEdymANhc_5NWNQgaApthzLU0MOFGGamQ5yqi2vrAqKldbgACgYKASoSARUSFQHGX2MiB0PtUQYJy2_oQLkmMPXgfRoVAUF8yKpuqWya_M2xRHe_6e9o_6TK0076","id":2},{"domain":".youtube.com","expirationDate":1762941611.655441,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSIDCC","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"AKEyXzWtrmvqerXnEweUSkGiFKAn57TBnvoAEBDi6B33Sg4gpMOANgVFwDBU_JtKQXLpisy_","id":3}]');
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  cookies,
  autobio,
  mode,
autolike,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
