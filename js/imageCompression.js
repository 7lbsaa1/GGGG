export function compressImage(file,max=1920,quality=.8){
return new Promise((resolve,reject)=>{
 if(!file.type.startsWith("image/")) return reject(new Error("نوع الملف غير مسموح."));
 const reader=new FileReader();
 reader.onload=()=>{const img=new Image();img.onload=()=>{const scale=Math.min(1,max/img.width,max/img.height);
 const c=document.createElement("canvas");c.width=Math.max(1,Math.round(img.width*scale));c.height=Math.max(1,Math.round(img.height*scale));
 const ctx=c.getContext("2d");ctx.drawImage(img,0,0,c.width,c.height);resolve(c.toDataURL("image/jpeg",quality));};
 img.onerror=()=>reject(new Error("تعذر قراءة الصورة."));img.src=reader.result};reader.onerror=()=>reject(new Error("تعذر قراءة الملف."));reader.readAsDataURL(file);
});}