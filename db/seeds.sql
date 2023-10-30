USE employeeDB;
INSERT INTO department (id, name) 
VALUES (1, 'Sales'),
 (2, 'Engineering'),
  (3, 'Human Resources'),
   (4, 'Legal');

INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'Sales Lead', 100000, 1),
 (2, 'Salesperson', 80000, 1),
  (3, 'Lead Engineer', 150000, 2),
   (4, 'Software Engineer', 120000, 2),
    (5, 'Account Manager', 160000, 1),
     (6, 'Legal Team Lead', 250000, 4),
      (7, 'Lawyer', 190000, 4),
       (8, 'HR Lead', 140000, 3),
        (9, 'HR Assistant', 90000, 3);
 
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)   
VALUES(1, 'John', 'Doe', 1, NULL),
 (2, 'Mike', 'Chan', 2, 1),
  (3, 'Ashley', 'Rodriguez', 3, NULL),
   (4, 'Kevin', 'Tupik', 4, 3),
    (5, 'Malia', 'Brown', 5, NULL),
     (6, 'Sarah', 'Lourd', 6, NULL),
      (7, 'Tom', 'Allen', 7, 6),
       (8, 'Sam', 'Clemens', 8, NULL),
        (9, 'Cassidy', 'Armstrong', 9, 8);
  SELECT * FROM department;
      
       