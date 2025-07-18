// --- Start of User's MD5 Implementation (unchanged) ---
var md5={};(function(d){var a=function(a,b){var c,d,e,f;e=a&2147483648;f=b&2147483648;c=a&1073741824;d=b&1073741824;a=(a&1073741823)+(b&1073741823);return c&d?a^2147483648^e^f:c|d?a&1073741824?a^3221225472^e^f:a^1073741824^e^f:a^e^f},c=function(b,c,d,e,k,l,t){b=a(b,a(a(c&d|~c&e,k),t));return a(b<<l|b>>>32-l,c)},b=function(b,c,d,e,k,l,t){b=a(b,a(a(c&e|d&~e,k),t));return a(b<<l|b>>>32-l,c)},e=function(b,c,d,e,k,l,t){b=a(b,a(a(c^d^e,k),t));return a(b<<l|b>>>32-l,c)},k=function(b,c,d,e,k,l,t){b=a(b,a(a(d^(c|~e),k),t));return a(b<<l|b>>>32-l,c)},l=function(a){var b="",c,d;for(d=0;3>=d;d++)c=a>>>8*d&255,c="0"+c.toString(16),b+=c.substr(c.length-2,2);return b};d.compute=function(d){var f,h,g,m,q,t,r,u,v;d=d.replace(/\r?\n/g,"\n");f="";for(h=0;h<d.length;h++)g=d.charCodeAt(h),128>g?f+=String.fromCharCode(g):(127<g&&2048>g?f+=String.fromCharCode(g>>6|192):(f+=String.fromCharCode(g>>12|224),f+=String.fromCharCode(g>>6&63|128)),f+=String.fromCharCode(g&63|128));h=f.length;d=h+8;m=16*((d-d%64)/64+1);d=Array(m-1);for(t=0;t<h;)g=(t-t%4)/4,q=t%4*8,d[g]|=f.charCodeAt(t)<<q,t++;g=(t-t%4)/4;d[g]|=128<<t%4*8;d[m-2]=h<<3;d[m-1]=h>>>29;t=1732584193;r=4023233417;u=2562383102;v=271733878;for(f=0;f<d.length;f+=16)h=t,g=r,m=u,q=v,t=c(t,r,u,v,d[f+0],7,3614090360),v=c(v,t,r,u,d[f+1],12,3905402710),u=c(u,v,t,r,d[f+2],17,606105819),r=c(r,u,v,t,d[f+3],22,3250441966),t=c(t,r,u,v,d[f+4],7,4118548399),v=c(v,t,r,u,d[f+5],12,1200080426),u=c(u,v,t,r,d[f+6],17,2821735955),r=c(r,u,v,t,d[f+7],22,4249261313),t=c(t,r,u,v,d[f+8],7,1770035416),v=c(v,t,r,u,d[f+9],12,2336552879),u=c(u,v,t,r,d[f+10],17,4294925233),r=c(r,u,v,t,d[f+11],22,2304563134),t=c(t,r,u,v,d[f+12],7,1804603682),v=c(v,t,r,u,d[f+13],12,4254626195),u=c(u,v,t,r,d[f+14],17,2792965006),r=c(r,u,v,t,d[f+15],22,1236535329),t=b(t,r,u,v,d[f+1],5,4129170786),v=b(v,t,r,u,d[f+6],9,3225465664),u=b(u,v,t,r,d[f+11],14,643717713),r=b(r,u,v,t,d[f+0],20,3921069994),t=b(t,r,u,v,d[f+5],5,3593408605),v=b(v,t,r,u,d[f+10],9,38016083),u=b(u,v,t,r,d[f+15],14,3634488961),r=b(r,u,v,t,d[f+4],20,3889429448),t=b(t,r,u,v,d[f+9],5,568446438),v=b(v,t,r,u,d[f+14],9,3275163606),u=b(u,v,t,r,d[f+3],14,4107603335),r=b(r,u,v,t,d[f+8],20,1163531501),t=b(t,r,u,v,d[f+13],5,2850285829),v=b(v,t,r,u,d[f+2],9,4243563512),u=b(u,v,t,r,d[f+7],14,1735328473),r=b(r,u,v,t,d[f+12],20,2368359562),t=e(t,r,u,v,d[f+5],4,4294588738),v=e(v,t,r,u,d[f+8],11,2272392833),u=e(u,v,t,r,d[f+11],16,1839030562),r=e(r,u,v,t,d[f+14],23,4259657740),t=e(t,r,u,v,d[f+1],4,2763975236),v=e(v,t,r,u,d[f+4],11,1272893353),u=e(u,v,t,r,d[f+7],16,4139469664),r=e(r,u,v,t,d[f+10],23,3200236656),t=e(t,r,u,v,d[f+13],4,681279174),v=e(v,t,r,u,d[f+0],11,3936430074),u=e(u,v,t,r,d[f+3],16,3572445317),r=e(r,u,v,t,d[f+6],23,76029189),t=e(t,r,u,v,d[f+9],4,3654602809),v=e(v,t,r,u,d[f+12],11,3873151461),u=e(u,v,t,r,d[f+15],16,530742520),r=e(r,u,v,t,d[f+2],23,3299628645),t=k(t,r,u,v,d[f+0],6,4096336452),v=k(v,t,r,u,d[f+7],10,1126891415),u=k(u,v,t,r,d[f+14],15,2878612391),r=k(r,u,v,t,d[f+5],21,4237533241),t=k(t,r,u,v,d[f+12],6,1700485571),v=k(v,t,r,u,d[f+3],10,2399980690),u=k(u,v,t,r,d[f+10],15,4293915773),r=k(r,u,v,t,d[f+1],21,2240044497),t=k(t,r,u,v,d[f+8],6,1873313359),v=k(v,t,r,u,d[f+15],10,4264355552),u=k(u,v,t,r,d[f+6],15,2734768916),r=k(r,u,v,t,d[f+13],21,1309151649),t=k(t,r,u,v,d[f+4],6,4149444226),v=k(v,t,r,u,d[f+11],10,3174756917),u=k(u,v,t,r,d[f+2],15,718787259),r=k(r,u,v,t,d[f+9],21,3951481745),t=a(t,h),r=a(r,g),u=a(u,m),v=a(v,q);return(l(t)+l(r)+l(u)+l(v)).toLowerCase()}})(md5);
// The 'pe' object is no longer needed globally since we replicate its logic directly.

document.addEventListener('DOMContentLoaded', () => {
    // A structured dictionary of known files with their paths (same as before)
    const FILE_STRUCTURE={data:["Localization.xlsx","System.json","Actors.json","Classes.json","Skills.json","Items.json","Weapons.json","Armors.json","Enemies.json","Troops.json","States.json","Animations.json","Tilesets.json","CommonEvents.json","MapInfos.json"],"img/characters/":["toru","liei"],"img/pictures/":["lightbeam-blue","lightbeam-red","the_sun","the_moon","the_memmoon","the_memriver","te_bg","te_bg1","mvt_toru_bg","mvt_kori_bg","mvt_liei_bg","ui_title","ui_splash_screen","ui_splash_screen1","m0","m01","m1","m14","m6","m25","ui_options","ui_options_autosave","ui_options_autosave_n","ui_options_autosave_n1","ui_options_autosave_y","ui_options_autosave_y1","ui_options_autosave1","ui_options_bgm","ui_options_bgm1","ui_options_bgs","ui_options_bgs1","ui_options_me","ui_options_me1","ui_options_se","ui_options_se1","ui_options_status","ui_options_status1","ui_options_save_export","ui_options_save_export1","ui_options_save_import","ui_options_save_import1","ui_message","ui_message_namebox","ui_message_namebox1","ui_message_page","ui_back","ui_back1","ui_item","ui_item_arrow","ui_menu","ui_menu_button","ui_menu_button1","ui_menu_button2","ui_menu_item","ui_menu_item1","ui_menu_load","ui_menu_load1","ui_menu_settings","ui_menu_settings1","ui_playtime","ui_save","ui_save_auto","ui_item_page","ui_item_scrollbar","ui_item_scrolldrag","ui_load","ui_logo","ui_save_item","ui_save_page","ui_save_page1","ui_save_scroll_left","ui_save_scroll_left1","ui_save_scroll_right","ui_save_scroll_right1","ui_title_continue","ui_title_continue1","ui_title_start","ui_title_logo","ui_title_start1","ui_title_cg","ui_title_cg1","ui_title_exit","ui_title_exit1","ui_title_option","ui_title_option1","ui_title_dlc","ui_title_dlc1","ui_save_d0","ui_save_d1","ui_save_d2","ui_save_d3","ui_save_d4","ui_save_d5","ui_save_d6","ui_save_d7","ui_save_d8","ui_save_d9","ui_sight_active_m0","ui_sight_active_m1","ui_sight_m0","ui_sight_m1","ui_sight_active_m14","ui_sight_active_m25","ui_sight_m14","ui_sight_m25","ui_change_sight","ui_change_sight3","ui_options_back2title","ui_options_back2title1","ui_options_exit","ui_options_exit1","ui_destination","ui_locked_cg","ui_cg_cursor","ui_cg_cursor1","ui_worldchange1","ui_worldchange2","ui_worldchange3","ui_menu_blood","capda"],"img/parallaxes/":["the_day","the_night","the_memnight","the_memvillagenight"],"img/overlays/fogs/":["fog"],"img/system/":["Window","Window_Alt","Balloon","Shadow1","Shadow2","ButtonSet","IconSet","GameOver"],"audio/se/":["8374","pisadas","pisadas-hierba","heart2","mtv_jump1","mtv_jump2","mtv_jump_dash"]};
    for(let i=1;i<=107;i++)FILE_STRUCTURE.data.push(`Map${i.toString().padStart(3,"0")}.json`);

    const HASHING_PATTERNS=[{id:"path/name.ext",desc:"path + name (e.g., data/System.json)",generator:file=>file.path+file.nameWithExt},{id:"name.ext",desc:"name only (e.g., System.json)",generator:file=>file.nameWithExt},{id:"name",desc:"name without ext (e.g., System)",generator:file=>file.nameOnly}];

    // --- Tool DOM and Logic ---
    const dropArea=document.getElementById("drop-area"),fileInput=document.getElementById("encrypted-files-input"),hashedFilenameInput=document.getElementById("hashed-filename-input"),decryptButton=document.getElementById("decrypt-button"),scanAllButton=document.getElementById("scan-all-button"),logBox=document.getElementById("log-box"),downloadContainer=document.getElementById("download-container"),patternsList=document.getElementById("patterns-list");
    let encryptedFiles=new Map,hashedToOriginalMap=new Map;const salt="emhr7a5c";

    function log(message){logBox.textContent+=message+"\n";logBox.scrollTop=logBox.scrollHeight}
    patternsList.innerHTML = '';
    HASHING_PATTERNS.forEach(p=>{const li=document.createElement("li");li.textContent=p.desc;patternsList.appendChild(li)});

    function generateHashMap(){log("Generating hash map from internal dictionary...");hashedToOriginalMap.clear();for(const path in FILE_STRUCTURE)for(const nameWithExt of FILE_STRUCTURE[path]){const parts=nameWithExt.split("."),extension=1<parts.length?parts.pop():"",nameOnly=parts.join(".");let finalNameWithExt=nameWithExt;path.startsWith("img/")&&!extension&&(finalNameWithExt+=".png");path.startsWith("audio/")&&!extension&&(finalNameWithExt+=".ogg");const fileInfo={path:path.replace("data/", ""),nameWithExt:finalNameWithExt,nameOnly};for(const pattern of HASHING_PATTERNS){const stringToTest=pattern.generator(fileInfo);if(stringToTest){let hash_salted=md5.compute(stringToTest+salt);hashedToOriginalMap.set(hash_salted,{original:fileInfo,pattern:pattern.desc+" + salt"});let hash_unsalted=md5.compute(stringToTest);hashedToOriginalMap.set(hash_unsalted,{original:fileInfo,pattern:pattern.desc+" (no salt)"})}}}log(`Hash map generated. Total patterns tested: ${hashedToOriginalMap.size}`)}
    generateHashMap();

    function handleFiles(files){encryptedFiles.clear();for(const file of files)encryptedFiles.set(file.name,file);log(`Loaded ${encryptedFiles.size} encrypted files into memory.`)}
    ['dragenter','dragover','dragleave','drop'].forEach(e=>dropArea.addEventListener(e,ev=>{ev.preventDefault();ev.stopPropagation()},false));
    ['dragenter','dragover'].forEach(e=>dropArea.addEventListener(e,()=>dropArea.classList.add('highlight'),false));
    ['dragleave','drop'].forEach(e=>dropArea.addEventListener(e,()=>dropArea.classList.remove('highlight'),false));
    dropArea.addEventListener('drop',e=>handleFiles(e.dataTransfer.files),false);
    fileInput.addEventListener('change',e=>handleFiles(e.target.files),false);

    async function decryptAndDownload(hashedFilename, fileObject, originalNameInfo) {
        log(`  > Generating decryption key from HASHED filename...`);
        
        // This is the CORRECT key generation logic, based directly on the pe.gxxx function.
        const keySourceString = hashedFilename + salt;
        const hashForKey = md5.compute(keySourceString);
        log(`    - Key source: "${keySourceString}"`);
        log(`    - Hash for key: ${hashForKey}`);
        
        const key = new Uint8Array(16);
        for (let i = 0; i < 16; i++) {
            key[i] = parseInt(hashForKey.substr(i * 2, 2), 16);
        }
        
        try {
            const encryptedBuffer = await fileObject.arrayBuffer();
            const bufferToDecrypt = new Uint8Array(encryptedBuffer); // Work with Uint8Array
            log(`  > Read ${encryptedBuffer.byteLength} bytes.`);
            
            // Decrypt the data IN-PLACE using the correct key (XOR cipher)
            for (let i = 0; i < bufferToDecrypt.length; i++) {
                bufferToDecrypt[i] ^= key[i & 15]; // key length is 16 (0-15)
            }
            log('  > Decryption successful.');
            
            const originalFilename = originalNameInfo ? originalNameInfo.original.nameWithExt : `${hashedFilename}.decrypted`;
            const decryptedBlob = new Blob([bufferToDecrypt]);
            const url = URL.createObjectURL(decryptedBlob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = originalFilename;
            a.textContent = `Download ${originalFilename}`;
            
            downloadContainer.appendChild(a);
            log(`    - Download link created for "${originalFilename}".`);
            return true;
        } catch (error) {
            log(`    - An error occurred decrypting: ${error.message}`);
            return false;
        }
    }

    decryptButton.addEventListener('click', async () => {
        const hashedFilename = hashedFilenameInput.value.trim().toLowerCase();
        if(!hashedFilename){log("ERROR: Please enter an encrypted filename.");return}
        if(!encryptedFiles.has(hashedFilename)){log(`ERROR: The file "${hashedFilename}" was not found in the uploaded files.`);return}

        downloadContainer.innerHTML = '';
        log(`\nStarting single-file decryption for "${hashedFilename}"...`);

        const match = hashedToOriginalMap.get(hashedFilename);
        if (match) {
            log(`  > MATCH FOUND! Hashed: ${hashedFilename} -> Original: ${match.original.nameWithExt}`);
            log(`    (Found using pattern: "${match.pattern}")`);
        } else {
            log(`  > WARNING: No matching original filename found in dictionary. The decrypted file will be named generically.`);
        }
        await decryptAndDownload(hashedFilename, encryptedFiles.get(hashedFilename), match);
    });

    scanAllButton.addEventListener('click', async () => {
        if(0===encryptedFiles.size){log("ERROR: Please upload files first.");return}
        downloadContainer.innerHTML='';log('\n--- Starting Full Scan of All Uploaded Files ---');
        let foundCount=0,processedCount=0;const totalFiles=encryptedFiles.size;
        for(const[hashedFilename,fileObject]of encryptedFiles.entries()){processedCount++;if(hashedToOriginalMap.has(hashedFilename)){log(`[${processedCount}/${totalFiles}] Checking ${hashedFilename}...`);const success=await decryptAndDownload(hashedFilename,fileObject,hashedToOriginalMap.get(hashedFilename));success&&foundCount++}}
        if(0<foundCount)log(`\nScan complete. Successfully identified and decrypted ${foundCount} files.`);else log('\nScan complete. No matching files found in dictionary.');
    });
});