import {TestBed} from '@angular/core/testing'
import {MyService} from "../../dist/demo.service";

describe('Service tests', ()=>{

    let service: Analytics;

    beforeEach(() => {
        // // stub UserService for test purposes
        // userServiceStub = {
        //     isLoggedIn: true,
        //     user: { name: 'Test User'}
        // };

        TestBed.configureTestingModule({
            declarations: [  ],
            providers:    [ MyService ]
        });

        // fixture = TestBed.createComponent(WelcomeComponent);
        // comp    = fixture.componentInstance;

        // UserService from the root injector
        service = TestBed.get(MyService);

        //  get the "welcome" element by CSS selector (e.g., by class name)
        // de = fixture.debugElement.query(By.css('.welcome'));
        // el = de.nativeElement;
    });

    it('service is present', function () {
        expect(service).toBeDefined()
    });

})