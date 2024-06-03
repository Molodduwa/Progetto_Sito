import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistenzaClientiComponent } from './assistenza-clienti.component';

describe('AssistenzaClientiComponent', () => {
  let component: AssistenzaClientiComponent;
  let fixture: ComponentFixture<AssistenzaClientiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssistenzaClientiComponent]
    });
    fixture = TestBed.createComponent(AssistenzaClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
