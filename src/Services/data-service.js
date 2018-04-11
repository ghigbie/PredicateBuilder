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
                name: 'Path',
                type: 'text'
                
            }
];

const subjectNames = ['User email', 'First Name', 'Last Name','Screen Width', 'Screen Height', 'User # of Visits', 
                      'Page Response Time (ms)', 'Domain', 'Path'];
                      
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

const sqlNames= ['id', 'user_email', 'user_first_name', 'user_last_name', 'screen_widith', 'screen_height',
                 'visit', 'page_response', 'domain', 'path'];

const verbWords = [
            {
                name: 'is',
                type: 'text'
                
            },
            {
                name: 'starts with',
                type: 'text'
                
            },
            {
                name: 'does not start with',
                type: 'text'
                
            },
            {
                name: 'equals',
                type: 'text'
                
            },
            {
                name: 'does not equal',
                type: 'text'
                
            },
            {
                name: 'contains',
                type: 'text'
                
            },
            {
                name: 'does not contain',
                type: 'text'
                
            },
            {
                name: 'in list',
                type: 'text'
                
            },
            {
                name: 'not in list',
                type: 'text'
                
            },
            {
                name: 'contains all',
                type: 'text'
                
            }
];

const verbNumbers= [
            {
                name: 'range',
                type: 'number'
                
            },
            {
                name: 'less than or equal',
                type: 'number'
                
            },
            {
                name: 'equals',
                type: 'number'
                
            },
            {
                name: 'does not equal',
                type: 'number'
                
            },
            {
                name: 'greater than or equal',
                type: 'number'
                
            }
];

export {subjectFields, subjectNames, sqlItems, sqlNames, verbWords, verbNumbers}