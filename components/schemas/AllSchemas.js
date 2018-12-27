export const PERSON_SCHEMA = 'person';
export const MEMBER_SCHEMA = 'member';

export const PersonSchema = {
  name: PERSON_SCHEMA,
  primaryKey: 'UserName',
  properties: {
      UserName: 'string',
      FirstName: 'string',
      LastName: 'string',
      Email: 'string',
      Password: 'string'
  },
};
export const MemberSchema = {
  name: MEMBER_SCHEMA,
  primaryKey: 'MemberId',
  properties: {
      MemberId: 'string',
      DateJoined: 'date',
      DataOfBirth: 'date',
      FirstName: 'string',
      LastName: 'string',
      MiddelName: 'string',
      Picture: 'data',
      EmailAddress: 'string',
      EmailPassword: 'string',
      Gender: 'string'
  },
};
