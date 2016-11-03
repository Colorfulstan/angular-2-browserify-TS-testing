import {MyPipe} from "../../dist/demo.pipe";

describe('MyPipe Tests', () => {
    let pipe:MyPipe;

    beforeEach(() => {
        pipe = new MyPipe();
    });

    it('Should capitalize all words in a string', () => {
        var result = pipe.transform('golden retriever', null);

        expect(result).toEqual('Golden Retriever');
    });
});