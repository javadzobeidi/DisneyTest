import axios from 'axios'
const AxiosInstance = axios.create();


const onResponseSuccess = (response) => {
    return {response:response.data,httpCode:200};
};
function onResponseError(error) {


    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500;
        if (expectedError && error.response.status == 401) {
        
            //   window.location.replace('/#/login')
           }
           else if (expectedError && error.response.status == 403) 
           {
           //    window.location.replace('/#/login')
           }

           if (expectedError) {

            return { 
                response: error.response.data,
                    httpCode: error.response.status,
                    message: "error from Server please try Again"
                    }
        }
        else {
            return { 
                    httpCode: 500,
                    response:null,
                    message: "something went wrong check your network connection and retry" }
        }


       

}

AxiosInstance.interceptors.response.use(onResponseSuccess, onResponseError);


export default AxiosInstance;
