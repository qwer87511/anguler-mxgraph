export const testDialog = {
    'id': '2',
    'selector': 'dialog-23',
    'category': 'container',
    'geometry': {
        'width': 100,
        'height': 100,
        'x': 50,
        'y': 250
    },
    'type': 'dialog',
    'name': 'login',
    'text': 'unused',
    // 'yesText': 'confirm',
    // 'noText': 'cancel',
    'yesButton': {
        'id': '10',
        'selector': 'button-23',
        'category': 'navigation',
        'geometry': {
            'width': 50,
            'height': 50,
            'x': 80,
            'y': 280
        },
        'type': 'button',
        'name': 'login',
        'text': 'cancel', // this is vertex value
        'href': 'dashboard'
    },
    'noButton': {
        'id': '11',
        'selector': 'button-23',
        'category': 'navigation',
        'geometry': {
            'width': 50,
            'height': 50,
            'x': 120,
            'y': 280
        },
        'type': 'button',
        'name': 'login',
        'text': 'confirm', // this is vertex value
        'href': 'dashboard'
    },
    'componentList': [
        // {
        //     'id': '2',
        //     'selector': 'text-0',
        //     'category': 'text',
        //     'type': 'text',
        //     'text': 'are you ok?',
        //     'description': 'answer'
        // },
        {
            'id': '2',
            'selector': 'input-32',
            'category': 'input-control',
            'type': 'inputText',
            'text': 'answer',
            'description': 'answer'
        }
    ]
}