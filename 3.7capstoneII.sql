select * from accounts;

INSERT INTO  accounts (username, password, email, 
					   first_name, last_name, phone_number, 
					   address, role, create_date)
					  
VALUES ( 'username-pgtest1345', 'password-pgtest123456', 
		'email-pgtest1','firstName-pgtest4i8t583',
		'lastName-pgtest1','phoneNumber-pgtest1',
		'address-pgtest1', 'isAdmin-pgtest1', 
		'createDate-pgtest1')