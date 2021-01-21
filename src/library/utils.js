export function query(obj) {
   var k, i, tmp, str='';

   for (k in obj) {
      if ((tmp = obj[k]) !== void 0) {
         if (Array.isArray(tmp)) {
            for (i=0; i < tmp.length; i++) {
               str && (str += '&');
               str += encodeURIComponent(k) + '=' + encodeURIComponent(tmp[i]);
            }
         } else {
            str && (str += '&');
            str += encodeURIComponent(k) + '=' + encodeURIComponent(tmp);
         }
      }
   }

   return str;
}