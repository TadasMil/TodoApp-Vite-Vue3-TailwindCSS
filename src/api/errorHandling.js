const STATUS = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500
}

const STATUS_TO_MESSAGE = {
  [STATUS.BAD_REQUEST]: 'The request could not be acomplished.',
  [STATUS.UNAUTHORIZED]: 'You are not authorized to access this resource.',
  [STATUS.FORBIDDEN]: 'You are not allowed to access this resource.',
  [STATUS.NOT_FOUND]: 'The resource you are looking for could not be found.',
  [STATUS.CONFLICT]: 'The resource you are trying to access is in conflict.',
  [STATUS.INTERNAL_SERVER_ERROR]: 'The server encountered an error.'
}

export const getErrorMessage = (status) => {
  return STATUS_TO_MESSAGE[status]
}
