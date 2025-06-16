import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialUser = {
    profile: '',
    interest: '',
    fullName: '',
    st: '',
    city: '',
    email: '',
    password: '',
    passwordConfirmed: ''
};

export const UserRegistrationContext = createContext({
    user: initialUser,
    errors: {},
    setProfile: () => null,
    setInterest: () => null,
    setFullName: () => null,
    setSt: () => null,
    setCity: () => null,
    setEmail: () => null,
    setPassword: () => null,
    setPasswordConfirmed: () => null,
    submitUser: () => null,
    selectingInterests: () => null
});

export const useUserRegistrationContext = () => {
    return useContext(UserRegistrationContext);
};

export const UserRegistrationProvider = ({ children }) => {

    const navigate = useNavigate();

    const [user, setUser] = useState(initialUser);

    const setProfile = ({ profile }) => {
        setUser(previousState => {
            return {
                ...previousState,
                profile
            }
        })
    };

    const setInterest = ({ interest }) => {
        setUser(previousState => {
            return {
                ...previousState,
                interest
            }
        })
    };

    const setFullName = ({ fullName }) => {
        setUser(previousState => {
            return {
                ...previousState,
                fullName
            }
        })
    };

    const setSt = ({ st }) => {
        setUser(previousState => {
            return {
                ...previousState,
                st
            }
        })
    };

    const setCity = ({ city }) => {
        setUser(previousState => {
            return {
                ...previousState,
                city
            }
        })
    };

    const setEmail = ({ email }) => {
        setUser(previousState => {
            return {
                ...previousState,
                email
            }
        })
    };

    const setPassword = ({ password  }) => {
        setUser(previousState => {
            return {
                ...previousState,
                password 
            }
        })
    };

    const setPasswordConfirmed = ({ passwordConfirmed }) => {
        setUser(previousState => {
            return {
                ...previousState,
                passwordConfirmed
            }
        })
    };

    const submitUser = () => {
        console.log(user);
        navigate("/cadastro/concluido")
    };

    const selectingInterests = () => {
        return !!user.profile
    };
    
    const context = {
        user,
        setProfile,
        setInterest,
        setFullName,
        setSt,
        setCity,
        setEmail,
        setPassword,
        setPasswordConfirmed,
        submitUser,
        selectingInterests
    };

    return (
        <UserRegistrationContext.Provider value={context}>
            {children}
        </UserRegistrationContext.Provider>
    );
};