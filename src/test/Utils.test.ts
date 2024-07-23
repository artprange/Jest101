import { getStringInfo, StringUtils, toUpperCase } from "../app/Utils"

describe('Utils test suite', ()=>{
    it('should return uppercase of a valid string', ()=>{
        //ARRANGE:
        const sut  = toUpperCase
        const expected = 'ABC'

        //ACT:
        const actual = toUpperCase('abc')  
        
        //ASSERT:
        expect(actual).toBe(expected)     
    })

        //jeito certo, mas não é  a melhor prática

       /* it('should return info for valid string', ()=>{
        //arranging
        const actual = getStringInfo('My-string')
        
        expect(actual.lowerCase).toBe('my-string')
        expect(actual.extraInfo).toEqual({})

        //expect(actual.characters.length).toBe(9)
        expect(actual.characters).toHaveLength(9)
        expect(actual.characters).toEqual(['M', 'y', '-', 's','t','r','i','n', 'g'])
        expect(actual.characters).toContain<string>('M')
        expect(actual.characters).toEqual(expect.arrayContaining((['t','r','i','n', 'g','M', 'y', '-', 's' ])))

        expect(actual.extraInfo).not.toBe(undefined) 
        //outra maneira de saber se é o objeto é VÁLIDO, é usar:
        expect(actual.extraInfo).toBeTruthy()


    })*/

    describe('getStringInfo for arg My-string should', ()=>{
        test('return right length', ()=>{
            const actual = getStringInfo('My-string')
            expect(actual.characters).toHaveLength(9)
        })

        test('return right lower case', ()=>{
            const actual = getStringInfo('My-string')
            expect(actual.lowerCase).toBe('my-string')
        })

        test('return right upper case', ()=>{
            const actual = getStringInfo('My-string')
            expect(actual.upperCase).toBe('MY-STRING')
        })

        test('return  right characters', ()=>{
            const actual = getStringInfo('My-string')
            expect(actual.characters).toEqual(['M', 'y', '-', 's','t','r','i','n', 'g'])
            expect(actual.characters).toContain<string>('M')
            expect(actual.characters).toEqual(expect.arrayContaining((['t','r','i','n', 'g','M', 'y', '-', 's' ])))
        })

        test('return defined extra info', ()=>{
            const actual = getStringInfo('My-string')
            expect(actual.extraInfo).toBeTruthy()
        })

        test('return defined extra info', ()=>{
            const actual = getStringInfo('My-string')
            expect(actual.extraInfo).toEqual({})
        })
    })


    describe('toUpperCase examples', ()=>{
        it.each([
            {
                input:'abc',
                expected: 'ABC'
            },
            {
                input:'My-string',
                expected: 'MY-STRING'
            },
            {
                input: 'def',
                expected: 'DEF'
            }
        ])('$input toUpperCase should be $expected', ({input, expected})=>{
            const actual = toUpperCase(input)
            expect(actual).toBe(expected)
        })
    })

    describe('Utils test suite', ()=>{
        let sut: StringUtils

        beforeEach(()=>{
            sut = new StringUtils()

        })

    


        it('Should return correct upperCase', ()=>{
            const actual = sut.toUpperCase('abc')
            expect(actual).toBe('ABC')
            console.log('actual test')
        })

        it('Should throw error on invalid arument - function', ()=>{
            function expectError(){
                const actual = sut.toUpperCase('')
            }            
            expect(expectError).toThrow()
            expect(expectError).toThrowError('invalid argument!')      
        })

        it('Should throw error on invalid arument - arrow function', ()=>{
            expect(()=>{
                sut.toUpperCase('')
            }).toThrowError('invalid argument')
        })

        it.only('Should throw error on invalid argument - try catch block', ()=>{             
            try {
                sut.toUpperCase('');
                ('GetStringInfo should throw error for invalid arg!')
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error).toHaveProperty('message', 'Invalid argument!');
            }
        })
    })


})