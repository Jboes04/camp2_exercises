CREATE TABLE region (
  id serial,
  region_name VARCHAR()
);

CREATE TABLE country (
  id serial,
  country_name VARCHAR(),
  region_id VARCHAR()
);

CREATE TABLE location (
  id serial,
  street_address VARCHAR(),
  postal_code integer,
  city VARCHAR(),
  state VARCHAR(),
  country_id integer,
);

CREATE TABLE job (
  id serial,
  title VARCHAR(),
  min_salary integer,
  max_salary integer,
);

CREATE TABLE job_grades (
  id serial,
  level VARCHAR(),
  lowest_salary integer,
  highest_salary integer,
);

CREATE TABLE job_history (
  id serial,
  employee_id integer,
  start_date date,
  end_date date,
  job_id integer,
  department_id integer,
);

CREATE TABLE department (
  id serial,
  name VARCHAR(),
  manager_id integer,
  location_id integer,
);

CREATE TABLE employee (
  id serial,
  first_name VARCHAR(),
  last_name VARCHAR(),
  email VARCHAR(),
  phone_number integer,
  hire_date date,
  job_id integer,
  salary integer,
  manager_id integer,
  department_id integer
);
