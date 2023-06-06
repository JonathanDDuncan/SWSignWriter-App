"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6364],{6364:(q,x,b)=>{b.r(x),b.d(x,{FilesystemWeb:()=>F});var a=b(5861),R=b(7423);function v(h){const p=h.split("/").filter(t=>"."!==t),r=[];return p.forEach(t=>{".."===t&&r.length>0&&".."!==r[r.length-1]?r.pop():r.push(t)}),r.join("/")}let F=(()=>{class h extends R.Uw{constructor(){super(...arguments),this.DB_VERSION=1,this.DB_NAME="Disc",this._writeCmds=["add","put","delete"]}initDb(){var r=this;return(0,a.Z)(function*(){if(void 0!==r._db)return r._db;if(!("indexedDB"in window))throw r.unavailable("This browser doesn't support IndexedDB");return new Promise((t,n)=>{const e=indexedDB.open(r.DB_NAME,r.DB_VERSION);e.onupgradeneeded=h.doUpgrade,e.onsuccess=()=>{r._db=e.result,t(e.result)},e.onerror=()=>n(e.error),e.onblocked=()=>{console.warn("db blocked")}})})()}static doUpgrade(r){const n=r.target.result;n.objectStoreNames.contains("FileStorage")&&n.deleteObjectStore("FileStorage"),n.createObjectStore("FileStorage",{keyPath:"path"}).createIndex("by_folder","folder")}dbRequest(r,t){var n=this;return(0,a.Z)(function*(){const e=-1!==n._writeCmds.indexOf(r)?"readwrite":"readonly";return n.initDb().then(i=>new Promise((o,s)=>{const c=i.transaction(["FileStorage"],e).objectStore("FileStorage")[r](...t);c.onsuccess=()=>o(c.result),c.onerror=()=>s(c.error)}))})()}dbIndexRequest(r,t,n){var e=this;return(0,a.Z)(function*(){const i=-1!==e._writeCmds.indexOf(t)?"readwrite":"readonly";return e.initDb().then(o=>new Promise((s,d)=>{const l=o.transaction(["FileStorage"],i).objectStore("FileStorage").index(r)[t](...n);l.onsuccess=()=>s(l.result),l.onerror=()=>d(l.error)}))})()}getPath(r,t){const n=void 0!==t?t.replace(/^[/]+|[/]+$/g,""):"";let e="";return void 0!==r&&(e+="/"+r),""!==t&&(e+="/"+n),e}clear(){var r=this;return(0,a.Z)(function*(){(yield r.initDb()).transaction(["FileStorage"],"readwrite").objectStore("FileStorage").clear()})()}readFile(r){var t=this;return(0,a.Z)(function*(){const n=t.getPath(r.directory,r.path),e=yield t.dbRequest("get",[n]);if(void 0===e)throw Error("File does not exist.");return{data:e.content?e.content:""}})()}writeFile(r){var t=this;return(0,a.Z)(function*(){const n=t.getPath(r.directory,r.path),e=r.data,i=r.recursive,o=yield t.dbRequest("get",[n]);if(o&&"directory"===o.type)throw Error("The supplied path is a directory.");const s=r.encoding,d=n.substr(0,n.lastIndexOf("/"));if(void 0===(yield t.dbRequest("get",[d]))){const l=d.indexOf("/",1);if(-1!==l){const m=d.substr(l);yield t.mkdir({path:m,directory:r.directory,recursive:i})}}const c=Date.now(),u={path:n,folder:d,type:"file",size:e.length,ctime:c,mtime:c,content:!s&&e.indexOf(",")>=0?e.split(",")[1]:e};return yield t.dbRequest("put",[u]),{uri:u.path}})()}appendFile(r){var t=this;return(0,a.Z)(function*(){const n=t.getPath(r.directory,r.path);let e=r.data;const i=n.substr(0,n.lastIndexOf("/")),o=Date.now();let s=o;const d=yield t.dbRequest("get",[n]);if(d&&"directory"===d.type)throw Error("The supplied path is a directory.");if(void 0===(yield t.dbRequest("get",[i]))){const u=i.indexOf("/",1);if(-1!==u){const l=i.substr(u);yield t.mkdir({path:l,directory:r.directory,recursive:!0})}}void 0!==d&&(e=d.content+e,s=d.ctime);const c={path:n,folder:i,type:"file",size:e.length,ctime:s,mtime:o,content:e};yield t.dbRequest("put",[c])})()}deleteFile(r){var t=this;return(0,a.Z)(function*(){const n=t.getPath(r.directory,r.path);if(void 0===(yield t.dbRequest("get",[n])))throw Error("File does not exist.");if(0!==(yield t.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(n)])).length)throw Error("Folder is not empty.");yield t.dbRequest("delete",[n])})()}mkdir(r){var t=this;return(0,a.Z)(function*(){const n=t.getPath(r.directory,r.path),e=r.recursive,i=n.substr(0,n.lastIndexOf("/")),o=(n.match(/\//g)||[]).length,s=yield t.dbRequest("get",[i]),d=yield t.dbRequest("get",[n]);if(1===o)throw Error("Cannot create Root directory");if(void 0!==d)throw Error("Current directory does already exist.");if(!e&&2!==o&&void 0===s)throw Error("Parent directory must exist");if(e&&2!==o&&void 0===s){const u=i.substr(i.indexOf("/",1));yield t.mkdir({path:u,directory:r.directory,recursive:e})}const y=Date.now(),c={path:n,folder:i,type:"directory",size:0,ctime:y,mtime:y};yield t.dbRequest("put",[c])})()}rmdir(r){var t=this;return(0,a.Z)(function*(){const{path:n,directory:e,recursive:i}=r,o=t.getPath(e,n),s=yield t.dbRequest("get",[o]);if(void 0===s)throw Error("Folder does not exist.");if("directory"!==s.type)throw Error("Requested path is not a directory");const d=yield t.readdir({path:n,directory:e});if(0!==d.files.length&&!i)throw Error("Folder is not empty");for(const y of d.files){const c=`${n}/${y}`;"file"===(yield t.stat({path:c,directory:e})).type?yield t.deleteFile({path:c,directory:e}):yield t.rmdir({path:c,directory:e,recursive:i})}yield t.dbRequest("delete",[o])})()}readdir(r){var t=this;return(0,a.Z)(function*(){const n=t.getPath(r.directory,r.path),e=yield t.dbRequest("get",[n]);if(""!==r.path&&void 0===e)throw Error("Folder does not exist.");return{files:(yield t.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(n)])).map(s=>s.substring(n.length+1))}})()}getUri(r){var t=this;return(0,a.Z)(function*(){const n=t.getPath(r.directory,r.path);let e=yield t.dbRequest("get",[n]);return void 0===e&&(e=yield t.dbRequest("get",[n+"/"])),{uri:e?.path||n}})()}stat(r){var t=this;return(0,a.Z)(function*(){const n=t.getPath(r.directory,r.path);let e=yield t.dbRequest("get",[n]);if(void 0===e&&(e=yield t.dbRequest("get",[n+"/"])),void 0===e)throw Error("Entry does not exist.");return{type:e.type,size:e.size,ctime:e.ctime,mtime:e.mtime,uri:e.path}})()}rename(r){var t=this;return(0,a.Z)(function*(){return t._copy(r,!0)})()}copy(r){var t=this;return(0,a.Z)(function*(){return t._copy(r,!1)})()}requestPermissions(){return(0,a.Z)(function*(){return{publicStorage:"granted"}})()}checkPermissions(){return(0,a.Z)(function*(){return{publicStorage:"granted"}})()}_copy(r,t=!1){var n=this;return(0,a.Z)(function*(){let{toDirectory:e}=r;const{to:i,from:o,directory:s}=r;if(!i||!o)throw Error("Both to and from must be provided");e||(e=s);const d=n.getPath(s,o),y=n.getPath(e,i);if(d===y)return;if(function D(h,p){h=v(h),p=v(p);const r=h.split("/"),t=p.split("/");return h!==p&&r.every((n,e)=>n===t[e])}(d,y))throw Error("To path cannot contain the from path");let c;try{c=yield n.stat({path:i,directory:e})}catch{const f=i.split("/");f.pop();const _=f.join("/");if(f.length>0&&"directory"!==(yield n.stat({path:_,directory:e})).type)throw new Error("Parent directory of the to path is a file")}if(c&&"directory"===c.type)throw new Error("Cannot overwrite a directory with a file");const u=yield n.stat({path:o,directory:s}),l=function(){var g=(0,a.Z)(function*(f,_,w){const E=n.getPath(e,f),P=yield n.dbRequest("get",[E]);P.ctime=_,P.mtime=w,yield n.dbRequest("put",[P])});return function(_,w,E){return g.apply(this,arguments)}}(),m=u.ctime?u.ctime:Date.now();switch(u.type){case"file":{const g=yield n.readFile({path:o,directory:s});return t&&(yield n.deleteFile({path:o,directory:s})),yield n.writeFile({path:i,directory:e,data:g.data}),void(t&&(yield l(i,m,u.mtime)))}case"directory":{if(c)throw Error("Cannot move a directory over an existing object");try{yield n.mkdir({path:i,directory:e,recursive:!1}),t&&(yield l(i,m,u.mtime))}catch{}const g=(yield n.readdir({path:o,directory:s})).files;for(const f of g)yield n._copy({from:`${o}/${f}`,to:`${i}/${f}`,directory:s,toDirectory:e},t);t&&(yield n.rmdir({path:o,directory:s}))}}})()}}return h._debug=!0,h})()}}]);