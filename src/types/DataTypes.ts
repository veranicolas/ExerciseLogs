
export type User = {
    name:      string;
    lastName:  string;
    email:     string;
    password:  string;
    country:   string;
    weight:    number;
    photo:     string;
    language:  string;
    _id:       string;
    createdAt: Date;
    updatedAt: Date;
    __v:       number;
}

export type RegisterUserForm = {
    name:      string;
    lastName:  string;
    email:     string;
    password:  string;
    country:   string;
    weight:    number;
}