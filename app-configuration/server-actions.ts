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
/*
* todo aanpak:
*  de effects blijven zoals ze zijn met trigger en actions en source en target
*  maar in plaats van één type actie krijg je er nu twee: CrudAction en UIAction
*  de concept poperty voor een actie valt weg omdat we voorlopig nog niet met concepten werken
*  de CrudAction heeft behalve een id en het target ook nog een query
*  de UIAction heeft een behalve een id en een target ook een type en optioneel een value,
*
*
* */