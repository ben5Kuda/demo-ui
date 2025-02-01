// import { AppComponent } from './app.component';
// import { TodoService } from './services/http.services';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { TodoService } from './services/http.services';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// describe('AppComponent', () => {
//   let component: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;

//   const mockService = {};
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       // provide the component-under-test and dependent service
//       providers: [
//         AppComponent,
//         { provide: TodoService, useClass: mockService },
//       ],
//       //fixture = new AppComponent();
//     }).compileComponents();
//      fixture = TestBed.createComponent(AppComponent);
//      component = fixture.componentInstance;
//      fixture.detectChanges();
//   });

//     it('should create the app', () => {
//       expect(component).toBeTruthy();
//     });

//   it('add two numbers', () => {
//     expect(component.sum(1, 4)).toBe(5);
//   });

// });

let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [AppComponent, HttpClientModule],
    providers: [TodoService],
  });
  fixture = TestBed.createComponent(AppComponent);
  component = fixture.componentInstance; // BannerComponent test instance
});

it('should create the app', () => {
  expect(component).toBeTruthy();
});
