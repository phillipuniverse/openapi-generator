/*
	TODO: LICENSE INFO
*/

/**
* A tag for a pet
*/
export class Tag {
    'id'?: number;
    'name'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Tag.attributeTypeMap;
    }
    
    public constructor() {
    }
}
