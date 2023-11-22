import {CrudAction} from "./Crud-Action";
import * as edgedb from "edgedb";
import e from "./../dbschema/edgeql-js";

const client = edgedb.createClient();

export const serverActions:CrudAction[] = []
const getAllProducts = async function getAllProducts() {
    await client.ensureConnected()
    return e
        .select(e.Movie, () => ({
            title: true,
            actors: () => ({name: true}),
            filter_single: {title: "Iron Man 2"},
        }))
        .run(client)
}
serverActions.push(new CrudAction('getAllProducts',getAllProducts))
