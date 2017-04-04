describe("the calculator", () => {
    var c;

    beforeEach(() => {
            c = new Calculator();
    })

    describe('can add', () => {

        it(" 1 + 1", () => {
            var sum = c.add(1, 1);
            expect(sum).toBe(2);

        });

        it(" 1 + 2", () => {
            var sum = c.add(1,2);
            expect(sum).toBe(3);
        });

        it(" 0.1 + 0.2", () => {
            var sum = c.add(0.1,0.2);
            expect(sum).toBeCloseTo(0.3,15);
            // if (sum !== 0.3) throw new Error('Nope')
        });

        it(" '1' + '2'", () => {
            var sum = c.add('1','2');
            expect(sum).toBe(3);
        });
    })

    describe('can subtract', () => {

        it(" 1 - 1", () => {
            var sum = c.subtract(1, 1);
            expect(sum).toBe(0);
        });

        xit('toEqual', ()=>{
            expect({x:1}).toEqual({x:1,y:undefined})
        })


        it("async 1 - 1", done => {
            setTimeout(() => {
                var sum = c.subtract(1, 1);
                expect(sum).toBe(0);
                done();
            }, 100);
        });
    })
});
