import { TestBed } from '@angular/core/testing';
import { StringFormatService } from './string-format.service';

describe('StringFormatService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [StringFormatService],
        });
    });

    it('#stringFormat should return formatted string value based on one argument', () => {
        const service = TestBed.inject(StringFormatService);
        const result = service.stringFormat('test{0}', [ '1' ]);
        expect('test1').toEqual(result);
    });

    it('#stringFormat should return formatted string value by passing null', () => {
        const service = TestBed.inject(StringFormatService);
        const result = service.stringFormat('test{0}', null);
        expect('test{0}').toEqual(result);
    });

    it('#stringFormat should return formatted string value by passing multiple args', () => {
        const service = TestBed.inject(StringFormatService);
        const result = service.stringFormat('test{0}{1}{2}', [ 'a', '1', 'b' ]);
        expect('testa1b').toEqual(result);
    });

    it('#stringFormat should handle additional args passed', () => {
        const service = TestBed.inject(StringFormatService);
        const result = service.stringFormat('test{0}{1}{2}', [ 'a', '1', 'b', 'c' ]);
        expect('testa1b').toEqual(result);
    });

    it('#stringFormat should handle less args passed than expected', () => {
        const service = TestBed.inject(StringFormatService);
        const result = service.stringFormat('test a={0},1={1},b={2}', [ 'a', '1' ]);
        expect('test a=a,1=1,b=').toEqual(result);
    });
});
