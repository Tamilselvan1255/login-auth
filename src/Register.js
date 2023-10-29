import { toast } from "react-toastify";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [country, countrychange] = useState("");
    const [address, addresschange] = useState("");
    const [gender, genderchange] = useState("");

    const navigate = useNavigate();

    const IsValidate=()=>{
        let isProceed = true;
        let errorMessage = "Please enter valid "; 
        if(id === null || id === ''){
            isProceed = false;
            errorMessage += 'Username '
        }
        if(name === null || name === ''){
            isProceed = false;
            errorMessage += 'Fullname '
        }
        if(password === null || password === ''){
            isProceed = false;
            errorMessage += 'Password '
        }
        if(email === null || email === ''){
            isProceed = false;
            errorMessage += 'Email '
        }
        if(!isProceed){
            toast.warning(errorMessage)
        } else {
            if(/^[a-zA-z0-9]+@[a-zA-z0-9]+\.[A-Za-z]+$/.test(email)){}
            else {
                isProceed=false;
                toast.warning("Please enter valid Email")
            }
        }
        return isProceed
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let regobj = { id, name, password, email, phone, country, address, gender };
        if(IsValidate()){
        fetch("http://localhost:8000/user", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(regobj)
        }).then((res) => {
            toast.success('Registered successfully!')
            navigate('/login')
        }).catch((err) => {
            toast.error('Failed :' + err.message);
        });
    }
    }
    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container colu" onSubmit={handleSubmit}>
                    <div className="card">
                        <div className="card-header text-center">
                            <h1>User Registration</h1>
                        </div>
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="mb-2">Username <span className="errmsg">*</span></label>
                                        <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="mb-2">Password <span className="errmsg">*</span></label>
                                        <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="mb-2">Fullname <span className="errmsg">*</span></label>
                                        <input type="text" value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="mb-2">Email <span className="errmsg">*</span></label>
                                        <input type="email" value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="mb-2">Phone <span className="errmsg">*</span></label>
                                        <input type="number" value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label className="mb-2">Country <span className="errmsg">*</span></label>
                                        <select className="form-control" value={country} onChange={e => countrychange(e.target.value)}>
                                            <option value="india">India</option>
                                            <option value="usa">USA</option>
                                            <option value="london">London</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label className="mb-2">Address</label>
                                        <textarea className="form-control resize" value={address} onChange={e => addresschange(e.target.value)} placeholder="write your address here.."></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div class="form-group">
                                    <label for="gender" className="mb-2">Gender</label>
                                    <br></br>
                                    <input type="radio" checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name="gender" value="male" className="app-check"></input>
                                    <lable>Male</lable>
                                    <input type="radio" checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name="gender" value="female" className="app-check"></input>
                                    <lable>Female</lable>
                                </div>
                            </div>

                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Register</button>
                            <Link to={'/login'}><button class="btn btn-danger" style={{marginLeft: '6px'}}>Back</button></Link>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;