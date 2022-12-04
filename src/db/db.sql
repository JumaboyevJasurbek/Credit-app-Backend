CREATE TABLE company(
    company_id uuid default uuid_generate_v4() PRIMARY KEY,
    company_name varchar(64) NOT NULL,
    company_img varchar NOT NULL
);





INSERT INTO company(company_name, company_img) VALUES
                        ('Xon saroy', 'https://yangiuylar.uz/wp-content/uploads/2022/08/avatar-1.jpg'),
                        ('Namuna Development', 'https://yangiuylar.uz/wp-content/uploads/2021/03/NAMUNA_logo_1.jpg'),
                        ('Aliakbar Stroy Servis', 'https://yangiuylar.uz/wp-content/uploads/2020/03/logo-darkhan-2021.png'),
                        ('Bazis-T', 'https://yangiuylar.uz/wp-content/uploads/2022/09/avatar.jpg'),
                        ('Golden House', 'https://yangiuylar.uz/wp-content/uploads/2020/03/golden-house-525x328.jpg?v=1586052657'),
                        ('Murod building', 'https://yangiuylar.uz/wp-content/uploads/2020/02/MBuildings-525x328.jpg?v=1586052736');


select 
	c.company_id,
    c.company_name,
    cp.complex_id,
    cp.complex_name
from
	company c
inner join 
	complex cp
on 
	c.company_id = cp.company_id where c.company_id = '3c7ec5a2-33a1-49e2-b949-9d3047eba7d3'
 


CREATE TABLE complex(
    complex_id uuid default uuid_generate_v4() primary key,
    complex_name varchar(64) NOT NULL,
    company_id uuid default uuid_generate_v4(),
    FOREIGN KEY (company_id)
    REFERENCES company(company_id)
    on DELETE SET NULL
);

INSERT INTO complex(complex_name,company_id) VALUES
                            ('orzular', '3c7ec5a2-33a1-49e2-b949-9d3047eba7d3'),
                            ('ocean', '3c7ec5a2-33a1-49e2-b949-9d3047eba7d3'),
                            ('Nur', '97c65b5f-e8a8-4598-ba8f-608c88926042'),
                            ('Darkhan Avenue', 'c0ed48c2-ff4d-4352-a9e1-b7edeb8eda37'),
                            ('Koh Ota', '6879aa83-c7cf-4e68-998d-7d369cbb15ee'),
                            ('Greenwich', '25618063-d5d4-4634-870a-cf97e4e2515c'),
                            ('DYNASTY', '25618063-d5d4-4634-870a-cf97e4e2515c'),
                            ('Cambridge Residence', '3cfefc51-b99a-4fe8-b0c8-7bda1c81a1b4')

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



INSERT into room(room_count, room_meter_square_sum, room_meter_square, complex_id ) VALUES
                (3, '60 000 000', 60, '12db3bcf-1f35-4783-bc28-c8e301844bad'),
                (5, '80 000 000', 80, '12db3bcf-1f35-4783-bc28-c8e301844bad'),
                (4, '70 000 000', 70, '6e3cfc32-0314-4f57-80ab-72949f54253e'),
                (3, '50 000 000', 50, '6e3cfc32-0314-4f57-80ab-72949f54253e'),
                (4, '55 000 000', 50, '7d9ab77e-87d8-4043-8494-21e119008c7d'),
                (5, '80 000 000', 80, 'a54898f1-ba49-48ad-b6c1-daa9d672d71d'),
                (5, '50 000 000', 50, 'b5749f78-4d8e-410f-9807-5dfcacfab37d'),
                (4, '90 000 000', 90, 'cd40d623-5c77-4ec2-a7bf-49a931ca8ce2'),
                (5, '100 000 000', 90, 'd261102f-9f74-4b88-b081-0ce1d06e8454'),
                (3, '60 000 000', 60, 'de5831e9-2983-4bf1-8780-9bf90038cf1a');




CREATE TABLE banks(
    bank_id uuid default uuid_generate_v4(),
    bank_name varchar(64) NOT NULL,
    upto varchar NOT NULL,
    mortgage_duration varchar NOT NULL,
    starting_payment varchar NOT NULL

);



INSERT INTO banks(bank_name, upto, mortgage_duration, starting_payment) VALUES
                        ('Asaka bank', '210 000 000', '10', '5'),

                        ('Ipak yo`li bank', '75 000 000', '15', '6'),

                        ('Ipateka bank', '80 000 000', '10', '4'),

                        ('Infinbank', '120 000 000', '15', '8'),

                        ('Transtbank', '65 000 000', '10', '9'),

                        ('Orient finans bank', '95 000 000', '10', '5'),

                        ('Davr bank', '82 000 000', '15', '4'),

                        ('TBC bank', '82 000 000', '10', '7'),

                        ('Kapital bank', '200 000 000', '15', '5'),

                        ('Anor bank', ' 110 000 000', '10', '6'),

                        ('Ravnaq bank', '90 000 000', '15', '7'),

                        ('Xalq bank', '300 000 000', '15', '9');



create TABLE users(
    user_id uuid DEFAULT uuid_generate_v4(),
    user_name varchar(64) NOT NULL,
    user_password varchar(64)NOT NULL,
);

create UNIQUE INDEX on users(user_name);

INSERT INTO users(user_name,user_password) VALUES
                        ('Eshmat','12345678'),
                        ('Toshmat','12345678'),
                        ('Shermat','12345678'),
                        ('Gishmat','12345678');


-- ? Complexni qaysi company ga tegishli ekanini chiqaradigan select

select
    company_name,
    complex_name
FROM
company cp
JOIN
complex cx
ON 
    cx.company_id = cp.company_id  where  cp.company_id = '3c7ec5a2-33a1-49e2-b949-9d3047eba7d3'
