module.exports = function toReadable (number) {
    let arr = number.toString().split('').reverse()
    let result = ''
    switch (arr[0]){
        case '0':
            if(arr.length == 1){return 'zero'}
            break
        case '1':
            result += 'one'
            break
        case '2':
            result += 'two'
            break
        case '3':
            result += 'three'
            break
        case '4':
            result += 'four'
            break
        case '5':
            result += 'five'
            break
        case '6':
            result += 'six'
            break
        case '7':
            result += 'seven'
            break
        case '8':
            result += 'eight'
            break
        case '9':
            result += 'nine'
            break
    }
    if(arr.length >= 2){
        switch (arr[1]){
            case '0':
                break
            case '1':{
                switch (arr[1] + arr[0]){
                	case '10':
                  	result = 'ten'
                    break
                  case '11':
                  	result = 'eleven'
                    break
                  case '12':
                  	result = 'twelve'
                    break
                  case '13':
                  	result = 'thirteen'
                    break
                  case '14':
                  	result = 'fourteen'
                    break
                  case '15':
                  	result = 'fifteen'
                    break
                  case '16':
                  	result = 'sixteen'
                    break
                  case '17':
                  	result = 'seventeen'
                    break
                  case '18':
                  	result = 'eighteen'
                    break
                  case '19':
                  	result = 'nineteen'
                    break 
                }
                }
                break
            case '2':
                result = 'twenty ' + result
                break
            case '3':
                result = 'thirty ' + result
                break
            case '4':
                result = 'forty ' + result
                break
            case '5':
                result = 'fifty ' + result
                break
            case '6':
                result = 'sixty ' + result
                break
            case '7':
                result = 'seventy ' + result
                break
            case '8':
                result = 'eighty ' + result
                break
            case '9':
                result = 'ninety ' + result
                break
        }
    }
    if(arr.length == 3){
        switch (arr[2]){
            case '1':
                result = 'one hundred ' + result
                break
            case '2':
                result = 'two hundred ' + result
                break
            case '3':
                result = 'three hundred ' + result
                break
            case '4':
                result = 'four hundred ' + result
                break
            case '5':
                result = 'five hundred ' + result
                break
            case '6':
                result = 'six hundred ' + result
                break
            case '7':
                result = 'seven hundred ' + result
                break
            case '8':
                result = 'eight hundred ' + result
                break
            case '9':
                result = 'nine hundred ' + result
                break
        }
    }
    if(result[result.length-1] ==' ') {result = result.slice(0, result.length-1)}
    return result
}
