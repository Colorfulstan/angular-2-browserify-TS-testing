import {MyList} from "../../dist/demo.component";
import {MyService} from "../../dist/demo.service";

describe('MyList Tests', () => {
    let list:MyList;
    let service:MyService = new MyService();

    beforeEach(() => {
        list = new MyList(service);
    });

    it('Should get 5 dogs', () => {
        list.ngOnInit()

        expect(list.items.length).toEqual(5)
        expect(list.items).toEqual(['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky', 'jack russel terrier'])
    })
})