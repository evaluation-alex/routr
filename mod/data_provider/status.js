/**
 * @author Pedro Sanders
 * @since v1
 */
export const Status = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  NOT_SUPPORTED: 405,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  message: {
    200: {value:'Successful request'},
    201: {value:'Created'},
    400: {value:'Bad request'},
    401: {value:'Unauthorized'},
    404: {value:'Not found'},
    405: {value:'Operation not supported by data source provider'},
    409: {value:'An attempt was made to create an object that already exists'},
    409.1: {value:'Found one or more unfulfilled dependencies'},
    409.2: {value:'Found one or more dependent objects'},
    500: {value:'The execution of the service failed'}
  }
}