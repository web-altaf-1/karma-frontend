import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { env } from '../../env';
// import toast from '../components/toaster/toast';
// import FileSaver from 'file-saver';
// import { toast } from 'react-toastify';
// import { history, showDismissAlert } from '../..';
// import { IResponseBase } from '../models/baseModel';

// import { fileTimeFromDate, mimeTypeExtension, parseBlob } from '../utils/Util'

//default instance
const client = axios.create({ baseURL: env.REACT_APP_API_URL });
 
//cancel token
// const cancelSource = axios.CancelToken.source();
 
//request handle
// function handleRequest(config: AxiosRequestConfig) {
//   //get jwt
//   const token = window.localStorage.getItem('jwt');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   //get companyId
//   const companyId = window.localStorage.getItem('currentCompanyId');
//   if (companyId) config.headers['x-cdbm-company-id'] = companyId;
//   config.headers['Cache-Control'] = 'no-cache';
//   //cancel token to cancel request for any interrupted in api call
//   config.cancelToken = cancelSource.token;
//   return config;
// }
//request error handle
// function errorRequest(error: any) {
//   return Promise.reject(error);
// }
//response handle
// function handleResponse(response: AxiosResponse<any>) {
//   //do something with the response data
//   const { status, data } = response;
//   const { message } = data as IResponseBase<object>;
//   //duplicate
//   if (status === 201) {
//     if (message !== null || message !== '') {
//       // toast.warning(message);
//       toast({ titleText: `${message}`, icon: 'error' });
//     }
//   }
//   return response;
// }
//response error handle
// function errorResponse(error: any) {
//   if (error === undefined) {
//     return Promise.reject(error);
//   }
//   //HANDLE WHEN API IS DOWN
//   //handle network error
//   if (error.message === 'Network Error' && !error.response) {
//     toast({ titleText: 'Network error!', icon: 'error' });
//     // toast.error('Network error!', { toastId: 'network-error' });
//     //cancelSource.cancel('Cancelled request due to network error!');
//   }
//   if (error.response !== undefined) {
//     //HANDLE WHEN API IS LIVE
//     //assign to new object to handle
//     const { status, data, config, headers } = error.response;
//     const { message } = data as IResponseBase<object>;
 
//     //bad request
//     // if (status === 400 && config.method === 'get') {
//     //   if (message !== null || message !== "") {
//     //     toast.error(message);
//     //   }
//     // }
 
//     //handle token expired
//     // if (status === 401 && headers['www-authenticate'] !== undefined
//     //   && headers['www-authenticate']!.indexOf('Bearer error="invalid_token", error_description="The token expired') > 0) {
//     //   // console.log(error.response);
//     //   //FIXME: move to cookies
//     //   window.localStorage.removeItem('jwt');
//     //   history.push('/');
//     //   toast.info('Your session has expired, please login again');
//     // } else if (status === 400
//     //   || status === 404
//     //   || status === 405
//     //   || status === 406
//     //   || status === 409
//     //   || status === 500) {
//     //   if (message !== null || message !== "") {
//     //     //delete with foreign key constrains error
//     //     if (message.includes("The DELETE statement conflicted")) {
//     //       toast.error("Unable to delete due to data constraints, please check if has any dependent records.")
//     //     } else {
//     //       var urlStr = error.request.responseURL.toString();
//     //       var url = new URL(urlStr);
//     //       //set show dissmiss alert if found the param
//     //       if (url.searchParams.get("showDismissAlert")) {
//     //         showDismissAlert({ type: "danger", message: message });
//     //       } else {
//     //         toast.error(message);
//     //       }
//     //     }
//     //   }
//     // } else if (status === 401) { //only 401 when call multiple requests, just show 1 toast
//     //   toast.error(message, { toastId: "unauthorized" });
//     // }
//   }
//   toast({ titleText: `${error?.data?.message}`, icon: 'error' });
 
//   throw error.response;
//   // return Promise.reject(error.message);
// }
//response transform
function responseBody(response: AxiosResponse) {
    //   return response.data as IResponseBase<any>;
    return response.data;
}
 
const agent = () => {
  //default interceptors
//   client.interceptors.request.use(handleRequest, errorRequest);
//   client.interceptors.response.use(handleResponse, errorResponse);
 
  //methods
  const get = (url: string) => client.get(url).then(responseBody);
  const post = (url: string, body: {}) => client.post(url, body).then(responseBody);
  const put = (url: string, body: {}) => client.put(url, body).then(responseBody);
  const del = (url: string) => client.delete(url).then(responseBody);

  //use for upload file only
//   const postFile = (url: string, file: Blob) => {
//     let formData = new FormData();
//     formData.append('File', file);
//     return client
//       .post(url, formData, {
//         headers: { 'Content-type': 'multipart/form-data' },
//       })
//       .then(responseBody);
//   };
  //use for post complex form with file attachment
//   const postFormBody = (url: string, body: any) => {
//     let formData = new FormData();
//     for (var key in body) {
//       //filter for list of attach files
//       if (body[key] instanceof FileList) {
//         for (var i = 0; i < body[key].length; i++) {
//           formData.append(key, body[key][i]);
//         }
//       } else {
//         formData.append(key, body[key]);
//       }
//     }
//     return client
//       .post(url, formData, {
//         headers: {
//           Accept: 'application/json',
//           'Content-type': 'multipart/form-data',
//         },
//       })
//       .then(responseBody);
//   };
  //use for download file with blob type only
//   const downloadFile = (url: string) => {
//     return client
//       .get(url, {
//         responseType: 'blob',
//         headers: {
//           'Access-Control-Allow-Origin': '*',
//         },
//       })
//       .then((response) => {
//         //get content disposition in response header
//         //produced by .net api to specify file details (to get filename)
//         var contentDisposition = response.request.getResponseHeader(
//           'Content-Disposition'
//         );
//         var filename = '';
//         if (
//           contentDisposition &&
//           contentDisposition.indexOf('attachment') !== -1
//         ) {
//           var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
//           var matches = filenameRegex.exec(contentDisposition);
//           if (matches != null && matches[1]) {
//             filename = matches[1].replace(/['"]/g, '');
//           }
//         }
//         //if can't parse filename from content-disposition
//         //generate it
//         //   if (filename === null || filename === '') {
//         //     //get content type
//         //     var contentType = response.request.getResponseHeader("content-type");
//         //     var fileExtension = mimeTypeExtension[contentType];
//         //     filename = "attachment_" + fileTimeFromDate(new Date()) + fileExtension;
//         //   }
//         //save file
//         //FileSaver.saveAs(response.data, filename);
//       })
//       .catch(async (response) => {
//         try {
//           //parse blob to json string
//           //var json = await parseBlob(response.data);
//           //parse to IResponseBase<T> to get message
//           // var result: IResponseBase<object> = JSON.parse(json as string);
//           // if (!!result.message) {
//           //   toast.error(result.message);
//           // } else {
//           //   toast.error('Something went wrong while downloading this file');
//           // }
//         } catch (e) {
//           // toast.error('Something went wrong while downloading this file');
 
//           toast({
//             titleText: 'Something went wrong while downloading this file',
//             icon: 'error',
//           });
//         }
//       });
//   };
  //use for download file with blob type only
//   const downloadFilePost = (url: string, data: any) => {
//     return client
//       .post(url, data, {
//         responseType: 'blob',
//         headers: {
//           'Access-Control-Allow-Origin': '*',
//         },
//       })
//       .then((response) => {
//         //get content disposition in response header
//         //produced by .net api to specify file details (to get filename)
//         var contentDisposition = response.request.getResponseHeader(
//           'Content-Disposition'
//         );
//         var filename = '';
//         if (
//           contentDisposition &&
//           contentDisposition.indexOf('attachment') !== -1
//         ) {
//           var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
//           var matches = filenameRegex.exec(contentDisposition);
//           if (matches != null && matches[1]) {
//             filename = matches[1].replace(/['"]/g, '');
//           }
//         }
//         //if can't parse filename from content-disposition
//         //generate it
//           if (filename === null || filename === '') {
//             //get content type
//             var contentType = response.request.getResponseHeader("content-type");
//             var fileExtension = mimeTypeExtension[contentType];
//             filename = "attachment_" + fileTimeFromDate(new Date()) + fileExtension;
//           }
//         //save file
//         FileSaver.saveAs(response.data, filename);
//       })
//       .catch(async (response) => {
//         try {
//           //parse blob to json string
//           var json = await parseBlob(response.data);
//           // parse to IResponseBase<T> to get message
//           var result: IResponseBase<object> = JSON.parse(json as string);
//           if (!!result.message) {
//             toast({ titleText: result.message, icon: 'error' });
//           } else {
//             toast({ titleText: 'Something went wrong while downloading this file', icon: 'error' });
//           }
//         } catch (e) {
//           // toast.error('Something went wrong while downloading this file');
 
//           toast({
//             titleText: 'Something went wrong while downloading this file',
//             icon: 'error',
//           });
//         }
//       });
//   };
 
  return { get, post, put, del };
};
export default agent;