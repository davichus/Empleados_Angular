export interface Employee {
    _id?:string
    name: string,
    position: string,
    office: string,
    salary: number,
    createdAt?: Date,
    updatedAt?: Date,
}