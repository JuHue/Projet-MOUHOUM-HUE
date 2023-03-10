import axios, { AxiosInstance, AxiosResponse } from 'axios';


declare module 'axios' {
    interface AxiosResponse<T = any> extends Promise<T> {}
}

export abstract class AbstractHttpClient {
    public readonly client: AxiosInstance;

    private handleResponse = ({data}: AxiosResponse) => data;
    protected handleError = (error: any) => Promise.reject(error);

    public constructor(baseURL: string) {
        this.client = axios.create({
            baseURL,
            timeout: 10000,
            headers: {
                Authorization: '',
            },
        });

        this._initializeResponseInterceptor();
    }

    private _initializeResponseInterceptor = () => {
        this.client.interceptors.response.use(
            this.handleResponse,
            this.handleError,
        );
    }
}

export default AbstractHttpClient;