import React, { useCallback, useRef, useState } from 'react';
import styles from './Form.module.css';

const data = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: '',
    day: '',
    month: '',
    year: '',
    avatar: '',
    marriage: '',
    gender: ''
}

const Form = () => {
    const [submit, setSubmit] = useState(data);
    const formRef = useRef(null);

    const handleChange = useCallback((e) => {
        const { name, value, type } = e.target;
        setSubmit((prevSubmit) => ({
            ...prevSubmit,
            [name]: type === 'file' ? e.target.files[0] : value
        }));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted', submit);

        // Reset form fields
        setSubmit(data);
        formRef.current.reset();
    };

    return (
        <div>
            <h1>React Form Assignment</h1>
            <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={submit.firstName}
                    onChange={handleChange}
                />
                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={submit.lastName}
                    onChange={handleChange}
                />
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={submit.email}
                    onChange={handleChange}
                />
                <label>Password</label>
                <input type="password" placeholder="Password" />
                <label>Phone Number</label>
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={submit.phoneNumber}
                    onChange={handleChange}
                />
                <label>Country</label>
                <select
                    name="country"
                    id="country"
                    value={submit.country}
                    onChange={handleChange}
                >
                     <option value="">country</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="India">India</option>
                    <option value="Canada">Canada</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Japan">Japan</option>
                    <option value="Italy">Italy</option>
                    <option value="Russia">Russia</option>
                    <option value="Spain">Spain</option>
                    <option value="Brazil">Brazil</option>
                    <option value="China">China</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Malaysia">Malaysia</option>
                </select>
                <label>Day</label>
                <input
                    type="number"
                    name="day"
                    min="1"
                    max="31"
                    placeholder="Day"
                    value={submit.day}
                    onChange={handleChange}
                />
                <label>Month</label>
                <input
                    type="number"
                    name="month"
                    min="1"
                    max="12"
                    placeholder="Month"
                    value={submit.month}
                    onChange={handleChange}
                />
                <label>Year</label>
                <input
                    type="number"
                    name="year"
                    min="1990"
                    max="2099"
                    placeholder="Year"
                    value={submit.year}
                    onChange={handleChange}
                />
                <label>Avatar</label>
                <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={handleChange}
                />
                <label>Select If Married</label>
                <label>
                    <input
                        type="radio"
                        name="marriage"
                        value="Yes"
                        checked={submit.marriage === 'Yes'}
                        onChange={handleChange}
                    />{' '}
                    YES
                </label>
                <label>
                    <input
                        type="radio"
                        name="marriage"
                        value="No"
                        checked={submit.marriage === 'No'}
                        onChange={handleChange}
                    />{' '}
                    NO
                </label>
                <label>Choose Gender</label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={submit.gender === 'Male'}
                        onChange={handleChange}
                    />{' '}
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={submit.gender === 'Female'}
                        onChange={handleChange}
                    />{' '}
                    Female
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Others"
                        checked={submit.gender === 'Others'}
                        onChange={handleChange}
                    />{' '}
                    Others
                </label>

                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
