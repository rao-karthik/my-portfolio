import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';
import IUser from "../types/user.type";

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        dafault: 'user',
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
})

userSchema.pre<IUser>('save', function(this: IUser, next: any) {
    
    if(!this.isModified('password')) return next;

    bcrypt.hash(this.password, 8, (err, hash)=>{
        if(err) return next(err);

        this.password = hash;
        next();
    });
});

userSchema.methods.checkPassword = function (this: any, password) {
    const hashedPassword = this.password;

    return new Promise ((resolve, reject)=>{
        bcrypt.compare(password, hashedPassword, (err, same)=>{
            if (err) return reject(err);

            resolve(same);
        });
    });
};

const User = model<IUser>('user', userSchema);

export default User;