export default interface IUser {
    _id?: string;
    id?: string;
    name: string;
    email: string;
    password: string;
    checkPassword?: any;
    isModified?: any;
}