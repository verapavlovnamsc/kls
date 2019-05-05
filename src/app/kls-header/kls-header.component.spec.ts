import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlsHeaderComponent } from './kls-header.component';

describe('KlsHeaderComponent', () => {
  let component: KlsHeaderComponent;
  let fixture: ComponentFixture<KlsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
