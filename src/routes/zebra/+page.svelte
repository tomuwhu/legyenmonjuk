<script>
    var todo
    var list=[]
</script>
<div>
    <input type="text" bind:value={todo} on:change={()=>{
        list.push(todo), list.sort(), list=list, todo=''
    }}>
</div>
<hr>
<ul>
    {#each list as li, i}
        <li>{li} <button on:click={() => {
            delete list[i]
            list = list.filter(v => v)
        }}>Törlés</button></li>    
    {/each}
</ul>
<style>
    div {
        text-align: center;
    }
</style>