export default {
    'number': {
        'percentage': {
            'style': 'percent',
            'minimumFractionDigits': 2,
            'maximumFractionDigits': 2
        },
        'currency': {
            'minimumFractionDigits': 2,
            'maximumFractionDigits': 2
        },
        'accurate': {
            'minimumFractionDigits': 2,
            'maximumFractionDigits': 8
        },
        'rate': {
            'minimumFractionDigits': 4,
            'maximumFractionDigits': 4
        },
        'integer': {
            'minimumFractionDigits': 0,
            'maximumFractionDigits': 0
        },
        'id': {
            'minimumFractionDigits': 0,
            'maximumFractionDigits': 0,
            'useGrouping': false
        },
    },
    'date': {
        'date': {
            'year': 'numeric',
            'month': '2-digit',
            'day': '2-digit'
        },
        'datetime': {
            'year': 'numeric',
            'month': '2-digit',
            'day': '2-digit',
            'hour': 'numeric',
            'minute': 'numeric',
            'second': 'numeric'
        },
        'time': {
            'hour': 'numeric',
            'minute': 'numeric',
            'second': 'numeric'
        }
    }
}