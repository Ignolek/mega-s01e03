import {createServer} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import {mdsvex} from 'mdsvex';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('.',import.meta.url));
const server=await createServer({root,configFile:false,server:{middlewareMode:true},resolve:{alias:{'#lib':path.join(root,'src/lib')}},plugins:[svelte({extensions:['.svelte','.svx'],preprocess:mdsvex({extensions:['.svx'],layout:{runbook:path.join(root,'src/lib/layouts/runbook.svelte')}}),compilerOptions:{css:'injected'}})]});
try {
 const {render}=await server.ssrLoadModule('svelte/server');
 const files=fs.readdirSync(path.join(root,'src/routes'),{recursive:true}).filter(p=>p.endsWith('+page.svx'));
 for(const file of files){
  const mod=await server.ssrLoadModule('/src/routes/'+file.replaceAll('\\','/'));
  const {body,head}=render(mod.default);
  const target=path.join(root,'rendered',path.dirname(file),'index.html');
  fs.mkdirSync(path.dirname(target),{recursive:true});
  fs.writeFileSync(target,`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">${head}</head><body>${body}</body></html>`);
  console.log(path.relative(root,target));
 }
} finally {await server.close();}
