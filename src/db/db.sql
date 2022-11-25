CREATE TABLE company(
    company_id uuid default uuid_generate_v4() PRIMARY KEY,
    company_name varchar(64) NOT NULL,
    company_img varchar NOT NULL
);





INSERT INTO company(company_name) VALUES
                        ('Xon saroy'),
                        ('Namuna Development'),
                        ('Aliakbar Stroy Servis'),
                        ('Bazis-T'),
                        ('Golden House'),
                        ('Murod building');



CREATE TABLE complex(
    complex_id uuid default uuid_generate_v4() primary key,
    company_name varchar(64) NOT NULL,
    company_id uuid default uuid_generate_v4(),
    FOREIGN KEY (company_id)
    REFERENCES company(company_id)
    on DELETE SET NULL
);

CREATE TABLE room(
    room_id uuid default uuid_generate_v4() PRIMARY KEY,
    room_count int NOT NULL,
    room_meter_square_sum varchar NOT NULL,
    room_meter_square int NOT NULL,
    complex_id uuid default uuid_generate_v4(),
    References complex(complex_id)
    FOREIGN KEY (complex_id)
    on DELETE SET NULL
);




CREATE TABLE banks(
    bank_id uuid default uuid_generate_v4(),
    bank_name varchar(64) NOT NULL,
    upto varchar NOT NULL,
    mortgage_duration varchar NOT NULL,
    starting_payment varchar NOT NULL

);



INSERT INTO banks(bank_name) VALUES
                        ('Asaka bank'),
                        ('Ipak yo`li bank'),
                        ('Ipateka bank'),
                        ('Infinbank'),
                        ('Transtbank'),
                        ('Orient finans bank'),
                        ('Davr bank'),
                        ('TBC bank'),
                        ('Kapital bank'),
                        ('Anor bank'),
                        ('Ravnaq bank'),
                        ('Xalq bank');


create TABLE users(
    user_id uuid DEFAULT uuid_generate_v4(),
    user_name varchar(64) NOT NULL,
    user_password varchar(64)NOT NULL,
    role varchar(64) default "user"
);


INSERT INTO company(company_name) VALUES
                        ('Eshmat','12345678','admin'),
                        ('Toshmat','12345678'),
                        ('Shermat','12345678'),
                        ('Gishmat','12345678');
