export type CrudActionType =
    'get instance'|
    'get all instances'|
    'get instances'|
    'create instance'|
    'create instances'|
    'update instance'|
    'update instances'|
    'delete instance'|
    'delete instances'

export const CrudActions = {
        'get instance':'get instance',
    'get all instances':'get all instances',
    'get instances':'get instances',
    'create instance':'create instance',
    'create instances':'create instances',
    'update instance':'update instance',
    'update instances':'update instances',
    'delete instance':'delete instance',
    'delete instances':'delete instances'
} as const