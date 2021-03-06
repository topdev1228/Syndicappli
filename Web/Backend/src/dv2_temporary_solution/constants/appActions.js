const adminActions = {
  CREATE_PROBLEM: 'CREATE_PROBLEM',
  CREATE_CHALLENGE: 'CREATE_CHALLENGE',
  CREATE_PROBLEM_CHOICE: 'CREATE_PROBLEM_CHOICE',
  CREATE_PROBLEM_TEMPLATE: 'CREATE_PROBLEM_TEMPLATE',
  CREATE_PROBLEM_SOLUTION: 'CREATE_PROBLEM_SOLUTION',
  CREATE_PROBLEM_CASE: 'CREATE_PROBLEM_CASE',
  GET_SUBMITED_CHALLENGE_LIST: 'GET_SUBMITED_CHALLENGE_LIST',
  GET_SUBMITED_CHALLENGE_LIST_USERS: 'GET_SUBMITED_CHALLENGE_LIST_USERS',
  GET_CHALLENGE_LIST: 'GET_CHALLENGE_LIST',
  GET_PROBLEMS_LIST: 'GET_PROBLEMS_LIST',
  RETRIEVE_PROBLEM_FOR_EDIT: 'RETRIEVE_PROBLEM_FOR_EDIT',
  RETRIEVE_CHALLENGE_FOR_EDIT: 'RETRIEVE_CHALLENGE_FOR_EDIT',
  UPDATE_PROBLEM: 'UPDATE_PROBLEM',
  UPDATE_CHALLENGE: 'UPDATE_CHALLENGE',
  UPDATE_PROBLEM_CHOICE: 'UPDATE_PROBLEM_CHOICE',
  UPDATE_PROBLEM_TEMPLATE: 'UPDATE_PROBLEM_TEMPLATE',
  UPDATE_PROBLEM_SOLUTION: 'UPDATE_PROBLEM_SOLUTION',
  UPDATE_PROBLEM_CASE: 'UPDATE_PROBLEM_CASE',
  CREATE_CHALLENGE: 'CREATE_CHALLENGE',
  UPDATE_CHALLENGE_PROBLEMS: 'UPDATE_CHALLENGE_PROBLEMS',
  ADD_AREA: 'ADD_AREA',
  ADD_COMPANY: 'ADD_COMPANY',
  CREATE_JOB: 'CREATE_JOB',
  UPDATE_JOB: 'UPDATE_JOB',
  LIST_CHALLENGES: 'LIST_CHALLENGES',
  LIST_JOB_APPLY: 'LIST_JOB_APPLY',
  UPDATE_SYSTEM_DESIGN_LIST_SCORE: 'UPDATE_SYSTEM_DESIGN_LIST_SCORE',
  UPDATE_PRODUCT_DESIGN_LIST_SCORE: 'UPDATE_PRODUCT_DESIGN_LIST_SCORE',
  LIST_PROBLEMS: 'LIST_PROBLEMS',
  GET_SUBMITTED_CHALLENGE_WITH_INFO: 'GET_SUBMITTED_CHALLENGE_WITH_INFO',
  RETRIEVE_CONDITIONS: 'RETRIEVE_CONDITIONS',
  SET_CONDITIONS: 'SET_CONDITIONS',
  SET_DEVELOPER_CHALLENGE_GRADE: 'SET_DEVELOPER_CHALLENGE_GRADE',
}

const commonActions = {
  LIST_COMPANY_USE:'LIST_COMPANY_USE',
  LIST_AREA:'LIST_AREA',
  LIST_PROGRAMMING_LANGUAGE:'LIST_PROGRAMMING_LANGUAGE',
  GET_FILE_DOWNLOAD_URL: 'GET_FILE_DOWNLOAD_URL',
  LIST_CHALLENGES_WITH_TYPES: 'LIST_CHALLENGES_WITH_TYPES',
  LIST_COMPILER: 'LIST_COMPILER',
  LIST_SKILLS: 'LIST_SKILLS',
  LIST_CATEGORIES: 'LIST_CATEGORIES',
  LIST_JOB_TYPE: 'LIST_JOB_TYPE',
  LIST_JOB_LENGTH: 'LIST_JOB_LENGTH',
  LIST_JOB_LEVEL: 'LIST_JOB_LEVEL',
  LIST_CLIENTS: 'LIST_CLIENTS',
  LIST_JOB: 'LIST_JOB',
  LIST_SYSTEM_DESIGN: 'LIST_SYSTEM_DESIGN',
  LIST_PRODUCT_DESIGN: 'LIST_PRODUCT_DESIGN',
  RETRIEVE_JOB: 'RETRIEVE_JOB',
  JOB_APPLY: 'JOB_APPLY',
  LIST_CHALLENGE_UPLOAD_OPTIONS: 'LIST_CHALLENGE_UPLOAD_OPTIONS'
}

const challengeActions = {
  RETRIEVE_CHALLENGE_WITH_PROBLEM: 'RETRIEVE_CHALLENGE_WITH_PROBLEM',
  RETRIEVE_PROBLEM_FOR_CHALLENGE: 'RETRIEVE_PROBLEM_FOR_CHALLENGE',
  RETRIEVE_CHALLENGE: 'RETRIEVE_CHALLENGE',
  ADD_TRACK_CHALLENGE: 'ADD_TRACK_CHALLENGE',
  UPDATE_TRACK_CHALLENGE_STEP: 'UPDATE_TRACK_CHALLENGE_STEP',
  SUBMIT_PROBLEM_SOLUTION: 'SUBMIT_PROBLEM_SOLUTION',
  SUBMIT_PROBLEM_CHOICE: 'SUBMIT_PROBLEM_CHOICE',
  LIST_CHALLENGE_UPLOAD_BY_USER: 'LIST_CHALLENGE_UPLOAD_BY_USER',
  LIST_MULTI_CHOICES_CHALLENGE: 'LIST_MULTI_CHOICES_CHALLENGE',
}

module.exports = {
  adminActions,
  commonActions,
  challengeActions
};