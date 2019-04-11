import { TestBed } from '@angular/core/testing';

import { SynchArraysService } from './synch-arrays.service';

describe('SynchArraysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SynchArraysService = TestBed.get(SynchArraysService);
    expect(service).toBeTruthy();
  });

  it('should be merged', () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [5, 6, 7, 8];
    const expected: { item1: any, item2: any }[] =
      [{ item1: 1, item2: 5 },
      { item1: 2, item2: 6 },
      { item1: 3, item2: 7 },
      { item1: 4, item2: 8 }];
    const service: SynchArraysService = TestBed.get(SynchArraysService);
    const result = service.zip(array1, array2);
    expect(result).toEqual(expected);
  });

  it('should throw error Both arrays must be of the same length', () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [5, 6, 7, 8, 9];
    const service: SynchArraysService = TestBed.get(SynchArraysService);
    expect(() => { service.zip(array1, array2); }).toThrowError('Both arrays must be of the same length');
  });

  it('should both arrays be the same length', () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [1, 2, 3, 9, 4];
    const blank = 0;
    const service: SynchArraysService = TestBed.get(SynchArraysService);
    const [array3, array4] = service.synch(array1, array2, (item) => item, (item: any) => item, blank);
    expect(array3.length).toEqual(array4.length);
  });
  it('should both arrays be the same length', () => {
    const array1 = [1, 2, 3, 9, 4];
    const array2 = [1, 2, 3, 4];
    const blank = 0;
    const service: SynchArraysService = TestBed.get(SynchArraysService);
    const [array3, array4] = service.synch(array1, array2, (item) => item, (item: any) => item, blank);
    expect(array3.length).toEqual(array4.length);
  });
  it('should remove item both arrays be the same', () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [1, 2, 3, 0, 4];
    const blank = 0;
    const service: SynchArraysService = TestBed.get(SynchArraysService);
    const [array3, array4] = service.synch(array1, array2, (item) => item, (item: any) => item, blank);
    expect(array3).toEqual(array4);
  });
  it('should add item both arrays be the same', () => {
    const array1 = [1, 2, 3, 0, 4];
    const array2 = [1, 2, 3, 4];
    const blank = 0;
    const service: SynchArraysService = TestBed.get(SynchArraysService);
    const [array3, array4] = service.synch(array1, array2, (item) => item, (item: any) => item, blank);
    expect(array3).toEqual(array4);
  });
  it('should identical item both arrays be the same', () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [1, 2, 3, 4];
    const blank = 0;
    const service: SynchArraysService = TestBed.get(SynchArraysService);
    const [array3, array4] = service.synch(array1, array2, (item) => item, (item: any) => item, blank);
    expect(array3).toEqual(array4);
  });

  it('should identical item both array ids be the same', () => {
    const array1 = [{ id: 1, data: 'a' }, { id: 2, data: 'b' }, { id: 3, data: 'c' }, { id: 4, data: 'd' }];
    const array2 = [{ id: 1, data: 'e' }, { id: 2, data: 'f' }, { id: 3, data: 'g' }, { id: 4, data: 'h' }];
    const blank = { id: 99, data: '4' };
    const service: SynchArraysService = TestBed.get(SynchArraysService);
    const [array3, array4] = service.synch(array1, array2, (item) => item.id, (item: any) => item.id, blank);
    expect(array3.map((item) => item.id)).toEqual(array4.map((item) => item.id));
  });

  it('should remove item both array ids be the same', () => {
    const array1 = [{ id: 1, data: 'a' }, { id: 2, data: 'b' }, { id: 3, data: 'c' }, { id: 4, data: 'd' }];
    const array2 = [{ id: 1, data: 'e' }, { id: 99, data: '4' }, { id: 2, data: 'f' }, { id: 3, data: 'g' }, { id: 4, data: 'h' }];
    const blank = { id: 99, data: '4' };
    const service: SynchArraysService = TestBed.get(SynchArraysService);
    const [array3, array4] = service.synch(array1, array2, (item) => item.id, (item: any) => item.id, blank);
    expect(array3.map((item) => item.id)).toEqual(array4.map((item) => item.id));
  });

  it('should add item both array ids be the same', () => {
    const array1 = [{ id: 1, data: 'a' }, { id: 2, data: 'b' }, { id: 99, data: '4' }, { id: 3, data: 'c' }, { id: 4, data: 'd' }];
    const array2 = [{ id: 1, data: 'e' }, { id: 2, data: 'f' }, { id: 3, data: 'g' }, { id: 4, data: 'h' }];
    const blank = { id: 99, data: '4' };
    const service: SynchArraysService = TestBed.get(SynchArraysService);
    const [array3, array4] = service.synch(array1, array2, (item) => item.id, (item: any) => item.id, blank);
    expect(array3.map((item) => item.id)).toEqual(array4.map((item) => item.id));
  });
  it('should identical item both array ids be the same', () => {
    const array1 = ['hello', 'my', 'name', 'john'];
    const array2 = [{ id: 'hello', data: 'a' }, { id: 'my', data: 'b' }, { id: 'name', data: 'c' }, { id: 'john', data: 'd' }];
    const blank = { id: 99, data: '4' };
    const gettera = (item) => item;
    const getterb = (item: any) => item.id;
    const service: SynchArraysService = TestBed.get(SynchArraysService);
    const [array3, array4] = service.synch(array1, array2, gettera, getterb, blank);

    expect(array3.map(gettera)).toEqual(array4.map(getterb));
  });

  it('should remove item both array ids be the same', () => {
    const array1 = ['hello', 'name', 'john'];
    const array2 = [{ id: 'hello', data: 'a' }, { id: 'my', data: 'b' }, { id: 'name', data: 'c' }, { id: 'john', data: 'd' }];
    const blank = { id: 99, data: '4' };
    const gettera = (item) => item;
    const getterb = (item: any) => item.id;
    const service: SynchArraysService = TestBed.get(SynchArraysService);
    const [array3, array4] = service.synch(array1, array2, gettera, getterb, blank);

    expect(array3.map(gettera)).toEqual(array4.map(getterb));
  });

  it('should add item both array ids be the same', () => {
    const array1 = ['hello', 'my', 'name', 'john'];
    const array2 = [{ id: 'hello', data: 'a' },  { id: 'name', data: 'c' }, { id: 'john', data: 'd' }];
    const blank = { id: 'my', data: ' ' };
    const gettera = (item) => item;
    const getterb = (item: any) => item.id;
    const service: SynchArraysService = TestBed.get(SynchArraysService);
    const [array3, array4] = service.synch(array1, array2, gettera, getterb, blank);

    expect(array3.map(gettera)).toEqual(array4.map(getterb));
  });

  it('should add 2 items both array be the same length', () => {
    const array1 = ['hello', 'my', 'name', 'john', 'smith'];
    const array2 = [{ id: 'hello', data: 'a' },  { id: 'name', data: 'c' }, { id: 'john', data: 'd' }];
    const blank = { id: 'my', data: ' ' };
    const gettera = (item) => item;
    const getterb = (item: any) => item.id;
    const service: SynchArraysService = TestBed.get(SynchArraysService);
    const [array3, array4] = service.synch(array1, array2, gettera, getterb, blank);

    expect(array3.length).toEqual(array4.length);
  });

  it('should remove 2 item both array be the same length', () => {
    const array1 = ['name', 'john'];
    const array2 = [{ id: 'hello', data: 'a' }, { id: 'my', data: 'b' }, { id: 'name', data: 'c' }, { id: 'john', data: 'd' }];
    const blank = { id: 99, data: '4' };
    const gettera = (item) => item;
    const getterb = (item: any) => item.id;
    const service: SynchArraysService = TestBed.get(SynchArraysService);
    const [array3, array4] = service.synch(array1, array2, gettera, getterb, blank);

    expect(array3.length).toEqual(array4.length);
  });
  it('should remove item both array ids be the same', () => {
    const array1 = ['name', 'john'];
    const array2 = [{ id: 'hello', data: 'a' }, { id: 'my', data: 'b' }, { id: 'name', data: 'c' }, { id: 'john', data: 'd' }];
    const blank = { id: 99, data: '4' };
    const gettera = (item) => item;
    const getterb = (item: any) => item.id;
    const service: SynchArraysService = TestBed.get(SynchArraysService);
    const [array3, array4] = service.synch(array1, array2, gettera, getterb, blank);
    console.log(array3);
    console.log(array4);
    expect(array3.map(gettera)).toEqual(array4.map(getterb));
  });
});
