<script>
    const napok = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek']
    var orak = [{
        nap: 3,
        ipk: [8, 0],
        it: 5*45,
        oszt: '2/14/SZFT',
        tanar: 'Dr. Németh Tamás',
        terem: '18'
    },
    {
        nap: 2,
        ipk: [9, 50],
        it: 8*45,
        oszt: '2/14/SZFT',
        tanar: 'Dr. Németh Tamás',
        terem: '18'
    },
    {
        nap: 4,
        ipk: [10, 88],
        it: 5*45,
        oszt: '2/14/SZFT',
        tanar: 'Dr. Németh Tamás',
        terem: '18'
    }]
    const sto = (ora, i) => {
        var left = ora.nap * 118 + 29
        var fp = ora.ipk[0]*60 + ora.ipk[1] - orak.slice(0, i).reduce((a, v) => a + v.it, 0)
        return `
            left: ${left}px;
            top: ${fp-960}px;
            height: ${ora.it - 22}px;
        `
    }
    var p
    const ip = i => (p = i*15%60, `${Math.trunc(i*15/60)+8}:${p == 0 ? '00' : p}`)
</script>
<h1>Órarend megjelenítő</h1>
<div class = "oc">
    <div class = "or">
        <table>
            <tr><th></th>
            {#each napok as nap}
                <th>{nap}</th>
            {/each}<th></th>
            </tr>
            {#each Array(32).fill(0) as _, i}
                <tr>
                    <td class='ok'>{ip(i)}</td>
                    <td></td><td></td><td></td><td></td><td></td>
                    <td class='ok'>{ip(i)}</td>
                </tr>
            {/each}
        </table>
        {#each orak as ora, i}
            <div class="ora" style={sto(ora, i)}>
                <div class="oszt">{ora.oszt}</div>
                <div class="tanar">{ora.tanar}</div>
                <div class="terem">{ora.terem}</div>
            </div>
        {/each}
        <div></div>
    </div>
</div>
<style>
    h1 {
        text-align: center;
    }
    div.oc {
        margin: auto;
        width: 640px;
        height: 500px;
        background-color: antiquewhite;
        border-radius: 20px;
        padding: 30px;
    }
    div.or {
        position: relative;
    }
    table {
        width: 100%;
        height: 100%;
    }
    td {
        height: 11px;
        width: 20%;
        background-color: rgba(222, 240, 243, 0.584);
        border-radius: 3px;
        box-shadow: 0px 0px 7px inset rgb(124, 122, 95);
    }
    div.ora {
        position: relative;
        width: 87px;
        background-color: rgba(30, 240, 219, 0.306);
        border: solid 1px black;
        box-shadow: 1px 1px 3px inset black;
        border-radius: 5px;
        text-align: center;
        padding: 10px;
    }
    div.oszt {
        font-size: 12px;
        color: #148592;
    }
    div.tanar {
        font-size: 10px;
        color: #548522;
    }
    div.terem {
        font-size: 13px;
        color: #a41512;
    }
    td.ok {
        box-shadow: none;
        height: 11px;
        width: 20px;
        font-size: 9px;
        padding: -2px;
        text-align: right;
        background-color: antiquewhite;
    }
</style>