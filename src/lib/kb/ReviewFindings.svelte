<script lang="ts">
 import reports from '#lib/data/reports-4471.json';
 import {uniqueById,groupByCause,type Report} from '#lib/kb/causes';
 import {tenantOf} from '#lib/kb/locales';
 const unresolved=['R-41202','R-41209','R-41236','R-41344','R-41620'];
 const sparse=['R-41290','R-41417','R-41514','R-41615'];
 const rows=uniqueById(reports as Report[]).filter(r=>r.mergedInto===4471);
 const groups=groupByCause(rows,tenantOf);
 const count=(g:typeof groups[number],ids:string[])=>g.reports.filter(r=>ids.includes(r.id)).length;
 const swaps=(g:typeof groups[number])=>g.reports.length-count(g,unresolved)-count(g,sparse);
 const mismatch=groups.reduce((n,g)=>n+g.reports.filter(r=>r.meta.intakeTag!==g.cause).length,0);
</script>
<p>{reports.length} export rows; {rows.length} unique reports; {reports.length-rows.length} repeated rows. Intake labels disagree with computed filing on {mismatch} reports.</p>
<table><thead><tr><th>Computed filing</th><th>Explicit swaps</th><th>Unresolved symptoms</th><th>Insufficient detail</th><th>Total</th></tr></thead><tbody>
 {#each groups as g}<tr><td>{g.cause}</td><td>{swaps(g)}</td><td>{count(g,unresolved)}</td><td>{count(g,sparse)}</td><td>{g.reports.length}</td></tr>{/each}
</tbody></table>
<p>The explicit-swap counts describe the reviewed snapshot. If the report set changes, repeat the body review before relying on this partition.</p>
