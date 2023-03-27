
type User = {
    name:      string;
    lastName:  string;
    email:     string;
    country:   string;
    weight:    number;
    photo:     string;
    language:  string;
    _id:       string;
    createdAt: Date;
    updatedAt: Date;
}

type RegisterUserForm = {
    name:      string;
    lastName:  string;
    email:     string;
    password:  string;
    country:   string;
    weight:    number;
}

type Exercise = {
    name:string,
    value:string,
    reps:number,
    area:string,
    unit:string,
    userId:number
}

export type { User, RegisterUserForm, Exercise}