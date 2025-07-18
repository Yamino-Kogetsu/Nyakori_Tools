// --- Start of User's MD5 Implementation (unchanged) ---
var md5={};(function(d){var a=function(a,b){var c,d,e,f;e=a&2147483648;f=b&2147483648;c=a&1073741824;d=b&1073741824;a=(a&1073741823)+(b&1073741823);return c&d?a^2147483648^e^f:c|d?a&1073741824?a^3221225472^e^f:a^1073741824^e^f:a^e^f},c=function(b,c,d,e,k,l,t){b=a(b,a(a(c&d|~c&e,k),t));return a(b<<l|b>>>32-l,c)},b=function(b,c,d,e,k,l,t){b=a(b,a(a(c&e|d&~e,k),t));return a(b<<l|b>>>32-l,c)},e=function(b,c,d,e,k,l,t){b=a(b,a(a(c^d^e,k),t));return a(b<<l|b>>>32-l,c)},k=function(b,c,d,e,k,l,t){b=a(b,a(a(d^(c|~e),k),t));return a(b<<l|b>>>32-l,c)},l=function(a){var b="",c,d;for(d=0;3>=d;d++)c=a>>>8*d&255,c="0"+c.toString(16),b+=c.substr(c.length-2,2);return b};d.compute=function(d){var f,h,g,m,q,t,r,u,v;d=d.replace(/\r?\n/g,"\n");f="";for(h=0;h<d.length;h++)g=d.charCodeAt(h),128>g?f+=String.fromCharCode(g):(127<g&&2048>g?f+=String.fromCharCode(g>>6|192):(f+=String.fromCharCode(g>>12|224),f+=String.fromCharCode(g>>6&63|128)),f+=String.fromCharCode(g&63|128));h=f.length;d=h+8;m=16*((d-d%64)/64+1);d=Array(m-1);for(t=0;t<h;)g=(t-t%4)/4,q=t%4*8,d[g]|=f.charCodeAt(t)<<q,t++;g=(t-t%4)/4;d[g]|=128<<t%4*8;d[m-2]=h<<3;d[m-1]=h>>>29;t=1732584193;r=4023233417;u=2562383102;v=271733878;for(f=0;f<d.length;f+=16)h=t,g=r,m=u,q=v,t=c(t,r,u,v,d[f+0],7,3614090360),v=c(v,t,r,u,d[f+1],12,3905402710),u=c(u,v,t,r,d[f+2],17,606105819),r=c(r,u,v,t,d[f+3],22,3250441966),t=c(t,r,u,v,d[f+4],7,4118548399),v=c(v,t,r,u,d[f+5],12,1200080426),u=c(u,v,t,r,d[f+6],17,2821735955),r=c(r,u,v,t,d[f+7],22,4249261313),t=c(t,r,u,v,d[f+8],7,1770035416),v=c(v,t,r,u,d[f+9],12,2336552879),u=c(u,v,t,r,d[f+10],17,4294925233),r=c(r,u,v,t,d[f+11],22,2304563134),t=c(t,r,u,v,d[f+12],7,1804603682),v=c(v,t,r,u,d[f+13],12,4254626195),u=c(u,v,t,r,d[f+14],17,2792965006),r=c(r,u,v,t,d[f+15],22,1236535329),t=b(t,r,u,v,d[f+1],5,4129170786),v=b(v,t,r,u,d[f+6],9,3225465664),u=b(u,v,t,r,d[f+11],14,643717713),r=b(r,u,v,t,d[f+0],20,3921069994),t=b(t,r,u,v,d[f+5],5,3593408605),v=b(v,t,r,u,d[f+10],9,38016083),u=b(u,v,t,r,d[f+15],14,3634488961),r=b(r,u,v,t,d[f+4],20,3889429448),t=b(t,r,u,v,d[f+9],5,568446438),v=b(v,t,r,u,d[f+14],9,3275163606),u=b(u,v,t,r,d[f+3],14,4107603335),r=b(r,u,v,t,d[f+8],20,1163531501),t=b(t,r,u,v,d[f+13],5,2850285829),v=b(v,t,r,u,d[f+2],9,4243563512),u=b(u,v,t,r,d[f+7],14,1735328473),r=b(r,u,v,t,d[f+12],20,2368359562),t=e(t,r,u,v,d[f+5],4,4294588738),v=e(v,t,r,u,d[f+8],11,2272392833),u=e(u,v,t,r,d[f+11],16,1839030562),r=e(r,u,v,t,d[f+14],23,4259657740),t=e(t,r,u,v,d[f+1],4,2763975236),v=e(v,t,r,u,d[f+4],11,1272893353),u=e(u,v,t,r,d[f+7],16,4139469664),r=e(r,u,v,t,d[f+10],23,3200236656),t=e(t,r,u,v,d[f+13],4,681279174),v=e(v,t,r,u,d[f+0],11,3936430074),u=e(u,v,t,r,d[f+3],16,3572445317),r=e(r,u,v,t,d[f+6],23,76029189),t=e(t,r,u,v,d[f+9],4,3654602809),v=e(v,t,r,u,d[f+12],11,3873151461),u=e(u,v,t,r,d[f+15],16,530742520),r=e(r,u,v,t,d[f+2],23,3299628645),t=k(t,r,u,v,d[f+0],6,4096336452),v=k(v,t,r,u,d[f+7],10,1126891415),u=k(u,v,t,r,d[f+14],15,2878612391),r=k(r,u,v,t,d[f+5],21,4237533241),t=k(t,r,u,v,d[f+12],6,1700485571),v=k(v,t,r,u,d[f+3],10,2399980690),u=k(u,v,t,r,d[f+10],15,4293915773),r=k(r,u,v,t,d[f+1],21,2240044497),t=k(t,r,u,v,d[f+8],6,1873313359),v=k(v,t,r,u,d[f+15],10,4264355552),u=k(u,v,t,r,d[f+6],15,2734768916),r=k(r,u,v,t,d[f+13],21,1309151649),t=k(t,r,u,v,d[f+4],6,4149444226),v=k(v,t,r,u,d[f+11],10,3174756917),u=k(u,v,t,r,d[f+2],15,718787259),r=k(r,u,v,t,d[f+9],21,3951481745),t=a(t,h),r=a(r,g),u=a(u,m),v=a(v,q);return(l(t)+l(r)+l(u)+l(v)).toLowerCase()}})(md5);

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const dropArea = document.getElementById('drop-area');
    const fileInput = document.getElementById('original-files-input');
    const encryptButton = document.getElementById('encrypt-button');
    const logBox = document.getElementById('log-box');
    const downloadContainer = document.getElementById('download-container');

    let originalFiles = [];
    const salt = 'emhr7a5c';

    function log(message) {
        logBox.textContent += message + '\n';
        logBox.scrollTop = logBox.scrollHeight;
    }

    function handleFiles(files) {
        originalFiles = Array.from(files);
        log(`Loaded ${originalFiles.length} original files.`);
    }

    // Drag and Drop
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => dropArea.addEventListener(eventName, e => { e.preventDefault(); e.stopPropagation(); }, false));
    ['dragenter', 'dragover'].forEach(eventName => dropArea.addEventListener(eventName, () => dropArea.classList.add('highlight'), false));
    ['dragleave', 'drop'].forEach(eventName => dropArea.addEventListener(eventName, () => dropArea.classList.remove('highlight'), false));
    dropArea.addEventListener('drop', (e) => handleFiles(e.dataTransfer.files), false);
    fileInput.addEventListener('change', (e) => handleFiles(e.target.files), false);

    encryptButton.addEventListener('click', async () => {
        if (originalFiles.length === 0) {
            log('ERROR: Please upload at least one file to encrypt.');
            return;
        }

        log('\n--- Starting Encryption Process ---');
        downloadContainer.innerHTML = '';
        const zip = new JSZip();
        let processedCount = 0;

        for (const file of originalFiles) {
            log(`\nProcessing: "${file.name}"...`);
            try {
                // Determine the correct string to hash for the FILENAME.
                // Based on your code, data files don't use the 'data/' prefix in the hash.
                const nameForHashing = file.name;
                log(`  > String to hash for filename: "${nameForHashing}"`);
                const hashedFilename = md5.compute(nameForHashing);
                log(`  > Generated hashed filename: ${hashedFilename}`);

                // Generate the ENCRYPTION KEY. This is based on the HASHED filename + salt.
                const keySourceString = hashedFilename + salt;
                const hashForKey = md5.compute(keySourceString);
                log(`  > String to hash for key: "${keySourceString}"`);
                log(`  > Generated encryption key hash: ${hashForKey}`);
                
                // Convert hex hash string into a 16-byte key
                const key = new Uint8Array(16);
                for (let i = 0; i < 16; i++) {
                    key[i] = parseInt(hashForKey.substr(i * 2, 2), 16);
                }

                // Read the original file data
                const originalBuffer = await file.arrayBuffer();
                const dataToEncrypt = new Uint8Array(originalBuffer);
                log(`  > Read ${originalBuffer.byteLength} bytes.`);

                // Perform XOR encryption
                for (let i = 0; i < dataToEncrypt.length; i++) {
                    dataToEncrypt[i] ^= key[i & 15]; // key length is 16
                }
                log('  > Encryption complete.');
                
                // Add the encrypted file to the zip archive with its hashed name
                zip.file(hashedFilename, dataToEncrypt);
                log(`  > Added "${hashedFilename}" to ZIP archive.`);
                processedCount++;

            } catch (error) {
                log(`  > FAILED to process "${file.name}": ${error.message}`);
            }
        }
        
        if (processedCount > 0) {
            log(`\nGenerating ZIP file with ${processedCount} encrypted assets...`);
            zip.generateAsync({type:"blob"}).then(function(content) {
                const url = URL.createObjectURL(content);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'encrypted_img_folder.zip';
                a.textContent = 'Download Encrypted Files (.zip)';
                downloadContainer.appendChild(a);
                log('ZIP file created. Click the link to download.');
            });
        } else {
            log('\nNo files were processed successfully.');
        }
    });
});