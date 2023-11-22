import * as edgedb from "edgedb";
import e from "./dbschema/edgeql-js";

const client = edgedb.createClient();
// todo hier kan al je Mouldit code komen
async function main() {
    // result will be inferred based on the query

/*    const result = await e
        .select(e.Movie, () => ({
            title: true,
            actors: () => ({ name: true }),
            filter_single: { title: "Iron Man 2" },
        }))
        .run(client);

    console.log(JSON.stringify(result, null, 2));*/
    await client.ensureConnected()
    return client.querySingle<Array<number>>(`select 5+5;`);
}
main().then(res=>{
    console.log('200',res)
}).catch(e=>{
    console.log('500','shit')
})
