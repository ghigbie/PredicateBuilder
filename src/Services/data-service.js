const subjectFields = [
            {
                name: 'User email',
                type: 'text'
                
            },
            {
                name: 'First Name',
                type: 'text'
                
            },
            {
                name: 'Last Name',
                type: 'text'
                
            },
            {
                name: 'Screen Width',
                type: 'number'
                
            },
            {
                name: 'Screen Height',
                type: 'number'
                
            },
            {
                name: 'User # of Visits',
                type: 'number'
                
            },
            {
                name: 'Page Response Time (ms)',
                type: 'number'
                
            },
            {
                name: 'Domain',
                type: 'text'
                
            },
            {
                name: 'Path Path',
                type: 'text'
                
            }
];

const sqlItems = [
            {
                name: 'id',
                type: 'number'
            },
            {
                name: 'user_email',
                type: 'text'
                
            },
                        {
                name: 'user_first_name',
                type: 'text'
                
            },
            {
                name: 'user_last_name',
                type: 'text'
                
            },
            {
                name: 'screen_widith',
                type: 'number'
                
            },
            {
                name: 'screen_height',
                type: 'number'
                
            },
            {
                name: 'visit',
                type: 'number'
                
            },
            {
                name: 'page_response',
                type: 'text'
                
            },
            {
                name: 'domain',
                type: 'text'
                
            },
            {
                name: 'path',
                type: 'text'
                
            }
];

const verbWords = ['is' , 'starts with', 'does not start with', 'equals', 'does not equal', 'contains', 'does not contain', 'in list', 'not in list', 'contains all'];
const verbNumbers = ['range', 'less than or equal', 'equals', 'does not equal', 'greater than or equal'];

export {subjectFields, sqlItems, verbWords, verbNumbers};