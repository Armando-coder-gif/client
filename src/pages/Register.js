import {useState, useEffect} from 'react';
import {Logo, FormRow, Alert} from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import {useAppContext} from '../context/appContext'

const initialState = {
    name:'',
    email:'',
    password:'',
    isMember: true,
};

const Register = () =>{
    const [values, setValues] = useState(initialState)

    // global state and useNavigate
    
    const {isLoading, showAlert, displayAlert} = useAppContext();

    const toggleMember = () =>{
        setValues({...values, isMember:!values.isMember})
    };

    const handleChange = (e) =>{
        console.log(e.target.name);
        setValues({...values, [e.target.name]: e.target.value})
    };
    
    const {name, email, password, isMember} = values;
    const onSubmit = (e) =>{
        e.preventDefault();
        
        if(!email || !password || (!isMember && !name)){
            displayAlert();
            return
        }
        console.log(values)
    };

    return <Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmit}>
            <Logo/>
            <h3>{values.isMember ? "Login":"Register"}</h3>
            {showAlert && <Alert/>}
            {/* name-input*/}
            { !values.isMember &&
                (<FormRow 
                type="text"
                name="name" 
                value={name}  
                handleChange={(e)=>handleChange(e)} />)
            }
            

            {/* email-input*/}

            <FormRow 
                type="email"
                name="email"
                value={email}  
                handleChange={(e)=>handleChange(e)} />
            {/* password-input*/}
            
            <FormRow
                type="password" 
                name="password" 
                value={password} 
                handleChange={(e)=>handleChange(e)} />
            
            <button type='submit' className='btn btn-block'>submit</button>
            <p>
                {values.isMember ? "Not a member yet":"Already a member?"}
                <button type='button' onClick={toggleMember} className="member-btn">
                    {values.isMember?"Register":"Login"}
                </button>
            </p>
        </form>
    </Wrapper>
}

export default Register