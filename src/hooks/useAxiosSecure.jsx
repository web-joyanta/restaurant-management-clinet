import axios from "axios";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(response => {
            return response;
        }, error => {
            if (error.response.status === 401 || error.response.status === 403) {
                logOut()
                    .then(() => {
                        navigate('/auth');
                    })
                    .catch(err => {
                        console.error(err);
                    });
            };
            return Promise.reject(error);
        })
    }, [logOut, navigate]);

    return axiosSecure;
};

export default useAxiosSecure;