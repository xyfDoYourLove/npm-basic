import {transform} from "../src/romanizer"

describe('romanizer', function () {
    it('should return X when 10', function () {
        const transformed = transform(10);

        expect(transformed).toEqual('X');
    });
});