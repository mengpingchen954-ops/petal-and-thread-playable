import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../dist/',import.meta.url)),port=Number(process.env.PORT||4173);
if(!fs.existsSync(path.join(root,'index.html'))){console.error('Build missing. Run npm install and npm run build first.');process.exit(1);}
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.json':'application/json'};
const server=http.createServer((req,res)=>{
 try{
  const url=new URL(req.url,'http://localhost'),relative=decodeURIComponent(url.pathname).replace(/^\/+/,''),target=path.resolve(root,relative||'index.html');
  if(!target.startsWith(root)||!fs.existsSync(target)||!fs.statSync(target).isFile()){res.writeHead(404);res.end('Not found');return;}
  res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});fs.createReadStream(target).pipe(res);
 }catch{res.writeHead(400);res.end('Bad request');}
});
server.on('error',e=>{if(e.code==='EADDRINUSE')console.error(`Port ${port} is in use. Open http://127.0.0.1:${port} or set PORT to another port.`);else console.error(e.message);process.exitCode=1;});
server.listen(port,'127.0.0.1',()=>console.log(`Petal & Thread is ready: http://127.0.0.1:${port}\nKeep this terminal open while playing. Ctrl+C to stop.`));
