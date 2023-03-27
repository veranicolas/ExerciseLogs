
export type User = {
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

export type RegisterUserForm = {
    name:      string;
    lastName:  string;
    email:     string;
    password:  string;
    country:   string;
    weight:    number;
}