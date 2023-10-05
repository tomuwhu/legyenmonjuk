<script>
    const db = ['cs', 'dzs', 'sz', 'zs', 'dz', 'gy', 'ty']
    const mah = 'aáeéiíoóöőuúüűy'
    const máh = 'bcdfghjklmnpqrstvwxz0123456'
    var elsz = 'elkelkáposztásítottalanítottátok'
    db.forEach((adb, i) => {
        elsz = elsz.replaceAll(adb, i)
    })
    var s = ''
    var kk = false
    var i
    for(i = 0; i < elsz.length; i++) {
        s += elsz[i]
        if (mah.includes(elsz[i])) {
            kk = true
        }
        if (máh.includes(elsz[i+1]) && mah.includes(elsz[i+2])) {
            s += "-"
        }
    }
    db.forEach((adb, i) => {
        s = s.replaceAll(i.toString(), adb)
    })
</script>
<h1>
    {s}
</h1>
<style>
    h1 {
        text-align: center;
    }
</style>